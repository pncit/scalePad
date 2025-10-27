import { z } from 'zod';
import { BaseResource } from './baseResource.js';
import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';

/**
 * Schema for Opportunity resource (basic fields - extend as needed)
 */
const OpportunitySchema = z.unknown();

export type Opportunity = z.infer<typeof OpportunitySchema>;

/**
 * Opportunities resource
 */
export class OpportunitiesResource extends BaseResource<Opportunity> {
  constructor(httpClient: HttpClient, logger: Logger) {
    super(httpClient, logger, '/core/v1/opportunities', OpportunitySchema);
    this.sortParamName = 'sort';
  }
}

