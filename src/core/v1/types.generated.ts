// Generated from spec/core-api.json by scripts/generate.mjs. Regenerate with `npm run generate`; do not edit.
import type { components } from './schema.generated.js';
export type { components, operations, paths } from './schema.generated.js';

/** Details of a single validation failure in a 400 Bad Request response */
export type BadRequestErrorDetail =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.BadRequestErrorDetail'];
/** Error response returned when the request is malformed or contains invalid parameter values (HTTP 400) */
export type BadRequestResponse =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.BadRequestResponse'];
/** An active customer organization managed by the MSP, enriched with data such as employee and device counts, geographic details, and other customer-specific details. */
export type Client = components['schemas']['SpApi.CoreApi.Core.v1.Clients.Model.Client'];
/** Geographic information relating to the client's billing location with ISO-standardized country and state information where possible. */
export type ClientAddress =
  components['schemas']['SpApi.CoreApi.Core.v1.Clients.Model.ClientAddress'];
/** Geospatial information relating to the client organization. */
export type ClientAddressGeoSpatialCoordinates =
  components['schemas']['SpApi.CoreApi.Core.v1.Clients.Model.ClientAddressGeoSpatialCoordinates'];
/** An active individual associated with a client of an MSP, enriched with information such as their role, name and other contact-specific details. */
export type Contact = components['schemas']['SpApi.CoreApi.Core.v1.Contacts.Model.Contact'];
/** Client organization that the contact is associated with. */
export type ContactClient =
  components['schemas']['SpApi.CoreApi.Core.v1.Contacts.Model.ContactClient'];
/** Primary communication details of the contact. */
export type ContactContactInfo =
  components['schemas']['SpApi.CoreApi.Core.v1.Contacts.Model.ContactContactInfo'];
/** Name of the contact. */
export type ContactName = components['schemas']['SpApi.CoreApi.Core.v1.Contacts.Model.ContactName'];
/** A formal agreement between the MSP and its active client, enriched with information such as the associated client, contact, and other agreement-specific details. */
export type Contract = components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.Contract'];
/** Client organization that is receiving the services and/or products from the MSP under this contract. */
export type ContractClient =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractClient'];
/** Contact who is responsible for the contract. */
export type ContractContact =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContact'];
/** List of active pricing line items associated with the contract. Inactive or expired pricings are excluded. */
export type ContractContractPricings =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricings'];
/** List of products or services associated with this pricing item. */
export type ContractContractPricingsItems =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItems'];
/** Product details for items within this pricing structure. */
export type ContractContractPricingsItemsProduct =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsItemsProduct'];
/** Billing period for this specific pricing item, defining when the item is active and billable. */
export type ContractContractPricingsTerm =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTerm'];
/** Total cost incurred by the MSP for this pricing item. */
export type ContractContractPricingsTotalCost =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalCost'];
/** Total price for this pricing item. */
export type ContractContractPricingsTotalPrice =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsTotalPrice'];
/** Cost incurred by the MSP per unit of the service or product item. */
export type ContractContractPricingsUnitCost =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitCost'];
/** Price per unit for this service or product item. */
export type ContractContractPricingsUnitPrice =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractContractPricingsUnitPrice'];
/** Reference to the primary or original contract to which the current contract is related. */
export type ContractParentContract =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractParentContract'];
/** Sum of the total cost for all active pricing items in the contract. */
export type ContractPricingItemTotalCost =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalCost'];
/** Sum of the total price for all active/billable pricing items in the contract. */
export type ContractPricingItemTotalPrice =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractPricingItemTotalPrice'];
/** Defines active period of the contract including duration, renewal settings, and billing frequency. */
export type ContractTerm =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractTerm'];
/** Total cost for the contract. This is currently only supported by ConnectWise (Bill Amount). All other source systems default to null. */
export type ContractTotalCost =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalCost'];
/** Total price for the contract. For ConnectWise this will be the Bill Amount plus any Additions. */
export type ContractTotalPrice =
  components['schemas']['SpApi.CoreApi.Core.v1.Contracts.Model.ContractTotalPrice'];
