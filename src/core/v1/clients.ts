import { z } from 'zod';
import { BaseResource } from './baseResource.js';
import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';

/**
 * Schema for Client resource (basic fields - extend as needed)
 */
const ClientSchema = z.unknown();

export type Client = z.infer<typeof ClientSchema>;

/**
 * Clients resource
 */
export class ClientsResource extends BaseResource<Client> {
  constructor(httpClient: HttpClient, logger: Logger) {
    super(httpClient, logger, '/core/v1/clients', ClientSchema);
    this.sortParamName = 'sort';
  }
}

