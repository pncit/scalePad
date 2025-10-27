import { ErrorItem } from '../core/v1/schemas.js';

/**
 * Base error class for all SDK errors
 */
export class ScalePadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ScalePadError';
    Object.setPrototypeOf(this, ScalePadError.prototype);
  }
}

/**
 * Error thrown when API returns an error response
 */
export class ApiError extends ScalePadError {
  public readonly statusCode: number;
  public readonly errors: ErrorItem[];

  constructor(statusCode: number, errors: ErrorItem[]) {
    const message = errors.map(e => `${e.code}: ${e.title}`).join('; ');
    super(`API Error (${statusCode}): ${message}`);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errors = errors;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

/**
 * Error thrown when authentication fails
 */
export class AuthenticationError extends ApiError {
  constructor(errors: ErrorItem[]) {
    super(401, errors);
    this.name = 'AuthenticationError';
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

/**
 * Error thrown when rate limit is exceeded
 */
export class RateLimitError extends ApiError {
  public readonly retryAfter?: number;

  constructor(errors: ErrorItem[], retryAfter?: number) {
    super(429, errors);
    this.name = 'RateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * Error thrown when response validation fails
 */
export class ResponseValidationError extends ScalePadError {
  public readonly issues: unknown;

  constructor(message: string, issues: unknown) {
    super(`Response validation failed: ${message}`);
    this.name = 'ResponseValidationError';
    this.issues = issues;
    Object.setPrototypeOf(this, ResponseValidationError.prototype);
  }
}

/**
 * Error thrown when network request fails
 */
export class NetworkError extends ScalePadError {
  public readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.name = 'NetworkError';
    this.cause = cause;
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

/**
 * Error thrown when request times out
 */
export class TimeoutError extends ScalePadError {
  constructor(timeoutMs: number) {
    super(`Request timed out after ${timeoutMs}ms`);
    this.name = 'TimeoutError';
    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

/**
 * Normalizes API error responses into ErrorItem array
 */
export function normalizeApiError(statusCode: number, body: unknown, retryAfter?: number): ApiError {
  // Try to parse as standard error response
  let errors: ErrorItem[] = [];
  
  if (body && typeof body === 'object' && 'errors' in body && Array.isArray(body.errors)) {
    errors = body.errors as ErrorItem[];
  } else {
    // Fallback error
    errors = [{
      code: `HTTP_${statusCode}`,
      title: `HTTP ${statusCode} error`,
      detail: typeof body === 'string' ? body : JSON.stringify(body),
    }];
  }

  // Return specific error types
  if (statusCode === 401) {
    return new AuthenticationError(errors);
  }
  if (statusCode === 429) {
    return new RateLimitError(errors, retryAfter);
  }
  
  return new ApiError(statusCode, errors);
}