/** An active physical device for a client managed by the MSP, enriched with information such as the associated client, assigned contact and other device-specific details. */
export type HardwareAsset =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAsset'];
/** Geographic information relating to the hardware asset's location with ISO-standardized country and state information where possible. */
export type HardwareAssetAddress =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddress'];
/** Geospatial information relating to the hardware asset. */
export type HardwareAssetAddressGeoSpatialCoordinates =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetAddressGeoSpatialCoordinates'];
/** Client organization that uses the hardware asset. */
export type HardwareAssetClient =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetClient'];
/** Hardware configuration details including CPU, memory, and storage specifications. */
export type HardwareAssetConfiguration =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfiguration'];
/** CPU specifications for the hardware asset. */
export type HardwareAssetConfigurationCpu =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationCpu'];
/** List of disks and their storage information including capacity and usage. Note that usage data is updated based on periodic syncs and may be subject to delays ranging from 24 hours to several days. */
export type HardwareAssetConfigurationDisks =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetConfigurationDisks'];
/** Contact who uses the hardware asset. */
export type HardwareAssetContact =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetContact'];
/** ScalePad standardized manufacturer details of the hardware asset. */
export type HardwareAssetManufacturer =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetManufacturer'];
/** Model information of the hardware asset provided by the manufacturer. */
export type HardwareAssetModel =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetModel'];
/** Information about critical software installed on the hardware asset. */
export type HardwareAssetSoftware =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftware'];
/** Information about the antivirus software. */
export type HardwareAssetSoftwareAntivirusInfo =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareAntivirusInfo'];
/** Information about the office suite software. */
export type HardwareAssetSoftwareOfficeSuiteInfo =
  components['schemas']['SpApi.CoreApi.Core.v1.HardwareAssets.Model.HardwareAssetSoftwareOfficeSuiteInfo'];
/** The list of integration instances configured in the account */
export type IntegrationConfigurations =
  components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations'];
/** A single configured integration instance, including the vendor it connects to and the data types it is primary for */
export type IntegrationConfigurationsIntegrationConfigurationItem =
  components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConfigurationItem'];
/** Non-secret connection settings of an integration instance. Each field is null when the vendor does not use it or it has not been set. */
export type IntegrationConfigurationsIntegrationConnection =
  components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationConnection'];
/** The integration vendor an integration instance belongs to */
export type IntegrationConfigurationsIntegrationVendor =
  components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Configurations.IntegrationConfigurations_IntegrationVendor'];
/** Details of a single server failure in a 500 Internal Server Error response */
export type InternalServerErrorErrorDetail =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.InternalServerErrorErrorDetail'];
/** Error response returned when the server encounters an unexpected condition while processing the request (HTTP 500) */
export type InternalServerErrorResponse =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.InternalServerErrorResponse'];
/** An active user (employee, contractor, downstream IT, etc.) within the MSP, enriched with details including their roles, access to ScalePad products, and other associated employee attributes. */
export type Member = components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.Member'];
/** Geographic information of the location where the member is based, with ISO-standardized country and state information where possible. */
export type MemberAddress =
  components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberAddress'];
/** Geospatial information relating to the member. */
export type MemberAddressGeoSpatialCoordinates =
  components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberAddressGeoSpatialCoordinates'];
/** Communication details of the member. */
export type MemberContactInfo =
  components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberContactInfo'];
/** Cost incurred by the MSP per hour of work performed by the member. This is the default hourly cost for the member. */
export type MemberHourlyCost =
  components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberHourlyCost'];
/** Name of the member. */
export type MemberName = components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberName'];
/** Identifies who this member reports to. */
export type MemberReportsToMember =
  components['schemas']['SpApi.CoreApi.Core.v1.Members.Model.MemberReportsToMember'];
