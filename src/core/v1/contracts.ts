import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for Contract resource (basic fields - extend as needed)
 */
const ContractSchema = z.unknown();

export type Contract = z.infer<typeof ContractSchema>;

/**
 * Contracts resource
 */
export class ContractsResource extends BaseResource<Contract> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/contracts', ContractSchema);
    this.sortParamName = 'sort';
  }
}

