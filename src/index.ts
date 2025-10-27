/**
 * ScalePad SDK for Node.js
 * 
 * A TypeScript SDK for the ScalePad API with strong typing,
 * Zod validation, pagination helpers, and rate-limit aware retries.
 */

// Main client
export { ScalePadClient } from './client.js';
export type { ScalePadClientConfig } from './client.js';

// Logging
export type { Logger, LogLevel } from './logging/logger.js';
export { ConsoleLogger, NoOpLogger } from './logging/logger.js';

// Types
export type { Filters, FilterClause, FilterOp } from './types/filters.js';
export type { SortSpec, SortDirection } from './types/sorting.js';
export type { PaginationOptions } from './types/pagination.js';
export type { ListResult, BaseListOptions } from './types/common.js';

// Core API types
export type {
  Client,
  Contact,
  Contract,
  HardwareAsset,
  Member,
  SaaS,
  Ticket,
  Opportunity,
} from './core/index.js';

// Schemas
export {
  ErrorItemSchema,
  ErrorResponseSchema,
  createPaginatedEnvelopeSchema,
  createSingleItemSchema,
} from './core/v1/schemas.js';
export type { ErrorItem, ErrorResponse, PaginatedResponse } from './core/v1/schemas.js';

// Errors
export {
  ScalePadError,
  ApiError,
  AuthenticationError,
  RateLimitError,
  ResponseValidationError,
  NetworkError,
  TimeoutError,
} from './http/errors.js';

// Utilities
export { buildFilterParams } from './types/filters.js';
export { buildSortParam, addSortToParams } from './types/sorting.js';
export { paginatePages, paginateItems, collectAll } from './types/pagination.js';

// Retry config
export type { RetryConfig } from './http/retry.js';
export { DEFAULT_RETRY_CONFIG } from './http/retry.js';

