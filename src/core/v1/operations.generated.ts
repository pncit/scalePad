// Generated from spec/core-api.json by scripts/generate.mjs. Regenerate with `npm run generate`; do not edit.
import type { operations } from './schema.generated.js';
import type { HttpClient } from '../../http/httpClient.js';
import type { FilterValue, FilterOp } from '../../types/filters.js';
import { splitBodyFilters } from '../../types/filters.js';
import type { SortSpec } from '../../types/sorting.js';
import { paginateItems } from '../../types/pagination.js';

/**
 * Core API v1
 *
 * An API that allows users to programmatically interface with ScalePad core data and services.
 */
export class CoreV1 {
  /** Companies whose IT infrastructure is managed by the MSP. */
  readonly clients: Clients;
  /** People at a client company, such as hardware asset users or ticket requesters. */
  readonly contacts: Contacts;
  /** Service contracts between the MSP and its clients. */
  readonly contracts: Contracts;
  /** Physical devices managed by the MSP for its clients. */
  readonly hardwareAssets: HardwareAssets;
  /** Integrations connecting external vendors to ScalePad. */
  readonly integrations: Integrations;
  /** Employees of the MSP. */
  readonly members: Members;
  /** Sales opportunities identified for clients. */
  readonly opportunities: Opportunities;
  /** Products available in the ScalePad product catalog. */
  readonly productCatalog: ProductCatalog;
  /** SaaS applications and their users at client companies. */
  readonly saas: Saas;
  /** Operations related to Sites. */
  readonly sites: Sites;
  /** Service tickets raised for clients. */
  readonly tickets: Tickets;
  constructor(http: HttpClient) {
    this.clients = new Clients(http);
    this.contacts = new Contacts(http);
    this.contracts = new Contracts(http);
    this.hardwareAssets = new HardwareAssets(http);
    this.integrations = new Integrations(http);
    this.members = new Members(http);
    this.opportunities = new Opportunities(http);
    this.productCatalog = new ProductCatalog(http);
    this.saas = new Saas(http);
    this.sites = new Sites(http);
    this.tickets = new Tickets(http);
  }
}

/**
 * Clients
 *
 * Companies whose IT infrastructure is managed by the MSP.
 */
export class Clients {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Clients
   *
   * This endpoint retrieves a detailed list of clients. The endpoint supports filtering and sorting based on various criteria.
   *
   * A client is an active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details.
   *
   * `GET /core/v1/clients`
   */
  list(
    query?: ClientsListQuery
  ): Promise<operations['list-clients']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-clients']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/clients`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ClientsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-clients']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Client
   *
   * This endpoint retrieves a single client, identified by its unique ID.
   *
   * A client is an active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details.
   *
   * `GET /core/v1/clients/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-client']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-client']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/clients/${encodeURIComponent(id)}`, responseType: 'json' });
  }
}

/** Query parameters for `Clients.list()`. */
export interface ClientsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    lifecycle?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    num_contacts?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    num_hardware_assets?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `name`, `lifecycle`, `num_contacts`, `num_hardware_assets`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'name'
    | 'lifecycle'
    | 'num_contacts'
    | 'num_hardware_assets'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Contacts
 *
 * People at a client company, such as hardware asset users or ticket requesters.
 */