/** Details of a single missing-resource failure in a 404 Not Found response */
export type NotFoundErrorDetail =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.NotFoundErrorDetail'];
/** Error response returned when no resource exists for the requested identifier (HTTP 404) */
export type NotFoundResponse =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.NotFoundResponse'];
/** A sales opportunity for an active client managed by the MSP, enriched with information such as status, stage, associated contact, and other sales-related information. */
export type Opportunity =
  components['schemas']['SpApi.CoreApi.Core.v1.Opportunities.Model.Opportunity'];
/** Client organization associated with the opportunity. */
export type OpportunityClient =
  components['schemas']['SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityClient'];
/** Contact associated with the opportunity. */
export type OpportunityContact =
  components['schemas']['SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityContact'];
/** Member at the MSP who is responsible for managing the opportunity. */
export type OpportunityResponsibleMember =
  components['schemas']['SpApi.CoreApi.Core.v1.Opportunities.Model.OpportunityResponsibleMember'];
/** A product catalog record exported from a PSA integration, including source identifiers, classification fields, pricing, and lineage. */
export type ProductCatalog =
  components['schemas']['SpApi.CoreApi.Core.v1.ProductCatalog.Model.ProductCatalog'];
/** Opaque, parsed representation of a `filter[...]` query expression. Produced internally by the API's filter parser; it never appears in request or response payloads. */
export type QueryFilter =
  components['schemas']['Wm.Search.Model.Query.Field.Filter.QueryFilter.QueryFilter'];
/** Provenance metadata indicating the record's identifier in the source system and the integration vendor and configuration that sourced it. */
export type RecordLineage = components['schemas']['SpApi.CoreApi.Core.Model.RecordLineage'];
/** Details about the integration setup that sourced this record. */
export type RecordLineageIntegrationConfiguration =
  components['schemas']['SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfiguration'];
/** Details about the integration vendor that sourced this record. */
export type RecordLineageIntegrationConfigurationVendor =
  components['schemas']['SpApi.CoreApi.Core.Model.RecordLineageIntegrationConfigurationVendor'];
/** A cloud-based software application used by a client organization, tracked and managed by the MSP as part of its service delivery. */
export type SaasAsset = components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAsset'];
/** Client organization that uses the SaaS asset. */
export type SaasAssetClient =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetClient'];
/** Total number of SaaS licenses or entitlements available under a subscription. */
export type SaasAssetPool =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetPool'];
/** SaaS product information. */
export type SaasAssetProduct =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProduct'];
/** Manufacturer information of the SaaS product. */
export type SaasAssetProductManufacturer =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturer'];
/** SKU code of the SaaS product provided by the manufacturer. */
export type SaasAssetProductManufacturerSku =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetProductManufacturerSku'];
/** Microsoft subscriptions matched to this SaaS asset. */
export type SaasAssetSubscriptions =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptions'];
/** Term duration of the subscription. */
export type SaasAssetSubscriptionsTerm =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetSubscriptionsTerm'];
/** Represents the active subscription or term duration of the SaaS asset. */
export type SaasAssetTerm =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasAssets.Model.SaasAssetTerm'];
/** An individual at the client organization who has been assigned access to a SaaS license managed by the MSP. */
export type SaasUser = components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUser'];
/** Activity information of the SaaS user, if provided by the vendor. */
export type SaasUserActivity =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserActivity'];
/** SaaS asset information associated with the user. */
export type SaasUserAsset =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAsset'];
/** Multi-factor authentication information for user. */
export type SaasUserAuthentication =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserAuthentication'];
/** Client organization that the SaaS user is associated with. */
export type SaasUserClient =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserClient'];
/** Contact who is assigned to the license for the SaaS asset. */
export type SaasUserContact =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserContact'];
/** SaaS product information. */
export type SaasUserProduct =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProduct'];
/** Manufacturer information of the SaaS product. */
export type SaasUserProductManufacturer =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturer'];
/** SKU code of the SaaS product provided by the manufacturer. */
export type SaasUserProductManufacturerSku =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserProductManufacturerSku'];
/** Selected Microsoft subscription details for this user SKU row. */
export type SaasUserSubscription =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserSubscription'];
/** Represents the active subscription or term duration of the SaaS asset. */
export type SaasUserTerm =
  components['schemas']['SpApi.CoreApi.Core.v1.SaasUsers.Model.SaasUserTerm'];
