import { describe, it, expect, vi } from 'vitest';
import { calculateBackoff, sleep, shouldRetry, withRetry } from './retry.js';
import { RateLimitError, ApiError, NetworkError } from './errors.js';
import { ConsoleLogger } from '../logging/logger.js';

describe('calculateBackoff', () => {
  it('should calculate exponential backoff', () => {
    expect(calculateBackoff(0, 1000)).toBeGreaterThanOrEqual(1000);
    expect(calculateBackoff(0, 1000)).toBeLessThanOrEqual(1300); // with jitter
    
    expect(calculateBackoff(1, 1000)).toBeGreaterThanOrEqual(2000);
    expect(calculateBackoff(1, 1000)).toBeLessThanOrEqual(2600);
  });

  it('should respect max delay', () => {
    const result = calculateBackoff(10, 1000, 5000);
    expect(result).toBeLessThanOrEqual(6500); // max + jitter
  });
});

describe('sleep', () => {
  it('should sleep for specified duration', async () => {
    const start = Date.now();
    await sleep(100);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(90); // Allow some variance
  });
});

describe('shouldRetry', () => {
  it('should retry rate limit errors when configured', () => {
    const error = new RateLimitError([{ code: '429', title: 'Rate limited' }], 10);
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: true, retryOn5xx: true })).toBe(true);
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: false, retryOn5xx: true })).toBe(false);
  });

  it('should retry 5xx errors when configured', () => {
    const error = new ApiError(500, [{ code: '500', title: 'Server error' }]);
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: true, retryOn5xx: true })).toBe(true);
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: true, retryOn5xx: false })).toBe(false);
  });

  it('should not retry 4xx errors (except 429)', () => {
    const error = new ApiError(400, [{ code: '400', title: 'Bad request' }]);
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: true, retryOn5xx: true })).toBe(false);
  });

  it('should retry network errors', () => {
    const error = new NetworkError('Network failed');
    expect(shouldRetry(error, { maxRetries: 3, retryOn429: true, retryOn5xx: true })).toBe(true);
  });
});

describe('withRetry', () => {
  it('should return result on success', async () => {
    const fn = vi.fn().mockResolvedValue('success');
    const logger = new ConsoleLogger('none');

    const result = await withRetry(fn, { maxRetries: 3, retryOn429: true, retryOn5xx: true }, logger);
    
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should retry on retriable errors', async () => {
    const fn = vi.fn()
      .mockRejectedValueOnce(new NetworkError('Failed'))
      .mockResolvedValue('success');
    const logger = new ConsoleLogger('none');

    const result = await withRetry(fn, { maxRetries: 3, retryOn429: true, retryOn5xx: true }, logger);
    
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should not retry non-retriable errors', async () => {
    const error = new ApiError(400, [{ code: '400', title: 'Bad request' }]);
    const fn = vi.fn().mockRejectedValue(error);
    const logger = new ConsoleLogger('none');

    await expect(
      withRetry(fn, { maxRetries: 3, retryOn429: true, retryOn5xx: true }, logger)
    ).rejects.toThrow(error);
    
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should stop after max retries', async () => {
    const error = new NetworkError('Failed');
    const fn = vi.fn().mockRejectedValue(error);
    const logger = new ConsoleLogger('none');

    await expect(
      withRetry(fn, { maxRetries: 2, retryOn429: true, retryOn5xx: true }, logger)
    ).rejects.toThrow(error);
    
    expect(fn).toHaveBeenCalledTimes(3); // initial + 2 retries
  });
});

