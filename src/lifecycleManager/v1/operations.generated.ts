// Generated from spec/lifecycle-manager-api.json by scripts/generate.mjs. Regenerate with `npm run generate`; do not edit.
import type { components, operations } from './schema.generated.js';
import type { HttpClient, BinaryResponse, MultipartBody } from '../../http/httpClient.js';
import type { FilterValue } from '../../types/filters.js';
import type { SortSpec } from '../../types/sorting.js';
import { paginateItems } from '../../types/pagination.js';

/**
 * Lifecycle Manager API v1
 *
 * Public API for managing Lifecycle Manager clients, assets, initiatives, goals, meetings, budgets, templates, and related roadmap workflows.
 */
export class LifecycleManagerV1 {
  /** Account branding, settings, and workspace configuration. */
  readonly account: Account;
  /** Account-team roles and client assignments. */
  readonly accountTeam: AccountTeam;
  /** Downloadable agreement reports and exports. */
  readonly agreementReports: AgreementReports;
  /** Reusable agreement templates used to standardize client agreements. */
  readonly agreementTemplates: AgreementTemplates;
  /** Client agreement records, recurring products and services, spend, assets, and renewal details. */
  readonly agreements: Agreements;
  /** Analytics dashboards, display settings, and embedded access. */
  readonly analytics: Analytics;
  /** Initiative and ticket relationships attached to assessment questions. */
  readonly assessmentLinks: AssessmentLinks;
  /** Assessment answers, criteria, comments, and question-level configuration. */
  readonly assessmentQuestions: AssessmentQuestions;
  /** Assessment reports and downloadable result views. */
  readonly assessmentReports: AssessmentReports;
  /** Reusable assessment templates used to evaluate client environments and standardize recommendations. */
  readonly assessmentTemplates: AssessmentTemplates;
  /** Client assessments, assessment answers, and assessment completion workflows. */
  readonly assessments: Assessments;
  readonly authorization: Authorization;
  /** Client budget forecasts, IT Debt, contracts, initiatives, and exportable budget views. */
  readonly budget: Budget;
  /** Calendar data used by Lifecycle Manager planning workflows. */
  readonly calendar: Calendar;
  /** Access groups that limit which clients account users can work with. */
  readonly clientAccessGroups: ClientAccessGroups;
  /** Client group records and client group membership assignments. */
  readonly clientGroups: ClientGroups;
  /** AI-assisted client business and industry summaries. */
  readonly clientIq: ClientIq;
  /** Downloadable client-list spreadsheets. */
  readonly clientReports: ClientReports;
  /** Client records and client-scoped Lifecycle Manager resources. */
  readonly clients: Clients;
  readonly comments: Comments;
  /** Downloadable contact spreadsheets and PDF reports. */
  readonly contactReports: ContactReports;
  /** Client contacts, key-contact and quoting-contact assignments, license assignments, and contact security posture. */
  readonly contacts: Contacts;
  /** Account, client, and segment configuration for Copilot. */
  readonly copilotSettings: CopilotSettings;
  /** Catalog components and integration options available when configuring deliverables and templates. */
  readonly deliverableCatalog: DeliverableCatalog;
  /** Sections and components that make up a deliverable. */
  readonly deliverableContent: DeliverableContent;
  /** Integration availability and configured integrations used by deliverables. */
  readonly deliverableIntegrations: DeliverableIntegrations;
  /** Deliverable presentations and downloadable reports. */
  readonly deliverableReports: DeliverableReports;
  /** Schedules, recipients, delivery runs, and delivery actions for deliverable templates. */
  readonly deliverableSchedules: DeliverableSchedules;
  /** General share links for secure external access to deliverables. */
  readonly deliverableSharing: DeliverableSharing;
  /** Reusable deliverable templates and their sections and components. */
  readonly deliverableTemplates: DeliverableTemplates;
  /** Client-facing deliverables and deliverables created from templates. */
  readonly deliverables: Deliverables;
  readonly entityHistory: EntityHistory;
  /** Initiatives, meetings, and action items attached to client goals. */
  readonly goalLinks: GoalLinks;
  /** Account-defined outcomes used to organize and measure client goals. */
  readonly goalOutcomes: GoalOutcomes;
  /** Reusable goal templates used to create consistent client goals. */
  readonly goalTemplates: GoalTemplates;
  /** Client goals and their related initiatives, meetings, and action items. */
  readonly goals: Goals;
  /** Hardware lifecycle, warranty, replacement, and linked planning data. */
  readonly hardwareAssets: HardwareAssets;
  /** Hardware custom fields and reporting configuration. */
  readonly hardwareConfiguration: HardwareConfiguration;
  /** Hardware exports and lifecycle-report availability and downloads. */
  readonly hardwareReports: HardwareReports;
  /** Account hardware types and client-specific replacement policies. */
  readonly hardwareTypes: HardwareTypes;
  /** Inbox notifications, product updates, read state, and notification settings. */
  readonly inbox: Inbox;
  /** Files uploaded to initiatives, including download and removal. */
  readonly initiativeAttachments: InitiativeAttachments;
  /** Account-wide initiative statuses, labels, and tags. */
  readonly initiativeConfiguration: InitiativeConfiguration;
  /** Tickets, opportunities, and quotes connected to client initiatives. */
  readonly initiativeIntegrations: InitiativeIntegrations;
  /** Goals, meetings, action items, assets, and assessment questions attached to initiatives. */
  readonly initiativeLinks: InitiativeLinks;
  /** Initiative ownership, priority, schedule, status, and investment details. */
  readonly initiativePlanning: InitiativePlanning;
  /** Downloadable initiative reports. */
  readonly initiativeReports: InitiativeReports;
  /** Reusable initiative templates used to create standardized initiatives. */
  readonly initiativeTemplates: InitiativeTemplates;
  /** Client initiatives and their related budgets, goals, meetings, assets, tickets, opportunities, and action items. */
  readonly initiatives: Initiatives;
  /** Lifecycle Manager insight summaries surfaced for client planning and prioritization. */
  readonly insights: Insights;
  /** Deprecated contract compatibility operations. New integrations should use Agreements. */
  readonly legacyContracts: LegacyContracts;
  /** Lifecycle Manager product-license availability and assignments. */
  readonly licenses: Licenses;
  /** Files attached to client meetings. */
  readonly meetingAttachments: MeetingAttachments;
  /** User and contact attendance for client meetings. */
  readonly meetingAttendees: MeetingAttendees;
  /** Ticket workflows connected to client meetings. */
  readonly meetingIntegrations: MeetingIntegrations;
  /** Initiatives, goals, action items, deliverables, and notes attached to meetings. */
  readonly meetingLinks: MeetingLinks;
  readonly meetingPolicies: MeetingPolicies;
  /** Calendar synchronization connections, settings, events, and commands. */
  readonly meetingSync: MeetingSync;
  readonly meetingTemplates: MeetingTemplates;
  /** Meeting type configuration used to classify Lifecycle Manager meetings. */
  readonly meetingTypes: MeetingTypes;
  /** Client meetings, attendees, completion status, and linked work items. */
  readonly meetings: Meetings;
  /** Engagement notes and note archive state for client records. */
  readonly notes: Notes;
  /** Sales opportunity lookup data related to Lifecycle Manager initiatives. */
  readonly opportunities: Opportunities;
  readonly permissions: Permissions;
  /** Account and client planning summaries, saved dashboard layouts, and exports. */
  readonly plan: Plan;
  /** Products available for agreement and contract workflows. */
  readonly products: Products;
  readonly quotes: Quotes;
  /** Rich text files and content used by Lifecycle Manager workflows. */
  readonly richText: RichText;
  /** Roadmap exports and roadmap presentation views for client planning. */
  readonly roadmap: Roadmap;
  readonly roadmapTemplates: RoadmapTemplates;
  readonly roles: Roles;
  /** SaaS portfolio and application asset data. */
  readonly saasAssets: SaasAssets;
  /** Read SaaS Management clients, users, devices, device information, and license utilization. */
  readonly saasManagement: SaasManagement;
  /** Default saved-view selections for Lifecycle Manager lists. */
  readonly savedViewDefaults: SavedViewDefaults;
  /** Reusable filter and display configurations for Lifecycle Manager lists. */
  readonly savedViews: SavedViews;
  readonly scheduledReports: ScheduledReports;
  /** Client segments used to group and prioritize client accounts. */
  readonly segments: Segments;
  /** Lifecycle Manager account and regional settings. */
  readonly settings: Settings;
  readonly sites: Sites;
  /** Installed software, product, device, and portfolio summary data. */
  readonly softwareAssets: SoftwareAssets;
  /** Downloadable software spreadsheets and lifecycle reports. */
  readonly softwareReports: SoftwareReports;
  /** Account-defined tags used to organize supported Lifecycle Manager resources. */
  readonly tags: Tags;
  /** PSA ticket workflows connected to Lifecycle Manager tasks. */
  readonly taskIntegrations: TaskIntegrations;
  readonly taskTemplates: TaskTemplates;
  /** Tasks tracked across Lifecycle Manager work such as initiatives, goals, meetings, and client follow-up. */
  readonly tasks: Tasks;
  /** Ticket lookup data related to Lifecycle Manager initiatives. */
  readonly tickets: Tickets;
  /** Account users, identity details, access administration, and saved user preference data. */
  readonly users: Users;
  /** Client industry verticals used for grouping and reporting. */
  readonly verticals: Verticals;
  /** Warranty lookup and warranty-related Lifecycle Manager data. */
  readonly warranty: Warranty;
  constructor(http: HttpClient) {
    this.account = new Account(http);
    this.accountTeam = new AccountTeam(http);
    this.agreementReports = new AgreementReports(http);
    this.agreementTemplates = new AgreementTemplates(http);
    this.agreements = new Agreements(http);
    this.analytics = new Analytics(http);
    this.assessmentLinks = new AssessmentLinks(http);
    this.assessmentQuestions = new AssessmentQuestions(http);
    this.assessmentReports = new AssessmentReports(http);
    this.assessmentTemplates = new AssessmentTemplates(http);
    this.assessments = new Assessments(http);
    this.authorization = new Authorization(http);
    this.budget = new Budget(http);
    this.calendar = new Calendar(http);
    this.clientAccessGroups = new ClientAccessGroups(http);
    this.clientGroups = new ClientGroups(http);
    this.clientIq = new ClientIq(http);
    this.clientReports = new ClientReports(http);
    this.clients = new Clients(http);
    this.comments = new Comments(http);
    this.contactReports = new ContactReports(http);
    this.contacts = new Contacts(http);
    this.copilotSettings = new CopilotSettings(http);
    this.deliverableCatalog = new DeliverableCatalog(http);
    this.deliverableContent = new DeliverableContent(http);
    this.deliverableIntegrations = new DeliverableIntegrations(http);
    this.deliverableReports = new DeliverableReports(http);
    this.deliverableSchedules = new DeliverableSchedules(http);
    this.deliverableSharing = new DeliverableSharing(http);
    this.deliverableTemplates = new DeliverableTemplates(http);
    this.deliverables = new Deliverables(http);
    this.entityHistory = new EntityHistory(http);
    this.goalLinks = new GoalLinks(http);
    this.goalOutcomes = new GoalOutcomes(http);
    this.goalTemplates = new GoalTemplates(http);
    this.goals = new Goals(http);
    this.hardwareAssets = new HardwareAssets(http);
    this.hardwareConfiguration = new HardwareConfiguration(http);
    this.hardwareReports = new HardwareReports(http);
    this.hardwareTypes = new HardwareTypes(http);
    this.inbox = new Inbox(http);
    this.initiativeAttachments = new InitiativeAttachments(http);
    this.initiativeConfiguration = new InitiativeConfiguration(http);
    this.initiativeIntegrations = new InitiativeIntegrations(http);
    this.initiativeLinks = new InitiativeLinks(http);
    this.initiativePlanning = new InitiativePlanning(http);
    this.initiativeReports = new InitiativeReports(http);
    this.initiativeTemplates = new InitiativeTemplates(http);
    this.initiatives = new Initiatives(http);
    this.insights = new Insights(http);
    this.legacyContracts = new LegacyContracts(http);
    this.licenses = new Licenses(http);
    this.meetingAttachments = new MeetingAttachments(http);
    this.meetingAttendees = new MeetingAttendees(http);
    this.meetingIntegrations = new MeetingIntegrations(http);
    this.meetingLinks = new MeetingLinks(http);
    this.meetingPolicies = new MeetingPolicies(http);
    this.meetingSync = new MeetingSync(http);
    this.meetingTemplates = new MeetingTemplates(http);
    this.meetingTypes = new MeetingTypes(http);
    this.meetings = new Meetings(http);
    this.notes = new Notes(http);
    this.opportunities = new Opportunities(http);
    this.permissions = new Permissions(http);
    this.plan = new Plan(http);
    this.products = new Products(http);
    this.quotes = new Quotes(http);
    this.richText = new RichText(http);
    this.roadmap = new Roadmap(http);
    this.roadmapTemplates = new RoadmapTemplates(http);
    this.roles = new Roles(http);
    this.saasAssets = new SaasAssets(http);
    this.saasManagement = new SaasManagement(http);
    this.savedViewDefaults = new SavedViewDefaults(http);
    this.savedViews = new SavedViews(http);
    this.scheduledReports = new ScheduledReports(http);
    this.segments = new Segments(http);
    this.settings = new Settings(http);
    this.sites = new Sites(http);
    this.softwareAssets = new SoftwareAssets(http);
    this.softwareReports = new SoftwareReports(http);
    this.tags = new Tags(http);
    this.taskIntegrations = new TaskIntegrations(http);
    this.taskTemplates = new TaskTemplates(http);
    this.tasks = new Tasks(http);
    this.tickets = new Tickets(http);
    this.users = new Users(http);
    this.verticals = new Verticals(http);
    this.warranty = new Warranty(http);
  }
}

/**
 * Account
 *
 * Account branding, settings, and workspace configuration.
 */