/** A physical or logical client site materialized from PSA location data. */
export type Site = components['schemas']['SpApi.CoreApi.Core.v1.Sites.Model.Site'];
/** Postal address for the client site. */
export type SiteAddress = components['schemas']['SpApi.CoreApi.Core.v1.Sites.Model.SiteAddress'];
/** Client organization that owns the site. */
export type SiteClient = components['schemas']['SpApi.CoreApi.Core.v1.Sites.Model.SiteClient'];
/** A service request or an issue raised by a client or an MSP, enriched with details about the requester, the client, issue summary, and other issue-related details. */
export type Ticket = components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.Ticket'];
/** Represents a workflow queue or service category of the ticket. */
export type TicketBoard = components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketBoard'];
/** Client organization associated with the ticket. */
export type TicketClient =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketClient'];
/** Contact who submitted the ticket or serves as the main point of communication at the client organization for the ticket. */
export type TicketContact =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketContact'];
/** Contract associated with the ticket. */
export type TicketContract =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketContract'];
/** Structured set of time-based metrics, measured in minutes, that represent how long it takes to progress through different stages of a ticket's lifecycle. These durations are adjusted to exclude account time-off, non-working days, and wait times to reflect true working time. */
export type TicketDuration =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketDuration'];
/** Member of an MSP who is accountable for the ticket. */
export type TicketOwnerMember =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketOwnerMember'];
/** Represents the urgency level assigned to a ticket, indicating how quickly it should be addressed. Includes both the current priority and a historical log of past priority changes with timestamps. */
export type TicketPriority =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriority'];
/** List of all previous priority states the ticket went through, including the time periods when each was active. Priority states shown here are based on the most recent 24-hour snapshot and may not reflect the real-time priority of the ticket. */
export type TicketPriorityHistory =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketPriorityHistory'];
/** Member of an MSP who resolved the ticket. For a lot of tickets, this will be the same as the owner member. */
export type TicketResponsibleMember =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketResponsibleMember'];
/** A set of boolean indicators showing whether milestones on the ticket were met according to the ticket's agreed Service Level Agreement (SLA), if one exists. */
export type TicketSla = components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketSla'];
/** ScalePad standardized status value, mapped from the source system's native ticket status, representing the state of the ticket in the service workflow, along with a historical log of all past status transitions. */
export type TicketStatus =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatus'];
/** List of status change events, showing when the ticket entered and exited each status. Statuses shown here are based on the most recent 24-hour snapshot and may not reflect the real-time status of the ticket. */
export type TicketStatusHistory =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketStatusHistory'];
/** A set of key timestamps that represent the lifecycle stages of a ticket. */
export type TicketTimeline =
  components['schemas']['SpApi.CoreApi.Core.v1.Tickets.Model.TicketTimeline'];
/** Details of a single processing failure in a 422 Unprocessable Content response */
export type UnprocessableContentErrorDetail =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.UnprocessableContentErrorDetail'];
/** Error response returned when the request is well-formed but cannot be processed for this account (HTTP 422) */
export type UnprocessableContentResponse =
  components['schemas']['SpApi.CoreApi.Core.Errors.Model.UnprocessableContentResponse'];
/** The list of integration vendors supported by ScalePad */
export type Vendors = components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Model.Vendors'];
/** An integration vendor supported by ScalePad, including its category and the data types it can sync */
export type VendorsVendor =
  components['schemas']['SpApi.CoreApi.Core.v1.Integrations.Model.Vendors_Vendor'];
