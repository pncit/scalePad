import { describe, it, expect } from 'vitest';
import { buildQuery } from './query.js';

describe('buildQuery', () => {
  it('returns empty params for no query', () => {
    expect(buildQuery(undefined).toString()).toBe('');
  });

  it('serializes filters, sort, and scalars', () => {
    const params = buildQuery({
      filters: { type: 'WORKSTATION', num_contacts: { op: 'gt', value: 5 } },
      sort: ['-num_hardware_assets', 'name'],
      page_size: 200,
      cursor: 'abc',
      include_disabled: true,
      skipped: undefined,
      alsoSkipped: null,
    });
    expect(params.get('filter[type]')).toBe('eq:WORKSTATION');
    expect(params.get('filter[num_contacts]')).toBe('gt:5');
    expect(params.get('sort')).toBe('-num_hardware_assets,name');
    expect(params.get('page_size')).toBe('200');
    expect(params.get('cursor')).toBe('abc');
    expect(params.get('include_disabled')).toBe('true');
    expect(params.has('skipped')).toBe(false);
    expect(params.has('alsoSkipped')).toBe(false);
  });

  it('repeats array parameters unless the endpoint wants them comma-joined', () => {
    const params = buildQuery(
      { client_ids: ['a', 'b'], columns: ['name', 'serial'] },
      { commaArrays: ['columns'] }
    );
    expect(params.getAll('client_ids')).toEqual(['a', 'b']);
    expect(params.get('columns')).toBe('name,serial');
  });

  it('serializes object parameters in deep-object style, repeating array values', () => {
    const params = buildQuery({
      filter: { approval_status: 'in:not_approved', category_id: 'eq:cat_ai' },
      filter_operator: { age: 'gte', ignored: null },
      console_filter: { type: ['Server', 'Laptop'] },
    });
    expect(params.get('filter[approval_status]')).toBe('in:not_approved');
    expect(params.get('filter[category_id]')).toBe('eq:cat_ai');
    expect(params.get('filter_operator[age]')).toBe('gte');
    expect(params.has('filter_operator[ignored]')).toBe(false);
    expect(params.getAll('console_filter[type]')).toEqual(['Server', 'Laptop']);
  });

  it('formats dates as ISO timestamps, trimmed to the day for date-only parameters', () => {
    const when = new Date('2026-02-01T15:30:00.000Z');
    const params = buildQuery({ from: when, start_date: when }, { dateOnlyParams: ['start_date'] });
    expect(params.get('from')).toBe('2026-02-01T15:30:00.000Z');
    expect(params.get('start_date')).toBe('2026-02-01');
  });
});
