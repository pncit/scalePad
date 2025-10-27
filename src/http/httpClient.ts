import { Logger } from '../logging/logger.js';
import { normalizeApiError, NetworkError, TimeoutError } from './errors.js';
import { withRetry, RetryConfig } from './retry.js';
import { ErrorResponseSchema } from '../core/v1/schemas.js';

export interface HttpClientConfig {
  apiKey: string;
  baseUrl: string;
  timeoutMs: number;
  retry: RetryConfig;
  logger: Logger;
  fetch?: typeof globalThis.fetch;
}

export interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
}

/**
 * HTTP client for making requests to the ScalePad API
 */
export class HttpClient {
  private config: HttpClientConfig;

  constructor(config: HttpClientConfig) {
    this.config = config;
  }

  /**
   * Makes an HTTP request with timeout and retry logic
   */
  async request<T>(
    path: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { logger, retry } = this.config;

    return withRetry(async () => {
      return this.executeRequest<T>(path, options);
    }, retry, logger);
  }

  /**
   * Executes a single HTTP request
   */
  private async executeRequest<T>(
    path: string,
    options: RequestOptions
  ): Promise<T> {
    const { apiKey, baseUrl, timeoutMs, logger } = this.config;
    const fetchFn = this.config.fetch ?? globalThis.fetch;

    const url = `${baseUrl}${path}`;
    const method = options.method ?? 'GET';

    // Build headers
    const headers: Record<string, string> = {
      'accept': 'application/json',
      'x-api-key': apiKey,
      ...options.headers,
    };

    // Add content-type for requests with body
    if (options.body && !headers['content-type']) {
      headers['content-type'] = 'application/json';
    }

    // Create abort controller for timeout
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), timeoutMs);

    try {
      logger.debug(`${method} ${url}`);

      const response = await fetchFn(url, {
        method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
        signal: options.signal ?? abortController.signal,
      });

      clearTimeout(timeoutId);

      logger.debug(`${method} ${url} -> ${response.status}`);

      // Handle successful responses
      if (response.ok) {
        // 204 No Content
        if (response.status === 204) {
          return undefined as T;
        }

        // Parse JSON response
        const data = await response.json() as T;
        return data;
      }

      // Handle error responses
      await this.handleErrorResponse(response);
      
      // This line should never be reached due to handleErrorResponse throwing
      throw new Error('Unexpected error handling response');
    } catch (error) {
      clearTimeout(timeoutId);

      // Handle timeout
      if (error instanceof Error && error.name === 'AbortError') {
        throw new TimeoutError(timeoutMs);
      }

      // Re-throw API errors
      if (error instanceof Error && 'statusCode' in error) {
        throw error;
      }

      // Wrap network errors
      throw new NetworkError(
        `Network request failed: ${error instanceof Error ? error.message : String(error)}`,
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Handles error responses from the API
   */
  private async handleErrorResponse(response: Response): Promise<never> {
    let body: unknown;

    try {
      const text = await response.text();
      body = text ? JSON.parse(text) : null;
    } catch {
      body = null;
    }

    // Extract Retry-After header for rate limiting
    const retryAfter = response.headers.get('retry-after');
    const retryAfterSeconds = retryAfter ? parseInt(retryAfter, 10) : undefined;

    // Validate error response schema
    const errorResponse = ErrorResponseSchema.safeParse(body);
    
    if (errorResponse.success) {
      throw normalizeApiError(response.status, errorResponse.data, retryAfterSeconds);
    }

    // Fallback if error response doesn't match schema
    throw normalizeApiError(response.status, body, retryAfterSeconds);
  }

  /**
   * Makes a GET request
   */
  async get<T>(path: string, params?: URLSearchParams): Promise<T> {
    const queryString = params?.toString();
    const fullPath = queryString ? `${path}?${queryString}` : path;
    return this.request<T>(fullPath, { method: 'GET' });
  }

  /**
   * Makes a POST request
   */
  async post<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>(path, { method: 'POST', body });
  }

  /**
   * Makes a PATCH request
   */
  async patch<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>(path, { method: 'PATCH', body });
  }

  /**
   * Makes a DELETE request
   */
  async delete<T>(path: string): Promise<T> {
    return this.request<T>(path, { method: 'DELETE' });
  }
}

