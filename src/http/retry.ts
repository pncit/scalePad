import { Logger } from '../logging/logger.js';
import { RateLimitError, ApiError } from './errors.js';

export interface RetryConfig {
  maxRetries: number;
  retryOn429: boolean;
  retryOn5xx: boolean;
}

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  retryOn429: true,
  retryOn5xx: true,
};

/**
 * Calculates exponential backoff delay with jitter
 */
export function calculateBackoff(attempt: number, baseDelayMs = 1000, maxDelayMs = 30000): number {
  const exponentialDelay = Math.min(baseDelayMs * Math.pow(2, attempt), maxDelayMs);
  const jitter = Math.random() * 0.3 * exponentialDelay; // 30% jitter
  return exponentialDelay + jitter;
}

/**
 * Sleeps for the specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Determines if an error should be retried
 */
export function shouldRetry(error: unknown, config: RetryConfig): boolean {
  if (error instanceof RateLimitError) {
    return config.retryOn429;
  }
  
  if (error instanceof ApiError) {
    // Retry 5xx errors if configured
    if (config.retryOn5xx && error.statusCode >= 500 && error.statusCode < 600) {
      return true;
    }
    // Don't retry other 4xx or 5xx errors
    return false;
  }
  
  // Retry network errors
  return true;
}

/**
 * Executes a function with retry logic
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  config: RetryConfig,
  logger: Logger
): Promise<T> {
  let lastError: unknown;
  
  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      // Don't retry if this is the last attempt
      if (attempt === config.maxRetries) {
        break;
      }
      
      // Check if we should retry this error
      if (!shouldRetry(error, config)) {
        throw error;
      }
      
      // Calculate delay
      let delayMs: number;
      if (error instanceof RateLimitError && error.retryAfter) {
        // Use Retry-After header value
        delayMs = error.retryAfter * 1000;
        logger.warn(`Rate limited. Retrying after ${error.retryAfter}s (attempt ${attempt + 1}/${config.maxRetries})`);
      } else if (error instanceof ApiError && error.statusCode >= 500) {
        delayMs = calculateBackoff(attempt);
        logger.warn(`Server error ${error.statusCode}. Retrying in ${Math.round(delayMs)}ms (attempt ${attempt + 1}/${config.maxRetries})`);
      } else {
        delayMs = calculateBackoff(attempt);
        logger.warn(`Request failed. Retrying in ${Math.round(delayMs)}ms (attempt ${attempt + 1}/${config.maxRetries})`);
      }
      
      await sleep(delayMs);
    }
  }
  
  throw lastError;
}

