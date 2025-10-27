import { ListResult } from './common.js';

/**
 * Options for paginated requests
 */
export interface PaginationOptions {
  pageSize?: number;
  cursor?: string;
}

/**
 * Type for a function that fetches a page of data
 */
export type PageFetcher<T> = (cursor?: string) => Promise<ListResult<T>>;

/**
 * Async generator that yields pages of data
 */
export async function* paginatePages<T>(
  fetchPage: PageFetcher<T>,
  _pageSize?: number
): AsyncGenerator<T[], void, unknown> {
  let cursor: string | undefined;

  do {
    const result = await fetchPage(cursor);
    yield result.data;
    cursor = result.next_cursor ?? undefined;
  } while (cursor);
}

/**
 * Async generator that yields individual items
 */
export async function* paginateItems<T>(
  fetchPage: PageFetcher<T>,
  _pageSize?: number
): AsyncGenerator<T, void, unknown> {
  for await (const page of paginatePages(fetchPage)) {
    for (const item of page) {
      yield item;
    }
  }
}

/**
 * Collects all pages into a single array
 */
export async function collectAll<T>(
  fetchPage: PageFetcher<T>,
  _pageSize?: number
): Promise<T[]> {
  const items: T[] = [];
  
  for await (const page of paginatePages(fetchPage)) {
    items.push(...page);
  }
  
  return items;
}