export class Contacts {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Contacts
   *
   * This endpoint retrieves a detailed list of contacts. The endpoint supports filtering and sorting based on various criteria.
   *
   * A contact is an active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details.
   *
   * `POST /core/v1/contacts`
   */
  list(
    query?: ContactsListQuery
  ): Promise<operations['list-contacts']['responses'][200]['content']['application/json']> {
    const { filters, ...rest } = query ?? {};
    const { queryFilters, body } = splitBodyFilters(filters, ['contact_info.email', 'name.full']);
    return this.http.request<
      operations['list-contacts']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/core/v1/contacts`,
      query: { ...rest, filters: queryFilters },
      body,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ContactsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-contacts']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Contact
   *
   * This endpoint retrieves a single contact, identified by its unique ID.
   *
   * A contact is an active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details.
   *
   * `GET /core/v1/contacts/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-contact']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-contact']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/contacts/${encodeURIComponent(id)}`, responseType: 'json' });
  }
}

/** Query parameters for `Contacts.list()`. */
export interface ContactsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    title?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Sent in the request body rather than the query string. */
    'contact_info.email'?: FilterValue<FilterOp>;
    /** Sent in the request body rather than the query string. */
    'name.full'?: FilterValue<FilterOp>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `client.id`, `client.name`, `title`, `contact_info.email`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'client.id'
    | 'client.name'
    | 'title'
    | 'contact_info.email'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Contracts
 *
 * Service contracts between the MSP and its clients.
 */
export class Contracts {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Contracts
   *
   * This endpoint retrieves a detailed list of contracts. The endpoint supports filtering and sorting based on various criteria.
   *
   * A contract is a formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details.
   *
   * `GET /core/v1/service/contracts`
   */
  list(
    query?: ContractsListQuery
  ): Promise<operations['list-contracts']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-contracts']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/service/contracts`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ContractsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-contracts']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Contract
   *
   * This endpoint retrieves a single contract, identified by its unique ID.
   *
   * A contract is a formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details.
   *
   * `GET /core/v1/service/contracts/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-contract']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-contract']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/service/contracts/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Contracts.list()`. */
export interface ContractsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'contact.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_recurring?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    'term.starts_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'term.ends_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    'term.is_auto_renew'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'term.billing_period'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source_type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_addendum?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'parent_contract.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'parent_contract.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_billable?: FilterValue<'eq'>;
    /** Operators: eq. */
    'contract_pricings.is_billable'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'contract_pricings.pricing_type'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'contract_pricings.items.product.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'contract_pricings.items.product.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `name`, `client.id`, `client.name`, `contact.id`, `is_recurring`, `type`, `term.starts_at`, `term.ends_at`, `term.is_auto_renew`, `term.billing_period`, `source_type`, `is_addendum`, `parent_contract.name`, `status`, `is_billable`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'name'
    | 'client.id'
    | 'client.name'
    | 'contact.id'
    | 'is_recurring'
    | 'type'
    | 'term.starts_at'
    | 'term.ends_at'
    | 'term.is_auto_renew'
    | 'term.billing_period'
    | 'source_type'
    | 'is_addendum'
    | 'parent_contract.name'
    | 'status'
    | 'is_billable'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Hardware Assets
 *
 * Physical devices managed by the MSP for its clients.
 */
export class HardwareAssets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Hardware Assets
   *
   * This endpoint retrieves a detailed list of hardware assets. The endpoint supports filtering and sorting based on various criteria.
   *
   * A hardware asset is an active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details.
   *
   * `GET /core/v1/assets/hardware`
   */
  list(
    query?: HardwareAssetsListQuery
  ): Promise<operations['list-hardware-assets']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-hardware-assets']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/assets/hardware`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<HardwareAssetsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-hardware-assets']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Hardware Asset
   *
   * This endpoint retrieves a single hardware asset, identified by its unique ID.
   *
   * A hardware asset is an active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details.
   *
   * `GET /core/v1/assets/hardware/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-hardware-asset']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-hardware-asset']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/assets/hardware/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `HardwareAssets.list()`. */
export interface HardwareAssetsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'contact.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'manufacturer.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'manufacturer.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'model.number'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    serial_number?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    location_name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'configuration.cpu.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'configuration.cpu.manufacturer_name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'configuration.cpu.manufacturer_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'configuration.ram_bytes'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'configuration.disks.total_bytes'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'configuration.disks.used_bytes'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'software.operating_system'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'software.antivirus_info.status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'software.antivirus_info.definition_status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'software.office_suite_info.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'software.office_suite_info.version'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `id`, `name`, `client.id`, `client.name`, `contact.id`, `manufacturer.id`, `manufacturer.name`, `model.number`, `type`, `location_name`, `configuration.cpu.name`, `configuration.cpu.manufacturer_name`, `configuration.cpu.manufacturer_id`, `configuration.ram_bytes`, `software.operating_system`, `software.antivirus_info.status`, `software.antivirus_info.definition_status`, `software.office_suite_info.name`, `software.office_suite_info.version`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'id'
    | 'name'
    | 'client.id'
    | 'client.name'
    | 'contact.id'
    | 'manufacturer.id'
    | 'manufacturer.name'
    | 'model.number'
    | 'type'
    | 'location_name'
    | 'configuration.cpu.name'
    | 'configuration.cpu.manufacturer_name'
    | 'configuration.cpu.manufacturer_id'
    | 'configuration.ram_bytes'
    | 'software.operating_system'
    | 'software.antivirus_info.status'
    | 'software.antivirus_info.definition_status'
    | 'software.office_suite_info.name'
    | 'software.office_suite_info.version'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Integrations
 *
 * Integrations connecting external vendors to ScalePad.
 */
export class Integrations {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Integration Configurations
   *
   * This endpoint returns the list of integration configurations associated with the MSP. It indicates which configurations are the primary integrations associated with specific entities.
   *
   * An integration configuration is a specific instance of an integration.
   *
   * `GET /core/v1/integrations/configurations`
   */
  listConfigurations(): Promise<
    operations['list-integration-configurations']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-integration-configurations']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/integrations/configurations`, responseType: 'json' });
  }

  /**
   * List Integration Vendors
   *
   * This endpoint retrieves a complete list of integration vendors which can be used to identify third-party services and platforms that can be integrated with.
   *
   * `GET /core/v1/integrations/vendors`
   */
  listVendors(
    query?: IntegrationsListVendorsQuery
  ): Promise<
    operations['list-integration-vendors']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-integration-vendors']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/integrations/vendors`, query, responseType: 'json' });
  }
}

