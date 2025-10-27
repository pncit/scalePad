import { z } from 'zod';

/**
 * Schema for individual error items in API error responses
 */
export const ErrorItemSchema = z.object({
  code: z.string(),
  title: z.string(),
  detail: z.string().optional(),
});

export type ErrorItem = z.infer<typeof ErrorItemSchema>;

/**
 * Schema for standardized API error responses
 */
export const ErrorResponseSchema = z.object({
  errors: z.array(ErrorItemSchema),
});

export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;

/**
 * Creates a schema for paginated response envelopes
 */
export function createPaginatedEnvelopeSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    data: z.array(itemSchema),
    total_count: z.number().int().nonnegative(),
    next_cursor: z.string().nullable().optional(),
  });
}

/**
 * Type for paginated responses
 */
export type PaginatedResponse<T> = {
  data: T[];
  total_count: number;
  next_cursor?: string | null;
};

/**
 * Schema for a single item response
 */
export function createSingleItemSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return itemSchema;
}

