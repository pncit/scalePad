export type SortDirection = '+' | '-';

/**
 * A sortable field, optionally prefixed with `+` (ascending, the default) or `-`
 * (descending). Generated query types narrow `Field` to the endpoint's sortable fields.
 */
export type SortSpec<Field extends string = string> = Field | `${SortDirection}${Field}`;

/** Joins sort specs into the comma-separated `sort` parameter value. */
export function formatSort(sorts: readonly string[]): string | undefined {
  return sorts.length === 0 ? undefined : sorts.join(',');
}
