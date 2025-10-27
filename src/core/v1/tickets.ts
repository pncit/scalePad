import { z } from 'zod';
import { BaseResource } from './baseResource.js';

/**
 * Schema for Ticket resource (basic fields - extend as needed)
 */
const TicketSchema = z.unknown();

export type Ticket = z.infer<typeof TicketSchema>;

/**
 * Tickets resource
 */
export class TicketsResource extends BaseResource<Ticket> {
  constructor(httpClient: any, logger: any) {
    super(httpClient, logger, '/core/v1/tickets', TicketSchema);
    this.sortParamName = 'sort';
  }
}