/** Query parameters for `Integrations.listVendors()`. */
export interface IntegrationsListVendorsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: cont, eq, in. */
    name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    vendor_id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    category?: FilterValue<'cont' | 'eq' | 'in'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Members
 *
 * Employees of the MSP.
 */
export class Members {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Members
   *
   * This endpoint retrieves a detailed list of members. The endpoint supports filtering and sorting based on various criteria.
   *
   * A member is an active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes.
   *
   * `POST /core/v1/members`
   */
  list(
    query?: MembersListQuery
  ): Promise<operations['list-members']['responses'][200]['content']['application/json']> {
    const { filters, ...rest } = query ?? {};
    const { queryFilters, body } = splitBodyFilters(filters, [
      'contact_info.email',
      'contact_info.phone',
      'name.full',
      'reports_to_member.email',
    ]);
    return this.http.request<
      operations['list-members']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/core/v1/members`,
      query: { ...rest, filters: queryFilters },
      body,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<MembersListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-members']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Member
   *
   * This endpoint retrieves a single member, identified by its unique ID.
   *
   * A member is an active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes.
   *
   * `GET /core/v1/members/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-member']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-member']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/members/${encodeURIComponent(id)}`, responseType: 'json' });
  }
}

/** Query parameters for `Members.list()`. */
export interface MembersListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    hired_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: cont, eq, in. */
    title?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq. */
    is_scalepad_user?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'reports_to_member.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'hourly_cost.amount'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    daily_capacity?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Sent in the request body rather than the query string. */
    'contact_info.email'?: FilterValue<FilterOp>;
    /** Sent in the request body rather than the query string. */
    'contact_info.phone'?: FilterValue<FilterOp>;
    /** Sent in the request body rather than the query string. */
    'name.full'?: FilterValue<FilterOp>;
    /** Sent in the request body rather than the query string. */
    'reports_to_member.email'?: FilterValue<FilterOp>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `hired_at`, `title`, `is_scalepad_user`, `hourly_cost.amount`, `daily_capacity`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'hired_at'
    | 'title'
    | 'is_scalepad_user'
    | 'hourly_cost.amount'
    | 'daily_capacity'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Opportunities
 *
 * Sales opportunities identified for clients.
 */
export class Opportunities {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Opportunities
   *
   * This endpoint retrieves a detailed list of opportunities. The endpoint supports filtering and sorting based on various criteria.
   *
   * An opportunity is a sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information.
   *
   * `GET /core/v1/opportunities`
   */
  list(
    query?: OpportunitiesListQuery
  ): Promise<operations['list-opportunities']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-opportunities']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/opportunities`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<OpportunitiesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-opportunities']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Opportunity
   *
   * This endpoint retrieves a single opportunity, identified by its unique ID.
   *
   * An opportunity is a sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information.
   *
   * `GET /core/v1/opportunities/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-opportunity']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-opportunity']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/opportunities/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Opportunities.list()`. */
export interface OpportunitiesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    title?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    source_status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source_stage?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_active?: FilterValue<'eq'>;
    /** Operators: eq, gt, gte, lt, lte. */
    probability?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'contact.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'responsible_member.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `title`, `source_status`, `source_stage`, `is_active`, `probability`, `client.id`, `client.name`, `contact.id`, `responsible_member.id`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'title'
    | 'source_status'
    | 'source_stage'
    | 'is_active'
    | 'probability'
    | 'client.id'
    | 'client.name'
    | 'contact.id'
    | 'responsible_member.id'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Product Catalog
 *
 * Products available in the ScalePad product catalog.
 */
export class ProductCatalog {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Product Catalog Records
   *
   * This endpoint retrieves product catalog records exported from PSA integrations. The endpoint supports filtering and sorting based on various criteria.
   *
   * A product catalog record represents a PSA product or item with source identifiers, classification fields, pricing, activity state, and integration lineage.
   *
   * `GET /core/v1/product-catalog`
   */
  listRecords(
    query?: ProductCatalogListRecordsQuery
  ): Promise<operations['list-product-catalog']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-product-catalog']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/product-catalog`, query, responseType: 'json' });
  }

