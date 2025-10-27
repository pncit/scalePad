import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for Contact resource (basic fields - extend as needed)
 */
const ContactSchema = z.unknown();

export type Contact = z.infer<typeof ContactSchema>;

/**
 * Contacts resource
 */
export class ContactsResource extends BaseResource<Contact> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/contacts', ContactSchema);
    this.sortParamName = 'sort';
  }
}

