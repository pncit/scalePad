/**
 * The ScalePad products this SDK is generated for. Each entry maps a published
 * OpenAPI document to the namespace it occupies on the client.
 */
export const PRODUCTS = [
  {
    key: 'core',
    className: 'CoreV1',
    specFile: 'core-api.json',
    outDir: 'src/core/v1',
    docsTitle: 'Core API',
  },
  {
    key: 'lifecycleManager',
    className: 'LifecycleManagerV1',
    specFile: 'lifecycle-manager-api.json',
    outDir: 'src/lifecycleManager/v1',
    docsTitle: 'Lifecycle Manager API',
  },
];

/**
 * Method names that the summary-derived rule gets wrong or ambiguous, keyed by
 * operationId. Names follow the route rather than the prose where the prose is
 * vague ("Create and link a ticket to an initiative" exists for two routes).
 */
export const METHOD_NAME_OVERRIDES = {
  // Lifecycle Manager: Agreements / Legacy Contracts
  ApiPublicV1AgreementAssetAttach: 'attachAssets',
  ApiPublicV1AgreementAssetBulkDelete: 'detachAssets',
  ApiPublicV1AgreementOverridesClearAll: 'clearOverrides',
  ApiPublicV1AgreementOverrideClear: 'clearOverride',
  ApiPublicV1ContractAssetAttach: 'attachAssets',
  ApiPublicV1ContractAssetBulkDelete: 'detachAssets',
  ApiPublicV1AgreementsExportPdf: 'exportPdf',
  // Analytics / Plan
  ApiPublicV1AnalyticsDisplaySettingsGet: 'getDisplaySettings',
  ApiPublicV1AnalyticsDisplaySettingsPut: 'updateDisplaySettings',
  ApiPublicV1PlanDashboardSummaryGet: 'getDashboard',
  ApiPublicV1PlanDashboardLayoutGet: 'getDashboardLayout',
  ApiPublicV1PlanDashboardLayoutSet: 'updateDashboardLayout',
  ApiPublicV1PlanExportCsv: 'exportPortfolioCsv',
  ApiPublicV1PlanExportPdf: 'exportPortfolioPdf',
  ApiPublicV2GoalsSummaryGet: 'getGoalsSummary',
  // Assessment Links / Questions / Reports
  ApiPublicV1AssessmentEvaluationQuestionsInitiativeLink: 'linkItemsToInitiative',
  ApiPublicV1AssessmentEvaluationQuestionInitiativeLink: 'linkInitiativeToQuestion',
  ApiPublicV1AssessmentEvaluationQuestionInitiativeUnlink: 'unlinkInitiativeFromQuestion',
  ApiPublicV1AssessmentEvaluationQuestionTicketCreate: 'createAndLinkTicketToQuestion',
  ApiPublicV1AssessmentEvaluationQuestionTicketUnlink: 'unlinkTicketFromQuestion',
  ApiPublicV1AssessmentsReportComparison: 'getComparison',
  ApiPublicV1AssessmentsReportFull: 'getFull',
  ApiPublicV1AssessmentsReportItemDetail: 'getItemDetail',
  ApiPublicV1AssessmentsReportSummary: 'getSummary',
  // Authorization
  ApiPublicV1AuthorizationClientsFilter: 'filterClients',
  // Budget
  ApiPublicV1AccountBudgetSummaryGet: 'getAccountSummary',
  // Client IQ
  ApiPublicV1ClientIqGet: 'get',
  ApiPublicV1ClientIqGenerate: 'generate',
  ApiPublicV1ClientDmiScoreGet: 'getDmiScore',
  ApiPublicV1ClientDmiTrendGet: 'getDmiTrend',
  // Client Reports / Clients
  ApiPublicV1ClientsExportCsv: 'exportCsv',
  ApiPublicV1ClientsExportXlsx: 'exportXlsx',
  ApiPublicV1ClientsUpdate: 'updateMany',
  // Comments
  ApiPublicV1CommentDelete: 'delete',
  // Contact Reports
  ApiPublicV1AssetsContactsExport: 'export',
  // Deliverable Content / Reports / Templates / Deliverables
  'get-deliverable-component-file': 'getComponentFile',
  'create-deliverable-template-from-deliverable': 'createFromDeliverable',
  'create-deliverable-template-from-template': 'createFromTemplate',
  'list-deliverables': 'listForClient',
  ApiV1DeliverableListByAccount: 'list',
  // Hardware Assets / Reports / Types
  ApiPublicV1AssetsHardwareAttachedAgreements: 'listAttachedAgreements',
  ApiPublicV1AssetsHardwareAttachedInitiatives: 'listAttachedInitiatives',
  ApiPublicV1AssetsHardwareOverview: 'getOverview',
  ApiPublicV1AssetsHardwareExportCsv: 'exportCsv',
  ApiPublicV1AssetsHardwareExportXlsx: 'exportXlsx',
  ApiPublicV1AssetsHardwareExportPdf: 'exportPdf',
  ApiPublicV1AssetsHardwareLegacyExportXlsx: 'exportLegacyXlsx',
  ApiPublicV1AssetsTypesReassign: 'reassign',
  ApiPublicV1ClientTypesList: 'listForClient',
  ApiPublicV1ClientTypeGet: 'getForClient',
  ApiPublicV1ClientTypeReplacementPatch: 'updateClientReplacementSettings',
  ApiPublicV1ClientTypeReplacementDelete: 'clearClientReplacementSettings',
  // Initiative Attachments / Integrations / Links; Meeting Attachments / Integrations; Task Integrations
  ApiPublicV1InitiativeAttachmentContent: 'getContent',
  ApiPublicV1MeetingAttachmentContent: 'getContent',
  ApiPublicV1InitiativeTicketGet: 'getTicket',
  ApiPublicV1InitiativeTicketLegacyCreate: 'createAndLinkTicket',
  ApiPublicV1InitiativeTicketLegacyDelete: 'detachTicket',
  ApiPublicV1InitiativeTicketList: 'listTicketLinks',
  ApiPublicV1InitiativeTicketCreate: 'createTicketLink',
  ApiPublicV1InitiativeTicketAttach: 'linkExistingTicket',
  ApiPublicV1InitiativeTicketDelete: 'detachTicketLink',
  ApiPublicV1MeetingTicketGet: 'getTicket',
  ApiPublicV1MeetingTicketCreate: 'createAndLinkTicket',
  ApiPublicV1MeetingTicketDelete: 'detachTicket',
  ApiPublicV1EngagementActionTicketGet: 'getTicket',
  ApiPublicV1EngagementActionTicketCreate: 'createAndLinkTicket',
  ApiPublicV1EngagementActionTicketAttach: 'attachExistingTicket',
  ApiPublicV1EngagementActionTicketUnlink: 'unlinkTicket',
  ApiPublicV1InitiativeExternalUrlsList: 'listExternalUrls',
  ApiPublicV1InitiativeExternalUrlPost: 'attachExternalUrl',
  ApiPublicV1InitiativeExternalUrlDelete: 'removeExternalUrl',
  // Licenses
  ApiPublicV1LicensesSummary: 'getSummary',
  // SaaS Management
  getSaasManagementAppUtilization: 'getAppUtilization',
  getSaasManagementAppUtilizationTimeseries: 'getAppUtilizationTimeseries',
  getSaasManagementAppUtilizationWithUsers: 'getAppUtilizationUsers',
  // Software Reports
  ApiPublicV1AssetsSoftwareExportCsv: 'exportCsv',
  ApiPublicV1AssetsSoftwareExportXlsx: 'exportXlsx',
  // Users
  ApiPublicV1UserList: 'list',
  ApiPublicV1UserManageGrant: 'grantAccess',
  ApiPublicV1UserManageRevoke: 'revokeAccess',
};
