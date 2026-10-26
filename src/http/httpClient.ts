import { Logger } from '../logging/logger.js';
import { errorFromResponse, NetworkError, TimeoutError } from './errors.js';
import { withRetry, RetryConfig } from './retry.js';
import { buildQuery, QueryOptions, QueryParams } from './query.js';

export interface HttpClientConfig {
  apiKey: string;
  baseUrl: string;
  timeoutMs: number;
  retry: RetryConfig;
  logger: Logger;
  fetch?: typeof globalThis.fetch;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** A downloaded file: exports, reports, logos, and attachment contents. */
export interface BinaryResponse {
  data: Uint8Array;
  contentType: string | null;
  /** From the `Content-Disposition` header, when the server names the file. */
  fileName: string | null;
}

/** Fields of a multipart upload; `Blob` values become file parts, everything else is sent as text. */
export type MultipartBody = Record<string, Blob | string | number | boolean | undefined>;

export interface RequestSpec extends QueryOptions {
  method: HttpMethod;
  /** Path relative to the base URL, with path parameters already encoded. */
  path: string;
  query?: QueryParams;
  /** Sent as JSON. */
  body?: unknown;
  /** Sent as `multipart/form-data`; mutually exclusive with `body`. */
  multipart?: MultipartBody;
  /** Query parameters typed as dates (not date-times), so `Date` values are trimmed to the day. */
  dateOnlyParams?: readonly string[];
  /** What a successful response carries. */
  responseType: 'json' | 'binary' | 'void';
}

/**
 * Sends authenticated requests to the ScalePad API with a per-attempt timeout,
 * transparent retries, and typed error mapping.
 */
export class HttpClient {
  constructor(private readonly config: HttpClientConfig) {}

  request<T>(spec: RequestSpec): Promise<T> {
    return withRetry(() => this.send<T>(spec), this.config.retry, this.config.logger);
  }

  private async send<T>(spec: RequestSpec): Promise<T> {
    const { apiKey, baseUrl, timeoutMs, logger } = this.config;
    const fetchFn = this.config.fetch ?? globalThis.fetch;

    const query = buildQuery(spec.query, spec).toString();
    const url = `${baseUrl}${spec.path}${query ? `?${query}` : ''}`;

    const headers: Record<string, string> = {
      accept: spec.responseType === 'json' ? 'application/json' : '*/*',
      'x-api-key': apiKey,
    };
    let body: string | FormData | undefined;
    if (spec.multipart) {
      body = new FormData();
      for (const [name, value] of Object.entries(spec.multipart)) {
        if (value === undefined) continue;
        if (value instanceof Blob) body.append(name, value, fileNameOf(value));
        else body.append(name, String(value));
      }
    } else if (spec.body !== undefined) {
      headers['content-type'] = 'application/json';
      body = JSON.stringify(spec.body);
    }

    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), timeoutMs);
    let response: Response;
    try {
      logger.debug(`${spec.method} ${url}`);
      response = await fetchFn(url, {
        method: spec.method,
        headers,
        body,
        signal: abortController.signal,
      });
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') throw new TimeoutError(timeoutMs);
      throw new NetworkError(
        `Network request failed: ${error instanceof Error ? error.message : String(error)}`,
        { cause: error }
      );
    } finally {
      clearTimeout(timeoutId);
    }
    logger.debug(`${spec.method} ${url} -> ${response.status}`);

    if (!response.ok) throw await this.errorFor(response);

    switch (spec.responseType) {
      case 'void':
        return undefined as T;
      case 'binary':
        return {
          data: new Uint8Array(await response.arrayBuffer()),
          contentType: response.headers.get('content-type'),
          fileName: fileNameFromDisposition(response.headers.get('content-disposition')),
        } as T;
      case 'json': {
        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
      }
    }
  }

  private async errorFor(response: Response) {
    const text = await response.text();
    let body: unknown = text;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      // Plain-text bodies (the 429 response is one) are reported verbatim.
    }
    const retryAfter = response.headers.get('retry-after');
    return errorFromResponse(
      response.status,
      body,
      retryAfter ? parseInt(retryAfter, 10) : undefined
    );
  }
}

function fileNameOf(blob: Blob): string | undefined {
  return typeof (blob as File).name === 'string' ? (blob as File).name : undefined;
}

function fileNameFromDisposition(header: string | null): string | null {
  if (!header) return null;
  const utf8 = /filename\*=UTF-8''([^;]+)/i.exec(header);
  if (utf8) return decodeURIComponent(utf8[1]);
  const plain = /filename="?([^";]+)"?/i.exec(header);
  return plain ? plain[1] : null;
}
