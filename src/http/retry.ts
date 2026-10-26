import { Logger } from '../logging/logger.js';
import { RateLimitError, ApiError, NetworkError } from './errors.js';

export interface RetryConfig {
  /** Attempts after the first; 0 disables retries. */
  maxRetries: number;
  /** Retry 429 responses, waiting out the server's `Retry-After`. */
  retryOn429: boolean;
  /** Retry 5xx responses with exponential backoff. */
  retryOn5xx: boolean;
}

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  retryOn429: true,
  retryOn5xx: true,
};

/** Exponential backoff with up to 30% jitter, capped at `maxDelayMs`. */
export function calculateBackoff(attempt: number, baseDelayMs = 1000, maxDelayMs = 30000): number {
  const exponentialDelay = Math.min(baseDelayMs * Math.pow(2, attempt), maxDelayMs);
  return exponentialDelay + Math.random() * 0.3 * exponentialDelay;
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Rate limits, server errors, and network failures are transient; every other
 * API error reflects the request itself and is surfaced immediately.
 */
export function shouldRetry(error: unknown, config: RetryConfig): boolean {
  if (error instanceof RateLimitError) return config.retryOn429;
  if (error instanceof ApiError) return config.retryOn5xx && error.statusCode >= 500;
  return error instanceof NetworkError;
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  config: RetryConfig,
  logger: Logger
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt >= config.maxRetries || !shouldRetry(error, config)) throw error;

      const attemptLabel = `attempt ${attempt + 1}/${config.maxRetries}`;
      let delayMs: number;
      if (error instanceof RateLimitError && error.retryAfter) {
        delayMs = error.retryAfter * 1000;
        logger.warn(`Rate limited. Retrying after ${error.retryAfter}s (${attemptLabel})`);
      } else {
        delayMs = calculateBackoff(attempt);
        const reason =
          error instanceof ApiError ? `Server error ${error.statusCode}` : 'Request failed';
        logger.warn(`${reason}. Retrying in ${Math.round(delayMs)}ms (${attemptLabel})`);
      }
      await sleep(delayMs);
    }
  }
}
