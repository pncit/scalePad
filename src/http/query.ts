import { appendFilterParams, Filters } from '../types/filters.js';
import { formatSort } from '../types/sorting.js';

export type QueryScalar = string | number | boolean | Date;

/**
 * Query parameters as a generated method receives them. `filters` and `sort`
 * are SDK structures; every other key is an API parameter sent under its own name.
 */
export type QueryParams = object;

type ObjectParam = Record<string, QueryScalar | readonly QueryScalar[] | null | undefined>;

export interface QueryOptions {
  /** Array parameters the endpoint wants comma-joined instead of repeated. */
  commaArrays?: readonly string[];
}

function formatScalar(value: QueryScalar, key: string, dateOnly: Set<string>): string {
  if (value instanceof Date) {
    return dateOnly.has(key) ? value.toISOString().slice(0, 10) : value.toISOString();
  }
  return String(value);
}

/**
 * Serializes query parameters the way ScalePad endpoints read them:
 * - `filters` → `filter[field]=op:value`, repeated per clause
 * - `sort` → one comma-separated `sort` value
 * - arrays → repeated `name=value` pairs, or comma-joined when the endpoint says so
 * - objects → `name[key]=value` (deep-object style), repeated for array values
 * - `Date` → ISO 8601, trimmed to the date for date-typed parameters
 * - `undefined` / `null` → omitted
 */
export function buildQuery(
  query: QueryParams | undefined,
  options: QueryOptions & { dateOnlyParams?: readonly string[] } = {}
): URLSearchParams {
  const params = new URLSearchParams();
  if (!query) return params;
  const commaArrays = new Set(options.commaArrays ?? []);
  const dateOnly = new Set(options.dateOnlyParams ?? []);

  for (const [key, value] of Object.entries(query as Record<string, unknown>)) {
    if (value === undefined || value === null) continue;

    if (key === 'filters') {
      appendFilterParams(params, value as Filters);
    } else if (key === 'sort') {
      const sort = formatSort(Array.isArray(value) ? (value as string[]) : [String(value)]);
      if (sort) params.append('sort', sort);
    } else if (Array.isArray(value)) {
      const items = (value as readonly QueryScalar[]).map((v) => formatScalar(v, key, dateOnly));
      if (commaArrays.has(key)) {
        if (items.length) params.append(key, items.join(','));
      } else {
        for (const item of items) params.append(key, item);
      }
    } else if (typeof value === 'object' && !(value instanceof Date)) {
      for (const [k, v] of Object.entries(value as ObjectParam)) {
        if (v === undefined || v === null) continue;
        for (const item of Array.isArray(v) ? v : [v as QueryScalar]) {
          params.append(`${key}[${k}]`, formatScalar(item, key, dateOnly));
        }
      }
    } else {
      params.append(key, formatScalar(value as QueryScalar, key, dateOnly));
    }
  }
  return params;
}