  /**
   * Every item of `listRecords()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listRecordsAll(
    query?: Omit<ProductCatalogListRecordsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-product-catalog']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listRecords({ ...query, cursor }));
  }

  /**
   * Get Product Catalog Record
   *
   * This endpoint retrieves a single product catalog record, identified by its unique ID.
   *
   * A product catalog record represents a PSA product or item with source identifiers, classification fields, pricing, activity state, and integration lineage.
   *
   * `GET /core/v1/product-catalog/{id}`
   */
  getRecord(
    id: string
  ): Promise<operations['get-product-catalog']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-product-catalog']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/product-catalog/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `ProductCatalog.listRecords()`. */
export interface ProductCatalogListRecordsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source_system?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source_product_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source_product_identifier?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    name?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    category?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    subcategory?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    product_type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    product_class?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    manufacturer_name?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_active?: FilterValue<'eq'>;
    /** Operators: gt, gte, lt, lte. */
    updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `source_system`, `source_product_id`, `source_product_identifier`, `name`, `category`, `subcategory`, `product_type`, `product_class`, `manufacturer_name`, `unit_cost`, `unit_price`, `is_active`, `updated_at`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'source_system'
    | 'source_product_id'
    | 'source_product_identifier'
    | 'name'
    | 'category'
    | 'subcategory'
    | 'product_type'
    | 'product_class'
    | 'manufacturer_name'
    | 'unit_cost'
    | 'unit_price'
    | 'is_active'
    | 'updated_at'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * SaaS
 *
 * SaaS applications and their users at client companies.
 */
export class Saas {
  constructor(private readonly http: HttpClient) {}

  /**
   * List SaaS Assets
   *
   * This endpoint retrieves a detailed list of SaaS assets. The endpoint supports filtering and sorting based on various criteria.
   *
   * A SaaS asset is a cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery.
   *
   * `GET /core/v1/assets/saas`
   */
  listAssets(
    query?: SaasListAssetsQuery
  ): Promise<operations['list-saas-assets']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-saas-assets']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/assets/saas`, query, responseType: 'json' });
  }