export class Account {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Account Logo
   *
   * Get the account logo used for account branding.
   *
   * `GET /lifecycle-manager/v1/account/logo`
   */
  getLogo(): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/account/logo`,
      responseType: 'binary',
    });
  }

  /**
   * Upload Account Logo
   *
   * Upload the account logo used for account branding.
   *
   * `POST /lifecycle-manager/v1/account/logo`
   */
  uploadLogo(body: {
    /** Workspace logo image to upload. Supported file types: PNG, JPG, JPEG, and SVG. File size must be between 100 bytes and 5 MB. */
    file: Blob;
  }): Promise<
    operations['ApiPublicV1AccountLogoUpload']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountLogoUpload']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/account/logo`,
      multipart: body as MultipartBody,
      responseType: 'json',
    });
  }

  /**
   * Delete Account Logo
   *
   * Delete the account logo used for account branding.
   *
   * `DELETE /lifecycle-manager/v1/account/logo`
   */
  deleteLogo(): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/account/logo`,
      responseType: 'void',
    });
  }

  /**
   * Get Account Settings
   *
   * Get the account-wide general settings (identity, account type, region and format).
   *
   * `GET /lifecycle-manager/v1/account/settings`
   */
  getSettings(): Promise<
    operations['ApiPublicV1AccountSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountSettingsGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/account/settings`, responseType: 'json' });
  }

  /**
   * Update Account Settings
   *
   * Apply a partial update to the account-wide general settings. Fields omitted from the request body are left unchanged.
   *
   * `PATCH /lifecycle-manager/v1/account/settings`
   */
  updateSettings(
    body: NonNullable<
      operations['ApiPublicV1AccountSettingsPatch']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/account/settings`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Account Team
 *
 * Account-team roles and client assignments.
 */
export class AccountTeam {
  constructor(private readonly http: HttpClient) {}

  /**
   * Update Primary Team Role
   *
   * Set whether an account team role is primary for all clients in the account
   *
   * `POST /lifecycle-manager/v1/account-team/member/role/primary/update`
   */
  updatePrimaryRole(
    body: NonNullable<
      operations['ApiV1AccountTeamMemberRolePrimaryUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/account-team/member/role/primary/update`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Account Team Members
   *
   * List the account team members for the authenticated partner account, used to resolve client team member ids to users.
   *
   * `GET /lifecycle-manager/v1/account-team/members`
   */
  listMembers(): Promise<
    operations['ApiPublicV1AccountTeamMembersList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountTeamMembersList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/account-team/members`, responseType: 'json' });
  }

  /**
   * List Account Team Member Roles
   *
   * List the account-team member roles available to assign to a client team member, such as Account Manager or vCIO.
   *
   * `GET /lifecycle-manager/v1/account-team/roles`
   */
  listMemberRoles(): Promise<
    operations['ApiPublicV1AccountTeamMemberRolesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountTeamMemberRolesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/account-team/roles`, responseType: 'json' });
  }

  /**
   * Assign Client Team Members
   *
   * Assign account team members (with optional roles) to one or more clients. Idempotent: re-assigning updates roles without affecting other members.
   *
   * `PUT /lifecycle-manager/v1/clients/account-team`
   */
  assignClientMembers(
    body: NonNullable<
      operations['ApiPublicV1ClientTeamMemberAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/account-team`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unassign Client Team Members
   *
   * Unassign account team members from one or more clients. Idempotent: unassigning a user who is not assigned succeeds without changes.
   *
   * `PUT /lifecycle-manager/v1/clients/account-team/unassign`
   */
  unassignClientMembers(
    body: NonNullable<
      operations['ApiPublicV1ClientTeamMemberRemove']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/account-team/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Agreement Reports
 *
 * Downloadable agreement reports and exports.
 */
export class AgreementReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Export Agreements Csv
   *
   * Download the current agreements list as a CSV file.
   *
   * `POST /lifecycle-manager/v1/agreements/export/csv`
   */
  exportCsv(
    body: NonNullable<
      operations['ApiPublicV1AgreementsExportCsv']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/export/csv`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Export Agreements Export Pdf
   *
   * Download the current agreements list as a PDF document.
   *
   * `POST /lifecycle-manager/v1/agreements/export/pdf`
   */
  exportPdf(
    body: NonNullable<
      operations['ApiPublicV1AgreementsExportPdf']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/export/pdf`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Export Agreements Xlsx
   *
   * Download the current agreements list as an XLSX spreadsheet.
   *
   * `POST /lifecycle-manager/v1/agreements/export/xlsx`
   */
  exportXlsx(
    body: NonNullable<
      operations['ApiPublicV1AgreementsExportXlsx']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/export/xlsx`,
      body,
      responseType: 'binary',
    });
  }
}

/**
 * Agreement Templates
 *
 * Reusable agreement templates used to standardize client agreements.
 */
export class AgreementTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Agreement Templates
   *
   * Retrieve the agreement templates available to the authenticated account.
   *
   * `GET /lifecycle-manager/v1/agreement-templates`
   */
  list(): Promise<
    operations['ApiPublicV1AgreementTemplatesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementTemplatesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/agreement-templates`, responseType: 'json' });
  }

  /**
   * Create Agreement Template
   *
   * Create an agreement template from submitted agreement template details.
   *
   * `POST /lifecycle-manager/v1/agreement-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1AgreementTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AgreementTemplateCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementTemplateCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreement-templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Agreement Template
   *
   * Retrieve full details of a specific agreement template.
   *
   * `GET /lifecycle-manager/v1/agreement-templates/{agreement_template_id}`
   */
  get(
    agreementTemplateId: string
  ): Promise<
    operations['ApiPublicV1AgreementTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/agreement-templates/${encodeURIComponent(agreementTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Agreement Template
   *
   * Modify an existing account-owned agreement template.
   *
   * `PUT /lifecycle-manager/v1/agreement-templates/{agreement_template_id}`
   */
  update(
    agreementTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/agreement-templates/${encodeURIComponent(agreementTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Agreement Template
   *
   * Delete an account-owned agreement template that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/agreement-templates/{agreement_template_id}`
   */
  delete(agreementTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/agreement-templates/${encodeURIComponent(agreementTemplateId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Agreements
 *
 * Client agreement records, recurring products and services, spend, assets, and renewal details.
 */
export class Agreements {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Agreements
   *
   * Retrieve a comprehensive list of all agreements overview with filtering options.
   *
   * `GET /lifecycle-manager/v1/agreements`
   */
  list(
    query?: AgreementsListQuery
  ): Promise<
    operations['ApiPublicV1AgreementsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/agreements`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<AgreementsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AgreementsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Agreement
   *
   * Create a new agreement.
   *
   * `POST /lifecycle-manager/v1/agreements`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1AgreementsCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AgreementsCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementsCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/agreements`, body, responseType: 'json' });
  }

  /**
   * Bulk Delete Agreements
   *
   * Permanently remove one or more agreements that are no longer relevant to business operations.
   *
   * `POST /lifecycle-manager/v1/agreements/delete`
   */
  bulkDelete(
    body: NonNullable<
      operations['ApiPublicV1AgreementsBulkDelete']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/delete`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Agreement Items
   *
   * List Lifecycle Manager agreement items with source pricing and product linkage fields.
   *
   * `GET /lifecycle-manager/v1/agreement-items`
   */
  listItems(
    query?: AgreementsListItemsQuery
  ): Promise<
    operations['ApiPublicV1AgreementItemsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementItemsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/agreement-items`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listItems()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listItemsAll(
    query?: Omit<AgreementsListItemsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AgreementItemsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listItems({ ...query, cursor }));
  }

  /**
   * Get Agreement Summary
   *
   * Retrieve account- or client-scoped agreement recurring spend, expiring-soon count, and expired count.
   *
   * `GET /lifecycle-manager/v1/agreements/summary`
   */
  getSummary(
    query?: AgreementsGetSummaryQuery
  ): Promise<
    operations['ApiPublicV1AgreementSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/agreements/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Agreement
   *
   * Access complete header details of a specific agreement.
   *
   * `GET /lifecycle-manager/v1/agreements/{agreement_id}`
   */
  get(
    agreementId: string
  ): Promise<
    operations['ApiPublicV1AgreementsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Agreement
   *
   * Update an agreement with full details.
   *
   * `PUT /lifecycle-manager/v1/agreements/{agreement_id}`
   */
  update(
    agreementId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Agreement
   *
   * Permanently remove an agreement that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/agreements/{agreement_id}`
   */
  delete(agreementId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}`,
      responseType: 'void',
    });
  }

  /**
   * Agreement Asset Attach
   *
   * Attach one or more hardware assets to an agreement by hardware identifier.
   *
   * `PUT /lifecycle-manager/v1/agreements/{agreement_id}/assets`
   */
  attachAssets(
    agreementId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementAssetAttach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/assets`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Agreement Asset Bulk
   *
   * Detach one or more hardware assets from an agreement without deleting either entity.
   *
   * `POST /lifecycle-manager/v1/agreements/{agreement_id}/assets/delete`
   */
  detachAssets(
    agreementId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementAssetBulkDelete']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/assets/delete`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Agreement Hidden Status
   *
   * Update whether a Lifecycle Manager agreement is hidden from standard agreement views.
   *
   * `PUT /lifecycle-manager/v1/agreements/{agreement_id}/hidden-status`
   */
  updateHiddenStatus(
    agreementId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementHiddenStatusUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/hidden-status`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Create Agreement Item
   *
   * Create a manual agreement item beneath an existing manual agreement.
   *
   * `POST /lifecycle-manager/v1/agreements/{agreement_id}/items`
   */
  createItem(
    agreementId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementItemCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AgreementItemCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementItemCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/items`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update Agreement Item
   *
   * Update a manual agreement item beneath an existing manual agreement.
   *
   * `PUT /lifecycle-manager/v1/agreements/{agreement_id}/items/{agreement_item_id}`
   */
  updateItem(
    agreementId: string,
    agreementItemId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementItemUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/items/${encodeURIComponent(agreementItemId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Agreement Item
   *
   * Delete a manual agreement item from an existing manual agreement.
   *
   * `DELETE /lifecycle-manager/v1/agreements/{agreement_id}/items/{agreement_item_id}`
   */
  deleteItem(agreementId: string, agreementItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/items/${encodeURIComponent(agreementItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * Agreement Overrides Clear All
   *
   * Revert all overridden agreement fields to their PSA-synced values.
   *
   * `DELETE /lifecycle-manager/v1/agreements/{agreement_id}/overrides`
   */
  clearOverrides(agreementId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/overrides`,
      responseType: 'void',
    });
  }

  /**
   * Agreement Override Clear
   *
   * Revert one agreement override to its PSA-synced value.
   *
   * `DELETE /lifecycle-manager/v1/agreements/{agreement_id}/overrides/{field_name}`
   */
  clearOverride(agreementId: string, fieldName: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/agreements/${encodeURIComponent(agreementId)}/overrides/${encodeURIComponent(fieldName)}`,
      responseType: 'void',
    });
  }

  /**
   * Create Agreement Import Draft
   *
   * Create review-only agreement drafts from an uploaded agreement source using configured AI processing.
   *
   * `POST /lifecycle-manager/v1/clients/{client_id}/agreements/import-draft`
   */
  createImportDraft(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1AgreementDocumentImportDraftCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AgreementDocumentImportDraftCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AgreementDocumentImportDraftCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/agreements/import-draft`,
      body,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Agreements.list()`. */
export interface AgreementsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
    /**
     * Operators: eq, in.
     * Available values: true, false, True, False.
     */
    is_hidden?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Active, Inactive.
     */
    status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Actual, Estimate.
     */
    cost_type?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Monthly, Quarterly, Annually, SemiAnnual, EveryTwoYears, EveryThreeYears, EveryFourYears, EveryFiveYears, EveryTenYears, OneTime, BiMonthly, Unknown, BiWeekly.
     */
    billing_cycle?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    location?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /**
     * Operators: eq.
     * Available values: Yes, No, Either.
     */
    auto_renew?: FilterValue<'eq'>;
    /**
     * Operators: eq, in.
     * Available values: Expired, ZeroToThirty, ThirtyOneToSixty, SixtyOneToNinety, NinetyPlus.
     */
    expiry?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: true, false, True, False.
     */
    is_expired?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: billing_next_due_at, end_at, name, client.name, billing_cost_subunits, status, billing_cycle, is_auto_renew */
  sort?: readonly SortSpec<
    | 'billing_next_due_at'
    | 'end_at'
    | 'name'
    | 'client.name'
    | 'billing_cost_subunits'
    | 'status'
    | 'billing_cycle'
    | 'is_auto_renew'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Agreements.listItems()`. */
export interface AgreementsListItemsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'agreement.id'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'product.id'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    price_type?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_billable?: FilterValue<'eq'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Agreements.getSummary()`. */
export interface AgreementsGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
  };
}

/**
 * Analytics
 *
 * Analytics dashboards, display settings, and embedded access.
 */
export class Analytics {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Analytics Configuration
   *
   * Get account-level Analytics configuration.
   *
   * `GET /lifecycle-manager/v1/analytics/display-settings`
   */
  getDisplaySettings(): Promise<
    operations['ApiPublicV1AnalyticsDisplaySettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AnalyticsDisplaySettingsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/analytics/display-settings`,
      responseType: 'json',
    });
  }

  /**
   * Save Analytics Configuration
   *
   * Save account-level Analytics configuration.
   *
   * `PUT /lifecycle-manager/v1/analytics/display-settings`
   */
  updateDisplaySettings(
    body: NonNullable<
      operations['ApiPublicV1AnalyticsDisplaySettingsPut']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AnalyticsDisplaySettingsPut']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AnalyticsDisplaySettingsPut']['responses'][200]['content']['application/json']
    >({
      method: 'PUT',
      path: `/lifecycle-manager/v1/analytics/display-settings`,
      body,
      responseType: 'json',
    });
  }
}

/**
 * Assessment Links
 *
 * Initiative and ticket relationships attached to assessment questions.
 */
export class AssessmentLinks {
  constructor(private readonly http: HttpClient) {}

  /**
   * Link Assessment Items to an Initiative
   *
   * Link one or more of an assessment's items to an existing initiative.
   *
   * `POST /lifecycle-manager/v1/assessments/{assessment_id}/questions/initiative-link`
   */
  linkItemsToInitiative(
    assessmentId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentEvaluationQuestionsInitiativeLink']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/initiative-link`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Link Initiative to Assessment Evaluation Question
   *
   * Link an initiative to an assessment evaluation question. Provide an existing initiative id, or a create payload to spin up a new initiative and link it in one call.
   *
   * `POST /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/initiative`
   */
  linkInitiativeToQuestion(
    assessmentId: string,
    assessmentEvaluationQuestionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentEvaluationQuestionInitiativeLink']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/initiative`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unlink Initiative from Assessment Evaluation Question
   *
   * Unlink an initiative from an assessment evaluation question.
   *
   * `DELETE /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/initiative`
   */
  unlinkInitiativeFromQuestion(
    assessmentId: string,
    assessmentEvaluationQuestionId: string,
    query?: AssessmentLinksUnlinkInitiativeFromQuestionQuery
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/initiative`,
      query,
      responseType: 'void',
    });
  }

  /**
   * Create and Link a Ticket to an Assessment Evaluation Question
   *
   * Create a PSA ticket and link it to an assessment evaluation question. The ticket is queued for creation in the external PSA; this endpoint returns 202 Accepted with a Pending state. Poll the assessment until the linked ticket's state transitions to Created or Error.
   *
   * `POST /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/ticket`
   */
  createAndLinkTicketToQuestion(
    assessmentId: string,
    assessmentEvaluationQuestionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentEvaluationQuestionTicketCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssessmentEvaluationQuestionTicketCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentEvaluationQuestionTicketCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/ticket`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Unlink Ticket from Assessment Evaluation Question
   *
   * Unlink the PSA ticket from an assessment evaluation question.
   *
   * `DELETE /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/ticket`
   */
  unlinkTicketFromQuestion(
    assessmentId: string,
    assessmentEvaluationQuestionId: string
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/ticket`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `AssessmentLinks.unlinkInitiativeFromQuestion()`. */
export interface AssessmentLinksUnlinkInitiativeFromQuestionQuery {
  /** The initiative to unlink. When omitted, every initiative link is removed for compatibility with the original endpoint contract. */
  initiative_id?: string;
}

/**
 * Assessment Questions
 *
 * Assessment answers, criteria, comments, and question-level configuration.
 */
export class AssessmentQuestions {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Assessment Criterion Label Types
   *
   * Retrieve the available criterion label types (question response types) and their selectable response options.
   *
   * `GET /lifecycle-manager/v1/assessments/criteria/labels`
   */
  listCriterionLabelTypes(): Promise<
    operations['ApiPublicV1AssessmentCriterionLabelTypeList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentCriterionLabelTypeList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/criteria/labels`,
      responseType: 'json',
    });
  }

  /**
   * Clear Assessment Evaluation Question Answer
   *
   * Clear the selected answer from an assessment evaluation question.
   *
   * `DELETE /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/answer`
   */
  clearEvaluationAnswer(
    assessmentId: string,
    assessmentEvaluationQuestionId: string
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/answer`,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Item Internal Comment
   *
   * Update the internal comment on an assessment question.
   *
   * `PUT /lifecycle-manager/v1/assessments/{assessment_id}/questions/{question_id}/comment/internal`
   */
  updateItemInternalComment(
    assessmentId: string,
    questionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsQuestionCommentInternalUpsert']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(questionId)}/comment/internal`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Item Public Comment
   *
   * Update the public comment on an assessment question.
   *
   * `PUT /lifecycle-manager/v1/assessments/{assessment_id}/questions/{question_id}/comment/public`
   */
  updateItemPublicComment(
    assessmentId: string,
    questionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsQuestionCommentPublicUpsert']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(questionId)}/comment/public`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Add Additional Answer
   *
   * Add a custom answer (additional answer) to an assessment question.
   *
   * `POST /lifecycle-manager/v1/assessments/{assessment_id}/questions/{question_id}/criteria`
   */
  addAdditionalAnswer(
    assessmentId: string,
    questionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsQuestionCriterionCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssessmentsQuestionCriterionCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentsQuestionCriterionCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(questionId)}/criteria`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Assessment Question Custom Answer
   *
   * Delete an assessment-only custom answer from an assessment question.
   *
   * `DELETE /lifecycle-manager/v1/assessments/{assessment_id}/questions/{question_id}/criteria/{assessment_criterion_id}`
   */
  deleteCustomAnswer(
    assessmentId: string,
    questionId: string,
    assessmentCriterionId: string
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(questionId)}/criteria/${encodeURIComponent(assessmentCriterionId)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Evaluation Question Tags
   *
   * Replace the set of tags applied to an assessment evaluation question.
   *
   * `PUT /lifecycle-manager/v1/assessments/{assessment_id}/questions/{assessment_evaluation_question_id}/tags`
   */
  updateEvaluationTags(
    assessmentId: string,
    assessmentEvaluationQuestionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentEvaluationQuestionTagUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/questions/${encodeURIComponent(assessmentEvaluationQuestionId)}/tags`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Assessment Reports
 *
 * Assessment reports and downloadable result views.
 */
export class AssessmentReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Assessment Comparison Report
   *
   * Download a comparison report between two assessments as a PDF document.
   *
   * `GET /lifecycle-manager/v1/assessments/{assessment_id}/reports/comparison`
   */
  getComparison(
    assessmentId: string,
    query: AssessmentReportsGetComparisonQuery
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/reports/comparison`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Assessment Full Report
   *
   * Download the full assessment report as a PDF document.
   *
   * `GET /lifecycle-manager/v1/assessments/{assessment_id}/reports/full`
   */
  getFull(assessmentId: string, query?: AssessmentReportsGetFullQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/reports/full`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Assessment Item Detail Report
   *
   * Download the assessment item detail report as a PDF document.
   *
   * `GET /lifecycle-manager/v1/assessments/{assessment_id}/reports/item-detail`
   */
  getItemDetail(
    assessmentId: string,
    query?: AssessmentReportsGetItemDetailQuery
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/reports/item-detail`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Assessment Summary Report
   *
   * Download the assessment summary report as a PDF document.
   *
   * `GET /lifecycle-manager/v1/assessments/{assessment_id}/reports/summary`
   */
  getSummary(assessmentId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/reports/summary`,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `AssessmentReports.getComparison()`. */
export interface AssessmentReportsGetComparisonQuery {
  /** The unique identifier of the assessment to compare against. Must use the same template and belong to the same client. */
  compare_to_assessment_id: string;
}

/** Query parameters for `AssessmentReports.getFull()`. */
export interface AssessmentReportsGetFullQuery {
  /** Whether to include public comments in the generated report. Defaults to false. */
  include_public_comments?: boolean;
}

/** Query parameters for `AssessmentReports.getItemDetail()`. */
export interface AssessmentReportsGetItemDetailQuery {
  /** The score buckets to include in the report. Must contain at least one valid bucket. */
  included_scores?: readonly string[];
  /** Whether to include linked initiatives for each item. Defaults to false. */
  include_initiatives?: boolean;
  /** Whether to include public comments in the comments column. Defaults to false. */
  include_public_comments?: boolean;
  /** Whether to include internal/private comments in the comments column. Defaults to false. */
  include_private_comments?: boolean;
  /** Whether to include tags for each item. Defaults to false. */
  display_tags?: boolean;
}

/**
 * Assessment Templates
 *
 * Reusable assessment templates used to evaluate client environments and standardize recommendations.
 */
export class AssessmentTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Assessment Templates
   *
   * Retrieve assessment template overviews visible under the account setting.
   *
   * `GET /lifecycle-manager/v1/assessment-templates`
   */
  list(
    query?: AssessmentTemplatesListQuery
  ): Promise<
    operations['ApiPublicV1AssessmentTemplatesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentTemplatesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessment-templates`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Create Assessment Template
   *
   * Create a new assessment template with custom categories, questions, and criteria.
   *
   * `POST /lifecycle-manager/v1/assessment-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1AssessmentTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssessmentTemplateCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentTemplateCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessment-templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Assessment Template
   *
   * Retrieve comprehensive details of a specific assessment template including all categories, questions, and criteria.
   *
   * `GET /lifecycle-manager/v1/assessment-templates/{assessment_template_id}`
   */
  get(
    assessmentTemplateId: string
  ): Promise<
    operations['ApiPublicV1AssessmentTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessment-templates/${encodeURIComponent(assessmentTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Assessment Template
   *
   * Modify an existing assessment template including its structure, categories, questions, and criteria.
   *
   * `PUT /lifecycle-manager/v1/assessment-templates/{assessment_template_id}`
   */
  update(
    assessmentTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessment-templates/${encodeURIComponent(assessmentTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Assessment Template
   *
   * Archive an assessment template so it no longer appears in the active list. Archiving is reversible: the template can be returned to the active list with the restore endpoint.
   *
   * `DELETE /lifecycle-manager/v1/assessment-templates/{assessment_template_id}`
   */
  delete(assessmentTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessment-templates/${encodeURIComponent(assessmentTemplateId)}`,
      responseType: 'void',
    });
  }

  /**
   * List assessment template question responses
   *
   * List a client's concrete assessment responses to one assessment template question, oldest first.
   *
   * `GET /lifecycle-manager/v1/assessment-templates/{assessment_template_id}/questions/{assessment_template_question_id}/responses`
   */
  listQuestionResponses(
    assessmentTemplateId: string,
    assessmentTemplateQuestionId: string,
    query?: AssessmentTemplatesListQuestionResponsesQuery
  ): Promise<
    operations['ApiPublicV1AssessmentTemplateQuestionResponseList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentTemplateQuestionResponseList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessment-templates/${encodeURIComponent(assessmentTemplateId)}/questions/${encodeURIComponent(assessmentTemplateQuestionId)}/responses`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listQuestionResponses()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listQuestionResponsesAll(
    assessmentTemplateId: string,
    assessmentTemplateQuestionId: string,
    query?: Omit<AssessmentTemplatesListQuestionResponsesQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssessmentTemplateQuestionResponseList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) =>
      this.listQuestionResponses(assessmentTemplateId, assessmentTemplateQuestionId, {
        ...query,
        cursor,
      })
    );
  }

  /**
   * Restore Assessment Template
   *
   * Restore an archived assessment template so it appears in the active list again.
   *
   * `POST /lifecycle-manager/v1/assessment-templates/{assessment_template_id}/restore`
   */
  restore(assessmentTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessment-templates/${encodeURIComponent(assessmentTemplateId)}/restore`,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Template Question Tags
   *
   * Replace the set of tags applied to an assessment template question.
   *
   * `PUT /lifecycle-manager/v1/assessments/templates/questions/{assessment_template_question_id}/tags`
   */
  updateQuestionTags(
    assessmentTemplateQuestionId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentTemplateQuestionTagUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/templates/questions/${encodeURIComponent(assessmentTemplateQuestionId)}/tags`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `AssessmentTemplates.list()`. */
export interface AssessmentTemplatesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    is_archived?: FilterValue<'eq'>;
  };
  /** By default, follows the account setting. Use all to include hidden ScalePad assessment templates. */
  visibility?: string;
}

/** Query parameters for `AssessmentTemplates.listQuestionResponses()`. */
export interface AssessmentTemplatesListQuestionResponsesQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
    /**
     * Operators: eq.
     * Available values: standalone, client-wide, site.
     */
    scope?: FilterValue<'eq'>;
    /** Operators: eq. */
    'site.id'?: FilterValue<'eq'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Assessments
 *
 * Client assessments, assessment answers, and assessment completion workflows.
 */
export class Assessments {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Assessments
   *
   * Retrieve a comprehensive list of all assessments overview with filtering options.
   *
   * `GET /lifecycle-manager/v1/assessments`
   */
  list(
    query?: AssessmentsListQuery
  ): Promise<
    operations['ApiPublicV1AssessmentsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/assessments`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<AssessmentsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssessmentsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Assessment
   *
   * Create a new assessment based on a assessment template.
   *
   * `POST /lifecycle-manager/v1/assessments`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1AssessmentsCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssessmentsCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentsCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/assessments`, body, responseType: 'json' });
  }

  /**
   * Get Assessment
   *
   * Access complete details of a specific assessment including its evaluation.
   *
   * `GET /lifecycle-manager/v1/assessments/{id}`
   */
  get(
    id: string
  ): Promise<
    operations['ApiPublicV1AssessmentsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Assessment
   *
   * Update assessment details including title, evaluate user and datetime.
   *
   * `PUT /lifecycle-manager/v1/assessments/{id}`
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Assessment
   *
   * Permanently remove an assessment that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/assessments/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Completion Status
   *
   * Toggle an assessment's complete status.
   *
   * `PUT /lifecycle-manager/v1/assessments/{id}/completion-status`
   */
  updateCompletionStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsCompletionStatusUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}/completion-status`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Duplicate Assessment
   *
   * Duplicate an existing assessment into a new run for the same client.
   *
   * `POST /lifecycle-manager/v1/assessments/{assessment_id}/duplicate`
   */
  duplicate(
    assessmentId: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsDuplicate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssessmentsDuplicate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentsDuplicate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(assessmentId)}/duplicate`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Evaluate Assessment
   *
   * Evaluate an assessment by selecting criteria for multiple questions.
   *
   * `PUT /lifecycle-manager/v1/assessments/{id}/evaluate`
   */
  evaluate(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsEvaluate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}/evaluate`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Assessment Internal Comment
   *
   * Leave an internal comment for an existing assessment. This note is private and is only visible to the MSP.
   *
   * `PUT /lifecycle-manager/v1/assessments/{id}/internal-comment`
   */
  updateInternalComment(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssessmentsInternalCommentUpsert']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assessments/${encodeURIComponent(id)}/internal-comment`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Assessment Client Access
   *
   * Gets the assessment access level and included-usage detail for a client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/assessments/access`
   */
  getClientAccess(
    clientId: string
  ): Promise<
    operations['ApiPublicV1AssessmentClientAccessGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssessmentClientAccessGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/assessments/access`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Assessments.list()`. */
export interface AssessmentsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    title?: FilterValue<'cont' | 'eq'>;
    /**
     * Operators: eq, in.
     * Available values: Completed, InProgress.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    assessment_template_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    evaluate_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gte. */
    score_min?: FilterValue<'eq' | 'gte'>;
    /** Operators: eq, lte. */
    score_max?: FilterValue<'eq' | 'lte'>;
    /** Operators: eq, gte. */
    evaluated_at_from?: FilterValue<'eq' | 'gte'>;
    /** Operators: eq, lt, lte. */
    evaluated_at_to?: FilterValue<'eq' | 'lt' | 'lte'>;
    /** Operators: eq, lt, lte. */
    evaluated_at_before?: FilterValue<'eq' | 'lt' | 'lte'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Free-text search matched against the assessment title and description. */
  search?: string;
  /** Whether to include child assessments for multi-site parent assessments */
  include_children?: boolean;
  /** Whether to include current Core site data. Defaults to true for compatibility. */
  include_sites?: boolean;
  /** Whether to include category scores for each assessment */
  include_category_scores?: boolean;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: client.name, evaluated_at, score, title */
  sort?: readonly SortSpec<'client.name' | 'evaluated_at' | 'score' | 'title'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Authorization */
export class Authorization {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Account Authorization
   *
   * Get the current user's account authorization.
   *
   * `GET /lifecycle-manager/v1/authorization`
   */
  getAccount(): Promise<
    operations['ApiPublicV1AccountAuthorizationGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountAuthorizationGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/authorization`, responseType: 'json' });
  }

  /**
   * Filter Authorized Clients
   *
   * Filter candidate clients by resource availability and current user visibility.
   *
   * `POST /lifecycle-manager/v1/authorization/clients/filter`
   */
  filterClients(
    body: NonNullable<
      operations['ApiPublicV1AuthorizationClientsFilter']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AuthorizationClientsFilter']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AuthorizationClientsFilter']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/authorization/clients/filter`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Client Authorization
   *
   * Get the current user's authorization for a client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/authorization`
   */
  getClient(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientAuthorizationGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientAuthorizationGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/authorization`,
      responseType: 'json',
    });
  }
}

/**
 * Budget
 *
 * Client budget forecasts, IT Debt, contracts, initiatives, and exportable budget views.
 */
export class Budget {
  constructor(private readonly http: HttpClient) {}

  /**
   * Account Budget Summary Get
   *
   * Retrieve account-scoped aggregate budget totals across every accessible, Budget Forecast-enabled client.
   *
   * `GET /lifecycle-manager/v1/budget/summary`
   */
  getAccountSummary(
    query?: BudgetGetAccountSummaryQuery
  ): Promise<
    operations['ApiPublicV1AccountBudgetSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountBudgetSummaryGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/budget/summary`, query, responseType: 'json' });
  }

  /**
   * Get Budget Availabilities
   *
   * Retrieve the option lists used to construct Budget API queries for a single client.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/availabilities`
   */
  getAvailabilities(
    clientId: string
  ): Promise<
    operations['ApiPublicV1BudgetAvailabilitiesGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1BudgetAvailabilitiesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/availabilities`,
      responseType: 'json',
    });
  }

  /**
   * List Budget Contracts
   *
   * List a client's contracts with per-period forecast amounts, sorted and paginated.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/contracts`
   */
  listContracts(
    clientId: string,
    query?: BudgetListContractsQuery
  ): Promise<
    operations['ApiPublicV1BudgetContractsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1BudgetContractsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/contracts`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Budget Forecast CSV
   *
   * Generate a CSV export for a client's budget forecast.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/forecast/csv`
   */
  forecastCsv(clientId: string, query?: BudgetForecastCsvQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/forecast/csv`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Budget Forecast Detail PDF
   *
   * Generate a detailed PDF for a client's budget forecast.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/forecast/detail/pdf`
   */
  forecastDetailPdf(
    clientId: string,
    query?: BudgetForecastDetailPdfQuery
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/forecast/detail/pdf`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Budget Forecast PDF
   *
   * Generate a PDF for a client's budget forecast (overview).
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/forecast/pdf`
   */
  forecastPdf(clientId: string, query?: BudgetForecastPdfQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/forecast/pdf`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * List Budget Initiatives
   *
   * List a client's initiatives with per-period forecast amounts, sorted and paginated.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/initiatives`
   */
  listInitiatives(
    clientId: string,
    query?: BudgetListInitiativesQuery
  ): Promise<
    operations['ApiPublicV1BudgetInitiativesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1BudgetInitiativesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/initiatives`,
      query,
      responseType: 'json',
    });
  }

  /**
   * List Budget IT Debt
   *
   * List a client's IT Debt assets with per-period forecast amounts, sorted and paginated.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/it-debt`
   */
  listItDebt(
    clientId: string,
    query?: BudgetListItDebtQuery
  ): Promise<
    operations['ApiPublicV1BudgetItDebtList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1BudgetItDebtList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/it-debt`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Budget Summary
   *
   * Retrieve aggregate per-type totals for a client's budget forecast across the requested period window.
   *
   * `GET /lifecycle-manager/v1/budget/{client_id}/summary`
   */
  getSummary(
    clientId: string,
    query?: BudgetGetSummaryQuery
  ): Promise<
    operations['ApiPublicV1BudgetSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1BudgetSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/budget/${encodeURIComponent(clientId)}/summary`,
      query,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Budget.getAccountSummary()`. */
export interface BudgetGetAccountSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Reporting cadence for the forecast columns. One of Quarter, Year, or Month. Month is available only to accounts enrolled in monthly budgeting. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** When true, IT_DEBT totals are split into one row per asset type with a non-null asset_type discriminator. */
  it_debt_group_by_asset_type?: boolean;
  /** When true, INITIATIVE totals are split into one row per initiative status with a non-null initiative_status discriminator. */
  initiative_group_by_status?: boolean;
}

/** Query parameters for `Budget.listContracts()`. */
export interface BudgetListContractsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Budget.forecastCsv()`. */
export interface BudgetForecastCsvQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
}

/** Query parameters for `Budget.forecastDetailPdf()`. */
export interface BudgetForecastDetailPdfQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** Whether to include the summary chart on the first page. */
  include_chart?: boolean;
  /** Detail grouping. Currently only "Period" is supported. */
  group?: string;
}

/** Query parameters for `Budget.forecastPdf()`. */
export interface BudgetForecastPdfQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** Whether to include the summary chart on the first page. */
  include_chart?: boolean;
}

/** Query parameters for `Budget.listInitiatives()`. */
export interface BudgetListInitiativesQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Budget.listItDebt()`. */
export interface BudgetListItDebtQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Budget.getSummary()`. */
export interface BudgetGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'asset_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_third_party?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
  };
  /** Reporting cadence for the forecast columns. One of Quarter, Year, or Month. Month is available only to accounts enrolled in monthly budgeting. */
  frequency?: components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
  /** Number of periods to include; integer between 1 and 12 inclusive. */
  period_count?: number;
  /** Anchor date-time for the first period. Use midnight UTC when calling with a calendar-day anchor. */
  starting_date?: string | Date;
  /** Include items whose status is overdue. Defaults to true. */
  include_overdue?: boolean;
  /** Include items whose status is not scheduled. Defaults to true. */
  include_not_scheduled?: boolean;
  /** When true, IT_DEBT totals are split into one row per asset type with a non-null asset_type discriminator. */
  it_debt_group_by_asset_type?: boolean;
  /** When true, INITIATIVE totals are split into one row per initiative status with a non-null initiative_status discriminator. */
  initiative_group_by_status?: boolean;
}

/**
 * Calendar
 *
 * Calendar data used by Lifecycle Manager planning workflows.
 */
export class Calendar {
  constructor(private readonly http: HttpClient) {}

  /**
   * List calendar events
   *
   * List Lifecycle Manager calendar events (task due dates, agreement renewals, deliverable sends) across the account within a date range, optionally filtered by client, owner, and event type.
   *
   * `GET /lifecycle-manager/v1/calendar/events`
   */
  listEvents(
    query?: CalendarListEventsQuery
  ): Promise<
    operations['ApiPublicV1CalendarEventList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1CalendarEventList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/calendar/events`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listEvents()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listEventsAll(
    query?: Omit<CalendarListEventsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1CalendarEventList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listEvents({ ...query, cursor }));
  }
}

/** Query parameters for `Calendar.listEvents()`. */
export interface CalendarListEventsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Inclusive start of the UTC date window. */
  from?: string | Date;
  /** Inclusive end of the UTC date window. Must be on or after 'from' and no more than 368 days later. */
  to?: string | Date;
  /** Optional: only return events for this client. */
  client_id?: string;
  /** Optional: only return events for these clients. Repeat the parameter or comma-separate the values. Combined with 'client_id' when both are sent. */
  client_ids?: readonly string[];
  /** Optional: only return events owned by these users, using the user ids the public API returns. A task matches when one of its assignees is listed and a deliverable send when its schedule's creator is listed. Agreement renewals have no owner, so this filter does not apply to them. Repeat the parameter or comma-separate the values. */
  owner_user_ids?: readonly string[];
  /** Optional: also return completed tasks, with status 'completed'. Defaults to false, which returns open work only. */
  include_completed?: boolean;
  /** Optional: events per page, from 1 to 100. Defaults to 100. */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit it for the first page, then pass the next_cursor value from the previous response. Each page continues from where the previous one ended. Pagination is best effort: records changed between reads may be skipped or returned twice. */
  cursor?: string;
  /** Optional: restrict to these event types (task_due, agreement_renewal, deliverable_send). Repeat the parameter or comma-separate the values. Omitted means all types. */
  types?: readonly string[];
}

/**
 * Client Access Groups
 *
 * Access groups that limit which clients account users can work with.
 */
export class ClientAccessGroups {
  constructor(private readonly http: HttpClient) {}

  /**
   * Update Client Access Group
   *
   * Assign or clear the client access group for one or more clients.
   *
   * `PUT /lifecycle-manager/v1/clients/access-group`
   */
  update(
    body: NonNullable<
      operations['ApiPublicV1ClientAccessGroupUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/access-group`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Client Groups
 *
 * Client group records and client group membership assignments.
 */
export class ClientGroups {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Client Groups
   *
   * List all client groups for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/client-groups`
   */
  list(
    query?: ClientGroupsListQuery
  ): Promise<
    operations['ApiPublicV1ClientGroupsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientGroupsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/client-groups`, query, responseType: 'json' });
  }

  /**
   * Create Client Group
   *
   * Create a new client group for the authenticated partner account.
   *
   * `POST /lifecycle-manager/v1/client-groups`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1ClientGroupsCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ClientGroupsCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientGroupsCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/client-groups`, body, responseType: 'json' });
  }

  /**
   * Get Client Group
   *
   * Get the details of a single client group, including its assigned users and clients.
   *
   * `GET /lifecycle-manager/v1/client-groups/{client_group_id}`
   */
  get(
    clientGroupId: string
  ): Promise<
    operations['ApiPublicV1ClientGroupsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientGroupsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/client-groups/${encodeURIComponent(clientGroupId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Client Group
   *
   * Rename an existing client group.
   *
   * `PUT /lifecycle-manager/v1/client-groups/{client_group_id}`
   */
  update(
    clientGroupId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientGroupsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/client-groups/${encodeURIComponent(clientGroupId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Client Group
   *
   * Delete a client group. Assigned users and clients are unlinked but the underlying users and clients are not deleted.
   *
   * `DELETE /lifecycle-manager/v1/client-groups/{client_group_id}`
   */
  delete(clientGroupId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/client-groups/${encodeURIComponent(clientGroupId)}`,
      responseType: 'void',
    });
  }

  /**
   * Client Group Assign
   *
   * Assign clients and users to a client group. A client belongs to at most one client group: if any requested client already belongs to a different client group, the request is rejected with 409 Conflict and nothing is assigned. Remove the client from its current group first. Assigning a client to the group it is already in succeeds without change.
   *
   * `POST /lifecycle-manager/v1/client-groups/{client_group_id}/assignments`
   */
  assign(
    clientGroupId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientGroupMembersAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/client-groups/${encodeURIComponent(clientGroupId)}/assignments`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Client Group Unassign
   *
   * Unassign clients and users from a client group.
   *
   * `POST /lifecycle-manager/v1/client-groups/{client_group_id}/assignments/unassign`
   */
  unassign(
    clientGroupId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientGroupMemberUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/client-groups/${encodeURIComponent(clientGroupId)}/assignments/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `ClientGroups.list()`. */
export interface ClientGroupsListQuery {
  /** Only return groups assigned to this account member, identified by the ScalePad Hub user id. Omit to list all groups. */
  user_id?: string;
}

/**
 * Client IQ
 *
 * AI-assisted client business and industry summaries.
 */
export class ClientIq {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get ClientIQ
   *
   * Retrieve a client's ClientIQ business summary, industry summary, and generation progress.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/client-iq`
   */
  get(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientIqGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientIqGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/client-iq`,
      responseType: 'json',
    });
  }

  /**
   * Generate ClientIQ Content
   *
   * Generate ClientIQ content for a client using the saved website or inferred contact domain.
   *
   * `POST /lifecycle-manager/v1/clients/{client_id}/client-iq/generate`
   */
  generate(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientIqGenerate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/client-iq/generate`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Client DMI Score
   *
   * Retrieve the current Digital Maturity Index for a client, including its qualitative band and confidence state.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/dmi/score`
   */
  getDmiScore(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientDmiScoreGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientDmiScoreGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/dmi/score`,
      responseType: 'json',
    });
  }

  /**
   * Client DMI Trend
   *
   * Retrieve the Digital Maturity Index trend for a client over the requested window, oldest reading first.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/dmi/trend`
   */
  getDmiTrend(
    clientId: string,
    query?: ClientIqGetDmiTrendQuery
  ): Promise<
    operations['ApiPublicV1ClientDmiTrendGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientDmiTrendGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/dmi/trend`,
      query,
      responseType: 'json',
    });
  }
}

/** Query parameters for `ClientIq.getDmiTrend()`. */
export interface ClientIqGetDmiTrendQuery {
  /** Optional start of the trend window, in UTC. Defaults to six months before now when omitted. Must be provided together with to. */
  from?: string | Date;
  /** Optional end of the trend window, in UTC. Defaults to now when omitted. Must be provided together with from. */
  to?: string | Date;
}

/**
 * Client Reports
 *
 * Downloadable client-list spreadsheets.
 */
export class ClientReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Export Clients as CSV
   *
   * Download the current clients list as a CSV file.
   *
   * `POST /lifecycle-manager/v1/clients/export/csv`
   */
  exportCsv(
    body: NonNullable<
      operations['ApiPublicV1ClientsExportCsv']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/export/csv`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Export Clients as XLSX
   *
   * Download the current clients list as an XLSX spreadsheet.
   *
   * `POST /lifecycle-manager/v1/clients/export/xlsx`
   */
  exportXlsx(
    body: NonNullable<
      operations['ApiPublicV1ClientsExportXlsx']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/export/xlsx`,
      body,
      responseType: 'binary',
    });
  }
}

/**
 * Clients
 *
 * Client records and client-scoped Lifecycle Manager resources.
 */
export class Clients {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Clients
   *
   * Get paginated client summary by query parameter
   *
   * `GET /lifecycle-manager/v1/clients`
   */
  list(
    query?: ClientsListQuery
  ): Promise<operations['ApiPublicV1ClientList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1ClientList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/clients`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ClientsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1ClientList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Update Clients
   *
   * Apply the same editable settings to one or more clients.
   *
   * `PATCH /lifecycle-manager/v1/clients`
   */
  updateMany(
    body: NonNullable<
      operations['ApiPublicV1ClientsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/clients`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Search Clients
   *
   * Search clients by name, returning a paged list of clients scoped to the caller's client group access. Each client carries its id, display label, Lifecycle Manager license, and whether the caller has starred it or visited it recently. When no search term is provided, returns the caller's starred clients first, then their most recently visited clients, then their remaining accessible clients ordered by name. A client is listed once, under the first of those groups it belongs to.
   *
   * `GET /lifecycle-manager/v1/clients/lookup`
   */
  search(
    query?: ClientsSearchQuery
  ): Promise<
    operations['ApiPublicV1ClientsLookup']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientsLookup']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/clients/lookup`, query, responseType: 'json' });
  }

  /**
   * Every item of `search()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  searchAll(
    query?: Omit<ClientsSearchQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1ClientsLookup']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.search({ ...query, cursor }));
  }

  /**
   * Get Client
   *
   * Get a single client profile.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}`
   */
  get(
    clientId: string
  ): Promise<operations['ApiPublicV1ClientGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1ClientGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Client
   *
   * Update the website for a single client.
   *
   * `PATCH /lifecycle-manager/v1/clients/{client_id}`
   */
  update(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Client Mention Access
   *
   * List whether each active account member can open the client's notes and tasks, so a mention picker can flag members without access.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/mention-access`
   */
  getMentionAccess(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientMentionAccessGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientMentionAccessGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/mention-access`,
      responseType: 'json',
    });
  }

  /**
   * Update Client Tags
   *
   * Replace the tags assigned to a client.
   *
   * `PUT /lifecycle-manager/v1/clients/{client_id}/tags`
   */
  updateTags(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientTagUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/tags`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Clients.list()`. */
export interface ClientsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in.
     * Repeatable: pass an array to send several clauses.
     */
    tag_id?: FilterValue<'eq' | 'in'> | readonly FilterValue<'eq' | 'in'>[];
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    source?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    meeting_policy_status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    segment_id?: FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    client_access_group_id?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, null.
     * Repeatable: pass an array to send several clauses.
     */
    vertical_id?: FilterValue<'eq' | 'null'> | readonly FilterValue<'eq' | 'null'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    hardware_count?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    software_count?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    last_assessment_score?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    last_assessment_days_ago?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    upcoming_meeting_days?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /**
     * Operators: eq, gte, lte.
     * Repeatable: pass an array to send several clauses.
     */
    last_meeting_starts_at?:
      FilterValue<'eq' | 'gte' | 'lte'> | readonly FilterValue<'eq' | 'gte' | 'lte'>[];
    /** Operators: eq. */
    license?: FilterValue<'eq'>;
  };
  /** Free-text search applied to the client display name. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Clients.search()`. */
export interface ClientsSearchQuery {
  /** Free-text search applied to the client display name. Partial and prefix matches are supported. Omit to return the caller's starred clients first, then their most recently visited clients, then their remaining accessible clients ordered by name. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Comments */
export class Comments {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Comments
   *
   * Retrieve the top-level comments on a record, each with its reply count and most recent replies. Sortable by created_at; defaults to newest first.
   *
   * `GET /lifecycle-manager/v1/comments`
   */
  list(
    query?: CommentsListQuery
  ): Promise<
    operations['ApiPublicV1CommentList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1CommentList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/comments`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<CommentsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1CommentList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Comment
   *
   * Post a new top-level comment on a record.
   *
   * `POST /lifecycle-manager/v1/comments`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1CommentCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1CommentCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1CommentCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/comments`, body, responseType: 'json' });
  }

  /**
   * Update Comment
   *
   * Edit the body of a comment or reply. Allowed for its author or an account administrator.
   *
   * `PATCH /lifecycle-manager/v1/comments/{comment_id}`
   */
  update(
    commentId: string,
    body: NonNullable<
      operations['ApiPublicV1CommentUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Comment or reply
   *
   * Delete a comment or reply. Allowed for its author or an account administrator. A deleted comment that still has replies stays visible without its body.
   *
   * `DELETE /lifecycle-manager/v1/comments/{comment_id}`
   */
  delete(commentId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}`,
      responseType: 'void',
    });
  }

  /**
   * Add Comment reaction
   *
   * Add the caller's emoji reaction to a comment or reply. Idempotent: adding a reaction the caller already has changes nothing. A comment holds at most 20 different emoji.
   *
   * `PUT /lifecycle-manager/v1/comments/{comment_id}/reactions/add`
   */
  addReaction(
    commentId: string,
    body: NonNullable<
      operations['ApiPublicV1CommentReactionAdd']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}/reactions/add`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Remove Comment reaction
   *
   * Remove the caller's own emoji reaction from a comment or reply. Idempotent: removing a reaction the caller does not have changes nothing.
   *
   * `PUT /lifecycle-manager/v1/comments/{comment_id}/reactions/remove`
   */
  removeReaction(
    commentId: string,
    body: NonNullable<
      operations['ApiPublicV1CommentReactionRemove']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}/reactions/remove`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Comment replies
   *
   * Retrieve the replies on a top-level comment. Sortable by created_at; defaults to oldest first.
   *
   * `GET /lifecycle-manager/v1/comments/{comment_id}/replies`
   */
  listReplies(
    commentId: string,
    query?: CommentsListRepliesQuery
  ): Promise<
    operations['ApiPublicV1CommentReplyList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1CommentReplyList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}/replies`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listReplies()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listRepliesAll(
    commentId: string,
    query?: Omit<CommentsListRepliesQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1CommentReplyList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listReplies(commentId, { ...query, cursor }));
  }

  /**
   * Create Comment reply
   *
   * Post a reply to an existing top-level comment. Replies cannot themselves be replied to.
   *
   * `POST /lifecycle-manager/v1/comments/{comment_id}/replies`
   */
  createReply(
    commentId: string,
    body: NonNullable<
      operations['ApiPublicV1CommentReplyCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1CommentReplyCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1CommentReplyCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/comments/${encodeURIComponent(commentId)}/replies`,
      body,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Comments.list()`. */
export interface CommentsListQuery {
  /** The kind of record to retrieve comments for. */
  entity_type?: components['schemas']['Comment.Model.CommentEntityType'];
  /** Identifier of the record to retrieve comments for. For HardwareAsset this is the Core hardware asset id; for Goal, Initiative, Meeting, Agreement, and Task it is that resource's own identifier; for Contact it is the Core contact id once one exists and the Lifecycle Manager contact id otherwise, and both keep resolving once a Core id is stamped. */
  entity_id?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Comments.listReplies()`. */
export interface CommentsListRepliesQuery {
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Defaults to oldest first. Available values: created_at. */
  sort?: readonly SortSpec<'created_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Contact Reports
 *
 * Downloadable contact spreadsheets and PDF reports.
 */
export class ContactReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Export Contacts as Spreadsheet
   *
   * Export contacts as a spreadsheet, honoring the supplied search, filters, sort, and selected columns. Exports every matching row, so the page_size and cursor parameters are ignored. The requested xlsx format is downgraded to csv when the result set is too large for a spreadsheet; the response content type and file name reflect the format that was written.
   *
   * Use `format=Csv` for a CSV download (`text/csv`) or `format=Xlsx` for an Excel workbook. XLSX is the default.
   *
   * `GET /lifecycle-manager/v1/assets/contacts/export`
   */
  export(query?: ContactReportsExportQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/contacts/export`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Download Contact Report PDF
   *
   * Generate a PDF contact report for a client, honoring the supplied search, filters, sort, and selected columns. Reports every matching row, so the page_size and cursor parameters are ignored.
   *
   * `GET /lifecycle-manager/v1/assets/contacts/report/pdf`
   */
  downloadPdf(query?: ContactReportsDownloadPdfQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/contacts/report/pdf`,
      query,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `ContactReports.export()`. */
export interface ContactReportsExportQuery {
  /** Spreadsheet file format. Defaults to xlsx. */
  format?: components['schemas']['AssetManagement.Asset.Contact.Model.Public.ContactExportFormatPublicEnum'];
  /** Optional public column keys to include in the export. Omit to export every available column. */
  columns?: readonly string[];
  /** Free-text search applied across the console's searchable fields. */
  search?: string;
  /** Optional Core API client ID used to limit results to one client. Omit to search across accessible clients. */
  client_id?: string;
  /** Generic console filters keyed by public field name. Supported keys depend on console availability for the requested account or client. */
  filter?: Record<string, readonly string[] | null | undefined>;
  /** Optional operator per filter key. Supported operators are published by each console filter metadata endpoint. */
  filter_operator?: Record<string, string | null | undefined>;
  /** Optional multi-select matching mode per filter key. Supported values are published by each console filter metadata endpoint. */
  filter_selection?: Record<string, string | null | undefined>;
  /** Number of records to return in a single page. Defaults to 50. */
  page_size?: number;
  /** Cursor of the page to return. Omit for the first page, then pass the next_cursor value from the previous response. */
  cursor?: string;
  /** One or more sortable fields, separated by commas. Prefix with + to sort ascending or - to sort descending. */
  sort?: readonly SortSpec[];
}

/** Query parameters for `ContactReports.downloadPdf()`. */
export interface ContactReportsDownloadPdfQuery {
  /** Optional public column keys to include in the report. Omit to include every available column. */
  columns?: readonly string[];
  /** Optional report title shown on the PDF. Defaults to "Custom User Report". */
  report_title?: string;
  /** Free-text search applied across the console's searchable fields. */
  search?: string;
  /** Optional Core API client ID used to limit results to one client. Omit to search across accessible clients. */
  client_id?: string;
  /** Generic console filters keyed by public field name. Supported keys depend on console availability for the requested account or client. */
  filter?: Record<string, readonly string[] | null | undefined>;
  /** Optional operator per filter key. Supported operators are published by each console filter metadata endpoint. */
  filter_operator?: Record<string, string | null | undefined>;
  /** Optional multi-select matching mode per filter key. Supported values are published by each console filter metadata endpoint. */
  filter_selection?: Record<string, string | null | undefined>;
  /** Number of records to return in a single page. Defaults to 50. */
  page_size?: number;
  /** Cursor of the page to return. Omit for the first page, then pass the next_cursor value from the previous response. */
  cursor?: string;
  /** One or more sortable fields, separated by commas. Prefix with + to sort ascending or - to sort descending. */
  sort?: readonly SortSpec[];
}

/**
 * Contacts
 *
 * Client contacts, key-contact and quoting-contact assignments, license assignments, and contact security posture.
 */
export class Contacts {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Contacts
   *
   * List Lifecycle Manager contacts for accessible clients. Supports optional client, integration-lineage, hidden-status, email-presence, and name/email search filters, cursor pagination, Core record lineage, license assignment details, and SaaS-derived MFA/activity posture.
   *
   * `GET /lifecycle-manager/v1/contacts`
   */
  list(
    query?: ContactsListQuery
  ): Promise<
    operations['ApiPublicV1ContactsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContactsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/contacts`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ContactsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1ContactsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Contact
   *
   * Create a client contact.
   *
   * `POST /lifecycle-manager/v1/contacts`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1ContactCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ContactCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContactCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/contacts`, body, responseType: 'json' });
  }

  /**
   * Update Contact Visibility
   *
   * Suppress one or more contacts, or reactivate previously suppressed contacts. Each contact is resolved and authorized independently so a partial failure does not abort the request.
   *
   * `PATCH /lifecycle-manager/v1/contacts`
   */
  updateVisibility(
    body: NonNullable<
      operations['ApiPublicV1ContactsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ContactsUpdate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContactsUpdate']['responses'][200]['content']['application/json']
    >({ method: 'PATCH', path: `/lifecycle-manager/v1/contacts`, body, responseType: 'json' });
  }

  /**
   * Get Contact Summary
   *
   * Get account- or client-scoped contact totals, Microsoft 365 adoption counts, and security awareness training completion metrics.
   *
   * `GET /lifecycle-manager/v1/contacts/summary`
   */
  getSummary(
    query?: ContactsGetSummaryQuery
  ): Promise<
    operations['ApiPublicV1ContactsSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContactsSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/contacts/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Contact
   *
   * Get a Lifecycle Manager contact by the contact's public ID. Supports Core API contact IDs and temporary Lifecycle Manager contact IDs, including hidden contacts.
   *
   * `GET /lifecycle-manager/v1/contacts/{contact_id}`
   */
  get(
    contactId: string
  ): Promise<operations['ApiPublicV1ContactGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1ContactGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/contacts/${encodeURIComponent(contactId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Contact Hidden Status
   *
   * Update whether a Lifecycle Manager contact is hidden.
   *
   * `PUT /lifecycle-manager/v1/contacts/{contact_id}/hidden-status`
   */
  updateHiddenStatus(
    contactId: string,
    body: NonNullable<
      operations['ApiPublicV1ContactHiddenStatusUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/contacts/${encodeURIComponent(contactId)}/hidden-status`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Quoting Contact
   *
   * Retrieve the quoting contact assigned to an accessible client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/contact/quoting`
   */
  getQuoting(
    clientId: string
  ): Promise<
    operations['ApiPublicV1QuotingContactGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1QuotingContactGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/contact/quoting`,
      responseType: 'json',
    });
  }

  /**
   * Assign Quoting Contact
   *
   * Assign a quoting contact to an accessible client.
   *
   * `PUT /lifecycle-manager/v1/clients/{client_id}/contact/quoting`
   */
  assignQuoting(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1QuotingContactUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/contact/quoting`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Clear Quoting Contact
   *
   * Clear the quoting contact assigned to an accessible client.
   *
   * `DELETE /lifecycle-manager/v1/clients/{client_id}/contact/quoting`
   */
  clearQuoting(clientId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/contact/quoting`,
      responseType: 'void',
    });
  }

  /**
   * Assign Client Key Contacts
   *
   * Assign one or more existing contacts as key contacts for a client.
   *
   * `PUT /lifecycle-manager/v1/clients/{client_id}/key-contacts`
   */
  assignClientKey(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientKeyContactsAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/key-contacts`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unassign Client Key Contacts
   *
   * Unassign one or more key contacts from a client.
   *
   * `PUT /lifecycle-manager/v1/clients/{client_id}/key-contacts/unassign`
   */
  unassignClientKey(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientKeyContactsUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/key-contacts/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Contacts.list()`. */
export interface ContactsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_hidden?: FilterValue<'eq'>;
    /** Operators: eq. */
    has_email?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.id'?: FilterValue<'eq' | 'in'>;
  };
  /** Searches contact first name, last name, and email address. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Contacts.getSummary()`. */
export interface ContactsGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
  };
}

/**
 * Copilot Settings
 *
 * Account, client, and segment configuration for Copilot.
 */
export class CopilotSettings {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Account Copilot Settings
   *
   * Get configured and inherited Copilot settings for the account.
   *
   * `GET /lifecycle-manager/v1/account/copilot-settings`
   */
  getAccount(): Promise<
    operations['ApiPublicV1AccountCopilotSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountCopilotSettingsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/account/copilot-settings`,
      responseType: 'json',
    });
  }

  /**
   * Update Account Copilot Settings
   *
   * Partially update account-level Copilot defaults.
   *
   * `PATCH /lifecycle-manager/v1/account/copilot-settings`
   */
  updateAccount(
    body: NonNullable<
      operations['ApiPublicV1AccountCopilotSettingsPatch']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AccountCopilotSettingsPatch']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AccountCopilotSettingsPatch']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/account/copilot-settings`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Client Copilot Settings
   *
   * Get configured and inherited Copilot settings for one accessible client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/copilot-settings`
   */
  getClient(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientCopilotSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientCopilotSettingsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/copilot-settings`,
      responseType: 'json',
    });
  }

  /**
   * Update Client Copilot Settings
   *
   * Partially update Copilot overrides for one accessible client.
   *
   * `PATCH /lifecycle-manager/v1/clients/{client_id}/copilot-settings`
   */
  updateClient(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ClientCopilotSettingsPatch']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ClientCopilotSettingsPatch']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientCopilotSettingsPatch']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/copilot-settings`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Segment Copilot Settings
   *
   * Get configured and inherited Copilot settings for one segment.
   *
   * `GET /lifecycle-manager/v1/segments/{segment_id}/copilot-settings`
   */
  getSegment(
    segmentId: string
  ): Promise<
    operations['ApiPublicV1SegmentCopilotSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SegmentCopilotSettingsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/segments/${encodeURIComponent(segmentId)}/copilot-settings`,
      responseType: 'json',
    });
  }

  /**
   * Update Segment Copilot Settings
   *
   * Partially update Copilot overrides for one segment.
   *
   * `PATCH /lifecycle-manager/v1/segments/{segment_id}/copilot-settings`
   */
  updateSegment(
    segmentId: string,
    body: NonNullable<
      operations['ApiPublicV1SegmentCopilotSettingsPatch']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1SegmentCopilotSettingsPatch']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SegmentCopilotSettingsPatch']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/segments/${encodeURIComponent(segmentId)}/copilot-settings`,
      body,
      responseType: 'json',
    });
  }
}

/**
 * Deliverable Catalog
 *
 * Catalog components and integration options available when configuring deliverables and templates.
 */
export class DeliverableCatalog {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Catalog Components
   *
   * Lists all deliverable catalog components available for the specified client. These components are available to be included in a new or existing deliverable for the client.
   * These components include Lifecycle Manager components as well as any vendor integration components that have been set up for the client.
   *
   * `GET /lifecycle-manager/v1/clients/{client-id}/deliverables/catalog/components`
   */
  listComponents(
    clientId: string
  ): Promise<
    operations['list-deliverable-catalog-components']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-catalog-components']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables/catalog/components`,
      responseType: 'json',
    });
  }

  /**
   * List Service Delivery Board Options
   *
   * List Service Delivery board options for a client
   *
   * `GET /lifecycle-manager/v1/clients/{client-id}/deliverables/catalog/components/service-delivery/board-options`
   */
  listServiceDeliveryBoardOptions(
    clientId: string
  ): Promise<
    operations['list-deliverable-service-delivery-board-options']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-service-delivery-board-options']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables/catalog/components/service-delivery/board-options`,
      responseType: 'json',
    });
  }

  /**
   * List Template Catalog Components
   *
   * This endpoint lists all deliverable catalog components available for use in templates.
   *
   * `GET /lifecycle-manager/v1/deliverables/templates/catalog/components`
   */
  listTemplateComponents(): Promise<
    operations['list-deliverable-template-catalog-components']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-template-catalog-components']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/templates/catalog/components`,
      responseType: 'json',
    });
  }
}

