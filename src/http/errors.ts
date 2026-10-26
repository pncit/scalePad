/** One entry of the API's standard error envelope. */
export interface ErrorItem {
  code: string;
  title: string;
  detail?: string;
}

export class ScalePadError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = new.target.name;
  }
}

/** The API answered with a non-2xx status. */
export class ApiError extends ScalePadError {
  readonly statusCode: number;
  readonly errors: ErrorItem[];
  /** The raw response body, for statuses whose body is not the standard envelope. */
  readonly body: unknown;

  constructor(statusCode: number, errors: ErrorItem[], body?: unknown) {
    super(`API Error (${statusCode}): ${errors.map((e) => `${e.code}: ${e.title}`).join('; ')}`);
    this.statusCode = statusCode;
    this.errors = errors;
    this.body = body;
  }
}

/** 401: the API key is missing, expired, or its owner lost the Administrator permission. */
export class AuthenticationError extends ApiError {
  constructor(errors: ErrorItem[], body?: unknown) {
    super(401, errors, body);
  }
}

/** 402: the account is not subscribed to the product this endpoint belongs to. */
export class SubscriptionRequiredError extends ApiError {
  constructor(errors: ErrorItem[], body?: unknown) {
    super(402, errors, body);
  }
}

/** 403: the key's user lacks permission for this resource or action. */
export class ForbiddenError extends ApiError {
  constructor(errors: ErrorItem[], body?: unknown) {
    super(403, errors, body);
  }
}

/** 404: no such resource, or the caller cannot see it. */
export class NotFoundError extends ApiError {
  constructor(errors: ErrorItem[], body?: unknown) {
    super(404, errors, body);
  }
}

/** 429: over the rate limit; `retryAfter` is the server's wait in seconds when it sent one. */
export class RateLimitError extends ApiError {
  readonly retryAfter?: number;

  constructor(errors: ErrorItem[], retryAfter?: number, body?: unknown) {
    super(429, errors, body);
    this.retryAfter = retryAfter;
  }
}

/** The request never produced a response (DNS, connection, TLS, aborted stream). */
export class NetworkError extends ScalePadError {}

export class TimeoutError extends ScalePadError {
  constructor(timeoutMs: number) {
    super(`Request timed out after ${timeoutMs}ms`);
  }
}

function isErrorItem(value: unknown): value is ErrorItem {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as ErrorItem).code === 'string' &&
    typeof (value as ErrorItem).title === 'string'
  );
}

/**
 * Builds the most specific error for a failed response. Bodies that are not the
 * standard `{ errors: [...] }` envelope (the 429 body is plain text) are wrapped
 * in a synthetic item so callers always get a code and title.
 */
export function errorFromResponse(
  statusCode: number,
  body: unknown,
  retryAfter?: number
): ApiError {
  const envelope = body as { errors?: unknown } | null;
  const errors: ErrorItem[] =
    envelope && Array.isArray(envelope.errors) && envelope.errors.every(isErrorItem)
      ? envelope.errors
      : [
          {
            code: `HTTP_${statusCode}`,
            title: `HTTP ${statusCode} error`,
            detail:
              typeof body === 'string' ? body : body == null ? undefined : JSON.stringify(body),
          },
        ];

  switch (statusCode) {
    case 401:
      return new AuthenticationError(errors, body);
    case 402:
      return new SubscriptionRequiredError(errors, body);
    case 403:
      return new ForbiddenError(errors, body);
    case 404:
      return new NotFoundError(errors, body);
    case 429:
      return new RateLimitError(errors, retryAfter, body);
    default:
      return new ApiError(statusCode, errors, body);
  }
}