  /**
   * Every item of `listAssets()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAssetsAll(
    query?: Omit<SaasListAssetsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-saas-assets']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listAssets({ ...query, cursor }));
  }

  /**
   * List SaaS Users
   *
   * This endpoint retrieves a detailed list of SaaS users. The endpoint supports filtering and sorting based on various criteria.
   *
   * A SaaS user is an individual at the client organization who has been assigned access to a SaaS license managed by the MSP.
   *
   * `GET /core/v1/assets/saas-users`
   */
  listUsers(
    query?: SaasListUsersQuery
  ): Promise<operations['list-saas-users']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-saas-users']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/assets/saas-users`, query, responseType: 'json' });
  }

  /**
   * Every item of `listUsers()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listUsersAll(
    query?: Omit<SaasListUsersQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-saas-users']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listUsers({ ...query, cursor }));
  }

  /**
   * Get SaaS User
   *
   * This endpoint retrieves a single SaaS user, identified by its unique ID.
   *
   * A SaaS user is an individual at the client organization who has been assigned access to a SaaS license managed by the MSP.
   *
   * `GET /core/v1/assets/saas-users/{id}`
   */
  getUser(
    id: string
  ): Promise<operations['get-saas-user']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-saas-user']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/assets/saas-users/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Get SaaS Asset
   *
   * This endpoint retrieves a single SaaS asset, identified by its unique ID.
   *
   * A SaaS asset is a cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery.
   *
   * `GET /core/v1/assets/saas/{id}`
   */
  getAsset(
    id: string
  ): Promise<operations['get-saas-asset']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-saas-asset']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/assets/saas/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Saas.listAssets()`. */
export interface SaasListAssetsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.category'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer_sku.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer_sku.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    tenant_domain?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    'term.starts_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'term.ends_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    'term.is_auto_renewed'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'subscriptions.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.commerce_subscription_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.type'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'subscriptions.license_count'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'subscriptions.billing_cycle_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.friendly_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    'subscriptions.term.starts_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'subscriptions.term.ends_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    'subscriptions.term.is_auto_renewed'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'subscriptions.provider_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.partner_tier'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscriptions.csp_tier'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'pool.type'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'pool.capacity'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'pool.utilized'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'pool.suspended'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'pool.grace_period_warning'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `id`, `client.id`, `client.name`, `product.manufacturer.id`, `product.manufacturer.name`, `product.id`, `product.name`, `product.category`, `product.manufacturer_sku.id`, `product.manufacturer_sku.name`, `status`, `tenant_domain`, `term.starts_at`, `term.ends_at`, `term.is_auto_renewed`, `pool.type`, `pool.capacity`, `pool.utilized`, `pool.suspended`, `pool.grace_period_warning`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'id'
    | 'client.id'
    | 'client.name'
    | 'product.manufacturer.id'
    | 'product.manufacturer.name'
    | 'product.id'
    | 'product.name'
    | 'product.category'
    | 'product.manufacturer_sku.id'
    | 'product.manufacturer_sku.name'
    | 'status'
    | 'tenant_domain'
    | 'term.starts_at'
    | 'term.ends_at'
    | 'term.is_auto_renewed'
    | 'pool.type'
    | 'pool.capacity'
    | 'pool.utilized'
    | 'pool.suspended'
    | 'pool.grace_period_warning'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/** Query parameters for `Saas.listUsers()`. */
export interface SaasListUsersQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'contact.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset.status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.category'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer_sku.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.manufacturer_sku.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    'term.starts_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'term.ends_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'subscription.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscription.commerce_subscription_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'subscription.status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    'subscription.license_count'?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    'subscription.billing_cycle_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    'subscription.is_auto_renewed'?: FilterValue<'eq'>;
    /** Operators: gt, gte, lt, lte. */
    'activity.last_active_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    'activity.is_active'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'authentication.is_mfa_enabled'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'authentication.default_mfa_method'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_admin?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `id`, `client.id`, `client.name`, `contact.id`, `asset.id`, `asset.status`, `product.manufacturer.id`, `product.manufacturer.name`, `product.id`, `product.name`, `product.category`, `product.manufacturer_sku.id`, `product.manufacturer_sku.name`, `term.starts_at`, `term.ends_at`, `activity.last_active_at`, `activity.is_active`, `authentication.is_mfa_enabled`, `authentication.default_mfa_method`, `is_admin`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'id'
    | 'client.id'
    | 'client.name'
    | 'contact.id'
    | 'asset.id'
    | 'asset.status'
    | 'product.manufacturer.id'
    | 'product.manufacturer.name'
    | 'product.id'
    | 'product.name'
    | 'product.category'
    | 'product.manufacturer_sku.id'
    | 'product.manufacturer_sku.name'
    | 'term.starts_at'
    | 'term.ends_at'
    | 'activity.last_active_at'
    | 'activity.is_active'
    | 'authentication.is_mfa_enabled'
    | 'authentication.default_mfa_method'
    | 'is_admin'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Sites
 *
 * Operations related to Sites.
 */
