import { z } from 'zod';
import { BaseResource } from './baseResource.js';
import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';

/**
 * Schema for Contract resource (basic fields - extend as needed)
 */
const ContractSchema = z.unknown();

export type Contract = z.infer<typeof ContractSchema>;

/**
 * Contracts resource
 */
export class ContractsResource extends BaseResource<Contract> {
  constructor(httpClient: HttpClient, logger: Logger) {
    super(httpClient, logger, '/core/v1/contracts', ContractSchema);
    this.sortParamName = 'sort';
  }
}

