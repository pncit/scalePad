/** One page of a cursor-paginated list. */
export interface Page<T> {
  data: T[];
  total_count: number;
  next_cursor: string | null;
}

/** Fetches the page identified by `cursor`, or the first page when it is undefined. */
export type PageFetcher<T> = (cursor?: string) => Promise<Page<T>>;

/**
 * Walks every page. Cursor pagination is not atomic: records changed while
 * iterating may be skipped or repeated.
 */
export async function* paginatePages<T>(fetchPage: PageFetcher<T>): AsyncGenerator<T[], void> {
  let cursor: string | undefined;
  do {
    const page = await fetchPage(cursor);
    yield page.data;
    cursor = page.next_cursor ?? undefined;
  } while (cursor);
}

/** Yields every item across all pages. */
export async function* paginateItems<T>(fetchPage: PageFetcher<T>): AsyncGenerator<T, void> {
  for await (const page of paginatePages(fetchPage)) {
    yield* page;
  }
}

/** Collects every item across all pages into one array. */
export async function collectAll<T>(fetchPage: PageFetcher<T>): Promise<T[]> {
  const items: T[] = [];
  for await (const page of paginatePages(fetchPage)) {
    items.push(...page);
  }
  return items;
}
