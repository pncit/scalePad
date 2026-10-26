import { describe, it, expect } from 'vitest';
import { appendFilterParams, formatFilterValue, splitBodyFilters } from './filters.js';

describe('formatFilterValue', () => {
  it('treats a bare scalar as an equality filter', () => {
    expect(formatFilterValue('WORKSTATION')).toBe('eq:WORKSTATION');
    expect(formatFilterValue(42)).toBe('eq:42');
    expect(formatFilterValue(true)).toBe('eq:true');
  });

  it('renders explicit operators without a space after the colon', () => {
    expect(formatFilterValue({ op: 'gte', value: 400 })).toBe('gte:400');
    expect(formatFilterValue({ op: 'cont', value: 'sprocket' })).toBe('cont:sprocket');
  });

  it('joins in-lists with commas', () => {
    expect(formatFilterValue({ op: 'in', value: ['SERVER', 'WORKSTATION'] })).toBe(
      'in:SERVER,WORKSTATION'
    );
  });

  it('renders null filters as null:true', () => {
    expect(formatFilterValue({ op: 'null', value: true })).toBe('null:true');
  });

  it('quotes values containing separators or boolean keywords', () => {
    expect(formatFilterValue('Space Sprockets, Inc.')).toBe('eq:"Space Sprockets, Inc."');
    expect(formatFilterValue({ op: 'in', value: ['Acme, Inc', 'Beta'] })).toBe(
      'in:"Acme, Inc",Beta'
    );
    expect(formatFilterValue('Sales OR Marketing')).toBe('eq:"Sales OR Marketing"');
  });

  it('sends dates as quoted ISO timestamps', () => {
    const when = new Date('2026-03-04T00:00:00.000Z');
    expect(formatFilterValue({ op: 'lte', value: when })).toBe('lte:"2026-03-04T00:00:00.000Z"');
  });
});

describe('appendFilterParams', () => {
  it('emits filter[field]=clause for each field and repeats array clauses', () => {
    const params = new URLSearchParams();
    appendFilterParams(params, {
      type: 'WORKSTATION',
      'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 },
      'client.segment_id': [
        { op: 'eq', value: 'seg1' },
        { op: 'null', value: true },
      ],
      skipped: undefined,
    });
    expect(params.get('filter[type]')).toBe('eq:WORKSTATION');
    expect(params.get('filter[configuration.ram_bytes]')).toBe('lte:8000000000');
    expect(params.getAll('filter[client.segment_id]')).toEqual(['eq:seg1', 'null:true']);
    expect(params.has('filter[skipped]')).toBe(false);
  });
});

describe('splitBodyFilters', () => {
  it('moves body-only fields into the request body and leaves the rest for the query string', () => {
    const { queryFilters, body } = splitBodyFilters(
      {
        'client.id': 'c1',
        'name.full': { op: 'cont', value: 'Rob' },
        'contact_info.email': 'rob@example.com',
      },
      ['contact_info.email', 'name.full']
    );
    expect(queryFilters).toEqual({ 'client.id': 'c1' });
    expect(body).toEqual({
      filter: { 'name.full': 'cont:Rob', 'contact_info.email': 'eq:rob@example.com' },
    });
  });

  it('sends no body when only query filters are present', () => {
    expect(splitBodyFilters({ 'client.id': 'c1' }, ['name.full']).body).toBeUndefined();
    expect(splitBodyFilters(undefined, ['name.full'])).toEqual({
      queryFilters: undefined,
      body: undefined,
    });
  });
});