/**
 * Deliverable Content
 *
 * Sections and components that make up a deliverable.
 */
export class DeliverableContent {
  constructor(private readonly http: HttpClient) {}

  /**
   * Append assessment report
   *
   * Add an assessment to an existing deliverable.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable_id}/assessment`
   */
  appendAssessmentReport(
    deliverableId: string,
    body: NonNullable<
      operations['ApiPublicV1DeliverableAssessmentCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1DeliverableAssessmentCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableAssessmentCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/assessment`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get a deliverable component's file
   *
   * Retrieves the file (PDF or image) uploaded to a Custom deliverable component, so it can be
   * displayed again after the page reloads.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable-id}/components/{component-id}/file`
   */
  getComponentFile(
    deliverableId: string,
    componentId: string
  ): Promise<
    operations['get-deliverable-component-file']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['get-deliverable-component-file']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/components/${encodeURIComponent(componentId)}/file`,
      responseType: 'json',
    });
  }

  /**
   * List IT Glue flexible asset details
   *
   * List display-safe IT Glue flexible asset details for a deliverable component.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable_id}/components/{component_id}/it-glue/flexible-assets`
   */
  listItGlueFlexibleAssetDetails(
    deliverableId: string,
    componentId: string,
    query?: DeliverableContentListItGlueFlexibleAssetDetailsQuery
  ): Promise<
    operations['ApiPublicV1DeliverableComponentItGlueFlexibleAssetList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableComponentItGlueFlexibleAssetList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/components/${encodeURIComponent(componentId)}/it-glue/flexible-assets`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listItGlueFlexibleAssetDetails()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listItGlueFlexibleAssetDetailsAll(
    deliverableId: string,
    componentId: string,
    query?: Omit<DeliverableContentListItGlueFlexibleAssetDetailsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1DeliverableComponentItGlueFlexibleAssetList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) =>
      this.listItGlueFlexibleAssetDetails(deliverableId, componentId, { ...query, cursor })
    );
  }

  /**
   * Delete Section
   *
   * Deletes a deliverable section by its ID, including all associated components.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/{deliverable-id}/sections/{section-id}`
   */
  deleteSection(deliverableId: string, sectionId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/sections/${encodeURIComponent(sectionId)}`,
      responseType: 'void',
    });
  }

  /**
   * Delete Component
   *
   * Deletes a deliverable section component by its ID
   *
   * `DELETE /lifecycle-manager/v1/deliverables/{deliverable-id}/sections/{section-id}/components/{component-id}`
   */
  deleteComponent(deliverableId: string, sectionId: string, componentId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/sections/${encodeURIComponent(sectionId)}/components/${encodeURIComponent(componentId)}`,
      responseType: 'void',
    });
  }

  /**
   * Refresh Component
   *
   * This endpoint refreshes the data of a deliverable section component.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/sections/{section-id}/components/{component-id}/refresh`
   */
  refreshComponent(deliverableId: string, sectionId: string, componentId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/sections/${encodeURIComponent(sectionId)}/components/${encodeURIComponent(componentId)}/refresh`,
      responseType: 'void',
    });
  }

  /**
   * Suggest a Deliverable Executive Summary
   *
   * Suggest a review-only executive summary from persisted Deliverable snapshot data.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/sections/{section-id}/executive-summary/suggest`
   */
  suggestExecutiveSummary(
    deliverableId: string,
    sectionId: string,
    body: NonNullable<
      operations['suggest-deliverable-executive-summary']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['suggest-deliverable-executive-summary']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['suggest-deliverable-executive-summary']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/sections/${encodeURIComponent(sectionId)}/executive-summary/suggest`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Refresh Section
   *
   * This endpoint refreshes the data of all the components under a deliverable section.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/sections/{section-id}/refresh`
   */
  refreshSection(deliverableId: string, sectionId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/sections/${encodeURIComponent(sectionId)}/refresh`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `DeliverableContent.listItGlueFlexibleAssetDetails()`. */
export interface DeliverableContentListItGlueFlexibleAssetDetailsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    flexible_asset_type_id?: FilterValue<'eq'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Deliverable Integrations
 *
 * Integration availability and configured integrations used by deliverables.
 */
export class DeliverableIntegrations {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Configured Integrations
   *
   * List deliverable integrations that are integrated for a client, including their configuration, status and vendor details.
   *
   * `GET /lifecycle-manager/v1/clients/{client-id}/deliverables/integrations/integrated`
   */
  listConfigured(
    clientId: string
  ): Promise<
    operations['list-deliverable-integrations-integrated']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-integrations-integrated']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables/integrations/integrated`,
      responseType: 'json',
    });
  }

  /**
   * List Available Integrations
   *
   * Lists all available deliverable integrations in the catalog. These are vendor integrations that can be configured for clients.
   *
   * `GET /lifecycle-manager/v1/deliverables/catalog/integrations`
   */
  listAvailable(): Promise<
    operations['list-deliverable-catalog-integrations']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-catalog-integrations']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/catalog/integrations`,
      responseType: 'json',
    });
  }
}

/**
 * Deliverable Reports
 *
 * Deliverable presentations and downloadable reports.
 */
export class DeliverableReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Download a deliverable PDF
   *
   * Download a PDF for the specified deliverable. The server returns an attachment and supplies a filename.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable-id}/pdf`
   */
  downloadPdf(deliverableId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/pdf`,
      responseType: 'binary',
    });
  }

  /**
   * Get Presentation
   *
   * This endpoint retrieves deliverable content and MSP branding for presentation.
   * It includes the deliverable name, client name, sections, component output, and branding data.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable-id}/presentation`
   */
  getPresentation(
    deliverableId: string
  ): Promise<
    operations['get-deliverable-presentation']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['get-deliverable-presentation']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/presentation`,
      responseType: 'json',
    });
  }
}

/**
 * Deliverable Schedules
 *
 * Schedules, recipients, delivery runs, and delivery actions for deliverable templates.
 */
export class DeliverableSchedules {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Schedules
   *
   * List deliverable schedules for the account, optionally filtered by template or client.
   *
   * `GET /lifecycle-manager/v1/deliverables/schedules`
   */
  list(
    query?: DeliverableSchedulesListQuery
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/schedules`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Preview Next Occurrence
   *
   * Get the next occurrence for a schedule with the supplied cadence.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/next-occurrence`
   */
  previewNextOccurrence(
    body: NonNullable<
      operations['ApiPublicV1DeliverableScheduleNextOccurrence']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleNextOccurrence']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleNextOccurrence']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/next-occurrence`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Preview Schedule Message
   *
   * Preview the email a schedule would send for the given client, resolving every {{variable}}.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/preview`
   */
  previewMessage(
    body: NonNullable<
      operations['ApiPublicV1DeliverableSchedulePreview']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1DeliverableSchedulePreview']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableSchedulePreview']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/preview`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Send Test Message
   *
   * Send a one-off test email of a schedule message to a single address, resolving every {{variable}}. With attach_pdf (which requires template_id) the report is built asynchronously and the email follows; never affects any saved schedule.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/send-test`
   */
  sendTestMessage(
    body: NonNullable<
      operations['ApiPublicV1DeliverableScheduleSendTest']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/send-test`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Template Variables
   *
   * List the template variables available for deliverable schedule email subjects and bodies.
   *
   * `GET /lifecycle-manager/v1/deliverables/schedules/template-variables`
   */
  listTemplateVariables(): Promise<
    operations['ApiPublicV1DeliverableScheduleTemplateVariableList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleTemplateVariableList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/schedules/template-variables`,
      responseType: 'json',
    });
  }

  /**
   * Get Schedule
   *
   * Get a single deliverable schedule with its cadence and recipients.
   *
   * `GET /lifecycle-manager/v1/deliverables/schedules/{schedule_id}`
   */
  get(
    scheduleId: string
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Schedule
   *
   * Update a deliverable schedule's cadence, recipients toggle, email content, or PDF setting.
   *
   * `PATCH /lifecycle-manager/v1/deliverables/schedules/{schedule_id}`
   */
  update(
    scheduleId: string,
    body: NonNullable<
      operations['ApiPublicV1DeliverableSchedulePatch']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Schedule
   *
   * Delete a deliverable schedule. Cancels any pending fire; past run history is preserved.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/schedules/{schedule_id}`
   */
  delete(scheduleId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}`,
      responseType: 'void',
    });
  }

  /**
   * Pause Schedule
   *
   * Pause a deliverable schedule. Cancels its pending fire; the schedule fires nothing until resumed.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/pause`
   */
  pause(scheduleId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/pause`,
      responseType: 'void',
    });
  }

  /**
   * Add Recipient
   *
   * Add an explicit recipient to a deliverable schedule.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/recipients`
   */
  addRecipient(
    scheduleId: string,
    body: NonNullable<
      operations['ApiPublicV1DeliverableScheduleRecipientCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleRecipientCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleRecipientCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/recipients`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Remove Recipient
   *
   * Remove an explicit recipient from a deliverable schedule.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/recipients/{recipient_id}`
   */
  removeRecipient(scheduleId: string, recipientId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/recipients/${encodeURIComponent(recipientId)}`,
      responseType: 'void',
    });
  }

  /**
   * Resume Schedule
   *
   * Resume a paused deliverable schedule and re-enqueue its next occurrence.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/resume`
   */
  resume(scheduleId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/resume`,
      responseType: 'void',
    });
  }

  /**
   * List Runs
   *
   * List the run history of a deliverable schedule, newest first.
   *
   * `GET /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/runs`
   */
  listRuns(
    scheduleId: string,
    query?: DeliverableSchedulesListRunsQuery
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleRunHistoryList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleRunHistoryList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/runs`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listRuns()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listRunsAll(
    scheduleId: string,
    query?: Omit<DeliverableSchedulesListRunsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1DeliverableScheduleRunHistoryList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listRuns(scheduleId, { ...query, cursor }));
  }

  /**
   * Send Schedule Now
   *
   * Trigger an immediate fire of a deliverable schedule without changing its cadence.
   *
   * `POST /lifecycle-manager/v1/deliverables/schedules/{schedule_id}/send-now`
   */
  sendNow(
    scheduleId: string
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleSendNow']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleSendNow']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/schedules/${encodeURIComponent(scheduleId)}/send-now`,
      responseType: 'json',
    });
  }

  /**
   * Create Schedule
   *
   * Create a schedule that produces and emails a deliverable from a template on a recurring or one-time cadence.
   *
   * `POST /lifecycle-manager/v1/deliverables/templates/{template_id}/schedules`
   */
  create(
    templateId: string,
    body: NonNullable<
      operations['ApiPublicV1DeliverableScheduleCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1DeliverableScheduleCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1DeliverableScheduleCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}/schedules`,
      body,
      responseType: 'json',
    });
  }
}

/** Query parameters for `DeliverableSchedules.list()`. */
export interface DeliverableSchedulesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Optional: only return schedules for this deliverable template. */
  template_id?: string;
  /** Optional: only return schedules for this client. */
  client_id?: string;
}

/** Query parameters for `DeliverableSchedules.listRuns()`. */
export interface DeliverableSchedulesListRunsQuery {
  /** The number of records to return in a single page. */
  page_size?: number;
  /** Cursor of the page to return, as returned by a previous call's next_cursor. */
  cursor?: string;
}

/**
 * Deliverable Sharing
 *
 * General share links for secure external access to deliverables.
 */
