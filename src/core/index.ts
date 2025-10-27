import { HttpClient } from '../http/httpClient.js';
import { Logger } from '../logging/logger.js';
import { CoreV1 } from './v1/index.js';

/**
 * Core API namespace
 */
export class Core {
  public readonly v1: CoreV1;

  constructor(httpClient: HttpClient, logger: Logger) {
    this.v1 = new CoreV1(httpClient, logger);
  }
}

// Re-export types
export * from './v1/index.js';

