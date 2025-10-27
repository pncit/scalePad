import { HttpClient } from './http/httpClient.js';
import { Logger, LogLevel, createLogger } from './logging/logger.js';
import { RetryConfig, DEFAULT_RETRY_CONFIG } from './http/retry.js';
import { Core } from './core/index.js';

/**
 * Configuration options for the ScalePad client
 */
export interface ScalePadClientConfig {
  /**
   * API key for authentication
   */
  apiKey: string;

  /**
   * Base URL for the API (default: https://api.scalepad.com)
   */
  baseUrl?: string;

  /**
   * Request timeout in milliseconds (default: 60000)
   */
  timeoutMs?: number;

  /**
   * Retry configuration
   */
  retry?: Partial<RetryConfig>;

  /**
   * Logger instance (optional)
   */
  logger?: Logger;

  /**
   * Log level (default: 'info')
   */
  logLevel?: LogLevel;

  /**
   * Custom fetch implementation (for testing/special environments)
   */
  fetch?: typeof globalThis.fetch;
}

const DEFAULT_BASE_URL = 'https://api.scalepad.com';
const DEFAULT_TIMEOUT_MS = 60000;

/**
 * Main client for interacting with the ScalePad API
 */
export class ScalePadClient {
  private httpClient: HttpClient;
  private logger: Logger;

  /**
   * Core API namespace
   */
  public readonly core: Core;

  constructor(config: ScalePadClientConfig) {
    // Validate required config
    if (!config.apiKey) {
      throw new Error('API key is required');
    }

    // Create logger
    this.logger = createLogger(config.logLevel ?? 'info', config.logger);

    // Create HTTP client
    this.httpClient = new HttpClient({
      apiKey: config.apiKey,
      baseUrl: config.baseUrl ?? DEFAULT_BASE_URL,
      timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      retry: {
        ...DEFAULT_RETRY_CONFIG,
        ...config.retry,
      },
      logger: this.logger,
      fetch: config.fetch,
    });

    // Initialize product namespaces
    this.core = new Core(this.httpClient, this.logger);
  }

  /**
   * Gets the logger instance
   */
  getLogger(): Logger {
    return this.logger;
  }
}

