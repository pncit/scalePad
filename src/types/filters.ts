/**
 * Filter operators supported by the ScalePad API
 */
export type FilterOp = 'eq' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';

/**
 * A single filter clause
 */
export interface FilterClause {
  op: FilterOp;
  value: string | number | boolean | string[];
}

/**
 * Map of field names to filter clauses
 */
export type Filters = Record<string, FilterClause>;

/**
 * Checks if a value needs to be quoted (contains special tokens)
 */
function needsQuoting(value: string): boolean {
  // Check for literal special characters
  if (value.includes(',') || value.includes(':') || value.includes(' ')) {
    return true;
  }
  // Check for OR and AND as whole words
  if (/\bOR\b/.test(value) || /\bAND\b/.test(value)) {
    return true;
  }
  return false;
}

/**
 * Formats a filter value for the query string
 */
function formatFilterValue(value: string | number | boolean | string[]): string {
  if (Array.isArray(value)) {
    // For 'in' operator - join with comma
    return value.map(v => {
      const str = String(v);
      return needsQuoting(str) ? `"${str}"` : str;
    }).join(',');
  }

  const str = String(value);
  return needsQuoting(str) ? `"${str}"` : str;
}

/**
 * Builds URL search params from filter definitions
 */
export function buildFilterParams(filters?: Filters): URLSearchParams {
  const params = new URLSearchParams();
  
  if (!filters) {
    return params;
  }

  for (const [field, clause] of Object.entries(filters)) {
    const key = `filter[${field}]`;
    const formattedValue = formatFilterValue(clause.value);
    const filterValue = `${clause.op}: ${formattedValue}`;
    params.append(key, filterValue);
  }

  return params;
}

