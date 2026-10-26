import { HttpClient } from './http/httpClient.js';
import { Logger, LogLevel, createLogger } from './logging/logger.js';
import { RetryConfig, DEFAULT_RETRY_CONFIG } from './http/retry.js';
import { CoreV1 } from './core/v1/operations.generated.js';
import { LifecycleManagerV1 } from './lifecycleManager/v1/operations.generated.js';

export interface ScalePadClientConfig {
  /** A personal API key from the ScalePad application. */
  apiKey: string;
  /**
   * Regional gateway. Core and Lifecycle Manager are served only from the US
   * edge, which is the default.
   */
  baseUrl?: string;
  /** Per-attempt timeout in milliseconds (default 60 000). */
  timeoutMs?: number;
  retry?: Partial<RetryConfig>;
  /** Replaces the console logger. */
  logger?: Logger;
  /** Threshold for the console logger (default `info`). */
  logLevel?: LogLevel;
  /** Alternative `fetch`, for tests or custom transports. */
  fetch?: typeof globalThis.fetch;
}

const DEFAULT_BASE_URL = 'https://api.scalepad.com';
const DEFAULT_TIMEOUT_MS = 60_000;

/**
 * Entry point to the ScalePad API. Each product is a namespace of tag groups
 * mirroring the developer documentation, so `client.core.v1.clients.list()`
 * is "Core API → Clients → List Clients".
 */
export class ScalePadClient {
  readonly core: { readonly v1: CoreV1 };
  readonly lifecycleManager: { readonly v1: LifecycleManagerV1 };
  private readonly logger: Logger;

  constructor(config: ScalePadClientConfig) {
    if (!config.apiKey) throw new Error('API key is required');

    this.logger = createLogger(config.logLevel ?? 'info', config.logger);
    const http = new HttpClient({
      apiKey: config.apiKey,
      baseUrl: (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, ''),
      timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      retry: { ...DEFAULT_RETRY_CONFIG, ...config.retry },
      logger: this.logger,
      fetch: config.fetch,
    });

    this.core = { v1: new CoreV1(http) };
    this.lifecycleManager = { v1: new LifecycleManagerV1(http) };
  }

  getLogger(): Logger {
    return this.logger;
  }
}
