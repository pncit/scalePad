/**
 * Common types used across the SDK
 */

/**
 * Base options for list operations
 */
export interface BaseListOptions {
  pageSize?: number;
  cursor?: string;
}

/**
 * Result of a list operation
 */
export interface ListResult<T> {
  data: T[];
  total_count: number;
  next_cursor?: string | null;
}

