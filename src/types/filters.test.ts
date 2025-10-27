import { describe, it, expect } from 'vitest';
import { buildFilterParams } from './filters.js';

describe('buildFilterParams', () => {
  it('should return empty params when no filters provided', () => {
    const params = buildFilterParams();
    expect(params.toString()).toBe('');
  });

  it('should build filter with eq operator', () => {
    const params = buildFilterParams({
      type: { op: 'eq', value: 'WORKSTATION' },
    });
    expect(params.get('filter[type]')).toBe('eq: WORKSTATION');
  });

  it('should build filter with in operator', () => {
    const params = buildFilterParams({
      type: { op: 'in', value: ['SERVER', 'WORKSTATION'] },
    });
    expect(params.get('filter[type]')).toBe('in: SERVER,WORKSTATION');
  });

  it('should build filter with numeric value', () => {
    const params = buildFilterParams({
      num_hardware_assets: { op: 'gte', value: 400 },
    });
    expect(params.get('filter[num_hardware_assets]')).toBe('gte: 400');
  });

  it('should quote values with special characters', () => {
    const params = buildFilterParams({
      name: { op: 'eq', value: 'Space Sprockets, Inc.' },
    });
    expect(params.get('filter[name]')).toBe('eq: "Space Sprockets, Inc."');
  });

  it('should handle nested field names', () => {
    const params = buildFilterParams({
      'configuration.ram_bytes': { op: 'lte', value: 8000000000 },
    });
    expect(params.get('filter[configuration.ram_bytes]')).toBe('lte: 8000000000');
  });

  it('should handle multiple filters', () => {
    const params = buildFilterParams({
      type: { op: 'eq', value: 'WORKSTATION' },
      client_id: { op: 'eq', value: 2220324 },
    });
    expect(params.get('filter[type]')).toBe('eq: WORKSTATION');
    expect(params.get('filter[client_id]')).toBe('eq: 2220324');
  });

  it('should handle boolean values', () => {
    const params = buildFilterParams({
      active: { op: 'eq', value: true },
    });
    expect(params.get('filter[active]')).toBe('eq: true');
  });
});

