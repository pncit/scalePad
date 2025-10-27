import { describe, it, expect } from 'vitest';
import { buildSortParam, addSortToParams } from './sorting.js';

describe('buildSortParam', () => {
  it('should return undefined for no sorts', () => {
    const result = buildSortParam();
    expect(result).toBeUndefined();
  });

  it('should return undefined for empty sorts array', () => {
    const result = buildSortParam([]);
    expect(result).toBeUndefined();
  });

  it('should build sort with ascending order', () => {
    const result = buildSortParam(['+num_hardware_assets']);
    expect(result).toBe('+num_hardware_assets');
  });

  it('should build sort with descending order', () => {
    const result = buildSortParam(['-num_hardware_assets']);
    expect(result).toBe('-num_hardware_assets');
  });

  it('should build sort without explicit direction', () => {
    const result = buildSortParam(['name']);
    expect(result).toBe('name');
  });

  it('should build multiple sorts', () => {
    const result = buildSortParam(['num_hardware_assets', '-num_contacts']);
    expect(result).toBe('num_hardware_assets,-num_contacts');
  });
});

describe('addSortToParams', () => {
  it('should add sort parameter', () => {
    const params = new URLSearchParams();
    addSortToParams(params, ['-num_hardware_assets']);
    expect(params.get('sort')).toBe('-num_hardware_assets');
  });

  it('should add sort_by parameter when specified', () => {
    const params = new URLSearchParams();
    addSortToParams(params, ['-num_hardware_assets'], 'sort_by');
    expect(params.get('sort_by')).toBe('-num_hardware_assets');
  });

  it('should not add parameter for undefined sorts', () => {
    const params = new URLSearchParams();
    addSortToParams(params);
    expect(params.toString()).toBe('');
  });
});

