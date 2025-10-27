/**
 * Sort direction
 */
export type SortDirection = '+' | '-';

/**
 * A sort specification (field with optional direction)
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type SortSpec = `${SortDirection}${string}` | string;

/**
 * Builds a sort parameter value from sort specifications
 */
export function buildSortParam(sorts?: SortSpec[]): string | undefined {
  if (!sorts || sorts.length === 0) {
    return undefined;
  }

  return sorts.join(',');
}

/**
 * Adds sort parameter to URL search params
 * @param params - The URLSearchParams to add to
 * @param sorts - Array of sort specifications
 * @param paramName - The parameter name to use ('sort' or 'sort_by')
 */
export function addSortToParams(
  params: URLSearchParams,
  sorts?: SortSpec[],
  paramName: 'sort' | 'sort_by' = 'sort'
): void {
  const sortValue = buildSortParam(sorts);
  if (sortValue) {
    params.append(paramName, sortValue);
  }
}

