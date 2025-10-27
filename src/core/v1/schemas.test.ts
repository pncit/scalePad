import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { ErrorItemSchema, ErrorResponseSchema, createPaginatedEnvelopeSchema } from './schemas.js';

describe('ErrorItemSchema', () => {
  it('should validate valid error item', () => {
    const valid = {
      code: 'UNAUTHORIZED',
      title: 'No API credentials',
      detail: 'No API credentials were provided',
    };

    const result = ErrorItemSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should validate error item without detail', () => {
    const valid = {
      code: 'UNAUTHORIZED',
      title: 'No API credentials',
    };

    const result = ErrorItemSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should reject invalid error item', () => {
    const invalid = {
      code: 'ERROR',
      // missing title
    };

    const result = ErrorItemSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});

describe('ErrorResponseSchema', () => {
  it('should validate valid error response', () => {
    const valid = {
      errors: [
        {
          code: 'UNAUTHORIZED',
          title: 'No API credentials',
          detail: 'No API credentials were provided',
        },
      ],
    };

    const result = ErrorResponseSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should validate multiple errors', () => {
    const valid = {
      errors: [
        { code: 'ERROR_1', title: 'First error' },
        { code: 'ERROR_2', title: 'Second error' },
      ],
    };

    const result = ErrorResponseSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });
});

describe('createPaginatedEnvelopeSchema', () => {
  it('should validate valid paginated response', () => {
    const itemSchema = z.object({ id: z.string(), name: z.string() });
    const schema = createPaginatedEnvelopeSchema(itemSchema);

    const valid = {
      data: [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
      ],
      total_count: 2,
      next_cursor: 'abc123',
    };

    const result = schema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should validate response without next_cursor', () => {
    const itemSchema = z.object({ id: z.string() });
    const schema = createPaginatedEnvelopeSchema(itemSchema);

    const valid = {
      data: [{ id: '1' }],
      total_count: 1,
    };

    const result = schema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should validate response with null next_cursor', () => {
    const itemSchema = z.object({ id: z.string() });
    const schema = createPaginatedEnvelopeSchema(itemSchema);

    const valid = {
      data: [{ id: '1' }],
      total_count: 1,
      next_cursor: null,
    };

    const result = schema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should reject invalid items', () => {
    const itemSchema = z.object({ id: z.string() });
    const schema = createPaginatedEnvelopeSchema(itemSchema);

    const invalid = {
      data: [{ id: 123 }], // id should be string
      total_count: 1,
    };

    const result = schema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('should reject negative total_count', () => {
    const itemSchema = z.object({ id: z.string() });
    const schema = createPaginatedEnvelopeSchema(itemSchema);

    const invalid = {
      data: [],
      total_count: -1,
    };

    const result = schema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});

