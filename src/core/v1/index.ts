import { HttpClient } from '../../http/httpClient.js';
import { Logger } from '../../logging/logger.js';
import { ClientsResource } from './clients.js';
import { ContactsResource } from './contacts.js';
import { ContractsResource } from './contracts.js';
import { HardwareAssetsResource } from './hardwareAssets.js';
import { MembersResource } from './members.js';
import { SaaSResource } from './saas.js';
import { TicketsResource } from './tickets.js';
import { OpportunitiesResource } from './opportunities.js';

/**
 * Core API v1 namespace
 */
export class CoreV1 {
  public readonly clients: ClientsResource;
  public readonly contacts: ContactsResource;
  public readonly contracts: ContractsResource;
  public readonly hardwareAssets: HardwareAssetsResource;
  public readonly members: MembersResource;
  public readonly saas: SaaSResource;
  public readonly tickets: TicketsResource;
  public readonly opportunities: OpportunitiesResource;

  constructor(httpClient: HttpClient, logger: Logger) {
    this.clients = new ClientsResource(httpClient, logger);
    this.contacts = new ContactsResource(httpClient, logger);
    this.contracts = new ContractsResource(httpClient, logger);
    this.hardwareAssets = new HardwareAssetsResource(httpClient, logger);
    this.members = new MembersResource(httpClient, logger);
    this.saas = new SaaSResource(httpClient, logger);
    this.tickets = new TicketsResource(httpClient, logger);
    this.opportunities = new OpportunitiesResource(httpClient, logger);
  }
}

// Export types
export type { Client } from './clients.js';
export type { Contact } from './contacts.js';
export type { Contract } from './contracts.js';
export type { HardwareAsset } from './hardwareAssets.js';
export type { Member } from './members.js';
export type { SaaS } from './saas.js';
export type { Ticket } from './tickets.js';
export type { Opportunity } from './opportunities.js';