export class DeliverableSharing {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get General Share Link
   *
   * This endpoint retrieves the general share link for a specific deliverable.
   * Returns 404 if no share link exists for the deliverable.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable-id}/shares/general-link`
   */
  getGeneralShareLink(
    deliverableId: string
  ): Promise<
    operations['get-deliverable-share-general-link']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['get-deliverable-share-general-link']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link`,
      responseType: 'json',
    });
  }

  /**
   * Create General Share Link
   *
   * This endpoint creates a new general share link for the specified deliverable.
   * If any share link has ever existed (active, expired, or revoked), a 409 Conflict error is returned.
   * Use the regenerate method to create a new link when one already exists.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/shares/general-link`
   */
  createGeneralShareLinkV1(
    deliverableId: string
  ): Promise<
    operations['create-deliverable-share-general-link']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-share-general-link']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link`,
      responseType: 'json',
    });
  }

  /**
   * Create General Share Link
   *
   * This endpoint creates a new general share link for the specified deliverable.
   * If any share link has ever existed (active, expired, or revoked), a 409 Conflict error is returned.
   * Use the regenerate method to create a new link when one already exists.
   *
   * `POST /lifecycle-manager/v2/deliverables/{deliverable-id}/shares/general-link`
   */
  createGeneralShareLink(
    deliverableId: string,
    body: NonNullable<
      operations['create-deliverable-share-general-link-v2']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['create-deliverable-share-general-link-v2']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-share-general-link-v2']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v2/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update General Share Link Expiry
   *
   * This endpoint changes how long the existing general share link stays valid, through the end of
   * its final UTC day (23:59:59 UTC). The link URL and password are unchanged, so an already-expired
   * link can be extended without
   * having to send recipients a new link. A revoked link cannot be updated and returns a 409
   * Conflict; regenerate it instead. If no share link exists, a 404 Not Found error is returned.
   *
   * `PATCH /lifecycle-manager/v2/deliverables/{deliverable-id}/shares/general-link`
   */
  updateGeneralShareLinkExpiry(
    deliverableId: string,
    body: NonNullable<
      operations['update-deliverable-share-general-link-expiry']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['update-deliverable-share-general-link-expiry']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['update-deliverable-share-general-link-expiry']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v2/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Regenerate General Share Link
   *
   * This endpoint generates a new general share link for the specified deliverable.
   * The existing link is revoked and a new link with a new password is created.
   * If no share link already exists, a 404 Not Found error is returned.
   *
   * `POST /lifecycle-manager/v2/deliverables/{deliverable-id}/shares/general-link/regenerate`
   */
  regenerateGeneralShareLink(
    deliverableId: string,
    body: NonNullable<
      operations['regenerate-deliverable-share-general-link-v2']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['regenerate-deliverable-share-general-link-v2']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['regenerate-deliverable-share-general-link-v2']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v2/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link/regenerate`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Regenerate General Share Link
   *
   * This endpoint generates a new general share link for the specified deliverable.
   * The existing link is revoked and a new link with a new password is created.
   * If no share link already exists, a 404 Not Found error is returned.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/shares/general-link/regenerate`
   */
  regenerateGeneralShareLinkV1(
    deliverableId: string
  ): Promise<
    operations['regenerate-deliverable-share-general-link']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['regenerate-deliverable-share-general-link']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link/regenerate`,
      responseType: 'json',
    });
  }

  /**
   * Regenerate General Share Link URL
   *
   * This endpoint issues a new URL for the existing general share link, leaving the password and expiry untouched. The previous URL stops resolving immediately.
   * A revoked link cannot be rotated and returns a 409 Conflict; regenerate it instead.
   * If no share link exists, a 404 Not Found error is returned.
   *
   * `POST /lifecycle-manager/v2/deliverables/{deliverable-id}/shares/general-link/regenerate-link`
   */
  regenerateGeneralShareLinkUrl(
    deliverableId: string,
    query?: DeliverableSharingRegenerateGeneralShareLinkUrlQuery
  ): Promise<
    operations['regenerate-link-deliverable-share-general-link']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['regenerate-link-deliverable-share-general-link']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v2/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link/regenerate-link`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Regenerate General Share Link Password
   *
   * This endpoint issues a new password for the existing general share link, leaving the link URL and expiry untouched, so recipients keep using the URL they already have.
   * A revoked link cannot be rotated and returns a 409 Conflict; regenerate it instead.
   * If no share link exists, a 404 Not Found error is returned.
   *
   * `POST /lifecycle-manager/v2/deliverables/{deliverable-id}/shares/general-link/regenerate-password`
   */
  regenerateGeneralShareLinkPassword(
    deliverableId: string
  ): Promise<
    operations['regenerate-password-deliverable-share-general-link']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['regenerate-password-deliverable-share-general-link']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v2/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link/regenerate-password`,
      responseType: 'json',
    });
  }

  /**
   * Revoke General Share Link
   *
   * This endpoint revokes the general share link for the specified deliverable.
   * Once revoked, the share link can no longer be used to access the deliverable.
   * If no share link exists, a 404 Not Found error is returned.
   *
   * `POST /lifecycle-manager/v1/deliverables/{deliverable-id}/shares/general-link/revoke`
   */
  revokeGeneralShareLink(
    deliverableId: string
  ): Promise<
    operations['revoke-deliverable-share-general-link']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['revoke-deliverable-share-general-link']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}/shares/general-link/revoke`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `DeliverableSharing.regenerateGeneralShareLinkUrl()`. */
export interface DeliverableSharingRegenerateGeneralShareLinkUrlQuery {
  /** Which application should open the rotated link. Omission preserves the existing application. */
  share_application?: components['schemas']['ShareAccess.Model.ShareApplication'];
}

/**
 * Deliverable Templates
 *
 * Reusable deliverable templates and their sections and components.
 */
export class DeliverableTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Templates
   *
   * Lists templates visible under the account setting, or the full catalog with visibility=all.
   *
   * `GET /lifecycle-manager/v1/deliverables/templates`
   */
  list(
    query?: DeliverableTemplatesListQuery
  ): Promise<
    operations['list-deliverable-templates']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['list-deliverable-templates']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/templates`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Create Template
   *
   * This endpoint creates a new deliverable template for the account.
   * Templates can be used to create new deliverables with pre-configured sections and components.
   *
   * `POST /lifecycle-manager/v1/deliverables/templates`
   */
  create(
    body: NonNullable<
      operations['create-deliverable-template']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['create-deliverable-template']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-template']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Create Template from Deliverable
   *
   * This endpoint creates a new deliverable template by extracting the structure from an existing deliverable.
   *
   * `POST /lifecycle-manager/v1/deliverables/templates/create-from/deliverable/{deliverable-id}`
   */
  createFromDeliverable(
    deliverableId: string
  ): Promise<
    operations['create-deliverable-template-from-deliverable']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-template-from-deliverable']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/templates/create-from/deliverable/${encodeURIComponent(deliverableId)}`,
      responseType: 'json',
    });
  }

  /**
   * Create Template from Template
   *
   * This endpoint creates a new deliverable template by copying an existing template.
   * The source template can be either a ScalePad template (available to all accounts) or a custom template owned by the account.
   *
   * `POST /lifecycle-manager/v1/deliverables/templates/create-from/template/{template-id}`
   */
  createFromTemplate(
    templateId: string
  ): Promise<
    operations['create-deliverable-template-from-template']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-template-from-template']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/deliverables/templates/create-from/template/${encodeURIComponent(templateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Get Template
   *
   * This endpoint retrieves a deliverable template by its ID, including all sections and components.
   * Templates can be either ScalePad templates (available to all accounts) or custom templates owned by the account.
   *
   * `GET /lifecycle-manager/v1/deliverables/templates/{template-id}`
   */
  get(
    templateId: string
  ): Promise<
    operations['get-deliverable-template']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['get-deliverable-template']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Template
   *
   * This endpoint updates an existing deliverable template with the provided fields.
   * Only the fields provided in the request body will be updated.
   * All fields are optional to support partial updates.
   *
   * When updating sections:
   * - Sections with an 'id' are updated
   * - Sections without an 'id' are created as new sections
   * - Existing sections not included in the request remain unchanged
   *
   * `PATCH /lifecycle-manager/v1/deliverables/templates/{template-id}`
   */
  update(
    templateId: string,
    body: NonNullable<
      operations['update-deliverable-template']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['update-deliverable-template']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['update-deliverable-template']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Template
   *
   * Deletes a deliverable template by its ID, including all associated sections and components.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/templates/{template-id}`
   */
  delete(templateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}`,
      responseType: 'void',
    });
  }

  /**
   * Delete Template Section
   *
   * Deletes a deliverable template section by its ID, including all associated components.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/templates/{template-id}/sections/{section-id}`
   */
  deleteSection(templateId: string, sectionId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}/sections/${encodeURIComponent(sectionId)}`,
      responseType: 'void',
    });
  }

  /**
   * Delete Template Component
   *
   * Deletes a deliverable template section component by its ID
   *
   * `DELETE /lifecycle-manager/v1/deliverables/templates/{template-id}/sections/{section-id}/components/{component-id}`
   */
  deleteComponent(templateId: string, sectionId: string, componentId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/templates/${encodeURIComponent(templateId)}/sections/${encodeURIComponent(sectionId)}/components/${encodeURIComponent(componentId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `DeliverableTemplates.list()`. */
export interface DeliverableTemplatesListQuery {
  /** By default, follows the account setting. Use all to include hidden ScalePad deliverable templates. */
  visibility?: string;
}

/**
 * Deliverables
 *
 * Client-facing deliverables and deliverables created from templates.
 */
export class Deliverables {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Client Deliverables
   *
   * Lists all deliverable available for the specified client.
   *
   * `GET /lifecycle-manager/v1/clients/{client-id}/deliverables`
   *
   * @deprecated
   */
  listForClient(
    clientId: string
  ): Promise<operations['list-deliverables']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['list-deliverables']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables`,
      responseType: 'json',
    });
  }

  /**
   * Create Deliverable
   *
   * This endpoint creates a new deliverable for the specified client.
   *
   * `POST /lifecycle-manager/v1/clients/{client-id}/deliverables`
   */
  create(
    clientId: string,
    body: NonNullable<
      operations['create-deliverable']['requestBody']
    >['content']['application/json']
  ): Promise<operations['create-deliverable']['responses'][201]['content']['application/json']> {
    return this.http.request<
      operations['create-deliverable']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Create Deliverable from Template
   *
   * This endpoint creates a new deliverable by copying an existing template.
   * The source template can be either a ScalePad template (available to all accounts) or a custom template owned by the account.
   *
   * `POST /lifecycle-manager/v1/clients/{client-id}/deliverables/create-from/template/{template-id}`
   */
  createFromTemplate(
    clientId: string,
    templateId: string,
    body: NonNullable<
      operations['create-deliverable-from-template']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['create-deliverable-from-template']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['create-deliverable-from-template']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/deliverables/create-from/template/${encodeURIComponent(templateId)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * List Account Deliverables
   *
   * List deliverables across the caller's account with optional client-scoped filtering, sorting, and cursor pagination.
   *
   * `GET /lifecycle-manager/v1/deliverables`
   */
  list(
    query?: DeliverablesListQuery
  ): Promise<
    operations['ApiV1DeliverableListByAccount']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiV1DeliverableListByAccount']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/deliverables`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<DeliverablesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiV1DeliverableListByAccount']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Deliverable
   *
   * This endpoint retrieves a deliverable by its ID, including all sections and components.
   *
   * `GET /lifecycle-manager/v1/deliverables/{deliverable-id}`
   */
  get(
    deliverableId: string
  ): Promise<operations['get-deliverable']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['get-deliverable']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Deliverable
   *
   * This endpoint updates an existing deliverable with the provided fields.
   * Only the fields provided in the request body will be updated.
   * All fields are optional to support partial updates.
   *
   * When updating sections:
   * - Sections with an 'id' are updated
   * - Sections without an 'id' are created as new sections
   * - Existing sections not included in the request remain unchanged
   *
   * `PATCH /lifecycle-manager/v1/deliverables/{deliverable-id}`
   */
  update(
    deliverableId: string,
    body: NonNullable<
      operations['update-deliverable']['requestBody']
    >['content']['application/json']
  ): Promise<operations['update-deliverable']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['update-deliverable']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Deliverable
   *
   * Deletes a deliverable by its ID, including all associated sections and components.
   *
   * `DELETE /lifecycle-manager/v1/deliverables/{deliverable-id}`
   */
  delete(deliverableId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/deliverables/${encodeURIComponent(deliverableId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Deliverables.list()`. */
export interface DeliverablesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Published, Unpublished.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    created_by?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    has_meeting?: FilterValue<'eq'>;
    /** Operators: eq. */
    'meeting.id'?: FilterValue<'eq'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
    /** Operators: eq, in. */
    is_test?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Custom, Template.
     */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gte. */
    'updated_at.gte'?: FilterValue<'eq' | 'gte'>;
    /** Operators: eq, lte. */
    'updated_at.lte'?: FilterValue<'eq' | 'lte'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: name, status, updated_at */
  sort?: readonly SortSpec<'name' | 'status' | 'updated_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Entity History */
export class EntityHistory {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Entity History
   *
   * List audit history for an entity, newest first. Page through the feed with next_cursor: total_count is the upstream match count and can exceed the rows returned, and a page can come back empty while next_cursor is still set.
   *
   * `GET /lifecycle-manager/v1/entity-history`
   */
  list(
    query?: EntityHistoryListQuery
  ): Promise<
    operations['ApiPublicV1EntityHistoryList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EntityHistoryList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/entity-history`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<EntityHistoryListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1EntityHistoryList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }
}

/** Query parameters for `EntityHistory.list()`. */
export interface EntityHistoryListQuery {
  /** Kind of entity whose history should be retrieved. */
  entity_type?: components['schemas']['Comment.Model.CommentEntityType'];
  /** Identifier of the entity whose history should be retrieved. For HardwareAsset this is the Core hardware asset id; for Goal, Initiative, Meeting, Agreement, and Task it is that resource's own identifier; for Contact it is the Core contact id once one exists and the Lifecycle Manager contact id otherwise, and both keep resolving once a Core id is stamped. */
  entity_id?: string;
  /** Number of records to return. Must be between 1 and 20. Defaults to 20. */
  page_size?: number;
  /** Opaque cursor returned by a previous response. */
  cursor?: string;
}

/**
 * Goal Links
 *
 * Initiatives, meetings, and action items attached to client goals.
 */
export class GoalLinks {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Goal Action Items
   *
   * Retrieve all action items that are linked to this goal, surfacing the tasks that contribute toward achieving this objective.
   *
   * `GET /lifecycle-manager/v1/goals/{goal_id}/action-items`
   */
  listActionItems(
    goalId: string
  ): Promise<
    operations['ApiPublicV1GoalActionItemsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalActionItemsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/action-items`,
      responseType: 'json',
    });
  }

  /**
   * Attach Action Item to Goal
   *
   * Attach an existing action item to a goal to track tasks that contribute toward the goal's progress.
   *
   * `POST /lifecycle-manager/v1/goals/{goal_id}/action-items/{action_item_id}`
   */
  attachActionItem(goalId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Action Item from Goal
   *
   * Detach an action item from a goal without deleting either entity.
   *
   * `DELETE /lifecycle-manager/v1/goals/{goal_id}/action-items/{action_item_id}`
   */
  detachActionItem(goalId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Goal Initiatives
   *
   * Retrieve all initiatives that are aligned with this goal, showing the projects that contribute to achieving this objective.
   *
   * `GET /lifecycle-manager/v1/goals/{goal_id}/initiatives`
   */
  listInitiatives(
    goalId: string
  ): Promise<
    operations['ApiPublicV1GoalInitiativesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalInitiativesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/initiatives`,
      responseType: 'json',
    });
  }

  /**
   * Attach Initiative to Goal
   *
   * Attach an existing initiative to a goal to establish a relationship between the strategic objective and the project that contributes to achieving it.
   *
   * `POST /lifecycle-manager/v1/goals/{goal_id}/initiatives/{initiative_id}`
   */
  attachInitiative(goalId: string, initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/initiatives/${encodeURIComponent(initiativeId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Initiative from Goal
   *
   * Detach an initiative and a goal without deleting the initiative itself, so it no longer contributes to this objective.
   *
   * `DELETE /lifecycle-manager/v1/goals/{goal_id}/initiatives/{initiative_id}`
   */
  detachInitiative(goalId: string, initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/initiatives/${encodeURIComponent(initiativeId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Goal Meetings
   *
   * Retrieve all meetings that is aligned with this goal, tracking client engagement around this strategic objective.
   *
   * `GET /lifecycle-manager/v1/goals/{goal_id}/meetings`
   */
  listMeetings(
    goalId: string
  ): Promise<
    operations['ApiPublicV1GoalMeetingsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalMeetingsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/meetings`,
      responseType: 'json',
    });
  }

  /**
   * Attach Meeting to Goal
   *
   * Attach an existing meeting to a goal to establish that this strategic objective will be discussed or reviewed during the meeting.
   *
   * `POST /lifecycle-manager/v1/goals/{goal_id}/meetings/{meeting_id}`
   */
  attachMeeting(goalId: string, meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/meetings/${encodeURIComponent(meetingId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Meeting from Goal
   *
   * Detach a meeting and a goal without deleting the meeting itself, removing the goal from the meeting agenda.
   *
   * `DELETE /lifecycle-manager/v1/goals/{goal_id}/meetings/{meeting_id}`
   */
  detachMeeting(goalId: string, meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/meetings/${encodeURIComponent(meetingId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Goal Outcomes
 *
 * Account-defined outcomes used to organize and measure client goals.
 */
export class GoalOutcomes {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Outcomes
   *
   * Retrieve Outcomes visible to the authenticated account.
   *
   * `GET /lifecycle-manager/v1/goals/outcomes`
   */
  list(
    query?: GoalOutcomesListQuery
  ): Promise<
    operations['ApiPublicV1GoalOutcomeList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalOutcomeList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/goals/outcomes`, query, responseType: 'json' });
  }

  /**
   * Create Outcome
   *
   * Create or reuse an account-owned Outcome.
   *
   * `POST /lifecycle-manager/v1/goals/outcomes`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1GoalOutcomeCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1GoalOutcomeCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalOutcomeCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/goals/outcomes`, body, responseType: 'json' });
  }

  /**
   * Update Outcome
   *
   * Rename, archive, or restore an account-owned Outcome.
   *
   * `PATCH /lifecycle-manager/v1/goals/outcomes/{outcome_id}`
   */
  update(
    outcomeId: string,
    body: NonNullable<
      operations['ApiPublicV1GoalOutcomeUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/goals/outcomes/${encodeURIComponent(outcomeId)}`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `GoalOutcomes.list()`. */
export interface GoalOutcomesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    is_archived?: FilterValue<'eq'>;
  };
  /** By default, follows the account setting. Use all to include hidden ScalePad Outcomes. */
  visibility?: string;
}

/**
 * Goal Templates
 *
 * Reusable goal templates used to create consistent client goals.
 */
export class GoalTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Goal Templates
   *
   * Retrieve all goal templates visible to the authenticated account with optional title search.
   *
   * `GET /lifecycle-manager/v1/goal-templates`
   */
  list(
    query?: GoalTemplatesListQuery
  ): Promise<
    operations['ApiPublicV1GoalTemplatesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalTemplatesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/goal-templates`, query, responseType: 'json' });
  }

  /**
   * Create Goal Template
   *
   * Create a new account-owned goal template.
   *
   * `POST /lifecycle-manager/v1/goal-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1GoalTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1GoalTemplateCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalTemplateCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/goal-templates`, body, responseType: 'json' });
  }

  /**
   * Get Goal Template
   *
   * Retrieve full details of a specific goal template.
   *
   * `GET /lifecycle-manager/v1/goal-templates/{goal_template_id}`
   */
  get(
    goalTemplateId: string
  ): Promise<
    operations['ApiPublicV1GoalTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/goal-templates/${encodeURIComponent(goalTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Goal Template
   *
   * Modify an existing account-owned goal template.
   *
   * `PUT /lifecycle-manager/v1/goal-templates/{goal_template_id}`
   */
  update(
    goalTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1GoalTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/goal-templates/${encodeURIComponent(goalTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Goal Template
   *
   * Delete an account-owned goal template that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/goal-templates/{goal_template_id}`
   */
  delete(goalTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/goal-templates/${encodeURIComponent(goalTemplateId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `GoalTemplates.list()`. */
export interface GoalTemplatesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: cont, eq. */
    title?: FilterValue<'cont' | 'eq'>;
  };
  /** By default, follows the account setting. Use all to include hidden ScalePad goal templates. */
  visibility?: string;
}

/**
 * Goals
 *
 * Client goals and their related initiatives, meetings, and action items.
 */
export class Goals {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Goals
   *
   * List all goals to help you quickly find relevant objectives with filtering options.
   *
   * `GET /lifecycle-manager/v1/goals`
   */
  list(
    query?: GoalsListQuery
  ): Promise<operations['ApiPublicV1GoalList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1GoalList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/goals`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<GoalsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1GoalList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Goal
   *
   * Create a new goal with all necessary details to establish a measurable objective.
   *
   * `POST /lifecycle-manager/v1/goals`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1GoalCreate']['requestBody']
    >['content']['application/json']
  ): Promise<operations['ApiPublicV1GoalCreate']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1GoalCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/goals`, body, responseType: 'json' });
  }

  /**
   * Goal Create from Template
   *
   * Create a new goal from an existing goal template.
   *
   * `POST /lifecycle-manager/v1/goals/create-from/template/{goal_template_id}`
   */
  createFromTemplate(
    goalTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1GoalCreateFromTemplate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1GoalCreateFromTemplate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1GoalCreateFromTemplate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/create-from/template/${encodeURIComponent(goalTemplateId)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Goal
   *
   * Gets a goal record in Lifecycle Manager by the goal's id.
   *
   * `GET /lifecycle-manager/v1/goals/{id}`
   */
  get(
    id: string
  ): Promise<operations['ApiPublicV1GoalGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1GoalGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Goal
   *
   * Partially update goal details including title, rich-text description, status, target period, and assigned contact.
   *
   * `PATCH /lifecycle-manager/v1/goals/{id}`
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1GoalUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Goal
   *
   * Deletes a goal that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/goals/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Archive Goal
   *
   * Archive a goal while preserving its linked work for possible restoration.
   *
   * `POST /lifecycle-manager/v1/goals/{goal_id}/archive`
   */
  archive(goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/archive`,
      responseType: 'void',
    });
  }

  /**
   * Restore Goal
   *
   * Restore an archived goal so it appears in active planning again.
   *
   * `POST /lifecycle-manager/v1/goals/{goal_id}/restore`
   */
  restore(goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(goalId)}/restore`,
      responseType: 'void',
    });
  }

  /**
   * Update Goal Schedule
   *
   * Update goal target period to reflect its current state in the business workflow.
   *
   * `PUT /lifecycle-manager/v1/goals/{id}/schedule`
   */
  updateSchedule(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1GoalScheduleUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(id)}/schedule`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Goal Status
   *
   * Change goal status to reflect its current state in the business workflow.
   *
   * `PUT /lifecycle-manager/v1/goals/{id}/status`
   */
  updateStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1GoalStatusUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/goals/${encodeURIComponent(id)}/status`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Goals.list()`. */
export interface GoalsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    is_archived?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    title?: FilterValue<'cont' | 'eq'>;
    /**
     * Operators: eq, in.
     * Available values: AtRisk, Complete, OffTrack, OnHold, OnTrack.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    assigned_user_id?: FilterValue<'eq'>;
    /** Operators: eq. */
    'period.year'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'period.half'?: FilterValue<'eq'>;
    /** Operators: eq. */
    'period.quarter'?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: created_by, period.half, period.quarter, period.year, title */
  sort?: readonly SortSpec<
    'created_by' | 'period.half' | 'period.quarter' | 'period.year' | 'title'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Hardware Assets
 *
 * Hardware lifecycle, warranty, replacement, and linked planning data.
 */
export class HardwareAssets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Hardware Assets
   *
   * List hardware assets with client ownership and basic device fields. Supports query filters, free-text search, pagination, and sorting.
   *
   * `GET /lifecycle-manager/v1/assets/hardware`
   */
  list(
    query?: HardwareAssetsListQuery
  ): Promise<
    operations['ApiPublicV1AssetsHardwareList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<HardwareAssetsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsHardwareList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * List Agreements Attached to Hardware
   *
   * List Hardware Asset Attached Agreements
   *
   * `POST /lifecycle-manager/v1/assets/hardware/attached-agreements/lookup`
   */
  listAttachedAgreements(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareAttachedAgreements']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsHardwareAttachedAgreements']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareAttachedAgreements']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/attached-agreements/lookup`,
      body,
      responseType: 'json',
    });
  }

  /**
   * List Initiatives Attached to Hardware
   *
   * Retrieve the initiatives attached to a hardware asset identified by its unique key.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/attached-initiatives/lookup`
   */
  listAttachedInitiatives(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareAttachedInitiatives']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsHardwareAttachedInitiatives']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareAttachedInitiatives']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/attached-initiatives/lookup`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Hardware Summary
   *
   * Get account- or client-scoped hardware totals, replacement due and soon counts, and warranty expired and soon counts.
   *
   * `GET /lifecycle-manager/v1/assets/hardware/dashboard`
   */
  getSummary(
    query?: HardwareAssetsGetSummaryQuery
  ): Promise<
    operations['ApiPublicV1AssetsHardwareDashboardSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareDashboardSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware/dashboard`,
      query,
      responseType: 'json',
    });
  }

  /**
   * List active hardware lifecycle records
   *
   * Retrieves a list of active hardware lifecycle records from Lifecycle Manager.
   * The returned data includes basic device information, such as model and serial number, as well as purchase date and warranty expiry metadata.
   * Supports optional filtering by client ID and serial number to narrow down results.
   *
   * `GET /lifecycle-manager/v1/assets/hardware/lifecycles`
   */
  listActiveLifecycleRecords(
    query?: HardwareAssetsListActiveLifecycleRecordsQuery
  ): Promise<
    operations['ApiPublicV1AssetsHardwareLifecycles']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareLifecycles']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware/lifecycles`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listActiveLifecycleRecords()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listActiveLifecycleRecordsAll(
    query?: Omit<HardwareAssetsListActiveLifecycleRecordsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsHardwareLifecycles']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listActiveLifecycleRecords({ ...query, cursor }));
  }

  /**
   * Get Hardware Asset Metadata
   *
   * Get hardware asset list metadata available to the authenticated account or client scope.
   *
   * `GET /lifecycle-manager/v1/assets/hardware/metadata`
   */
  getMetadata(
    query?: HardwareAssetsGetMetadataQuery
  ): Promise<
    operations['ApiPublicV1AssetsHardwareMetadataGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareMetadataGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware/metadata`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Retrieve Hardware Asset Overview
   *
   * Retrieve a hardware asset overview for a hardware asset id or unique key, including summary, warranty context, integrations, and lightweight navigation hints.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/overview`
   */
  getOverview(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareOverview']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsHardwareOverview']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareOverview']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/overview`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update Hardware Replacement Costs
   *
   * Set or clear the estimated replacement cost for one or more hardware assets identified by Core API id or unique key.
   *
   * `PUT /lifecycle-manager/v1/assets/hardware/replacement-cost`
   */
  updateReplacementCosts(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareReplacementCostUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assets/hardware/replacement-cost`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Hardware Asset Sources
   *
   * Retrieve resolved hardware details and ordered source rows for a hardware asset Core API id.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/sources`
   */
  getSources(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareSourcesGet']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsHardwareSourcesGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareSourcesGet']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/sources`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update Hardware Asset Type
   *
   * Update the report asset type for one or more hardware assets identified by Core API id or unique key. Assigning a different type clears each asset's replacement cost override so it takes the new type's value; re-assigning the type an asset already has leaves the override intact.
   *
   * `PUT /lifecycle-manager/v1/assets/hardware/type`
   */
  updateType(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareTypeUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assets/hardware/type`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Hardware Asset Visibility
   *
   * Hide one or more hardware assets from reports, or restore them to reports, identified by Core API id or unique key.
   *
   * `PUT /lifecycle-manager/v1/assets/hardware/visibility`
   */
  updateVisibility(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareVisibilityUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assets/hardware/visibility`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Hardware Asset Overrides
   *
   * Patch manual hardware asset values by Core API ID
   *
   * `PATCH /lifecycle-manager/v1/assets/hardware/{hardware_asset_id}/overrides`
   */
  updateOverrides(
    hardwareAssetId: string,
    body: NonNullable<
      operations['ApiPublicV1HardwareAssetOverridesPatch']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/assets/hardware/${encodeURIComponent(hardwareAssetId)}/overrides`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `HardwareAssets.list()`. */
export interface HardwareAssetsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, gt, gte, lt, lte. */
    age?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    assignedenduser?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'client.license'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    configuredbackup?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    hasscalepadwarranty?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    initiativecount?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    installedsoftware?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    installedsoftwarecategory?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    integrationsources?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'manufacturer.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    memory?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    processor?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'site.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    storage?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    unsupportedoperatingsystem?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    warranty?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    warrantycoverage?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    windows11cpucompatibility?: FilterValue<'eq' | 'in'>;
  };
  /** Free-text search applied across the console's searchable fields. */
  search?: string;
  /** Optional Core API client ID used to limit results to one client. Omit to search across accessible clients. */
  client_id?: string;
  /** Optional operator per filter key. Supported operators are published by each console filter metadata endpoint. */
  filter_operator?: Record<string, string | null | undefined>;
  /** Optional multi-select matching mode per filter key. Supported values are published by each console filter metadata endpoint. */
  filter_selection?: Record<string, string | null | undefined>;
  /** Number of records to return in a single page. Defaults to 50. */
  page_size?: number;
  /** Cursor of the page to return. Omit for the first page, then pass the next_cursor value from the previous response. */
  cursor?: string;
  /** One or more sortable fields, separated by commas. Prefix with + to sort ascending or - to sort descending. */
  sort?: readonly SortSpec[];
}

/** Query parameters for `HardwareAssets.getSummary()`. */
export interface HardwareAssetsGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
}

/** Query parameters for `HardwareAssets.listActiveLifecycleRecords()`. */
export interface HardwareAssetsListActiveLifecycleRecordsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /** Operators: eq. */
    serial_number?: FilterValue<'eq'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** The pointer used to fetch a certain page of records */
  cursor?: string;
}

/** Query parameters for `HardwareAssets.getMetadata()`. */
export interface HardwareAssetsGetMetadataQuery {
  /** Optional Core API client ID used to return metadata available for one client. */
  client_id?: string;
}

/**
 * Hardware Configuration
 *
 * Hardware custom fields and reporting configuration.
 */
export class HardwareConfiguration {
  constructor(private readonly http: HttpClient) {}

  /**
   * List hardware custom field definitions.
   *
   * List account-level hardware custom field definitions.
   *
   * `GET /lifecycle-manager/v1/assets/hardware/custom-fields`
   */
  listCustomFieldDefinitions(): Promise<
    operations['ApiPublicV1HardwareCustomFieldList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1HardwareCustomFieldList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields`,
      responseType: 'json',
    });
  }

  /**
   * Create a hardware custom field definition.
   *
   * Create an account-level hardware custom field definition.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/custom-fields`
   */
  createCustomFieldDefinition(
    body: NonNullable<
      operations['ApiPublicV1HardwareCustomFieldCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1HardwareCustomFieldCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1HardwareCustomFieldCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update a hardware custom field definition.
   *
   * Update an account-level hardware custom field definition.
   *
   * `PUT /lifecycle-manager/v1/assets/hardware/custom-fields/{hardware_custom_field_id}`
   */
  updateCustomFieldDefinition(
    hardwareCustomFieldId: string,
    body: NonNullable<
      operations['ApiPublicV1HardwareCustomFieldUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields/${encodeURIComponent(hardwareCustomFieldId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete a hardware custom field definition.
   *
   * Permanently delete an account-level hardware custom field definition and all of its values.
   *
   * `DELETE /lifecycle-manager/v1/assets/hardware/custom-fields/{hardware_custom_field_id}`
   */
  deleteCustomFieldDefinition(hardwareCustomFieldId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields/${encodeURIComponent(hardwareCustomFieldId)}`,
      responseType: 'void',
    });
  }

  /**
   * Assign Hardware Custom Field Value
   *
   * Assign a typed hardware custom field value to one or more hardware assets.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/custom-fields/{hardware_custom_field_id}/values/assign`
   */
  assignCustomFieldValue(
    hardwareCustomFieldId: string,
    body: NonNullable<
      operations['ApiPublicV1HardwareCustomFieldValueAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields/${encodeURIComponent(hardwareCustomFieldId)}/values/assign`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unassign Hardware Custom Field Value
   *
   * Remove one hardware custom field value from one or more hardware assets.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/custom-fields/{hardware_custom_field_id}/values/unassign`
   */
  unassignCustomFieldValue(
    hardwareCustomFieldId: string,
    body: NonNullable<
      operations['ApiPublicV1HardwareCustomFieldValueUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/custom-fields/${encodeURIComponent(hardwareCustomFieldId)}/values/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Hardware Reports
 *
 * Hardware exports and lifecycle-report availability and downloads.
 */
export class HardwareReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Download hardware CSV export
   *
   * Download hardware asset data as a CSV file, preserving the requested column order.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/export/csv`
   */
  exportCsv(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareExportCsv']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/export/csv`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download previous Hardware spreadsheet
   *
   * Download the previous hardware spreadsheet export. This legacy export does not use customized filters or columns.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/export/legacy/xlsx`
   */
  exportLegacyXlsx(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareLegacyExportXlsx']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/export/legacy/xlsx`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download hardware PDF export
   *
   * Download hardware asset data as a PDF report, preserving the requested column order.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/export/pdf`
   */
  exportPdf(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareExportPdf']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/export/pdf`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download hardware XLSX export
   *
   * Download hardware asset data as an XLSX spreadsheet, preserving the requested column order.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/export/xlsx`
   */
  exportXlsx(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareExportXlsx']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/export/xlsx`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Get Hardware Lifecycle Report Availability
   *
   * Get whether a client has devices that match hardware lifecycle report criteria.
   *
   * `GET /lifecycle-manager/v1/assets/hardware/lifecycle-report/availability`
   */
  getLifecycleAvailability(
    query?: HardwareReportsGetLifecycleAvailabilityQuery
  ): Promise<
    operations['ApiPublicV1AssetsHardwareLifecycleReportAvailabilityGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsHardwareLifecycleReportAvailabilityGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/hardware/lifecycle-report/availability`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Download Hardware Lifecycle Report PDF
   *
   * Download a client's hardware lifecycle PDF report with the client's configured lifecycle report settings.
   *
   * `POST /lifecycle-manager/v1/assets/hardware/lifecycle-report/pdf`
   */
  downloadLifecyclePdf(
    body: NonNullable<
      operations['ApiPublicV1AssetsHardwareLifecycleReportPdf']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/hardware/lifecycle-report/pdf`,
      body,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `HardwareReports.getLifecycleAvailability()`. */
export interface HardwareReportsGetLifecycleAvailabilityQuery {
  /** Core API client ID. */
  client_id?: string;
}

/**
 * Hardware Types
 *
 * Account hardware types and client-specific replacement policies.
 */
export class HardwareTypes {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Hardware Types
   *
   * List the hardware types configured for the account, including the application defaults and the account's own types, with their replacement criteria.
   *
   * `GET /lifecycle-manager/v1/assets/types`
   */
  list(): Promise<
    operations['ApiPublicV1AssetsTypesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsTypesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/assets/types`, responseType: 'json' });
  }

  /**
   * Create Hardware Type
   *
   * Create a hardware type for the account, with the replacement criteria it should start with.
   *
   * `POST /lifecycle-manager/v1/assets/types`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1AssetsTypesCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsTypesCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsTypesCreate']['responses'][201]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/assets/types`, body, responseType: 'json' });
  }

  /**
   * Get Hardware Type
   *
   * Get a hardware type with effective replacement settings and asset usage.
   *
   * `GET /lifecycle-manager/v1/assets/types/{id}`
   */
  get(
    id: string
  ): Promise<
    operations['ApiPublicV1AssetsTypesGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsTypesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/types/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Delete Hardware Type
   *
   * Delete an unused account-created hardware type.
   *
   * `DELETE /lifecycle-manager/v1/assets/types/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/assets/types/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Reassign Hardware to Another Type
   *
   * Reassign this account’s hardware to another type.
   *
   * `POST /lifecycle-manager/v1/assets/types/{id}/reassign`
   */
  reassign(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssetsTypesReassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/types/${encodeURIComponent(id)}/reassign`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Hardware Type Replacement Settings
   *
   * Patch the account-wide replacement settings of one asset type.
   *
   * `PATCH /lifecycle-manager/v1/assets/types/{id}/replacement`
   */
  updateReplacementSettings(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1AssetsTypesReplacementPatch']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1AssetsTypesReplacementPatch']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsTypesReplacementPatch']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/assets/types/${encodeURIComponent(id)}/replacement`,
      body,
      responseType: 'json',
    });
  }

  /**
   * List Client Types
   *
   * List hardware types with effective replacement settings for a client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/types`
   */
  listForClient(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientTypesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientTypesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/types`,
      responseType: 'json',
    });
  }

  /**
   * Get Client Type
   *
   * Get one hardware type with effective replacement settings for a client.
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/types/{id}`
   */
  getForClient(
    clientId: string,
    id: string
  ): Promise<
    operations['ApiPublicV1ClientTypeGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientTypeGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/types/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Patch client asset type replacement settings
   *
   * Override the replacement settings of one asset type for one client.
   *
   * `PATCH /lifecycle-manager/v1/clients/{client_id}/types/{id}/replacement`
   */
  updateClientReplacementSettings(
    clientId: string,
    id: string,
    body: NonNullable<
      operations['ApiPublicV1ClientTypeReplacementPatch']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ClientTypeReplacementPatch']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientTypeReplacementPatch']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/types/${encodeURIComponent(id)}/replacement`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Clear client asset type replacement settings
   *
   * Clear one client's override of an asset type's replacement settings.
   *
   * `DELETE /lifecycle-manager/v1/clients/{client_id}/types/{id}/replacement`
   */
  clearClientReplacementSettings(clientId: string, id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/types/${encodeURIComponent(id)}/replacement`,
      responseType: 'void',
    });
  }
}

/**
 * Inbox
 *
 * Inbox notifications, product updates, read state, and notification settings.
 */
export class Inbox {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Inbox Notifications
   *
   * Retrieve delivered Inbox notifications for the authenticated user, newest first. The default page size is 50 and the maximum is 200. The cursor is opaque; omit it for the first page and pass the next_cursor value from the previous response. Pagination is best effort and may skip or repeat records when the inbox changes. The optional search matches the actor name, the captured text, and the current record and client names, ignoring case and accents.
   *
   * `GET /lifecycle-manager/v1/inbox/notifications`
   */
  listNotifications(
    query?: InboxListNotificationsQuery
  ): Promise<
    operations['ApiPublicV1InboxNotificationList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/inbox/notifications`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listNotifications()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listNotificationsAll(
    query?: Omit<InboxListNotificationsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1InboxNotificationList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listNotifications({ ...query, cursor }));
  }

  /**
   * Mark All Inbox Notifications Read
   *
   * Mark all currently delivered Inbox notifications read, including unloaded pages. Notifications arriving after the operation starts remain unread. With a search, only the unread notifications the same search lists are marked read.
   *
   * `POST /lifecycle-manager/v1/inbox/notifications/read-all`
   */
  markAllNotificationsRead(
    body: NonNullable<
      operations['ApiPublicV1InboxNotificationReadAll']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InboxNotificationReadAll']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationReadAll']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/inbox/notifications/read-all`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Inbox Unread Count
   *
   * Count unread delivered Inbox notifications for the authenticated user.
   *
   * `GET /lifecycle-manager/v1/inbox/notifications/unread-count`
   */
  getUnreadCount(): Promise<
    operations['ApiPublicV1InboxNotificationUnreadCountGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationUnreadCountGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/inbox/notifications/unread-count`,
      responseType: 'json',
    });
  }

  /**
   * Mark Inbox Notification Read
   *
   * Mark an owned notification read and return its first read time. Repeated requests preserve that time.
   *
   * `POST /lifecycle-manager/v1/inbox/notifications/{inbox_notification_id}/read`
   */
  markNotificationRead(
    inboxNotificationId: string
  ): Promise<
    operations['ApiPublicV1InboxNotificationRead']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationRead']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/inbox/notifications/${encodeURIComponent(inboxNotificationId)}/read`,
      responseType: 'json',
    });
  }

  /**
   * Reply to Inbox Notification
   *
   * Reply to the stored conversation of an owned notification using current permissions, and atomically mark the notification read. The caller cannot override the reply target.
   *
   * `POST /lifecycle-manager/v1/inbox/notifications/{inbox_notification_id}/replies`
   */
  replyToNotification(
    inboxNotificationId: string,
    body: NonNullable<
      operations['ApiPublicV1InboxNotificationReplyCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InboxNotificationReplyCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationReplyCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/inbox/notifications/${encodeURIComponent(inboxNotificationId)}/replies`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Resolve Inbox Notification Destination
   *
   * Resolve an owned notification to its currently accessible conversation or mentioning record. Email-only notifications are supported; resolving never changes read state.
   *
   * `GET /lifecycle-manager/v1/inbox/notifications/{inbox_notification_id}/resolve`
   */
  resolveNotificationDestination(
    inboxNotificationId: string
  ): Promise<
    operations['ApiPublicV1InboxNotificationResolve']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxNotificationResolve']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/inbox/notifications/${encodeURIComponent(inboxNotificationId)}/resolve`,
      responseType: 'json',
    });
  }

  /**
   * List Product Updates
   *
   * List published Lifecycle Manager updates with the current user read state.
   *
   * `GET /lifecycle-manager/v1/featurebase/updates`
   */
  listProductUpdates(
    query?: InboxListProductUpdatesQuery
  ): Promise<
    operations['ApiV1FeaturebaseUpdatesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiV1FeaturebaseUpdatesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/featurebase/updates`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Mark Product Updates Read
   *
   * Mark visible product updates as read for the authenticated user.
   *
   * `POST /lifecycle-manager/v1/featurebase/updates/read`
   */
  markProductUpdatesRead(
    body: NonNullable<
      operations['ApiV1FeaturebaseUpdatesRead']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/featurebase/updates/read`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Inbox Settings
   *
   * Retrieve your notification channel preferences.
   *
   * `GET /lifecycle-manager/v1/inbox/settings`
   */
  getSettings(): Promise<
    operations['ApiPublicV1InboxSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxSettingsGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/inbox/settings`, responseType: 'json' });
  }

  /**
   * Update Inbox Settings
   *
   * Update one notification channel preference.
   *
   * `POST /lifecycle-manager/v1/inbox/settings/update`
   */
  updateSettings(
    body: NonNullable<
      operations['ApiPublicV1InboxSettingsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InboxSettingsUpdate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InboxSettingsUpdate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/inbox/settings/update`,
      body,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Inbox.listNotifications()`. */
export interface InboxListNotificationsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    read_state?: FilterValue<'eq'>;
  };
  /** Text to find in the actor name, the notification text, or the current record or client name, ignoring case and accents. Leading and trailing whitespace is ignored and a blank value is the same as none. At most 200 characters. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Inbox.listProductUpdates()`. */
export interface InboxListProductUpdatesQuery {
  page_size?: number;
  cursor?: string;
}

/**
 * Initiative Attachments
 *
 * Files uploaded to initiatives, including download and removal.
 */
export class InitiativeAttachments {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Initiative Attachments
   *
   * Retrieve all files attached to a specific initiative so MSPs can identify the supporting documents available for that roadmap item.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/attachments`
   */
  list(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeAttachmentsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeAttachmentsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/attachments`,
      responseType: 'json',
    });
  }

  /**
   * Upload an Initiative Attachment
   *
   * Upload a file attachment to an initiative so supporting material is available with the roadmap item.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/attachments`
   */
  upload(
    initiativeId: string,
    body: {
      /** The file to attach to the initiative. Supported file types: pdf, doc, docx, jpg, jpeg, png, webp, pptx, pptm, ppt, and txt. Maximum size: 25 MB. */
      file?: Blob;
    }
  ): Promise<
    operations['ApiPublicV1InitiativeAttachmentPost']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeAttachmentPost']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/attachments`,
      multipart: body as MultipartBody,
      responseType: 'json',
    });
  }

  /**
   * Delete an Initiative Attachment
   *
   * Delete a file attachment from an initiative when the supporting document is no longer relevant.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/attachments/{attachment_id}`
   */
  delete(initiativeId: string, attachmentId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/attachments/${encodeURIComponent(attachmentId)}`,
      responseType: 'void',
    });
  }

  /**
   * Retrieve initiative attachment content.
   *
   * Retrieve the content of an initiative attachment for inline preview or download.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/attachments/{attachment_id}/content`
   */
  getContent(initiativeId: string, attachmentId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/attachments/${encodeURIComponent(attachmentId)}/content`,
      responseType: 'binary',
    });
  }
}

/**
 * Initiative Configuration
 *
 * Account-wide initiative statuses, labels, and tags.
 */
export class InitiativeConfiguration {
  constructor(private readonly http: HttpClient) {}

  /**
   * Create Custom Initiative Status
   *
   * Create an account-scoped custom initiative status anchored to a built-in base status.
   *
   * `POST /lifecycle-manager/v1/initiatives/statuses/custom`
   */
  createCustomStatus(
    body: NonNullable<
      operations['ApiPublicV1InitiativeCustomStatusCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeCustomStatusCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeCustomStatusCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/statuses/custom`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Custom Initiative Status
   *
   * Delete an account-scoped custom initiative status that is no longer in use.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/statuses/custom/{custom_status_id}`
   */
  deleteCustomStatus(customStatusId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/statuses/custom/${encodeURIComponent(customStatusId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Status Labels
   *
   * Retrieve the display label configuration for all initiative statuses, including factory defaults and any account-specific overrides.
   *
   * `GET /lifecycle-manager/v1/initiatives/statuses/labels`
   */
  listStatusLabels(): Promise<
    operations['ApiPublicV1InitiativeStatusLabelList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeStatusLabelList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/statuses/labels`,
      responseType: 'json',
    });
  }

  /**
   * Update Initiative Status Label
   *
   * Set or reset the account-specific display label for an initiative status.
   *
   * `PUT /lifecycle-manager/v1/initiatives/statuses/{initiative_status_id}/label`
   */
  updateStatusLabel(
    initiativeStatusId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeStatusLabelUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/statuses/${encodeURIComponent(initiativeStatusId)}/label`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Assign Tags to Initiative
   *
   * Assign one or more account tags to an initiative to categorize it on the roadmap. Idempotent: re-assigning a tag has no additional effect.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/tags/assign`
   */
  assignTags(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTagAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tags/assign`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unassign Tags from Initiative
   *
   * Remove one or more account tags from an initiative without deleting the tags themselves.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/tags/unassign`
   */
  unassignTags(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTagUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tags/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Initiative Integrations
 *
 * Tickets, opportunities, and quotes connected to client initiatives.
 */
export class InitiativeIntegrations {
  constructor(private readonly http: HttpClient) {}

  /**
   * Attach Opportunity to Initiative
   *
   * Attach an existing PSA opportunity to an initiative so the roadmap item is connected to revenue work already tracked in the PSA.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/opportunities/{opportunity_id}`
   */
  attachOpportunity(initiativeId: string, opportunityId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/opportunities/${encodeURIComponent(opportunityId)}`,
      responseType: 'void',
    });
  }

  /**
   * Get Initiative Opportunity
   *
   * Get the PSA opportunity linked to an initiative. The response body reports Pending while a newly-created opportunity is still being created in the PSA, terminal states after creation completes, and 404 Not Found when no opportunity is linked.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/opportunity`
   */
  getOpportunity(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeOpportunityGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeOpportunityGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/opportunity`,
      responseType: 'json',
    });
  }

  /**
   * Create Initiative Opportunity
   *
   * Create a PSA opportunity for an initiative and link it. Creation is queued in the external PSA; this endpoint returns 202 Accepted with a Pending state.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/opportunity`
   */
  createOpportunity(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeOpportunityCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeOpportunityCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeOpportunityCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/opportunity`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Initiative Opportunity
   *
   * Detach the PSA opportunity associated with an initiative. The PSA opportunity itself is not deleted — only the LM-side link is removed.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/opportunity`
   */
  deleteOpportunity(initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/opportunity`,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Quotes
   *
   * List all quotes linked to a specific initiative, along with status metadata and whether the initiative client holds the quotes entitlement.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/quotes`
   */
  listQuotes(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeQuotesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeQuotesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/quotes`,
      responseType: 'json',
    });
  }

  /**
   * Get the linked PSA ticket state for an initiative
   *
   * Deprecated compatibility operation. Returns the first linked ticket state, ordered by ticket-link identifier, or 404 when no ticket is linked. Use GET `/lifecycle-manager/v1/initiatives/{initiative_id}/tickets` to retrieve all links. No retirement date is announced.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/ticket`
   *
   * @deprecated
   */
  getTicket(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeTicketGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTicketGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/ticket`,
      responseType: 'json',
    });
  }

  /**
   * Create and Link a Ticket to an Initiative
   *
   * Deprecated compatibility operation. Creates and links a PSA ticket while preserving the single-link constraint; returns 409 if a ticket is already linked. Use POST `/lifecycle-manager/v1/initiatives/{initiative_id}/tickets` for the current multi-ticket workflow. Creation returns 202 Accepted; poll the singular GET until the state is Created or Error. No retirement date is announced.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/ticket`
   *
   * @deprecated
   */
  createAndLinkTicket(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTicketLegacyCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeTicketLegacyCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTicketLegacyCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/ticket`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Detach the PSA ticket linked to an initiative
   *
   * Deprecated compatibility operation. Detaches the legacy ticket link without deleting the external PSA ticket. Use DELETE `/lifecycle-manager/v1/initiatives/{initiative_id}/tickets/{ticket_link_id}` to select a specific link. No retirement date is announced.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/ticket`
   *
   * @deprecated
   */
  detachTicket(initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/ticket`,
      responseType: 'void',
    });
  }

  /**
   * List the PSA tickets linked to an initiative
   *
   * List the current states of all PSA tickets linked to an initiative. An empty data array indicates that no tickets are linked.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/tickets`
   */
  listTicketLinks(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeTicketList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTicketList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tickets`,
      responseType: 'json',
    });
  }

  /**
   * Create and Link a Ticket to an Initiative
   *
   * Create a PSA ticket and link it to the initiative. The ticket is queued for creation in the external PSA; this endpoint returns 202 Accepted with a Pending state. Poll `GET /v1/initiatives/{initiative_id}/tickets` until the state transitions to Created or Error.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/tickets`
   */
  createTicketLink(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTicketCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeTicketCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTicketCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tickets`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Link an existing PSA ticket to an initiative
   *
   * Link an existing PSA ticket to an initiative. The ticket must already belong to the initiative's client.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/tickets`
   */
  linkExistingTicket(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTicketAttach']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeTicketAttach']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTicketAttach']['responses'][200]['content']['application/json']
    >({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tickets`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Detach one PSA ticket linked to an initiative
   *
   * Detach one PSA ticket from an initiative. The ticket itself is not deleted from the external PSA. Any pending create job for the link is cancelled.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/tickets/{ticket_link_id}`
   */
  detachTicketLink(initiativeId: string, ticketLinkId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/tickets/${encodeURIComponent(ticketLinkId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Initiative Links
 *
 * Goals, meetings, action items, assets, and assessment questions attached to initiatives.
 */
export class InitiativeLinks {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Initiative Action Items
   *
   * Retrieve all action items that are aligned with a specific initiative, enabling MSPs to track the tasks required to complete the initiative.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/action-items`
   */
  listActionItems(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeActionItemsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeActionItemsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/action-items`,
      responseType: 'json',
    });
  }

  /**
   * Attach Action Item to Initiative
   *
   * Attach an existing action item to an initiative to establish alignment between tasks and implementation efforts.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/action-items/{action_item_id}`
   */
  attachActionItem(initiativeId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Action Item from Initiative
   *
   * Detach an action item and an initiative, without deleting either entity.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/action-items/{action_item_id}`
   */
  detachActionItem(initiativeId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Assessment Questions
   *
   * Retrieve assessment questions linked to a specific initiative.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/assessment-questions`
   */
  listAssessmentQuestions(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeAssessmentQuestionsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeAssessmentQuestionsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/assessment-questions`,
      responseType: 'json',
    });
  }

  /**
   * List Initiative Assets
   *
   * Retrieve all hardware assets linked to a specific initiative as public hardware identifiers.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/assets`
   */
  listAssets(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeAssetsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeAssetsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/assets`,
      responseType: 'json',
    });
  }

  /**
   * Attach Assets to an Initiative
   *
   * Attach one or more hardware assets to an initiative by hardware identifier, optionally setting whether the initiative replaces them or is only related to them.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/assets`
   */
  attachAssets(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeAssetAttach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/assets`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Detach Assets from an Initiative
   *
   * Detach hardware assets from an initiative without deleting either entity.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/assets/detach`
   */
  detachAssets(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeAssetDetach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/assets/detach`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Links
   *
   * Retrieve all external links attached to a specific initiative so MSPs can see the supporting material referenced by that roadmap item.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/external-urls`
   */
  listExternalUrls(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeExternalUrlsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeExternalUrlsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/external-urls`,
      responseType: 'json',
    });
  }

  /**
   * Attach a Link to an Initiative
   *
   * Attach an external link to an initiative so supporting material such as a quote or proposal can be reached from the roadmap item.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/external-urls`
   */
  attachExternalUrl(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeExternalUrlPost']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeExternalUrlPost']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeExternalUrlPost']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/external-urls`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Remove a Link from an Initiative
   *
   * Remove an external link from an initiative when the referenced material is no longer relevant.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/external-urls/{external_url_id}`
   */
  removeExternalUrl(initiativeId: string, externalUrlId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/external-urls/${encodeURIComponent(externalUrlId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Goals
   *
   * Retrieve all goals that are aligned with a specific initiative, enabling visibility into how initiatives support broader business objectives.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/goals`
   */
  listGoals(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeGoalsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeGoalsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/goals`,
      responseType: 'json',
    });
  }

  /**
   * Attach Goal to Initiative
   *
   * Attach an existing goal to an initiative to establish alignment between strategic objectives and implementation efforts.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/goals/{goal_id}`
   */
  attachGoal(initiativeId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Goal from Initiative
   *
   * Detach a goal and an initiative, without deleting either entity.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/goals/{goal_id}`
   */
  detachGoal(initiativeId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Initiative Meetings
   *
   * Retrieve the meetings that are aligned with a specific initiative, enabling MSPs to track discussions and reviews related to the initiative.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/meetings`
   */
  listMeetings(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeMeetingsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeMeetingsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/meetings`,
      responseType: 'json',
    });
  }

  /**
   * Attach Meeting to Initiative
   *
   * Attach an existing meeting to an initiative to establish alignment between client discussions and implementation efforts.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/meetings/{meeting_id}`
   */
  attachMeeting(initiativeId: string, meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/meetings/${encodeURIComponent(meetingId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Meeting from Initiative
   *
   * Detach a meeting and an initiative, without deleting either entity.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{initiative_id}/meetings/{meeting_id}`
   */
  detachMeeting(initiativeId: string, meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/meetings/${encodeURIComponent(meetingId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Initiative Planning
 *
 * Initiative ownership, priority, schedule, status, and investment details.
 */
export class InitiativePlanning {
  constructor(private readonly http: HttpClient) {}

  /**
   * Update Initiative Assigned User
   *
   * Update the user assigned to an initiative.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/assigned-user`
   */
  updateAssignedUser(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdateAssignedUser']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/assigned-user`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Initiative One-Time Investments
   *
   * Revise the complete financial plan for an initiative by providing a comprehensive breakdown of all one-time costs and investments.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{id}/budget`
   */
  updateOneTimeInvestments(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdateBudget']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}/budget`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get Initiative Items
   *
   * List the complete set of one-time and recurring financial line items for an initiative.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/items`
   */
  getItems(
    initiativeId: string
  ): Promise<
    operations['ApiPublicV1InitiativeItemsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeItemsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/items`,
      responseType: 'json',
    });
  }

  /**
   * Update Initiative Items
   *
   * Replace all one-time and recurring initiative line items, including product and assigned-asset options.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{initiative_id}/items`
   */
  updateItems(
    initiativeId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeItemsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/items`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Initiative Priority
   *
   * Adjust the business priority level of an initiative to reflect its strategic importance.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{id}/priority`
   */
  updatePriority(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdatePriority']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}/priority`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Initiative Recurring Investments
   *
   * Manage the ongoing financial commitments of an initiative by updating the complete set of monthly or yearly recurring expenses.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{id}/recurring`
   */
  updateRecurringInvestments(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdateRecurring']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}/recurring`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Initiative Schedule
   *
   * Update the fiscal planning timeline for when resources will be allocated to this initiative.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{id}/schedule`
   */
  updateSchedule(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdateSchedule']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}/schedule`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Initiative Status
   *
   * Change the current status of an initiative to reflect its progress in the business workflow.
   *
   * `PUT /lifecycle-manager/v1/initiatives/{id}/status`
   */
  updateStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdateStatus']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}/status`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Initiative Reports
 *
 * Downloadable initiative reports.
 */
export class InitiativeReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Download Initiative PDF
   *
   * Download a formatted PDF of an initiative, including its executive summary, budget, recurring costs, and action items.
   *
   * `GET /lifecycle-manager/v1/initiatives/{initiative_id}/pdf`
   */
  downloadPdf(initiativeId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/pdf`,
      responseType: 'binary',
    });
  }
}

/**
 * Initiative Templates
 *
 * Reusable initiative templates used to create standardized initiatives.
 */
export class InitiativeTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Initiative Templates
   *
   * Retrieve all initiative templates available to the account, grouped by platform-provided and account-created.
   *
   * `GET /lifecycle-manager/v1/initiative-templates`
   */
  list(
    query?: InitiativeTemplatesListQuery
  ): Promise<
    operations['ApiPublicV1InitiativeTemplateList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTemplateList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiative-templates`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<InitiativeTemplatesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1InitiativeTemplateList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Initiative Template
   *
   * Create a new account-scoped initiative template with budget, recurring costs, and action items.
   *
   * `POST /lifecycle-manager/v1/initiative-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1InitiativeTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeTemplateCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTemplateCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiative-templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Initiative Template
   *
   * Retrieve a specific initiative template by its unique identifier.
   *
   * `GET /lifecycle-manager/v1/initiative-templates/{initiative_template_id}`
   */
  get(
    initiativeTemplateId: string
  ): Promise<
    operations['ApiPublicV1InitiativeTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiative-templates/${encodeURIComponent(initiativeTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Initiative Template
   *
   * Update an account-scoped initiative template's name, summary, budget, recurring costs, and action items.
   *
   * `PUT /lifecycle-manager/v1/initiative-templates/{initiative_template_id}`
   */
  update(
    initiativeTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/initiative-templates/${encodeURIComponent(initiativeTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Initiative Template
   *
   * Delete an account-scoped initiative template that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/initiative-templates/{initiative_template_id}`
   */
  delete(initiativeTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiative-templates/${encodeURIComponent(initiativeTemplateId)}`,
      responseType: 'void',
    });
  }

  /**
   * Duplicate Initiative Template
   *
   * Duplicate an initiative template into a new account-scoped copy.
   *
   * `POST /lifecycle-manager/v1/initiative-templates/{initiative_template_id}/duplicate`
   */
  duplicate(
    initiativeTemplateId: string
  ): Promise<
    operations['ApiPublicV1InitiativeTemplateDuplicate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeTemplateDuplicate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiative-templates/${encodeURIComponent(initiativeTemplateId)}/duplicate`,
      responseType: 'json',
    });
  }

  /**
   * Apply Initiative Template
   *
   * Apply an initiative template to an existing initiative, replacing its budget, recurring costs, and action items.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/template/{initiative_template_id}/apply`
   */
  apply(initiativeId: string, initiativeTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/template/${encodeURIComponent(initiativeTemplateId)}/apply`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `InitiativeTemplates.list()`. */
export interface InitiativeTemplatesListQuery {
  /** By default, follows the account setting. Use all to include hidden ScalePad initiative templates. */
  visibility?: string;
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Initiatives
 *
 * Client initiatives and their related budgets, goals, meetings, assets, tickets, opportunities, and action items.
 */
export class Initiatives {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Initiatives v2
   *
   * Retrieve a list of all strategic initiatives with filtering options.
   *
   * `GET /lifecycle-manager/v2/initiatives`
   */
  listV2(
    query?: InitiativesListV2Query
  ): Promise<
    operations['ApiPublicV2InitiativeList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV2InitiativeList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v2/initiatives`, query, responseType: 'json' });
  }

  /**
   * Every item of `listV2()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listV2All(
    query?: Omit<InitiativesListV2Query, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV2InitiativeList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listV2({ ...query, cursor }));
  }

  /**
   * List Initiatives
   *
   * Retrieve a comprehensive list of all strategic initiatives with filtering options.
   * Scheduled for removal on March 1, 2027
   *
   * `GET /lifecycle-manager/v1/initiatives`
   *
   * @deprecated
   */
  list(
    query?: InitiativesListQuery
  ): Promise<
    operations['ApiPublicV1InitiativeList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/initiatives`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   *
   * @deprecated
   */
  listAll(
    query?: Omit<InitiativesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1InitiativeList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Initiative
   *
   * Create a new strategic initiative with all necessary details to establish a program, project, or operational effort aligned with business goals.
   *
   * `POST /lifecycle-manager/v1/initiatives`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1InitiativeCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InitiativeCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/initiatives`, body, responseType: 'json' });
  }

  /**
   * Get Initiative Summary
   *
   * Retrieve counts, budget totals, and effort-hour totals for initiatives matching the supplied filters, optionally grouped by client.
   *
   * `GET /lifecycle-manager/v2/initiatives/summary`
   */
  getSummary(
    query?: InitiativesGetSummaryQuery
  ): Promise<
    operations['ApiPublicV2InitiativeSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV2InitiativeSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v2/initiatives/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Initiative
   *
   * Access complete details of a specific initiative including its budget, recurring costs, status, and all associated resources.
   *
   * `GET /lifecycle-manager/v1/initiatives/{id}`
   */
  get(
    id: string
  ): Promise<
    operations['ApiPublicV1InitiativeGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InitiativeGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Initiative
   *
   * Partially update initiative details including name, description, internal visibility, assigned contact, and estimated/actual effort hours.
   *
   * `PATCH /lifecycle-manager/v1/initiatives/{id}`
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1InitiativeUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Initiative
   *
   * Permanently remove an initiative that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/initiatives/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Archive Initiative
   *
   * Archive an initiative while preserving its linked work for possible restoration.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/archive`
   */
  archive(initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/archive`,
      responseType: 'void',
    });
  }

  /**
   * Restore Initiative
   *
   * Restore an archived initiative so it appears in active planning again.
   *
   * `POST /lifecycle-manager/v1/initiatives/{initiative_id}/restore`
   */
  restore(initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/initiatives/${encodeURIComponent(initiativeId)}/restore`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Initiatives.listV2()`. */
export interface InitiativesListV2Query {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    is_archived?: FilterValue<'eq'>;
    /** Operators: eq. */
    needs_attention?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Approved, Completed, Declined, Draft, InProgress, New, OnHold, Proposed.
     */
    status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: High, Low, Medium, None.
     */
    priority?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    scheduled?: FilterValue<'eq'>;
    /** Operators: eq. */
    scheduled_period?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'tag.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    created_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    updated_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    created_period?: FilterValue<'eq'>;
    /** Operators: eq. */
    updated_period?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Whether initiatives without a scheduled fiscal quarter are included when filtering by scheduled period. Defaults to false. */
  include_unscheduled?: boolean;
  /** Whether initiatives marked internal are included. Defaults to true. */
  include_internal?: boolean;
  /** Currency used for calculated initiative values. Available values: client, account. Defaults to client. */
  currency_scope?: components['schemas']['Initiative.Model.Public.InitiativeCurrencyScopePublicEnum'];
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: created_at, updated_at */
  sort?: readonly SortSpec<'created_at' | 'updated_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Initiatives.list()`. */
export interface InitiativesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Approved, Completed, Declined, Draft, InProgress, New, OnHold, Proposed.
     */
    status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: High, Low, Medium, None.
     */
    priority?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    scheduled?: FilterValue<'eq'>;
    /** Operators: eq. */
    scheduled_period?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'tag.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    created_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    updated_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    created_period?: FilterValue<'eq'>;
    /** Operators: eq. */
    updated_period?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: created_at, updated_at */
  sort?: readonly SortSpec<'created_at' | 'updated_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Initiatives.getSummary()`. */
export interface InitiativesGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    needs_attention?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Approved, Completed, Declined, Draft, InProgress, New, OnHold, Proposed.
     */
    status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: High, Low, Medium, None.
     */
    priority?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    scheduled?: FilterValue<'eq'>;
    /** Operators: eq. */
    scheduled_period?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'tag.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    created_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    updated_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    created_period?: FilterValue<'eq'>;
    /** Operators: eq. */
    updated_period?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Whether initiatives without a scheduled fiscal quarter are included when filtering by scheduled period. Defaults to false. */
  include_unscheduled?: boolean;
  /** Whether initiatives marked internal are included. Defaults to true. */
  include_internal?: boolean;
  /** Currency used for summary totals. Available values: client, account. Defaults to client. */
  currency_scope?: components['schemas']['Initiative.Model.Public.InitiativeCurrencyScopePublicEnum'];
  /** Optional summary grouping dimension. Available value: client. */
  group_by?: components['schemas']['Initiative.Model.Public.InitiativeSummaryGroupByPublicEnum'];
}

/**
 * Insights
 *
 * Lifecycle Manager insight summaries surfaced for client planning and prioritization.
 */
export class Insights {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Insights
   *
   * Returns the insights applicable to the requested client, assigned users' clients, clients matching the
   * segment, vertical or access group filters, or full account,
   * flattened across their categories (High-risk, Hardware modernization, Software modernization,
   * Warranty coverage, Backup monitoring, Windows 11 upgrades, Security, and user-defined). Each entry includes
   * the current broken-asset count, risk level, category metadata, asset scope, and (when available) a 30-day trend value.
   *
   * `GET /lifecycle-manager/v1/insights`
   */
  list(
    query?: InsightsListQuery
  ): Promise<operations['ApiPublicV1Insights']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1Insights']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/insights`, query, responseType: 'json' });
  }

  /**
   * Create Insight
   *
   * Create an account-owned insight from one asset type and one or more policy conditions.
   *
   * `POST /lifecycle-manager/v1/insights`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1InsightCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1InsightCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InsightCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/insights`, body, responseType: 'json' });
  }

  /**
   * List Insight Definitions
   *
   * List the insight definitions managed by the authenticated account.
   *
   * `GET /lifecycle-manager/v1/insights/definitions`
   */
  listDefinitions(): Promise<
    operations['ApiPublicV1InsightDefinitionsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InsightDefinitionsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/insights/definitions`, responseType: 'json' });
  }

  /**
   * Get Insight Create Metadata
   *
   * Retrieve the asset types, policies, operators, and values available when creating an insight.
   *
   * `GET /lifecycle-manager/v1/insights/metadata`
   */
  getCreateMetadata(): Promise<
    operations['ApiPublicV1InsightCreateMetadataGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InsightCreateMetadataGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/insights/metadata`, responseType: 'json' });
  }

  /**
   * Delete Insight
   *
   * Delete an account-owned insight that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/insights/{insight_id}`
   */
  delete(insightId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/insights/${encodeURIComponent(insightId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Insight affected assets
   *
   * List the hardware assets affected by an insight now or projected to be affected at a future date. Supports query filters, free-text search, pagination, and sorting. Only insights with a Hardware asset scope are supported.
   *
   * `GET /lifecycle-manager/v1/insights/{insight_id}/assets`
   */
  listAffectedAssets(
    insightId: string,
    query?: InsightsListAffectedAssetsQuery
  ): Promise<
    operations['ApiPublicV1InsightAssetsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1InsightAssetsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/insights/${encodeURIComponent(insightId)}/assets`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listAffectedAssets()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAffectedAssetsAll(
    insightId: string,
    query?: Omit<InsightsListAffectedAssetsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1InsightAssetsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listAffectedAssets(insightId, { ...query, cursor }));
  }

  /**
   * Download insight affected assets CSV
   *
   * Download the assets currently affected by an insight as a CSV file. Only insights with a Hardware asset scope are supported.
   *
   * `GET /lifecycle-manager/v1/insights/{insight_id}/assets/export/csv`
   */
  downloadAffectedAssetsCsv(
    insightId: string,
    query?: InsightsDownloadAffectedAssetsCsvQuery
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/insights/${encodeURIComponent(insightId)}/assets/export/csv`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Download insight forecasted assets CSV
   *
   * Download the assets projected to match an insight at a future date as a CSV file. Assets already affected today are excluded by default. Only insights with a Hardware asset scope are supported.
   *
   * `GET /lifecycle-manager/v1/insights/{insight_id}/assets/forecast/export/csv`
   */
  downloadForecastedAssetsCsv(
    insightId: string,
    query?: InsightsDownloadForecastedAssetsCsvQuery
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/insights/${encodeURIComponent(insightId)}/assets/forecast/export/csv`,
      query,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `Insights.list()`. */
export interface InsightsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
}

/** Query parameters for `Insights.listAffectedAssets()`. */
export interface InsightsListAffectedAssetsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, gt, gte, lt, lte. */
    age?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    assignedenduser?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    configuredbackup?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    installedsoftware?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    installedsoftwarecategory?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    integrationsources?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'manufacturer.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    memory?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    processor?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    storage?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, in. */
    type?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    unsupportedoperatingsystem?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    warranty?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    warrantycoverage?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    windows11cpucompatibility?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    hasscalepadwarranty?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    initiativecount?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'site.id'?: FilterValue<'eq' | 'in'>;
  };
  /** Additional insight identifiers. Assets matching any selected insight are returned. A maximum of 50 additional insight identifiers can be provided per request. */
  insight_ids?: readonly string[];
  /** Optional number of days into the future at which to evaluate the insight. When omitted, the endpoint returns assets affected today. A forecast includes assets already affected today when they are still expected to match at the future date. */
  forecast_days?: number;
  /** When true, excludes assets affected today so the response contains only assets newly projected to match at the forecast date. Requires forecast_days. */
  exclude_currently_affected?: boolean;
  /** Free-text search applied across the console's searchable fields. */
  search?: string;
  /** Optional Core API client ID used to limit results to one client. Omit to search across accessible clients. */
  client_id?: string;
  /** Optional operator per filter key. Supported operators are published by each console filter metadata endpoint. */
  filter_operator?: Record<string, string | null | undefined>;
  /** Optional multi-select matching mode per filter key. Supported values are published by each console filter metadata endpoint. */
  filter_selection?: Record<string, string | null | undefined>;
  /** Number of records to return in a single page. Defaults to 50. */
  page_size?: number;
  /** Cursor of the page to return. Omit for the first page, then pass the next_cursor value from the previous response. */
  cursor?: string;
  /** One or more sortable fields, separated by commas. Prefix with + to sort ascending or - to sort descending. */
  sort?: readonly SortSpec[];
}

/** Query parameters for `Insights.downloadAffectedAssetsCsv()`. */
export interface InsightsDownloadAffectedAssetsCsvQuery {
  /** Optional Core API client ID used to limit the export to one client. Omit to export across accessible clients. */
  client_id?: string;
}

/** Query parameters for `Insights.downloadForecastedAssetsCsv()`. */
export interface InsightsDownloadForecastedAssetsCsvQuery {
  /** Optional Core API client ID used to limit the export to one client. Omit to export across accessible clients. */
  client_id?: string;
  /** Number of days into the future at which to evaluate the insight. */
  forecast_days?: number;
  /** When true, excludes assets affected today so the CSV contains only assets newly projected to match at the forecast date. Defaults to true. Set to false to include assets already affected today when they are still expected to match. */
  exclude_currently_affected?: boolean;
}

/**
 * Legacy Contracts
 *
 * Deprecated contract compatibility operations. New integrations should use Agreements.
 */
export class LegacyContracts {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Contracts
   *
   * Deprecated. Use /v1/agreements. This endpoint is unavailable starting June 1, 2027. Retrieve a comprehensive list of all agreements overview with filtering options.
   *
   * `GET /lifecycle-manager/v1/contracts`
   *
   * @deprecated
   */
  list(
    query?: LegacyContractsListQuery
  ): Promise<
    operations['ApiPublicV1ContractsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContractsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/contracts`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   *
   * @deprecated
   */
  listAll(
    query?: Omit<LegacyContractsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1ContractsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Contract
   *
   * Deprecated. Use /v1/agreements. This endpoint is unavailable starting June 1, 2027. Create a new agreement.
   *
   * `POST /lifecycle-manager/v1/contracts`
   *
   * @deprecated
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1ContractsCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1ContractsCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContractsCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/contracts`, body, responseType: 'json' });
  }

  /**
   * Get Contract
   *
   * Deprecated. Use /v1/agreements/{agreement_id}. This endpoint is unavailable starting June 1, 2027. Access complete details of a specific agreement.
   *
   * `GET /lifecycle-manager/v1/contracts/{id}`
   *
   * @deprecated
   */
  get(
    id: string
  ): Promise<
    operations['ApiPublicV1ContractsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ContractsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/contracts/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Contract
   *
   * Deprecated. Use /v1/agreements/{agreement_id}. This endpoint is unavailable starting June 1, 2027. Update an agreement with full details.
   *
   * `PUT /lifecycle-manager/v1/contracts/{id}`
   *
   * @deprecated
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1ContractsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/contracts/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Contract
   *
   * Deprecated. Use /v1/agreements/{agreement_id}. This endpoint is unavailable starting June 1, 2027. Permanently remove an agreement that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/contracts/{id}`
   *
   * @deprecated
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/contracts/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Contract Asset Attach
   *
   * Deprecated. Use /v1/agreements/{agreement_id}/assets. This endpoint is unavailable starting June 1, 2027. Attach one or more hardware assets to an agreement by hardware identifier.
   *
   * `PUT /lifecycle-manager/v1/contracts/{contract_id}/assets`
   *
   * @deprecated
   */
  attachAssets(
    contractId: string,
    body: NonNullable<
      operations['ApiPublicV1ContractAssetAttach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/contracts/${encodeURIComponent(contractId)}/assets`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Contract Asset Bulk
   *
   * Deprecated. Use /v1/agreements/{agreement_id}/assets/delete. This endpoint is unavailable starting June 1, 2027. Detach one or more hardware assets from an agreement without deleting either entity.
   *
   * `POST /lifecycle-manager/v1/contracts/{contract_id}/assets/delete`
   *
   * @deprecated
   */
  detachAssets(
    contractId: string,
    body: NonNullable<
      operations['ApiPublicV1ContractAssetBulkDelete']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/contracts/${encodeURIComponent(contractId)}/assets/delete`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `LegacyContracts.list()`. */
export interface LegacyContractsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq.
     * Available values: Expires90Days, Expired.
     */
    expiry_status?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Licenses
 *
 * Lifecycle Manager product-license availability and assignments.
 */
export class Licenses {
  constructor(private readonly http: HttpClient) {}

  /**
   * Assign Licenses
   *
   * Assign a license of the given type to one or more clients.
   *
   * `PUT /lifecycle-manager/v1/licenses/assign`
   */
  assign(
    body: NonNullable<
      operations['ApiPublicV1LicensesAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/licenses/assign`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Get License Summary
   *
   * Get license capacity for the authenticated partner account, one entry per license type.
   *
   * `GET /lifecycle-manager/v1/licenses/summary`
   */
  getSummary(): Promise<
    operations['ApiPublicV1LicensesSummary']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1LicensesSummary']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/licenses/summary`, responseType: 'json' });
  }

  /**
   * Unassign Licenses
   *
   * Unassign licenses from one or more clients.
   *
   * `PUT /lifecycle-manager/v1/licenses/unassign`
   */
  unassign(
    body: NonNullable<
      operations['ApiPublicV1LicensesUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/licenses/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Meeting Attachments
 *
 * Files attached to client meetings.
 */
export class MeetingAttachments {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meeting Attachments
   *
   * Returns attachments uploaded to a meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/attachments`
   */
  list(
    meetingId: string,
    query?: MeetingAttachmentsListQuery
  ): Promise<
    operations['ApiPublicV1MeetingAttachmentsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingAttachmentsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/attachments`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Create Meeting Attachment
   *
   * Upload a file attachment to a meeting so supporting material is available with the meeting record.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/attachments`
   */
  create(
    meetingId: string,
    body: {
      /** The file to attach to the meeting. Supported file types: pdf, doc, docx, xlsx, jpg, jpeg, png, webp, pptx, pptm, ppt, and txt. Maximum size: 25 MB. */
      file: Blob;
      /** Whether to attach the file to this occurrence or its recurring series. */
      scope?: components['schemas']['Meeting.MeetingAttachment.Model.Public.MeetingAttachmentScopePublicEnum'];
    }
  ): Promise<
    operations['ApiPublicV1MeetingAttachmentPost']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingAttachmentPost']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/attachments`,
      multipart: body as MultipartBody,
      responseType: 'json',
    });
  }

  /**
   * Delete Meeting Attachment
   *
   * Delete a file attachment from a meeting when the supporting document is no longer relevant.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/attachments/{attachment_id}`
   */
  delete(
    meetingId: string,
    attachmentId: string,
    query?: MeetingAttachmentsDeleteQuery
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/attachments/${encodeURIComponent(attachmentId)}`,
      query,
      responseType: 'void',
    });
  }

  /**
   * Retrieve meeting attachment content.
   *
   * Retrieve the content of a meeting attachment for inline preview or download.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/attachments/{attachment_id}/content`
   */
  getContent(meetingId: string, attachmentId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/attachments/${encodeURIComponent(attachmentId)}/content`,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `MeetingAttachments.list()`. */
export interface MeetingAttachmentsListQuery {
  /** Whether to return attachments owned by this occurrence or its recurring series. */
  scope?: components['schemas']['Meeting.MeetingAttachment.Model.Public.MeetingAttachmentScopePublicEnum'];
}

/** Query parameters for `MeetingAttachments.delete()`. */
export interface MeetingAttachmentsDeleteQuery {
  /** Whether to delete an attachment owned by this occurrence or its recurring series. */
  scope?: components['schemas']['Meeting.MeetingAttachment.Model.Public.MeetingAttachmentScopePublicEnum'];
}

/**
 * Meeting Attendees
 *
 * User and contact attendance for client meetings.
 */
export class MeetingAttendees {
  constructor(private readonly http: HttpClient) {}

  /**
   * Add Meeting Contact Attendees
   *
   * Add one or more client contacts as attendees.
   *
   * `POST /lifecycle-manager/v1/meetings/{id}/attendees/contacts`
   */
  addContact(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingAttendeeContactAdd']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingAttendeeContactAdd']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingAttendeeContactAdd']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}/attendees/contacts`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Remove Meeting Contact Attendees
   *
   * Remove client contact attendees from the meeting.
   *
   * `POST /lifecycle-manager/v1/meetings/{id}/attendees/contacts/delete`
   */
  removeContact(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingAttendeeContactDelete']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}/attendees/contacts/delete`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Add Meeting User Attendees
   *
   * Add users as meeting attendees.
   *
   * `POST /lifecycle-manager/v1/meetings/{id}/attendees/users`
   */
  addUser(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingAttendeeUserAdd']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingAttendeeUserAdd']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingAttendeeUserAdd']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}/attendees/users`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Remove Meeting User Attendees
   *
   * Remove user attendees from the meeting.
   *
   * `POST /lifecycle-manager/v1/meetings/{id}/attendees/users/delete`
   */
  removeUser(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingAttendeeUserDelete']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}/attendees/users/delete`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Meeting Integrations
 *
 * Ticket workflows connected to client meetings.
 */
export class MeetingIntegrations {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get the linked PSA ticket state for a Meeting
   *
   * Get the current state of the PSA ticket linked to a meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/ticket`
   */
  getTicket(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingTicketGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTicketGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/ticket`,
      responseType: 'json',
    });
  }

  /**
   * Create and Link a Ticket to a Meeting
   *
   * Create a PSA ticket and link it to the meeting. The ticket is queued for creation in the external PSA; this endpoint returns 202 Accepted with a Pending state.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/ticket`
   */
  createAndLinkTicket(
    meetingId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingTicketCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingTicketCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTicketCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/ticket`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Detach the PSA ticket linked to a Meeting
   *
   * Detach the PSA ticket associated with a meeting without deleting the ticket from the external PSA.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/ticket`
   */
  detachTicket(meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/ticket`,
      responseType: 'void',
    });
  }
}

/**
 * Meeting Links
 *
 * Initiatives, goals, action items, deliverables, and notes attached to meetings.
 */
export class MeetingLinks {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meeting Action Items
   *
   * Retrieve all action items created during or linked to a specific meeting, enabling MSPs to track follow-ups and tasks resulting from client discussions.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/action-items`
   */
  listActionItems(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingActionItemsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingActionItemsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/action-items`,
      responseType: 'json',
    });
  }

  /**
   * Attach Action Item to Meeting
   *
   * Attach an existing action item to a meeting to include it as a discussion topic or tracked deliverable from the meeting.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/action-items/{action_item_id}`
   */
  attachActionItem(meetingId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Action Item from Meeting
   *
   * Detach an action item and a meeting without deleting the action item itself, allowing the task to exist independently.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/action-items/{action_item_id}`
   */
  detachActionItem(meetingId: string, actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/action-items/${encodeURIComponent(actionItemId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Meeting Deliverables
   *
   * Retrieve the IDs of deliverables that have been attached to a meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/deliverables`
   */
  listDeliverables(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingDeliverablesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingDeliverablesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/deliverables`,
      responseType: 'json',
    });
  }

  /**
   * Attach Deliverable to Meeting
   *
   * Attach one or more deliverables to a meeting so they are available during the client conversation.
   *
   * `PUT /lifecycle-manager/v1/meetings/{meeting_id}/deliverables/attach`
   */
  attachDeliverable(
    meetingId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingDeliverableAttach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/deliverables/attach`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Detach Deliverable from Meeting
   *
   * Detach one or more deliverables from a meeting without deleting the deliverables themselves.
   *
   * `PUT /lifecycle-manager/v1/meetings/{meeting_id}/deliverables/detach`
   */
  detachDeliverable(
    meetingId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingDeliverableDetach']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/deliverables/detach`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Meeting Goals
   *
   * Retrieve all goals that have been attached to a meeting, showing which business objectives will be discussed or reviewed.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/goals`
   */
  listGoals(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingGoalsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingGoalsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/goals`,
      responseType: 'json',
    });
  }

  /**
   * Attach Goal to Meeting
   *
   * Attach an existing goal to a meeting to include it as a discussion topic on the meeting agenda.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/goals/{goal_id}`
   */
  attachGoal(meetingId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Goal from Meeting
   *
   * Detach a goal and a meeting without deleting the goal itself, removing it from the meeting agenda.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/goals/{goal_id}`
   */
  detachGoal(meetingId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Meeting Initiatives
   *
   * Retrieve the IDs of initiatives that have been attached to a meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/initiatives`
   */
  listInitiatives(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingInitiativesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingInitiativesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/initiatives`,
      responseType: 'json',
    });
  }

  /**
   * Attach Initiative to Meeting
   *
   * Attach an existing initiative to a meeting to include it as a discussion topic on the meeting agenda.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/initiatives/{initiative_id}`
   */
  attachInitiative(meetingId: string, initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/initiatives/${encodeURIComponent(initiativeId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Initiative from Meeting
   *
   * Detach an initiative and a meeting without deleting the initiative itself, removing it from the meeting agenda.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/initiatives/{initiative_id}`
   */
  detachInitiative(meetingId: string, initiativeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/initiatives/${encodeURIComponent(initiativeId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Meeting Notes
   *
   * Retrieve the note linked to a meeting so meeting discussion context can be reviewed and updated.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/notes`
   */
  listNotes(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingNotesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingNotesList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/notes`,
      responseType: 'json',
    });
  }

  /**
   * Attach Note to Meeting
   *
   * Attach an existing note to a meeting so the meeting can include the note as preparation material or follow-up context.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/notes/{note_id}`
   */
  attachNote(meetingId: string, noteId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/notes/${encodeURIComponent(noteId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Note from Meeting
   *
   * Detach a note from a meeting without deleting the note itself.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/notes/{note_id}`
   */
  detachNote(meetingId: string, noteId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/notes/${encodeURIComponent(noteId)}`,
      responseType: 'void',
    });
  }

  /**
   * List Meeting Series Goals
   *
   * Retrieve goals attached to the recurring series for a meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{meeting_id}/series/goals`
   */
  listSeriesGoals(
    meetingId: string
  ): Promise<
    operations['ApiPublicV1MeetingSeriesGoalsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSeriesGoalsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/series/goals`,
      responseType: 'json',
    });
  }

  /**
   * Attach Goal to Meeting Series
   *
   * Attach a goal to a recurring meeting series.
   *
   * `POST /lifecycle-manager/v1/meetings/{meeting_id}/series/goals/{goal_id}`
   */
  attachGoalToSeries(meetingId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/series/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }

  /**
   * Detach Goal from Meeting Series
   *
   * Detach a goal from a recurring meeting series without deleting the goal.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/series/goals/{goal_id}`
   */
  detachGoalFromSeries(meetingId: string, goalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/series/goals/${encodeURIComponent(goalId)}`,
      responseType: 'void',
    });
  }
}

/** Meeting Policies */
export class MeetingPolicies {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meeting Policies
   *
   * Retrieve all meeting policies configured for the authenticated account.
   *
   * `GET /lifecycle-manager/v1/meeting-policies`
   */
  list(): Promise<
    operations['ApiPublicV1MeetingPolicyList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingPolicyList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/meeting-policies`, responseType: 'json' });
  }

  /**
   * Create Meeting Policy
   *
   * Create a meeting policy for the authenticated account.
   *
   * `POST /lifecycle-manager/v1/meeting-policies`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1MeetingPolicyCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingPolicyCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingPolicyCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meeting-policies`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Meeting Policy Compliance Summary
   *
   * Summarize meeting-policy compliance across the clients visible to the authenticated user.
   *
   * `GET /lifecycle-manager/v1/meeting-policies/compliance/summary`
   */
  getComplianceSummary(
    query?: MeetingPoliciesGetComplianceSummaryQuery
  ): Promise<
    operations['ApiPublicV1MeetingPolicyComplianceSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingPolicyComplianceSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meeting-policies/compliance/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Meeting Policy
   *
   * Retrieve a meeting policy by its unique identifier.
   *
   * `GET /lifecycle-manager/v1/meeting-policies/{meeting_policy_id}`
   */
  get(
    meetingPolicyId: string
  ): Promise<
    operations['ApiPublicV1MeetingPolicyGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingPolicyGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meeting-policies/${encodeURIComponent(meetingPolicyId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Meeting Policy
   *
   * Fully replace an existing meeting policy.
   *
   * `PUT /lifecycle-manager/v1/meeting-policies/{meeting_policy_id}`
   */
  update(
    meetingPolicyId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingPolicyUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meeting-policies/${encodeURIComponent(meetingPolicyId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Meeting Policy
   *
   * Delete a meeting policy that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/meeting-policies/{meeting_policy_id}`
   */
  delete(meetingPolicyId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meeting-policies/${encodeURIComponent(meetingPolicyId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `MeetingPolicies.getComplianceSummary()`. */
export interface MeetingPoliciesGetComplianceSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
}

/**
 * Meeting Sync
 *
 * Calendar synchronization connections, settings, events, and commands.
 */
export class MeetingSync {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Meeting Sync
   *
   * Get the current user's Microsoft Outlook meeting sync status.
   *
   * `GET /lifecycle-manager/v1/meetings/sync`
   */
  get(
    query?: MeetingSyncGetQuery
  ): Promise<
    operations['ApiPublicV1MeetingSyncGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSyncGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/meetings/sync`, query, responseType: 'json' });
  }

  /**
   * Create Meeting Sync Command
   *
   * Execute a Microsoft Outlook meeting sync command.
   *
   * `POST /lifecycle-manager/v1/meetings/sync`
   */
  createCommand(
    body: NonNullable<
      operations['ApiPublicV1MeetingSyncCommandPost']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingSyncCommandPost']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSyncCommandPost']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/meetings/sync`, body, responseType: 'json' });
  }

  /**
   * Get Meeting Sync Attention
   *
   * List the current user's meetings and series whose calendar sync needs attention.
   *
   * `GET /lifecycle-manager/v1/meetings/sync/attention`
   */
  getAttention(
    query?: MeetingSyncGetAttentionQuery
  ): Promise<
    operations['ApiPublicV1MeetingSyncAttentionGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSyncAttentionGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/sync/attention`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `getAttention()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  getAttentionAll(
    query?: Omit<MeetingSyncGetAttentionQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1MeetingSyncAttentionGet']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.getAttention({ ...query, cursor }));
  }

  /**
   * Create Meeting Sync Connection
   *
   * Enable Outlook meeting sync using the current user shared Microsoft 365 connection.
   *
   * `POST /lifecycle-manager/v1/meetings/sync/connection`
   */
  createConnection(
    body: NonNullable<
      operations['ApiPublicV1MeetingSyncConnectionPost']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingSyncConnectionPost']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSyncConnectionPost']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meetings/sync/connection`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Meeting Sync Connection
   *
   * Disconnect the current user's Microsoft Outlook meeting sync connection.
   *
   * `DELETE /lifecycle-manager/v1/meetings/sync/connection`
   */
  deleteConnection(): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/sync/connection`,
      responseType: 'void',
    });
  }

  /**
   * Get Meeting Sync Events
   *
   * List Outlook calendar events available for Meeting import or linking.
   *
   * `GET /lifecycle-manager/v1/meetings/sync/events`
   */
  getEvents(
    query?: MeetingSyncGetEventsQuery
  ): Promise<
    operations['ApiPublicV1MeetingSyncEventsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingSyncEventsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/sync/events`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Update Meeting Sync Settings
   *
   * Update account-level defaults for Microsoft Outlook meeting sync.
   *
   * `PUT /lifecycle-manager/v1/meetings/sync/settings`
   */
  updateSettings(
    body: NonNullable<
      operations['ApiPublicV1MeetingSyncSettingsPut']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meetings/sync/settings`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `MeetingSync.get()`. */
export interface MeetingSyncGetQuery {
  meeting_id?: string;
}

/** Query parameters for `MeetingSync.getAttention()`. */
export interface MeetingSyncGetAttentionQuery {
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `MeetingSync.getEvents()`. */
export interface MeetingSyncGetEventsQuery {
  start?: string | Date;
  end?: string | Date;
  cursor?: string;
  page_size?: number;
  client_id?: string;
}

/** Meeting Templates */
export class MeetingTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meeting Templates
   *
   * Retrieve all meeting templates available to the authenticated account.
   *
   * `GET /lifecycle-manager/v1/meeting-templates`
   */
  list(): Promise<
    operations['ApiPublicV1MeetingTemplateList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTemplateList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/meeting-templates`, responseType: 'json' });
  }

  /**
   * Create Meeting Template
   *
   * Create a reusable meeting template for the authenticated account.
   *
   * `POST /lifecycle-manager/v1/meeting-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1MeetingTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingTemplateCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTemplateCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/meeting-templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update Meeting Template
   *
   * Replace the reusable details of an account-owned meeting template.
   *
   * `PUT /lifecycle-manager/v1/meeting-templates/{meeting_template_id}`
   */
  update(
    meetingTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meeting-templates/${encodeURIComponent(meetingTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Meeting Template
   *
   * Delete an account-owned meeting template that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/meeting-templates/{meeting_template_id}`
   */
  delete(meetingTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meeting-templates/${encodeURIComponent(meetingTemplateId)}`,
      responseType: 'void',
    });
  }

  /**
   * Assign Meeting Template Attendee User
   *
   * Assign account users as default meeting template attendees.
   *
   * `POST /lifecycle-manager/v1/meeting-templates/{meeting_template_id}/attendees/users/assign`
   */
  assignAttendeeUser(
    meetingTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingTemplateAttendeeUserAssign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meeting-templates/${encodeURIComponent(meetingTemplateId)}/attendees/users/assign`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unassign Meeting Template Attendee User
   *
   * Unassign default user attendees from a meeting template.
   *
   * `POST /lifecycle-manager/v1/meeting-templates/{meeting_template_id}/attendees/users/unassign`
   */
  unassignAttendeeUser(
    meetingTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingTemplateAttendeeUserUnassign']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/meeting-templates/${encodeURIComponent(meetingTemplateId)}/attendees/users/unassign`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Meeting Types
 *
 * Meeting type configuration used to classify Lifecycle Manager meetings.
 */
export class MeetingTypes {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meeting Types
   *
   * List all Meeting Types currently available.
   *
   * `GET /lifecycle-manager/v1/meeting-types`
   */
  list(): Promise<
    operations['ApiPublicV1MeetingTypeList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTypeList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/meeting-types`, responseType: 'json' });
  }

  /**
   * Create Meeting Type
   *
   * Create a new Meeting Type with a label.
   *
   * `POST /lifecycle-manager/v1/meeting-types`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1MeetingTypeCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingTypeCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingTypeCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/meeting-types`, body, responseType: 'json' });
  }

  /**
   * Update Meeting Type
   *
   * Update a Meeting Type's label.
   *
   * `PUT /lifecycle-manager/v1/meeting-types/{meeting_type_id}`
   */
  update(
    meetingTypeId: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingTypeUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meeting-types/${encodeURIComponent(meetingTypeId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Meeting Type
   *
   * Deletes a Meeting Type that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/meeting-types/{meeting_type_id}`
   */
  delete(meetingTypeId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meeting-types/${encodeURIComponent(meetingTypeId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Meetings
 *
 * Client meetings, attendees, completion status, and linked work items.
 */
export class Meetings {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Meetings
   *
   * Retrieve a comprehensive list of all client meetings with filtering options.
   *
   * `GET /lifecycle-manager/v1/meetings`
   */
  list(
    query?: MeetingsListQuery
  ): Promise<
    operations['ApiPublicV1MeetingList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/meetings`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<MeetingsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1MeetingList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Meeting v1
   *
   * Schedule a new client meeting.
   * Scheduled for removal on March 1, 2027
   *
   * `POST /lifecycle-manager/v1/meetings`
   *
   * @deprecated
   */
  createV1(
    body: NonNullable<
      operations['ApiPublicV1MeetingCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1MeetingCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1MeetingCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/meetings`, body, responseType: 'json' });
  }

  /**
   * Create Meeting
   *
   * Schedule a new client meeting.
   *
   * `POST /lifecycle-manager/v2/meetings`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV2MeetingCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV2MeetingCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV2MeetingCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v2/meetings`, body, responseType: 'json' });
  }

  /**
   * Get Meeting
   *
   * Access complete details of a specific meeting.
   *
   * `GET /lifecycle-manager/v1/meetings/{id}`
   */
  get(
    id: string
  ): Promise<operations['ApiPublicV1MeetingGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1MeetingGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Meeting v1
   *
   * Update core information about a meeting.
   * Scheduled for removal on March 1, 2027
   *
   * `PUT /lifecycle-manager/v1/meetings/{id}`
   *
   * @deprecated
   */
  updateV1(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Meeting
   *
   * Remove a meeting that is no longer needed.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Meeting
   *
   * Update core information about a meeting.
   *
   * `PUT /lifecycle-manager/v2/meetings/{id}`
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV2MeetingUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV2MeetingUpdate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV2MeetingUpdate']['responses'][200]['content']['application/json']
    >({
      method: 'PUT',
      path: `/lifecycle-manager/v2/meetings/${encodeURIComponent(id)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Update Meeting Completion Status
   *
   * Update the completion status of a meeting.
   *
   * `PUT /lifecycle-manager/v1/meetings/{id}/completion-status`
   */
  updateCompletionStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1MeetingCompleteStatusUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(id)}/completion-status`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Meeting Series
   *
   * Permanently remove every meeting in a recurring meeting series.
   *
   * `DELETE /lifecycle-manager/v1/meetings/{meeting_id}/series`
   */
  deleteSeries(meetingId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/meetings/${encodeURIComponent(meetingId)}/series`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Meetings.list()`. */
export interface MeetingsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    starts_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq, gt, gte, lt, lte. */
    ends_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /** Operators: eq. */
    is_complete?: FilterValue<'eq'>;
    /**
     * Operators: eq, in.
     * Available values: Upcoming, OverDue, Completed.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    title?: FilterValue<'cont' | 'eq'>;
    /** Operators: eq, in. */
    'meeting_type.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'owned_by.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Searches meeting titles and client names using a case-insensitive partial match. */
  search?: string;
  /** Whether to return each meeting's attendees in `attendees`. Defaults to false. */
  include_attendees?: boolean;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: account_owner, starts_at, title */
  sort?: readonly SortSpec<'account_owner' | 'starts_at' | 'title'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Notes
 *
 * Engagement notes and note archive state for client records.
 */
export class Notes {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Notes
   *
   * Retrieve a comprehensive list of all notes with filtering options.
   *
   * `GET /lifecycle-manager/v1/notes`
   */
  list(
    query?: NotesListQuery
  ): Promise<operations['ApiPublicV1NotesList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1NotesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/notes`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<NotesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1NotesList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Note
   *
   * Create a new note for a client.
   *
   * `POST /lifecycle-manager/v1/notes`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1NotesCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1NotesCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1NotesCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/notes`, body, responseType: 'json' });
  }

  /**
   * Get Note
   *
   * Gets a note's full details.
   *
   * `GET /lifecycle-manager/v1/notes/{id}`
   */
  get(
    id: string
  ): Promise<operations['ApiPublicV1NotesGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1NotesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/notes/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Note
   *
   * Update title and description of a note.
   *
   * `PUT /lifecycle-manager/v1/notes/{id}`
   */
  update(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1NotesUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/notes/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Note
   *
   * Deletes a note.
   *
   * `DELETE /lifecycle-manager/v1/notes/{id}`
   */
  delete(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/notes/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Note Archive Status
   *
   * Mark the notes as archive or bring an archived notes back to active.
   *
   * `PUT /lifecycle-manager/v1/notes/{id}/archive-status`
   */
  updateArchiveStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1NotesArchiveStatus']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/notes/${encodeURIComponent(id)}/archive-status`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Notes.list()`. */
export interface NotesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_archived?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: created_at, title, updated_at */
  sort?: readonly SortSpec<'created_at' | 'title' | 'updated_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Opportunities
 *
 * Sales opportunity lookup data related to Lifecycle Manager initiatives.
 */
export class Opportunities {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Opportunities
   *
   * List PSA opportunities for a client.
   *
   * `GET /lifecycle-manager/v1/opportunities`
   */
  list(
    query?: OpportunitiesListQuery
  ): Promise<
    operations['ApiPublicV1OpportunitiesList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1OpportunitiesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/opportunities`, query, responseType: 'json' });
  }

  /**
   * Get Opportunity Create Fields
   *
   * Retrieve PSA opportunity create fields for a client, including integration availability and field validation metadata.
   *
   * `GET /lifecycle-manager/v1/opportunities/create-fields`
   */
  getCreateFields(
    query: OpportunitiesGetCreateFieldsQuery
  ): Promise<
    operations['ApiPublicV1OpportunityCreateFieldsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1OpportunityCreateFieldsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/opportunities/create-fields`,
      query,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Opportunities.list()`. */
export interface OpportunitiesListQuery {
  /** The unique identifier of the client whose opportunities should be listed. */
  client_id?: string;
  /** Whether inactive opportunities should be included when the integration provides them. */
  include_inactive?: boolean;
  /** Whether opportunities already linked to initiatives should be included. */
  include_linked?: boolean;
}

/** Query parameters for `Opportunities.getCreateFields()`. */
export interface OpportunitiesGetCreateFieldsQuery {
  /** The unique identifier of the client whose PSA opportunity create fields should be returned. */
  client_id: string;
}

/** Permissions */
export class Permissions {
  constructor(private readonly http: HttpClient) {}

  /**
   * List permissions
   *
   * List the Lifecycle Manager permissions available for roles and direct user grants.
   *
   * `GET /lifecycle-manager/v1/permissions`
   */
  list(): Promise<
    operations['ApiPublicV1PermissionList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1PermissionList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/permissions`, responseType: 'json' });
  }
}

/**
 * Plan
 *
 * Account and client planning summaries, saved dashboard layouts, and exports.
 */
export class Plan {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Clients At Risk From Goal Health
   *
   * Retrieve account- or client-scoped clients flagged as at risk from goal health (severity from the worst goal status present), most severe first, each with a severity and a short reason.
   *
   * `GET /lifecycle-manager/v2/goals/summary`
   */
  getGoalsSummary(
    query?: PlanGetGoalsSummaryQuery
  ): Promise<
    operations['ApiPublicV2GoalsSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV2GoalsSummaryGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v2/goals/summary`, query, responseType: 'json' });
  }

  /**
   * Get Plan Summary
   *
   * Get account- or client-scoped Plan aggregates: goal status breakdown, initiative status counts, and budget forecast by quarter.
   *
   * `GET /lifecycle-manager/v1/plan/dashboard`
   */
  getDashboard(
    query?: PlanGetDashboardQuery
  ): Promise<
    operations['ApiPublicV1PlanDashboardSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1PlanDashboardSummaryGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/plan/dashboard`, query, responseType: 'json' });
  }

  /**
   * Get Plan Configuration
   *
   * Get the saved Plan configuration for the authenticated account. Returns null when no configuration has been saved.
   *
   * `GET /lifecycle-manager/v1/plan/dashboard/layout`
   */
  getDashboardLayout(): Promise<
    operations['ApiPublicV1PlanDashboardLayoutGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1PlanDashboardLayoutGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/plan/dashboard/layout`, responseType: 'json' });
  }

  /**
   * Save Plan Configuration
   *
   * Save Plan configuration for the authenticated account. Requires the Manage Basic Settings permission.
   *
   * `PUT /lifecycle-manager/v1/plan/dashboard/layout`
   */
  updateDashboardLayout(
    body: NonNullable<
      operations['ApiPublicV1PlanDashboardLayoutSet']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1PlanDashboardLayoutSet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1PlanDashboardLayoutSet']['responses'][200]['content']['application/json']
    >({
      method: 'PUT',
      path: `/lifecycle-manager/v1/plan/dashboard/layout`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Plan Portfolio CSV
   *
   * Download Plan portfolio data for unapproved initiatives, pipeline by client, and clients at risk as a CSV file, honoring the requested client scope and date range.
   *
   * `GET /lifecycle-manager/v1/plan/export/csv`
   */
  exportPortfolioCsv(query?: PlanExportPortfolioCsvQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/plan/export/csv`,
      query,
      responseType: 'binary',
    });
  }

  /**
   * Plan Portfolio PDF
   *
   * Download a Plan portfolio PDF report containing the KPI summary and unapproved-initiatives, pipeline-by-client, and clients-at-risk data, honoring the requested client scope and date range.
   *
   * `GET /lifecycle-manager/v1/plan/export/pdf`
   */
  exportPortfolioPdf(query?: PlanExportPortfolioPdfQuery): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/plan/export/pdf`,
      query,
      responseType: 'binary',
    });
  }
}

/** Query parameters for `Plan.getGoalsSummary()`. */
export interface PlanGetGoalsSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, gt, gte, lt, lte.
     * Repeatable: pass an array to send several clauses.
     */
    created_at?:
      | FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>
      | readonly FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
}

/** Query parameters for `Plan.getDashboard()`. */
export interface PlanGetDashboardQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    assigned_user_id?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, gt, gte, lt, lte.
     * Repeatable: pass an array to send several clauses.
     */
    created_at?:
      | FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>
      | readonly FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Include the legacy embedded budget forecast. Defaults to true for compatibility; consumers that call the Budget Summary resource separately can set this to false. */
  include_budget?: boolean;
}

/** Query parameters for `Plan.exportPortfolioCsv()`. */
export interface PlanExportPortfolioCsvQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /**
     * Operators: eq, gt, gte, lt, lte.
     * Repeatable: pass an array to send several clauses.
     */
    created_at?:
      | FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>
      | readonly FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>[];
  };
}

/** Query parameters for `Plan.exportPortfolioPdf()`. */
export interface PlanExportPortfolioPdfQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    client_id?: FilterValue<'eq'>;
    /**
     * Operators: eq, gt, gte, lt, lte.
     * Repeatable: pass an array to send several clauses.
     */
    created_at?:
      | FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>
      | readonly FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>[];
  };
}

/**
 * Products
 *
 * Products available for agreement and contract workflows.
 */
export class Products {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Products
   *
   * List Lifecycle Manager products imported from Core product catalog and agreement pricing data.
   *
   * `GET /lifecycle-manager/v1/products`
   */
  list(
    query?: ProductsListQuery
  ): Promise<
    operations['ApiPublicV1ProductsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ProductsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/products`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<ProductsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1ProductsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Products
   *
   * Access a Lifecycle Manager product by its public product id.
   *
   * `GET /lifecycle-manager/v1/products/{id}`
   */
  get(
    id: string
  ): Promise<
    operations['ApiPublicV1ProductsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ProductsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/products/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `Products.list()`. */
export interface ProductsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    source_system?: FilterValue<'eq'>;
    /** Operators: eq. */
    source_product_identifier?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_active?: FilterValue<'eq'>;
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Quotes */
export class Quotes {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Quotes
   *
   * List all Quoter quotes to help you quickly find relevant quotes, with filtering by client, name, and status.
   *
   * `GET /lifecycle-manager/v1/quotes`
   */
  list(
    query?: QuotesListQuery
  ): Promise<operations['ApiPublicV1QuoteList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1QuoteList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/quotes`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<QuotesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1QuoteList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }
}

/** Query parameters for `Quotes.list()`. */
export interface QuotesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: cont, eq. */
    name?: FilterValue<'cont' | 'eq'>;
    /**
     * Operators: eq, in.
     * Available values: Unknown, Draft, Expired, Lost, Published, SentClicked, SentDelivered, SentOpened, SentPending, SentUndeliverable, WonAccepted, WonFulfilled, WonOrdered.
     */
    status?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: name, created_at, updated_at */
  sort?: readonly SortSpec<'name' | 'created_at' | 'updated_at'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Rich Text
 *
 * Rich text files and content used by Lifecycle Manager workflows.
 */
export class RichText {
  constructor(private readonly http: HttpClient) {}

  /**
   * Upload Rich-Text Image
   *
   * Upload an image embedded in rich-text content.
   *
   * `POST /lifecycle-manager/v1/rich-text/files`
   */
  uploadImage(
    body: NonNullable<
      operations['ApiPublicV1RichTextFilesCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1RichTextFilesCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RichTextFilesCreate']['responses'][200]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/rich-text/files`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Rich-Text Image
   *
   * Get an image embedded in rich-text content.
   *
   * `GET /lifecycle-manager/v1/rich-text/files/{rich_text_file_id}`
   */
  getImage(
    richTextFileId: string
  ): Promise<
    operations['ApiPublicV1RichTextFilesGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RichTextFilesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/rich-text/files/${encodeURIComponent(richTextFileId)}`,
      responseType: 'json',
    });
  }
}

/**
 * Roadmap
 *
 * Roadmap exports and roadmap presentation views for client planning.
 */
export class Roadmap {
  constructor(private readonly http: HttpClient) {}

  /**
   * Generate Roadmap CSV
   *
   * Generates a csv for a roadmap
   *
   * `POST /lifecycle-manager/v1/roadmap/csv`
   */
  generateCsv(
    body: NonNullable<operations['ApiV1RoadmapCsv']['requestBody']>['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap/csv`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Generate Roadmap PDF
   *
   * Generates a pdf for a roadmap
   *
   * `POST /lifecycle-manager/v1/roadmap/pdf`
   */
  generatePdf(
    body: NonNullable<operations['ApiV1RoadmapPdf']['requestBody']>['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap/pdf`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Generate Roadmap Spreadsheet
   *
   * Generates a spreadsheet for a roadmap
   *
   * `POST /lifecycle-manager/v1/roadmap/spreadsheet`
   */
  generateSpreadsheet(
    body: NonNullable<
      operations['ApiV1RoadmapSpreadsheet']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap/spreadsheet`,
      body,
      responseType: 'binary',
    });
  }
}

/** Roadmap Templates */
export class RoadmapTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Roadmap Templates
   *
   * List roadmap templates available to the account.
   *
   * `GET /lifecycle-manager/v1/roadmap-templates`
   */
  list(
    query?: RoadmapTemplatesListQuery
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/roadmap-templates`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<RoadmapTemplatesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1RoadmapTemplateList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Roadmap Template
   *
   * Create an account-owned roadmap template.
   *
   * `POST /lifecycle-manager/v1/roadmap-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1RoadmapTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap-templates`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get Roadmap Template
   *
   * Retrieve a roadmap template available to the account.
   *
   * `GET /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}`
   */
  get(
    roadmapTemplateId: string
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Roadmap Template
   *
   * Replace an account-owned roadmap template.
   *
   * `PUT /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}`
   */
  update(
    roadmapTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1RoadmapTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Roadmap Template
   *
   * Delete an account-owned roadmap template.
   *
   * `DELETE /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}`
   */
  delete(roadmapTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}`,
      responseType: 'void',
    });
  }

  /**
   * Apply Roadmap Template
   *
   * Apply a confirmed Roadmap Template to a client exactly once.
   *
   * `POST /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}/applications`
   */
  apply(
    roadmapTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1RoadmapTemplateApplicationCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateApplicationCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateApplicationCreate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}/applications`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Preview Roadmap Template application
   *
   * Preview direct application of a roadmap template to a client without creating records.
   *
   * `POST /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}/applications/preview`
   */
  previewApplication(
    roadmapTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1RoadmapTemplateApplicationPreview']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateApplicationPreview']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateApplicationPreview']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}/applications/preview`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Duplicate Roadmap Template
   *
   * Duplicate an available roadmap template into an account-owned copy.
   *
   * `POST /lifecycle-manager/v1/roadmap-templates/{roadmap_template_id}/duplicate`
   */
  duplicate(
    roadmapTemplateId: string
  ): Promise<
    operations['ApiPublicV1RoadmapTemplateDuplicate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoadmapTemplateDuplicate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/roadmap-templates/${encodeURIComponent(roadmapTemplateId)}/duplicate`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `RoadmapTemplates.list()`. */
export interface RoadmapTemplatesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in.
     * Available values: Application, Account.
     */
    source?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    category?: FilterValue<'eq' | 'in'>;
  };
  /** Case-insensitive Roadmap Template name search. Limited to 256 characters. */
  search?: string;
  /** By default, follows the account setting. Use all to include hidden ScalePad Roadmap Templates. */
  visibility?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Roles */
export class Roles {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Role
   *
   * List the Lifecycle Manager roles available to the authenticated account.
   *
   * `GET /lifecycle-manager/v1/roles`
   */
  list(): Promise<
    operations['ApiPublicV1RoleList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1RoleList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/roles`, responseType: 'json' });
  }

  /**
   * Create Role
   *
   * Create a custom Lifecycle Manager role.
   *
   * `POST /lifecycle-manager/v1/roles`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1RoleCreate']['requestBody']
    >['content']['application/json']
  ): Promise<operations['ApiPublicV1RoleCreate']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1RoleCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/roles`, body, responseType: 'json' });
  }

  /**
   * Update Role
   *
   * Update a custom Lifecycle Manager role.
   *
   * `PUT /lifecycle-manager/v1/roles/{role_id}`
   */
  update(
    roleId: string,
    body: NonNullable<
      operations['ApiPublicV1RoleUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/roles/${encodeURIComponent(roleId)}`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * SaaS Assets
 *
 * SaaS portfolio and application asset data.
 */
export class SaasAssets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List SaaS Assets
   *
   * List SaaS assets with client, product, license pool, and term details.
   *
   * `GET /lifecycle-manager/v1/assets/saas`
   */
  list(
    query?: SaasAssetsListQuery
  ): Promise<
    operations['ApiPublicV1AssetsSaasList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSaasList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/assets/saas`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<SaasAssetsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsSaasList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get SaaS Portfolio Summary
   *
   * Get account-wide SaaS portfolio totals and per-client summaries. Pass include_non_paid=false for totals that describe purchased licensing only, excluding trials and intrinsically free entitlements.
   *
   * `GET /lifecycle-manager/v1/assets/saas/summary`
   */
  getPortfolioSummary(
    query?: SaasAssetsGetPortfolioSummaryQuery
  ): Promise<
    operations['ApiPublicV1AssetsSaasSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSaasSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/saas/summary`,
      query,
      responseType: 'json',
    });
  }
}

/** Query parameters for `SaasAssets.list()`. */
export interface SaasAssetsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    status?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_trial?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_free?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_unlimited_capacity?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_paid?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Free-text search over client and product names. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: status, client_name, product_name, capacity, utilized */
  sort?: readonly SortSpec<'status' | 'client_name' | 'product_name' | 'capacity' | 'utilized'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `SaasAssets.getPortfolioSummary()`. */
export interface SaasAssetsGetPortfolioSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** Whether trials and intrinsically free entitlements contribute to the portfolio totals. Defaults to true, which counts every asset. Pass false for totals that describe purchasable seats only; filter[is_paid]=true on the asset list endpoint reproduces that population. Independently of this parameter, assets Microsoft reported with an uncapped capacity sentinel are always counted in asset_count, client_count, and product_count, but never contribute capacity or availability, because their reported capacity is a sentinel rather than a seat count. */
  include_non_paid?: boolean;
}

/**
 * SaaS Management
 *
 * Read SaaS Management clients, users, devices, device information, and license utilization.
 */
export class SaasManagement {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get app utilization (app dashboard)
   *
   * Returns one row per app the client has usage data for in the reporting period, with usage metrics, certifications, and lifecycle classification. This is the data backing the SaaS Management app dashboard.
   *
   * `sort` accepts canonical_name, unique_users, active_time, avg_time, or session_count, with a `-` prefix for descending order; defaults to canonical_name ascending.
   *
   * `filter[app_id]`, `filter[user_id]`, `filter[department_id]`, `filter[category_id]`, `filter[vendor_id]`, `filter[approval_status]`, `filter[is_favorite]`, and `filter[lifecycle]` narrow the result set — see the filter parameter description for operator support per field. `filter[user_id]` and `filter[department_id]` additionally restrict unique_users, avg_time_ms_per_day, and session_count to activity from the given user(s)/department; an app with no matching activity is omitted rather than returned with zeroed metrics.
   *
   * `q` searches by app name. `has_compliance_gap`, `missing_frameworks`, and `compliance_frameworks` filter on certification status.
   *
   * Pagination is cursor-based and best-effort/non-atomic: rows may be skipped or duplicated between page requests if the underlying data changes concurrently.
   *
   * `GET /lifecycle-manager/v1/saas-management/clients/{client_id}/apps/utilization`
   */
  getAppUtilization(
    clientId: string,
    query: SaasManagementGetAppUtilizationQuery
  ): Promise<
    operations['getSaasManagementAppUtilization']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['getSaasManagementAppUtilization']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/saas-management/clients/${encodeURIComponent(clientId)}/apps/utilization`,
      query,
      dateOnlyParams: ['start_date', 'end_date', 'compare_start_date', 'compare_end_date'],
      responseType: 'json',
    });
  }

  /**
   * Get app lifecycle timeseries
   *
   * Returns one bucket per `granularity` unit over the date range, with a count of apps in each of five mutually-exclusive, priority-ordered lifecycle segments for that bucket:
   *
   * 1. `risky_apps` — scanned with a compliance gap (missing a required framework). Top priority: a risky app is never also counted in another segment.
   * 2. `unapproved_apps` — not risky, and explicitly marked not approved.
   * 3. `ai_apps` — not risky, and categorized as an AI app.
   * 4. `other_apps` — not risky, approved, not AI, and had activity in the bucket.
   * 5. `unused_apps` — not risky, approved, not AI, with prior usage but no activity in the bucket.
   *
   * Apps with an unreviewed approval status are excluded from every segment. `filter[department_id]` and `filter[approval_status]` (both list, `in` operator) scope which apps are counted.
   *
   * This endpoint has no comparison period (`period.compare_start_date` / `compare_end_date` are always null) and no pagination — all buckets in the range are returned in a single response.
   *
   * `GET /lifecycle-manager/v1/saas-management/clients/{client_id}/apps/utilization/timeseries`
   */
  getAppUtilizationTimeseries(
    clientId: string,
    query: SaasManagementGetAppUtilizationTimeseriesQuery
  ): Promise<
    operations['getSaasManagementAppUtilizationTimeseries']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['getSaasManagementAppUtilizationTimeseries']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/saas-management/clients/${encodeURIComponent(clientId)}/apps/utilization/timeseries`,
      query,
      dateOnlyParams: ['start_date', 'end_date'],
      responseType: 'json',
    });
  }

  /**
   * Get app utilization with per-app users
   *
   * Same rows and filters as GET .../apps/utilization, with each app row additionally carrying its top users by average time (`users`), capped at `users_limit`. Use this only when the per-user breakdown is needed — it costs one extra query per app row compared to the base endpoint.
   *
   * Pagination is cursor-based and best-effort/non-atomic: rows may be skipped or duplicated between page requests if the underlying data changes concurrently.
   *
   * `GET /lifecycle-manager/v1/saas-management/clients/{client_id}/apps/utilization/users`
   */
  getAppUtilizationUsers(
    clientId: string,
    query: SaasManagementGetAppUtilizationUsersQuery
  ): Promise<
    operations['getSaasManagementAppUtilizationWithUsers']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['getSaasManagementAppUtilizationWithUsers']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/saas-management/clients/${encodeURIComponent(clientId)}/apps/utilization/users`,
      query,
      dateOnlyParams: ['start_date', 'end_date', 'compare_start_date', 'compare_end_date'],
      responseType: 'json',
    });
  }

  /**
   * Create an enrollment token
   *
   * Creates an enrollment token for a client. The enrolling RMM/Core agent presents the returned token value to a separate device-enrollment endpoint to register a device under this client.
   *
   * `POST /lifecycle-manager/v1/saas-management/clients/{client_id}/enrollment-tokens`
   */
  createEnrollmentToken(
    clientId: string,
    body: NonNullable<
      operations['createSaasManagementEnrollmentToken']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['createSaasManagementEnrollmentToken']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['createSaasManagementEnrollmentToken']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/saas-management/clients/${encodeURIComponent(clientId)}/enrollment-tokens`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Get SaaS utilization summary
   *
   * Returns SaaS-utilization summary metrics for a client: app counts and total active time over the reporting period.
   *
   * `GET /lifecycle-manager/v1/saas-management/clients/{client_id}/saas-utilization/summary`
   */
  getUtilizationSummary(
    clientId: string
  ): Promise<
    operations['getSaasManagementUtilizationSummary']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['getSaasManagementUtilizationSummary']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/saas-management/clients/${encodeURIComponent(clientId)}/saas-utilization/summary`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `SaasManagement.getAppUtilization()`. */
export interface SaasManagementGetAppUtilizationQuery {
  /** Start of the reporting period (YYYY-MM-DD). */
  start_date: string | Date;
  /** End of the reporting period, inclusive (YYYY-MM-DD). The range must not exceed 366 days. */
  end_date: string | Date;
  /** Start of an optional comparison period (YYYY-MM-DD). Must be provided together with compare_end_date. When set, each metric's compare_value, change_value, and change_pct are populated against this period. */
  compare_start_date?: string | Date;
  /** End of an optional comparison period, inclusive (YYYY-MM-DD). Must be provided together with compare_start_date. */
  compare_end_date?: string | Date;
  /** Filter map: filter[field]=op:value. Supported fields and operators: app_id (eq, in), user_id (eq, in), department_id (eq, in), category_id (eq, in), vendor_id (eq, in), approval_status (eq, in — approved, not_approved, unreviewed), is_favorite (eq — true/false), lifecycle (eq — discovered, dropped_off, restricting to apps first seen, or that stopped being used, within the date range). */
  filter?: Record<string, string | null | undefined>;
  /** Comma-separated sort fields: canonical_name, unique_users, active_time, avg_time, or session_count. Prefix a field with - for descending order. Defaults to canonical_name ascending. */
  sort?: readonly SortSpec<
    'canonical_name' | 'unique_users' | 'active_time' | 'avg_time' | 'session_count'
  >[];
  /** Number of rows per page (1-200). */
  page_size?: number;
  /** Opaque pagination cursor from a previous response's next_cursor. Pagination is best-effort and non-atomic: rows may be skipped or duplicated across page requests if the underlying data changes between calls. */
  cursor?: string;
  /** Free-text search over the app's canonical name. */
  q?: string;
  /** Restrict to scanned apps that are missing a current self-declared alignment for at least one of the client's required compliance frameworks. */
  has_compliance_gap?: boolean;
  /** Comma-separated compliance framework keys (hipaa, soc1, soc2, gdpr, iso27001). Returns scanned apps missing a current self-declared alignment for at least one of the given frameworks. */
  missing_frameworks?: string;
  /** Comma-separated compliance framework keys (hipaa, soc1, soc2, gdpr, iso27001). Returns apps with a current self-declared alignment for at least one of the given frameworks. */
  compliance_frameworks?: string;
}

/** Query parameters for `SaasManagement.getAppUtilizationTimeseries()`. */
export interface SaasManagementGetAppUtilizationTimeseriesQuery {
  /** Start of the reporting period (YYYY-MM-DD). */
  start_date: string | Date;
  /** End of the reporting period, inclusive (YYYY-MM-DD). The range must not exceed 366 days. */
  end_date: string | Date;
  /** Filter map: filter[field]=op:value. Supported fields (both `in` only): department_id, approval_status (approved, not_approved, unreviewed). */
  filter?: Record<string, string | null | undefined>;
  /** Time bucket size for the returned series. */
  granularity: 'daily' | 'weekly' | 'monthly' | 'quarterly';
}

/** Query parameters for `SaasManagement.getAppUtilizationUsers()`. */
export interface SaasManagementGetAppUtilizationUsersQuery {
  /** Start of the reporting period (YYYY-MM-DD). */
  start_date: string | Date;
  /** End of the reporting period, inclusive (YYYY-MM-DD). The range must not exceed 366 days. */
  end_date: string | Date;
  /** Start of an optional comparison period (YYYY-MM-DD). Must be provided together with compare_end_date. When set, each metric's compare_value, change_value, and change_pct are populated against this period. */
  compare_start_date?: string | Date;
  /** End of an optional comparison period, inclusive (YYYY-MM-DD). Must be provided together with compare_start_date. */
  compare_end_date?: string | Date;
  /** Filter map: filter[field]=op:value. Same supported fields and operators as GET .../apps/utilization. */
  filter?: Record<string, string | null | undefined>;
  /** Comma-separated sort fields: canonical_name, unique_users, active_time, avg_time, or session_count. Prefix a field with - for descending order. Defaults to canonical_name ascending. */
  sort?: readonly SortSpec<
    'canonical_name' | 'unique_users' | 'active_time' | 'avg_time' | 'session_count'
  >[];
  /** Number of rows per page (1-200). */
  page_size?: number;
  /** Opaque pagination cursor from a previous response's next_cursor. Pagination is best-effort and non-atomic: rows may be skipped or duplicated across page requests if the underlying data changes between calls. */
  cursor?: string;
  /** Free-text search over the app's canonical name. */
  q?: string;
  /** Restrict to scanned apps that are missing a current self-declared alignment for at least one of the client's required compliance frameworks. */
  has_compliance_gap?: boolean;
  /** Comma-separated compliance framework keys (hipaa, soc1, soc2, gdpr, iso27001). Returns scanned apps missing a current self-declared alignment for at least one of the given frameworks. */
  missing_frameworks?: string;
  /** Comma-separated compliance framework keys (hipaa, soc1, soc2, gdpr, iso27001). Returns apps with a current self-declared alignment for at least one of the given frameworks. */
  compliance_frameworks?: string;
  /** Maximum number of users embedded per app row (1-200). */
  users_limit?: number;
  /** Sort for each app's embedded user list: username, avg_time, avg_time_change, or days_active. Prefix with - for descending. Defaults to avg_time descending. */
  users_sort?: string;
}

/**
 * Saved View Defaults
 *
 * Default saved-view selections for Lifecycle Manager lists.
 */
export class SavedViewDefaults {
  constructor(private readonly http: HttpClient) {}

  /**
   * Set Saved view default
   *
   * Set, inherit, or clear a personal default, or set an account fallback for a view key.
   *
   * `PUT /lifecycle-manager/v1/saved-view-defaults/{key}`
   */
  set(
    key: string,
    body: NonNullable<
      operations['ApiPublicV1SavedViewDefaultSet']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/saved-view-defaults/${encodeURIComponent(key)}`,
      body,
      responseType: 'void',
    });
  }
}

/**
 * Saved Views
 *
 * Reusable filter and display configurations for Lifecycle Manager lists.
 */
export class SavedViews {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Saved views
   *
   * List personal and account-visible saved views for a view key.
   *
   * `GET /lifecycle-manager/v1/saved-views`
   */
  list(
    query?: SavedViewsListQuery
  ): Promise<
    operations['ApiPublicV1SavedViewList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SavedViewList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/saved-views`, query, responseType: 'json' });
  }

  /**
   * Create Saved view
   *
   * Create a personal or account-visible named view configuration.
   *
   * `POST /lifecycle-manager/v1/saved-views`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1SavedViewCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1SavedViewCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SavedViewCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/saved-views`, body, responseType: 'json' });
  }

  /**
   * Update Saved view
   *
   * Rename a saved view or replace its stored view configuration.
   *
   * `PATCH /lifecycle-manager/v1/saved-views/{saved_view_id}`
   */
  update(
    savedViewId: string,
    body: NonNullable<
      operations['ApiPublicV1SavedViewUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1SavedViewUpdate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SavedViewUpdate']['responses'][200]['content']['application/json']
    >({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/saved-views/${encodeURIComponent(savedViewId)}`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Delete Saved view
   *
   * Delete a personal saved view or an account view managed through Account Settings.
   *
   * `DELETE /lifecycle-manager/v1/saved-views/{saved_view_id}`
   */
  delete(savedViewId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/saved-views/${encodeURIComponent(savedViewId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `SavedViews.list()`. */
export interface SavedViewsListQuery {
  /** View key whose saved views should be returned. */
  key?: components['schemas']['UserInterfaceView.UserInterfaceViewKeyPublic'];
}

/** Scheduled Reports */
export class ScheduledReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Scheduled reports
   *
   * List the legacy scheduled reports configured for one client, both the built-in hardware lifecycle report and any custom scheduled reports.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports`
   */
  list(
    query: ScheduledReportsListQuery
  ): Promise<
    operations['ApiPublicV1ScheduledReportList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports`,
      query,
      responseType: 'json',
    });
  }

  /**
   * List Custom scheduled report availability
   *
   * List the asset filters and columns a custom scheduled report can be configured with for one client.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/custom/availability`
   */
  listCustomAvailability(
    query: ScheduledReportsListCustomAvailabilityQuery
  ): Promise<
    operations['ApiPublicV1ScheduledReportCustomAvailabilityGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportCustomAvailabilityGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/availability`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Custom scheduled report
   *
   * Get everything configurable on one custom scheduled report: schedule, the assets it covers, recipients, and the email that carries it.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}`
   */
  getCustom(
    scheduledReportId: string
  ): Promise<
    operations['ApiPublicV1ScheduledReportCustomGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportCustomGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}`,
      responseType: 'json',
    });
  }

  /**
   * Delete Custom scheduled report
   *
   * Permanently delete a custom scheduled report. The client stops receiving it.
   *
   * `DELETE /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}`
   */
  deleteCustom(scheduledReportId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Custom scheduled report configuration
   *
   * Replace which assets a custom scheduled report covers: its name, asset filters, columns and sort.
   *
   * `PUT /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/configuration`
   */
  updateCustomConfiguration(
    scheduledReportId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportCustomConfigurationUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/configuration`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Custom scheduled report email template
   *
   * Replace the email subject, body and reply-to user for a custom scheduled report.
   *
   * `PUT /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/email-template`
   */
  updateCustomEmailTemplate(
    scheduledReportId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportCustomEmailTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/email-template`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Download Custom scheduled report PDF
   *
   * Download the PDF a custom scheduled report would send, built from its saved filters and columns.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/pdf`
   */
  downloadCustomPdf(scheduledReportId: string): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/pdf`,
      responseType: 'binary',
    });
  }

  /**
   * Add Custom scheduled report recipient
   *
   * Add a recipient to a custom scheduled report. The recipient is stored on the report as a name and email and is not added to the client contact list.
   *
   * `POST /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/recipients`
   */
  addCustomRecipient(
    scheduledReportId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportCustomRecipientCreate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/recipients`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Remove Custom scheduled report recipient
   *
   * Remove a recipient from a custom scheduled report.
   *
   * `DELETE /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/recipients/{scheduled_report_recipient_id}`
   */
  removeCustomRecipient(
    scheduledReportId: string,
    scheduledReportRecipientId: string
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/recipients/${encodeURIComponent(scheduledReportRecipientId)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Custom scheduled report schedule
   *
   * Update how often a custom scheduled report is sent, and whether it is sending at all.
   *
   * `PUT /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/schedule`
   */
  updateCustomSchedule(
    scheduledReportId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportCustomScheduleUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/schedule`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Send Custom scheduled report test message
   *
   * Send a test copy of a custom scheduled report to yourself. Configured recipients receive nothing.
   *
   * `POST /lifecycle-manager/v1/scheduled-reports/custom/{scheduled_report_id}/send-test`
   */
  sendCustomTestMessage(scheduledReportId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/scheduled-reports/custom/${encodeURIComponent(scheduledReportId)}/send-test`,
      responseType: 'void',
    });
  }

  /**
   * Get Hardware lifecycle report
   *
   * Get a client hardware lifecycle report: its schedule, its recipients, and the email that carries it.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}`
   */
  getHardwareLifecycle(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ScheduledReportLifecycleGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportLifecycleGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}`,
      responseType: 'json',
    });
  }

  /**
   * Get Hardware lifecycle report email template
   *
   * Get the email that carries a client hardware lifecycle report, resolving the account default when the client has no template of its own.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/email-template`
   */
  getHardwareLifecycleEmailTemplate(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ScheduledReportLifecycleEmailTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportLifecycleEmailTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/email-template`,
      responseType: 'json',
    });
  }

  /**
   * Update Hardware lifecycle report email template
   *
   * Replace the email subject, body and reply-to user for a client hardware lifecycle report. This makes the client customized rather than inheriting the account default.
   *
   * `PUT /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/email-template`
   */
  updateHardwareLifecycleEmailTemplate(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportLifecycleEmailTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/email-template`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Reset Hardware lifecycle report email template
   *
   * Revert a client hardware lifecycle report email template to the account default, so the client inherits future changes to it.
   *
   * `DELETE /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/email-template`
   */
  resetHardwareLifecycleEmailTemplate(clientId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/email-template`,
      responseType: 'void',
    });
  }

  /**
   * Add Hardware lifecycle report recipient
   *
   * Add a recipient to a client hardware lifecycle report. Unlike a custom scheduled report, the recipient is a client contact and is created on the client if that email address is not already a contact.
   *
   * `POST /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/recipients`
   */
  addHardwareLifecycleRecipient(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportLifecycleRecipientCreate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/recipients`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Remove Hardware lifecycle report recipient
   *
   * Remove a recipient from a client hardware lifecycle report. Recipients are identified by email address, not by an id.
   *
   * `DELETE /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/recipients`
   */
  removeHardwareLifecycleRecipient(
    clientId: string,
    query: ScheduledReportsRemoveHardwareLifecycleRecipientQuery
  ): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/recipients`,
      query,
      responseType: 'void',
    });
  }

  /**
   * Update Hardware lifecycle report schedule
   *
   * Update how often a client hardware lifecycle report is sent, and whether it is sending at all.
   *
   * `PUT /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/schedule`
   */
  updateHardwareLifecycleSchedule(
    clientId: string,
    body: NonNullable<
      operations['ApiPublicV1ScheduledReportLifecycleScheduleUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/schedule`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Send Hardware lifecycle report test message
   *
   * Send a test copy of a client hardware lifecycle report to yourself. Configured recipients receive nothing.
   *
   * `POST /lifecycle-manager/v1/scheduled-reports/lifecycle/{client_id}/send-test`
   */
  sendHardwareLifecycleTestMessage(clientId: string): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/scheduled-reports/lifecycle/${encodeURIComponent(clientId)}/send-test`,
      responseType: 'void',
    });
  }

  /**
   * List Scheduled report template variables
   *
   * List the template variables available for legacy scheduled report email subjects and bodies.
   *
   * `GET /lifecycle-manager/v1/scheduled-reports/template-variables`
   */
  listTemplateVariables(): Promise<
    operations['ApiPublicV1ScheduledReportTemplateVariableList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ScheduledReportTemplateVariableList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/scheduled-reports/template-variables`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `ScheduledReports.list()`. */
export interface ScheduledReportsListQuery {
  /** The client whose scheduled reports to list. Scheduled reports are always managed one client at a time, so this is required. */
  client_id: string;
}

/** Query parameters for `ScheduledReports.listCustomAvailability()`. */
export interface ScheduledReportsListCustomAvailabilityQuery {
  /** The client whose available filters and columns to return. Availability is gated per client by subscription scope and feature access, so this is required. */
  client_id: string;
}

/** Query parameters for `ScheduledReports.removeHardwareLifecycleRecipient()`. */
export interface ScheduledReportsRemoveHardwareLifecycleRecipientQuery {
  /** Email address of the recipient to remove. This is how legacy identifies a lifecycle report recipient; there is no recipient id. */
  email_address: string;
}

/**
 * Segments
 *
 * Client segments used to group and prioritize client accounts.
 */
export class Segments {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Segments
   *
   * List the client segments configured for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/segments`
   */
  list(): Promise<
    operations['ApiPublicV1SegmentsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1SegmentsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/segments`, responseType: 'json' });
  }
}

/**
 * Settings
 *
 * Lifecycle Manager account and regional settings.
 */
export class Settings {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get Client Settings
   *
   * Get the consolidated general settings for a single client (identity, segment, access group, vertical, regional settings, and account team member ids).
   *
   * `GET /lifecycle-manager/v1/clients/{client_id}/settings`
   */
  getClient(
    clientId: string
  ): Promise<
    operations['ApiPublicV1ClientSettingsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1ClientSettingsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/clients/${encodeURIComponent(clientId)}/settings`,
      responseType: 'json',
    });
  }
}

/** Sites */
export class Sites {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Sites
   *
   * List canonical client sites for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/sites`
   */
  list(
    query?: SitesListQuery
  ): Promise<operations['ApiPublicV1SitesList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1SitesList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/sites`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<SitesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1SitesList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Site
   *
   * Retrieve one canonical client site for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/sites/{site_id}`
   */
  get(
    siteId: string
  ): Promise<operations['ApiPublicV1SitesGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1SitesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/sites/${encodeURIComponent(siteId)}`,
      responseType: 'json',
    });
  }

  /**
   * Link Site
   *
   * Link a duplicate client site under a canonical parent site.
   *
   * `POST /lifecycle-manager/v1/sites/{child_site_id}/link`
   */
  link(
    childSiteId: string,
    body: NonNullable<
      operations['ApiPublicV1SitesLinkCreate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/sites/${encodeURIComponent(childSiteId)}/link`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Unlink Site
   *
   * Remove the link between a duplicate client site and its canonical parent site.
   *
   * `DELETE /lifecycle-manager/v1/sites/{child_site_id}/link`
   */
  unlink(childSiteId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/sites/${encodeURIComponent(childSiteId)}/link`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Sites.list()`. */
export interface SitesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
  };
  /** Case-insensitive text matched against site name, client name, and address. Minimum three characters. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: name, client.name */
  sort?: readonly SortSpec<'name' | 'client.name'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Software Assets
 *
 * Installed software, product, device, and portfolio summary data.
 */
export class SoftwareAssets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Software Assets
   *
   * List installed software assets for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/assets/software`
   */
  list(
    query?: SoftwareAssetsListQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<SoftwareAssetsListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsSoftwareList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Get Assets Software Lifecycle Summary
   *
   * Get indexed software lifecycle counts for a client dashboard.
   *
   * `GET /lifecycle-manager/v1/assets/software/lifecycle-summary`
   */
  getLifecycleSummary(
    query?: SoftwareAssetsGetLifecycleSummaryQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareLifecycleSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareLifecycleSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/lifecycle-summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * List Software Products
   *
   * Retrieve cursor-paginated software product lifecycle summaries for the authenticated partner account or one client.
   *
   * `GET /lifecycle-manager/v1/assets/software/products`
   */
  listProducts(
    query?: SoftwareAssetsListProductsQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareProductsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareProductsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/products`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listProducts()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listProductsAll(
    query?: Omit<SoftwareAssetsListProductsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsSoftwareProductsGet']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listProducts({ ...query, cursor }));
  }

  /**
   * List Software Product Devices
   *
   * Retrieve cursor-paginated devices with one normalized software product installed for the authenticated partner account or one client.
   *
   * `GET /lifecycle-manager/v1/assets/software/products/{software_product_id}/devices`
   */
  listProductDevices(
    softwareProductId: string,
    query?: SoftwareAssetsListProductDevicesQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareProductDevicesGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareProductDevicesGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/products/${encodeURIComponent(softwareProductId)}/devices`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listProductDevices()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listProductDevicesAll(
    softwareProductId: string,
    query?: Omit<SoftwareAssetsListProductDevicesQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1AssetsSoftwareProductDevicesGet']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) =>
      this.listProductDevices(softwareProductId, { ...query, cursor })
    );
  }

  /**
   * Get Software Product Summary
   *
   * Retrieve a deployment and lifecycle summary for one normalized software product in the authenticated partner account or one client.
   *
   * `GET /lifecycle-manager/v1/assets/software/products/{software_product_id}/summary`
   */
  getProductSummary(
    softwareProductId: string,
    query?: SoftwareAssetsGetProductSummaryQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareProductSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareProductSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/products/${encodeURIComponent(softwareProductId)}/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Software Summary
   *
   * Retrieve software lifecycle and category summaries for the authenticated partner account or one client.
   *
   * `GET /lifecycle-manager/v1/assets/software/summary`
   */
  getSummary(
    query?: SoftwareAssetsGetSummaryQuery
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareSummaryGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareSummaryGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/summary`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Software Asset
   *
   * Retrieve one installed software asset for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/assets/software/{software_asset_id}`
   */
  get(
    softwareAssetId: string
  ): Promise<
    operations['ApiPublicV1AssetsSoftwareGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1AssetsSoftwareGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/assets/software/${encodeURIComponent(softwareAssetId)}`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `SoftwareAssets.list()`. */
export interface SoftwareAssetsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: pro, lmx.
     */
    'client.license'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'hardware_asset.manufacturer.name'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Productivity, RemoteControl, WebBrowser, WebBrowserPlugin, Communication, CloudStorage, Creativity, Multimedia, Database, Accounting, Mail, Backup, RemoteMonitoringAndManagement, OperatingSystem, Maintenance, OfficeSuite, EndpointProtection, Runtime, Firmware.
     */
    'product.category'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.edition'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'product.name'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Agent, OperatingSystem, Server, Client, Runtime, Standalone, Sdk, Firmware, Plugin.
     */
    'product.type'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'publisher.name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'version.build'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'version.display'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Unknown, In, Out, Soon.
     */
    'version.status'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    'version.is_latest'?: FilterValue<'eq'>;
    /** Operators: eq, in. */
    'record_lineage.integration_configuration.vendor.brand_name'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, gt, gte, lt, lte. */
    record_updated_at?: FilterValue<'eq' | 'gt' | 'gte' | 'lt' | 'lte'>;
    /**
     * Operators: eq, in.
     * Available values: Workstation, Server, Virtual, Mobile, Network, Imaging, Storage.
     */
    'hardware_asset.type'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'hardware_asset.id'?: FilterValue<'eq' | 'in'>;
  };
  /** Searches installed software fields. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: client.name, hardware_asset.name, product.category, product.edition, product.name, publisher.name, record_updated_at, version.display */
  sort?: readonly SortSpec<
    | 'client.name'
    | 'hardware_asset.name'
    | 'product.category'
    | 'product.edition'
    | 'product.name'
    | 'publisher.name'
    | 'record_updated_at'
    | 'version.display'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `SoftwareAssets.getLifecycleSummary()`. */
export interface SoftwareAssetsGetLifecycleSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
  };
}

/** Query parameters for `SoftwareAssets.listProducts()`. */
export interface SoftwareAssetsListProductsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Productivity, RemoteControl, WebBrowser, WebBrowserPlugin, Communication, CloudStorage, Creativity, Multimedia, Database, Accounting, Mail, Backup, RemoteMonitoringAndManagement, OperatingSystem, Maintenance, OfficeSuite, EndpointProtection, Runtime, Firmware.
     */
    'product.category'?: FilterValue<'eq' | 'in'>;
  };
  /** Searches software product fields. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: client.name, hardware_asset.name, product.category, product.edition, product.name, publisher.name, record_updated_at, version.display */
  sort?: readonly SortSpec<
    | 'client.name'
    | 'hardware_asset.name'
    | 'product.category'
    | 'product.edition'
    | 'product.name'
    | 'publisher.name'
    | 'record_updated_at'
    | 'version.display'
  >[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `SoftwareAssets.listProductDevices()`. */
export interface SoftwareAssetsListProductDevicesQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'version.display'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Unknown, In, Out, Soon.
     */
    'version.status'?: FilterValue<'eq' | 'in'>;
    /**
     * Operators: eq, in.
     * Available values: Workstation, Server, Virtual, Mobile, Network, Imaging, Storage.
     */
    'hardware_asset.type'?: FilterValue<'eq' | 'in'>;
  };
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `SoftwareAssets.getProductSummary()`. */
export interface SoftwareAssetsGetProductSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
  };
}

/** Query parameters for `SoftwareAssets.getSummary()`. */
export interface SoftwareAssetsGetSummaryQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    'client.id'?: FilterValue<'eq'>;
  };
}

/**
 * Software Reports
 *
 * Downloadable software spreadsheets and lifecycle reports.
 */
export class SoftwareReports {
  constructor(private readonly http: HttpClient) {}

  /**
   * Download Software Category Lifecycle Report PDF
   *
   * Download a client's software lifecycle PDF report scoped to one software category.
   *
   * `POST /lifecycle-manager/v1/assets/software/category-lifecycle-report/pdf`
   */
  downloadCategoryLifecyclePdf(
    body: NonNullable<
      operations['ApiPublicV1AssetsSoftwareCategoryLifecycleReportPdf']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/software/category-lifecycle-report/pdf`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download installed software assets as CSV
   *
   * Download installed software asset data as a CSV file.
   *
   * `POST /lifecycle-manager/v1/assets/software/export/csv`
   */
  exportCsv(
    body: NonNullable<
      operations['ApiPublicV1AssetsSoftwareExportCsv']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/software/export/csv`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download installed software assets as XLSX
   *
   * Download installed software asset data as an XLSX spreadsheet.
   *
   * `POST /lifecycle-manager/v1/assets/software/export/xlsx`
   */
  exportXlsx(
    body: NonNullable<
      operations['ApiPublicV1AssetsSoftwareExportXlsx']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/software/export/xlsx`,
      body,
      responseType: 'binary',
    });
  }

  /**
   * Download Software Lifecycle Report PDF
   *
   * Download a client's software lifecycle PDF report summarising every software category.
   *
   * `POST /lifecycle-manager/v1/assets/software/lifecycle-report/pdf`
   */
  downloadLifecyclePdf(
    body: NonNullable<
      operations['ApiPublicV1AssetsSoftwareLifecycleReportPdf']['requestBody']
    >['content']['application/json']
  ): Promise<BinaryResponse> {
    return this.http.request<BinaryResponse>({
      method: 'POST',
      path: `/lifecycle-manager/v1/assets/software/lifecycle-report/pdf`,
      body,
      responseType: 'binary',
    });
  }
}

/**
 * Tags
 *
 * Account-defined tags used to organize supported Lifecycle Manager resources.
 */
export class Tags {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Tags
   *
   * Retrieve tags available to the account, optionally filtered by domain.
   *
   * `GET /lifecycle-manager/v1/tags`
   */
  list(
    query?: TagsListQuery
  ): Promise<operations['ApiPublicV1TagList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1TagList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/tags`, query, responseType: 'json' });
  }

  /**
   * Create Tag
   *
   * Create a new tag for a domain, or add a domain to an existing tag with the same name.
   *
   * `POST /lifecycle-manager/v1/tags`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1TagCreate']['requestBody']
    >['content']['application/json']
  ): Promise<operations['ApiPublicV1TagCreate']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1TagCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/tags`, body, responseType: 'json' });
  }

  /**
   * Update Tag
   *
   * Update the name, color, and domains of an existing tag.
   *
   * `PUT /lifecycle-manager/v1/tags/{tag_id}`
   */
  update(
    tagId: string,
    body: NonNullable<
      operations['ApiPublicV1TagUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/tags/${encodeURIComponent(tagId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Tag
   *
   * Delete a tag and remove it from any assignments across domains.
   *
   * `DELETE /lifecycle-manager/v1/tags/{tag_id}`
   */
  delete(tagId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/tags/${encodeURIComponent(tagId)}`,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Tags.list()`. */
export interface TagsListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq. */
    domain?: FilterValue<'eq'>;
  };
}

/**
 * Task Integrations
 *
 * PSA ticket workflows connected to Lifecycle Manager tasks.
 */
export class TaskIntegrations {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get the linked PSA ticket state for an action item
   *
   * Get the state of the PSA ticket linked to an action item.
   *
   * `GET /lifecycle-manager/v1/action-items/{action_item_id}/ticket`
   */
  getTicket(
    actionItemId: string
  ): Promise<
    operations['ApiPublicV1EngagementActionTicketGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionTicketGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(actionItemId)}/ticket`,
      responseType: 'json',
    });
  }

  /**
   * Create and Link a Ticket to an Action Item
   *
   * Create a PSA ticket and link it to an action item.
   *
   * `POST /lifecycle-manager/v1/action-items/{action_item_id}/ticket`
   */
  createAndLinkTicket(
    actionItemId: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionTicketCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1EngagementActionTicketCreate']['responses'][202]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionTicketCreate']['responses'][202]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(actionItemId)}/ticket`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Attach Existing Action Item Ticket
   *
   * Attach an existing ticket from the client's primary PSA integration to an action item.
   *
   * `PUT /lifecycle-manager/v1/action-items/{action_item_id}/ticket`
   */
  attachExistingTicket(
    actionItemId: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionTicketAttach']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1EngagementActionTicketAttach']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionTicketAttach']['responses'][200]['content']['application/json']
    >({
      method: 'PUT',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(actionItemId)}/ticket`,
      body,
      responseType: 'json',
    });
  }

  /**
   * Unlink the PSA ticket from an action item
   *
   * Unlink the PSA ticket from an action item without deleting the ticket in the PSA.
   *
   * `DELETE /lifecycle-manager/v1/action-items/{action_item_id}/ticket`
   */
  unlinkTicket(actionItemId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(actionItemId)}/ticket`,
      responseType: 'void',
    });
  }
}

/** Task Templates */
export class TaskTemplates {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Task Templates
   *
   * List task templates available to the account.
   *
   * `GET /lifecycle-manager/v1/task-templates`
   */
  list(
    query?: TaskTemplatesListQuery
  ): Promise<
    operations['ApiPublicV1TaskTemplateList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TaskTemplateList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/task-templates`, query, responseType: 'json' });
  }

  /**
   * Every item of `list()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAll(
    query?: Omit<TaskTemplatesListQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1TaskTemplateList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.list({ ...query, cursor }));
  }

  /**
   * Create Task Template
   *
   * Create an account-owned task template.
   *
   * `POST /lifecycle-manager/v1/task-templates`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1TaskTemplateCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1TaskTemplateCreate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TaskTemplateCreate']['responses'][201]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/task-templates`, body, responseType: 'json' });
  }

  /**
   * Get Task Template
   *
   * Retrieve a task template available to the account.
   *
   * `GET /lifecycle-manager/v1/task-templates/{task_template_id}`
   */
  get(
    taskTemplateId: string
  ): Promise<
    operations['ApiPublicV1TaskTemplateGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TaskTemplateGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/task-templates/${encodeURIComponent(taskTemplateId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Task Template
   *
   * Update an account-owned task template.
   *
   * `PUT /lifecycle-manager/v1/task-templates/{task_template_id}`
   */
  update(
    taskTemplateId: string,
    body: NonNullable<
      operations['ApiPublicV1TaskTemplateUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/task-templates/${encodeURIComponent(taskTemplateId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Task Template
   *
   * Delete an account-owned task template.
   *
   * `DELETE /lifecycle-manager/v1/task-templates/{task_template_id}`
   */
  delete(taskTemplateId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/task-templates/${encodeURIComponent(taskTemplateId)}`,
      responseType: 'void',
    });
  }

  /**
   * Duplicate Task Template
   *
   * Duplicate an available task template into an account-owned copy.
   *
   * `POST /lifecycle-manager/v1/task-templates/{task_template_id}/duplicate`
   */
  duplicate(
    taskTemplateId: string
  ): Promise<
    operations['ApiPublicV1TaskTemplateDuplicate']['responses'][201]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TaskTemplateDuplicate']['responses'][201]['content']['application/json']
    >({
      method: 'POST',
      path: `/lifecycle-manager/v1/task-templates/${encodeURIComponent(taskTemplateId)}/duplicate`,
      responseType: 'json',
    });
  }
}

/** Query parameters for `TaskTemplates.list()`. */
export interface TaskTemplatesListQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in.
     * Available values: Application, Account.
     */
    source?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    category?: FilterValue<'eq' | 'in'>;
  };
  /** Case-insensitive title search. Limited to 256 characters. */
  search?: string;
  /** By default, follows the account setting. Use all to include hidden ScalePad task templates. */
  visibility?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Tasks
 *
 * Tasks tracked across Lifecycle Manager work such as initiatives, goals, meetings, and client follow-up.
 */
export class Tasks {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Action Items
   *
   * Get a list of action items. The returned data includes Action item details and linked entities.
   *
   * `GET /lifecycle-manager/v1/action-items`
   */
  listActionItems(
    query?: TasksListActionItemsQuery
  ): Promise<
    operations['ApiPublicV1EngagementActionList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/action-items`, query, responseType: 'json' });
  }

  /**
   * Every item of `listActionItems()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listActionItemsAll(
    query?: Omit<TasksListActionItemsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1EngagementActionList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listActionItems({ ...query, cursor }));
  }

  /**
   * Create Action Item
   *
   * Create a new action item. To attach the action item to an initiative, meeting, or goal, call the corresponding attach endpoint after the action item has been created.
   *
   * `POST /lifecycle-manager/v1/action-items`
   */
  createActionItem(
    body: NonNullable<
      operations['ApiPublicV1EngagementActionCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1EngagementActionCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/action-items`, body, responseType: 'json' });
  }

  /**
   * Get Action Item
   *
   * Get an action item by the item's id. The returned data includes Action item details and linked entities.
   *
   * `GET /lifecycle-manager/v1/action-items/{id}`
   */
  getActionItem(
    id: string
  ): Promise<
    operations['ApiPublicV1EngagementActionGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1EngagementActionGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}`,
      responseType: 'json',
    });
  }

  /**
   * Update Action Item
   *
   * Update an existing action item with all necessary details for an action.
   *
   * `PUT /lifecycle-manager/v1/action-items/{id}`
   */
  updateActionItem(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Action Item
   *
   * Deletes an action item that is no longer relevant to business operations.
   *
   * `DELETE /lifecycle-manager/v1/action-items/{id}`
   */
  deleteActionItem(id: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}`,
      responseType: 'void',
    });
  }

  /**
   * Update Action Item Completion Status
   *
   * Mark an action item as incomplete or completed to reflect the status of an action item.
   *
   * `PUT /lifecycle-manager/v1/action-items/{id}/completion-status`
   */
  updateActionItemCompletionStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionMarkCompleted']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}/completion-status`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Update Action Item Pin Status
   *
   * Pin or unpin an action item so it appears above other open action items in task lists.
   *
   * `PUT /lifecycle-manager/v1/action-items/{id}/pin`
   */
  updateActionItemPinStatus(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionPin']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}/pin`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Reposition Action Item
   *
   * Reposition an action item within the account's manual sort order. Specify the dragged item's new neighbors using the place-relative convention: 'before_id' is the action the dragged item should land BEFORE (i.e. immediately above it in the final list), and 'after_id' is the action it should land AFTER (i.e. immediately below it in the final list). Omit 'before_id' when dropping at the end of the list and omit 'after_id' when dropping at the start. At least one of the two must be supplied.
   *
   * `POST /lifecycle-manager/v1/action-items/{id}/reposition`
   */
  repositionActionItem(
    id: string,
    body: NonNullable<
      operations['ApiPublicV1EngagementActionReposition']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'POST',
      path: `/lifecycle-manager/v1/action-items/${encodeURIComponent(id)}/reposition`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Tasks.listActionItems()`. */
export interface TasksListActionItemsQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    'client.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_completed?: FilterValue<'eq'>;
    /** Operators: eq. */
    is_overdue?: FilterValue<'eq'>;
    /**
     * Operators: eq, in.
     * Available values: Upcoming, Overdue, Completed.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    assigned_user_ids?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    created_by_user_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq. */
    is_unassigned?: FilterValue<'eq'>;
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.segment_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.vertical_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
    /**
     * Operators: eq, in, null.
     * Repeatable: pass an array to send several clauses.
     */
    'client.client_access_group_id'?:
      FilterValue<'eq' | 'in' | 'null'> | readonly FilterValue<'eq' | 'in' | 'null'>[];
  };
  /** IANA timezone the statuses are evaluated in, deciding when a due day has ended. A task is Upcoming throughout its due day in this timezone and Overdue once that day ends. Defaults to UTC when omitted. */
  timezone?: string;
  /** Free-text search over the task title and the name of the client the task belongs to. Matched as a case-insensitive substring; the value is taken literally, with no operator prefix. */
  search?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. Available fields: due_at, sort_rank */
  sort?: readonly SortSpec<'due_at' | 'sort_rank'>[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Tickets
 *
 * Ticket lookup data related to Lifecycle Manager initiatives.
 */
export class Tickets {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Linkable Tickets
   *
   * List tickets from the client's primary PSA integration that are eligible to link to Lifecycle Manager records.
   *
   * `GET /lifecycle-manager/v1/tickets`
   */
  listLinkable(
    query?: TicketsListLinkableQuery
  ): Promise<operations['ApiPublicV1TicketList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1TicketList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/tickets`, query, responseType: 'json' });
  }

  /**
   * Every item of `listLinkable()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listLinkableAll(
    query?: Omit<TicketsListLinkableQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1TicketList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listLinkable({ ...query, cursor }));
  }

  /**
   * List Ticket Boards
   *
   * Account-level, so it works where no client is selected, such as authoring a deliverable template.
   *
   * `GET /lifecycle-manager/v1/tickets/boards`
   */
  listBoards(): Promise<
    operations['ApiV1TicketBoardList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiV1TicketBoardList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/tickets/boards`, responseType: 'json' });
  }

  /**
   * Get Ticket Create Fields
   *
   * Get the available PSA ticket creation fields for the primary PSA, including required and optional fields, valid values, validation hints, and dependent fields.
   *
   * `GET /lifecycle-manager/v1/tickets/create-fields`
   */
  getCreateFields(
    query?: TicketsGetCreateFieldsQuery
  ): Promise<
    operations['ApiPublicV1TicketCreateFieldsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TicketCreateFieldsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/tickets/create-fields`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Get Ticket Field Options
   *
   * Get the account PSA ticket field options available when authoring reusable templates.
   *
   * `GET /lifecycle-manager/v1/tickets/field-options`
   */
  getFieldOptions(): Promise<
    operations['ApiPublicV1TicketFieldOptionsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1TicketFieldOptionsGet']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/tickets/field-options`, responseType: 'json' });
  }
}

/** Query parameters for `Tickets.listLinkable()`. */
export interface TicketsListLinkableQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /** Operators: eq, in. */
    external_id?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    board_name?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    status?: FilterValue<'eq' | 'in'>;
  };
  /** The unique identifier of the client whose tickets should be returned. */
  client_id?: string;
  /** The maximum number of tickets to return. */
  page_size?: number;
  /** The opaque cursor returned by the previous page. */
  cursor?: string;
}

/** Query parameters for `Tickets.getCreateFields()`. */
export interface TicketsGetCreateFieldsQuery {
  /** The unique identifier of the client whose PSA ticket-create field availabilities should be returned. */
  client_id?: string;
}

/**
 * Users
 *
 * Account users, identity details, access administration, and saved user preference data.
 */
export class Users {
  constructor(private readonly http: HttpClient) {}

  /**
   * Search Members
   *
   * Search members.
   *
   * `GET /lifecycle-manager/v1/members/lookup`
   */
  searchMembers(
    query?: UsersSearchMembersQuery
  ): Promise<operations['ApiV1MembersLookup']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiV1MembersLookup']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/members/lookup`, query, responseType: 'json' });
  }

  /**
   * Get User
   *
   * Get a user along with their feature access and permissions.
   *
   * `GET /lifecycle-manager/v1/user/{user_id}`
   */
  get(
    userId: string
  ): Promise<operations['ApiPublicV1UserGet']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1UserGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/user/${encodeURIComponent(userId)}`,
      responseType: 'json',
    });
  }

  /**
   * Update User Preferences
   *
   * Apply a partial update to the authenticated user's own record. Fields omitted from the request body are left unchanged.
   *
   * `PATCH /lifecycle-manager/v1/user/{user_id}`
   */
  updatePreferences(
    userId: string,
    body: NonNullable<
      operations['ApiPublicV1UserPatch']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PATCH',
      path: `/lifecycle-manager/v1/user/${encodeURIComponent(userId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List Active Users
   *
   * List the users that belong to the authenticated account, optionally including disabled users.
   *
   * `GET /lifecycle-manager/v1/users`
   */
  list(
    query?: UsersListQuery
  ): Promise<operations['ApiPublicV1UserList']['responses'][200]['content']['application/json']> {
    return this.http.request<
      operations['ApiPublicV1UserList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/users`, query, responseType: 'json' });
  }

  /**
   * List managed users
   *
   * List account users with the details needed for user administration.
   *
   * `GET /lifecycle-manager/v1/users/manage`
   */
  listManaged(
    query?: UsersListManagedQuery
  ): Promise<
    operations['ApiPublicV1UserManageList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1UserManageList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/users/manage`, query, responseType: 'json' });
  }

  /**
   * Every item of `listManaged()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listManagedAll(
    query?: Omit<UsersListManagedQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1UserManageList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listManaged({ ...query, cursor }));
  }

  /**
   * Grant Lifecycle Manager access
   *
   * Add a new or existing Hub account member to Lifecycle Manager.
   *
   * `POST /lifecycle-manager/v1/users/manage`
   */
  grantAccess(
    body: NonNullable<
      operations['ApiPublicV1UserManageGrant']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1UserManageGrant']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1UserManageGrant']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/users/manage`, body, responseType: 'json' });
  }

  /**
   * Revoke access from managed users
   *
   * Revoke Lifecycle Manager access from members of the authenticated account.
   *
   * `PUT /lifecycle-manager/v1/users/manage/revoke`
   */
  revokeAccess(
    body: NonNullable<
      operations['ApiPublicV1UserManageRevoke']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/users/manage/revoke`,
      body,
      responseType: 'void',
    });
  }

  /**
   * List user account-team assignments
   *
   * List a user's client-team assignments visible to the caller. Pagination is best effort; memberships may change between pages.
   *
   * `GET /lifecycle-manager/v1/users/{user_id}/account-team-assignments`
   */
  listAccountTeamAssignments(
    userId: string,
    query?: UsersListAccountTeamAssignmentsQuery
  ): Promise<
    operations['ApiPublicV1UserTeamAssignmentsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1UserTeamAssignmentsList']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/users/${encodeURIComponent(userId)}/account-team-assignments`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listAccountTeamAssignments()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listAccountTeamAssignmentsAll(
    userId: string,
    query?: Omit<UsersListAccountTeamAssignmentsQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1UserTeamAssignmentsList']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listAccountTeamAssignments(userId, { ...query, cursor }));
  }

  /**
   * Get user client access
   *
   * Get the Core client identifiers the authenticated ScalePad user can access.
   *
   * `GET /lifecycle-manager/v1/users/{user_id}/client-access`
   */
  getClientAccess(
    userId: string
  ): Promise<
    operations['ApiPublicV1UserClientAccessGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1UserClientAccessGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/users/${encodeURIComponent(userId)}/client-access`,
      responseType: 'json',
    });
  }

  /**
   * Get user permissions
   *
   * Get a user's effective Lifecycle Manager permissions and whether each grant is direct or inherited.
   *
   * `GET /lifecycle-manager/v1/users/{user_id}/permissions`
   */
  getPermissions(
    userId: string
  ): Promise<
    operations['ApiPublicV1UserPermissionsGet']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1UserPermissionsGet']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/users/${encodeURIComponent(userId)}/permissions`,
      responseType: 'json',
    });
  }

  /**
   * Update user permissions
   *
   * Replace the Lifecycle Manager roles and direct permissions assigned to a user.
   *
   * `PUT /lifecycle-manager/v1/users/{user_id}/permissions`
   */
  updatePermissions(
    userId: string,
    body: NonNullable<
      operations['ApiPublicV1UserPermissionsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/users/${encodeURIComponent(userId)}/permissions`,
      body,
      responseType: 'void',
    });
  }
}

/** Query parameters for `Users.searchMembers()`. */
export interface UsersSearchMembersQuery {
  /** Free-text search applied to PSA member names. Must be at least two characters when provided. Empty/short input returns no results. */
  search?: string;
}

/** Query parameters for `Users.list()`. */
export interface UsersListQuery {
  /** Whether users whose account status is Disabled should be included. Deleted and canceled users are never returned. */
  include_disabled?: boolean;
}

/** Query parameters for `Users.listManaged()`. */
export interface UsersListManagedQuery {
  /** Field filters, combined with AND. */
  filters?: {
    /**
     * Operators: eq, in.
     * Available values: Confirmed, Invited, SignedUp, Disabled, Deleted, Canceled.
     */
    status?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    'role.id'?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    email_bouncing?: FilterValue<'eq' | 'in'>;
    /** Operators: eq, in. */
    mfa_enabled?: FilterValue<'eq' | 'in'>;
  };
  /** Free-text search applied to user names and email addresses. Limited to 256 characters. */
  search?: string;
  /** Inclusive first UTC activity date (YYYY-MM-DD). Users with no activity are excluded. */
  last_active_from?: string;
  /** Inclusive last UTC activity date (YYYY-MM-DD). Users with no activity are excluded. */
  last_active_to?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/** Query parameters for `Users.listAccountTeamAssignments()`. */
export interface UsersListAccountTeamAssignmentsQuery {
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}

/**
 * Verticals
 *
 * Client industry verticals used for grouping and reporting.
 */
export class Verticals {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Verticals
   *
   * List the client verticals configured for the authenticated partner account.
   *
   * `GET /lifecycle-manager/v1/verticals`
   */
  list(): Promise<
    operations['ApiPublicV1VerticalsList']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1VerticalsList']['responses'][200]['content']['application/json']
    >({ method: 'GET', path: `/lifecycle-manager/v1/verticals`, responseType: 'json' });
  }

  /**
   * Create Vertical
   *
   * Create a client vertical for the authenticated partner account.
   *
   * `POST /lifecycle-manager/v1/verticals`
   */
  create(
    body: NonNullable<
      operations['ApiPublicV1VerticalsCreate']['requestBody']
    >['content']['application/json']
  ): Promise<
    operations['ApiPublicV1VerticalsCreate']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1VerticalsCreate']['responses'][200]['content']['application/json']
    >({ method: 'POST', path: `/lifecycle-manager/v1/verticals`, body, responseType: 'json' });
  }

  /**
   * Update Vertical
   *
   * Update a client vertical's title for the authenticated partner account.
   *
   * `PUT /lifecycle-manager/v1/verticals/{vertical_id}`
   */
  update(
    verticalId: string,
    body: NonNullable<
      operations['ApiPublicV1VerticalsUpdate']['requestBody']
    >['content']['application/json']
  ): Promise<void> {
    return this.http.request<void>({
      method: 'PUT',
      path: `/lifecycle-manager/v1/verticals/${encodeURIComponent(verticalId)}`,
      body,
      responseType: 'void',
    });
  }

  /**
   * Delete Vertical
   *
   * Delete a client vertical that is no longer used by the authenticated partner account.
   *
   * `DELETE /lifecycle-manager/v1/verticals/{vertical_id}`
   */
  delete(verticalId: string): Promise<void> {
    return this.http.request<void>({
      method: 'DELETE',
      path: `/lifecycle-manager/v1/verticals/${encodeURIComponent(verticalId)}`,
      responseType: 'void',
    });
  }
}

/**
 * Warranty
 *
 * Warranty lookup and warranty-related Lifecycle Manager data.
 */
export class Warranty {
  constructor(private readonly http: HttpClient) {}

  /**
   * List Warranty Pricing
   *
   * List renewable warranty assets and their available monthly pricing options. For assets with a Server device type, returned pricing is an estimate.
   *
   * `GET /lifecycle-manager/v1/warranty/pricing`
   */
  listPricing(
    query: WarrantyListPricingQuery
  ): Promise<
    operations['ApiPublicV1WarrantyPricing']['responses'][200]['content']['application/json']
  > {
    return this.http.request<
      operations['ApiPublicV1WarrantyPricing']['responses'][200]['content']['application/json']
    >({
      method: 'GET',
      path: `/lifecycle-manager/v1/warranty/pricing`,
      query,
      responseType: 'json',
    });
  }

  /**
   * Every item of `listPricing()`, fetched page by page.
   *
   * Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.
   */
  listPricingAll(
    query: Omit<WarrantyListPricingQuery, 'cursor'>
  ): AsyncGenerator<
    operations['ApiPublicV1WarrantyPricing']['responses'][200]['content']['application/json']['data'][number],
    void
  > {
    return paginateItems((cursor) => this.listPricing({ ...query, cursor }));
  }
}

/** Query parameters for `Warranty.listPricing()`. */
export interface WarrantyListPricingQuery {
  /** The Core client UUID, also known as the client ExternalId, whose warranty pricing should be returned. */
  client_id: string;
  /** Optional warranty product family to return. Supported values are InfrastructureProtection and WorkstationAssurance. */
  warranty_type?: string;
  /** One or more sortable fields, separated by commas. Prefix with '+' to sort ascending or '-' to sort descending. */
  sort?: readonly SortSpec[];
  /** The number of records to be returned in a single page */
  page_size?: number;
  /** Opaque cursor of the page to return. Omit this value for the first page, then pass the next_cursor value from the previous response. - Cursor pagination cannot guarantee atomicity. - Endpoints may skip new records inserted between paginated reads. - Endpoints may occasionally return duplicate records. */
  cursor?: string;
}
