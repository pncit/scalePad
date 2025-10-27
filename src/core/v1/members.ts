import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for Member resource (basic fields - extend as needed)
 */
const MemberSchema = z.unknown();

export type Member = z.infer<typeof MemberSchema>;

/**
 * Members resource
 */
export class MembersResource extends BaseResource<Member> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/members', MemberSchema);
    this.sortParamName = 'sort';
  }
}

