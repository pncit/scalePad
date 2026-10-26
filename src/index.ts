/**
 * ScalePad SDK for Node.js: typed access to the Core and Lifecycle Manager APIs,
 * generated from ScalePad's published OpenAPI documents.
 */

export { ScalePadClient } from './client.js';
export type { ScalePadClientConfig } from './client.js';

// Product namespaces. The classes are exported so callers can type variables
// such as `const agreements: LifecycleManagerV1['agreements']`.
export { CoreV1 } from './core/v1/operations.generated.js';
export * as CoreV1Operations from './core/v1/operations.generated.js';
export type * as CoreV1Types from './core/v1/types.generated.js';
export { LifecycleManagerV1 } from './lifecycleManager/v1/operations.generated.js';
export * as LifecycleManagerV1Operations from './lifecycleManager/v1/operations.generated.js';
export type * as LifecycleManagerV1Types from './lifecycleManager/v1/types.generated.js';

// Request building blocks
export type {
  FilterOp,
  FilterScalar,
  FilterClause,
  FilterValue,
  Filters,
} from './types/filters.js';
export { formatFilterValue } from './types/filters.js';
export type { SortSpec, SortDirection } from './types/sorting.js';
export type { Page, PageFetcher } from './types/pagination.js';
export { paginatePages, paginateItems, collectAll } from './types/pagination.js';
export type { BinaryResponse, MultipartBody } from './http/httpClient.js';

// Errors
export type { ErrorItem } from './http/errors.js';
export {
  ScalePadError,
  ApiError,
  AuthenticationError,
  SubscriptionRequiredError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  NetworkError,
  TimeoutError,
} from './http/errors.js';

// Configuration
export type { RetryConfig } from './http/retry.js';
export { DEFAULT_RETRY_CONFIG } from './http/retry.js';
export type { Logger, LogLevel } from './logging/logger.js';
export { ConsoleLogger, NoOpLogger } from './logging/logger.js';
