import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for SaaS resource (basic fields - extend as needed)
 */
const SaaSSchema = z.unknown();

export type SaaS = z.infer<typeof SaaSSchema>;

/**
 * SaaS resource
 */
export class SaaSResource extends BaseResource<SaaS> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/saas', SaaSSchema);
    this.sortParamName = 'sort';
  }
}

