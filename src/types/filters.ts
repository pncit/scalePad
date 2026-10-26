/**
 * Filter operators accepted by ScalePad list endpoints. Each endpoint documents
 * which operators a field supports; the generated query types narrow `FilterValue`
 * to exactly those.
 *
 * - `eq`   exact match (the default when a bare scalar is passed)
 * - `in`   matches any value in a list
 * - `cont` case-insensitive substring match
 * - `lt` / `lte` / `gt` / `gte` comparisons, including dates
 * - `null` matches records with no value (`null:true`), on fields that document it
 */
export type FilterOp = 'eq' | 'in' | 'cont' | 'lt' | 'lte' | 'gt' | 'gte' | 'null';

/** A single filter operand. Dates are sent as ISO 8601 strings. */
export type FilterScalar = string | number | boolean | Date;

export type FilterClause<Op extends FilterOp = FilterOp> = Op extends 'in'
  ? { op: 'in'; value: readonly FilterScalar[] }
  : Op extends 'null'
    ? { op: 'null'; value: boolean }
    : { op: Op; value: FilterScalar };

/**
 * A filter for one field: an explicit clause, or a bare scalar meaning `eq`
 * when the field supports equality.
 */
export type FilterValue<Op extends FilterOp = FilterOp> =
  FilterClause<Op> | ('eq' extends Op ? FilterScalar : never);

/** Field name to filter. A field may take several clauses when the endpoint allows repeats. */
export type Filters = Record<string, FilterValue | readonly FilterValue[] | undefined>;

/**
 * The API requires double quotes around values containing these tokens, so the
 * operator and value parse unambiguously.
 */
function needsQuoting(value: string): boolean {
  return /[,:\s]/.test(value) || /\b(?:OR|AND)\b/.test(value);
}

export function formatFilterScalar(value: FilterScalar): string {
  const text = value instanceof Date ? value.toISOString() : String(value);
  return needsQuoting(text) ? `"${text}"` : text;
}

/** Renders one filter as the `operator:value` string the API expects. */
export function formatFilterValue(filter: FilterValue): string {
  if (typeof filter !== 'object' || filter instanceof Date) {
    return `eq:${formatFilterScalar(filter)}`;
  }
  if (filter.op === 'in') {
    return `in:${filter.value.map(formatFilterScalar).join(',')}`;
  }
  if (filter.op === 'null') {
    return `null:${filter.value}`;
  }
  return `${filter.op}:${formatFilterScalar(filter.value)}`;
}

/** Appends `filter[field]=operator:value` entries, one per clause. */
export function appendFilterParams(params: URLSearchParams, filters: Filters): void {
  for (const [field, value] of Object.entries(filters)) {
    if (value === undefined) continue;
    const clauses = Array.isArray(value) ? value : [value as FilterValue];
    for (const clause of clauses) {
      params.append(`filter[${field}]`, formatFilterValue(clause));
    }
  }
}

/**
 * Core API list endpoints that accept PII filters take those fields in the
 * request body instead of the query string. Splits a filter map accordingly;
 * `body` is undefined when no body-only field is present.
 */
export function splitBodyFilters(
  filters: Filters | undefined,
  bodyFields: readonly string[]
): { queryFilters: Filters | undefined; body: { filter: Record<string, string> } | undefined } {
  if (!filters) return { queryFilters: undefined, body: undefined };
  const queryFilters: Filters = {};
  const bodyFilter: Record<string, string> = {};
  for (const [field, value] of Object.entries(filters)) {
    if (value === undefined) continue;
    if (bodyFields.includes(field)) {
      const clause = Array.isArray(value) ? value[0] : (value as FilterValue);
      if (clause !== undefined) bodyFilter[field] = formatFilterValue(clause);
    } else {
      queryFilters[field] = value;
    }
  }
  return {
    queryFilters,
    body: Object.keys(bodyFilter).length ? { filter: bodyFilter } : undefined,
  };
}