export class Sites {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Sites
   *
   * This endpoint retrieves a list of client sites materialized from PSA location data. Use `filter[client.id]` to return sites for a specific client.
   *
   * `GET /core/v1/sites`
   */
  list(
    query?: SitesListQuery
  ): Promise<operations['list-sites']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-sites']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/sites`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<SitesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-sites']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Site
   *
   * This endpoint retrieves a single client site identified by its unique ID.
   *
   * `GET /core/v1/sites/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-site']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-site']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/sites/${encodeURIComponent(id)}`, responseType: 'json' });
  }
}

/** Query parameters for `Sites.list()`. */
export interface SitesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/**
 * Tickets
 *
 * Service tickets raised for clients.
 */
export class Tickets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Tickets
   *
   * This endpoint retrieves a detailed list of tickets. The endpoint supports filtering and sorting based on various criteria.
   *
   * A ticket is a service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details.
   *
   * `GET /core/v1/service/tickets`
   */
  list(
    query?: TicketsListQuery
  ): Promise<operations['list-tickets']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-tickets']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/core/v1/service/tickets`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<TicketsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['list-tickets']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Ticket
   *
   * This endpoint retrieves a single ticket, identified by its unique ID.
   *
   * A ticket is a service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details.
   *
   * `GET /core/v1/service/tickets/{id}`
   */
  get(
    id: string
  ): Promise<operations['get-ticket']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-ticket']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/core/v1/service/tickets/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Tickets.list()`. */
export interface TicketsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'owner_member.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'responsible_member.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'client.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'contact.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'contract.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq, in. */
    'contract.name'?: FilterValue<'cont' | 'eq' | 'in'>;
    /** Operators: eq, in. */
    'board.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'board.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    category?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_child_ticket?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_long_ticket?: FilterValue<'eq'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.created_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.updated_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.responded_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.planned_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.resolved_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    'timeline.closed_at'?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    'sla.is_response_in_sla'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'sla.is_plan_in_sla'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'sla.is_resolution_in_sla'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'status.current'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'priority.current'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    impact?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    severity?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.source_record_id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: gt, gte, lt, lte. */
    record_created_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'gt' | 'gte' | 'lt' | 'lte'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. *Sortable fields*: `id`, `client.name`, `is_child_ticket`, `is_long_ticket`, `timeline.created_at`, `timeline.updated_at`, `timeline.responded_at`, `timeline.planned_at`, `timeline.resolved_at`, `timeline.closed_at`, `sla.is_response_in_sla`, `sla.is_plan_in_sla`, `sla.is_resolution_in_sla`, `status.current`, `priority.current`, `impact`, `severity`, `record_created_at`, `record_updated_at`. */
  sort?: readonly SortSpec<
    | 'id'
    | 'client.name'
    | 'is_child_ticket'
    | 'is_long_ticket'
    | 'timeline.created_at'
    | 'timeline.updated_at'
    | 'timeline.responded_at'
    | 'timeline.planned_at'
    | 'timeline.resolved_at'
    | 'timeline.closed_at'
    | 'sla.is_response_in_sla'
    | 'sla.is_plan_in_sla'
    | 'sla.is_resolution_in_sla'
    | 'status.current'
    | 'priority.current'
    | 'impact'
    | 'severity'
    | 'record_created_at'
    | 'record_updated_at'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}
