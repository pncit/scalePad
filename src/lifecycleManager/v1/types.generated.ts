// Generated from spec/lifecycle-manager-api.json by scripts/generate.mjs. Regenerate with `npm run generate`; do not edit.
import type { components } from './schema.generated.js';
export type { components, operations, paths } from './schema.generated.js';

/** Response payload for Get Account Authorization. */
export type AccountAuthorizationGetResponse =
  components['schemas']['Feature.Access.Controller.Public.AccountAuthorizationGet_Response'];
/** Client scope selected for a public API request. */
export type AccountClientScopePublic =
  components['schemas']['ScalePadApi.Model.Response.AccountClientScopePublic'];
/** Allowed values for public API client scope type. */
export type AccountClientScopePublicTypeEnum =
  components['schemas']['ScalePadApi.Model.Response.AccountClientScopePublic_TypeEnum'];
/** Empty response returned after uploading the account branding logo. */
export type AccountLogoUploadResponse =
  components['schemas']['Msp.Controller.Public.AccountLogoUpload_Response'];
/** Account general settings for the authenticated account. */
export type AccountSettingsGetResponse =
  components['schemas']['Msp.Controller.Public.AccountSettingsGet_Response'];
/** Partial update payload for account general settings. Any omitted (null) field is left unchanged. */
export type AccountSettingsPatchRequest =
  components['schemas']['Msp.Controller.Public.AccountSettingsPatch_Request'];
/** Workspace-wide general settings (identity, account type, region and format). */
export type AccountSettingsPublic =
  components['schemas']['Msp.AccountSettings.Public.AccountSettingsPublic'];
/** Account team member summary for a client. */
export type AccountTeamMemberInfo = components['schemas']['Organization.AccountTeamMemberInfo'];
/** An account team member and the ScalePad Hub id of the user assigned to it. */
export type AccountTeamMemberPublic =
  components['schemas']['Organization.OrganizationAccountTeamMember.AccountTeamMember.Model.Public.AccountTeamMemberPublic'];
/** Request payload for Update Primary Team Role. */
export type AccountTeamMemberRolePrimaryUpdateRequest =
  components['schemas']['Organization.AccountTeamMemberRole.Controller.AccountTeamMemberRolePrimaryUpdate_Request'];
/** A role that can be assigned to a client account-team member, such as Account Manager or vCIO. */
export type AccountTeamMemberRolePublic =
  components['schemas']['Organization.AccountTeamMemberRole.Model.Public.AccountTeamMemberRolePublic'];
/** Response envelope containing the account-team member roles available for assignment. */
export type AccountTeamMemberRolesListResponse =
  components['schemas']['Organization.AccountTeamMemberRole.Controller.Public.AccountTeamMemberRolesList_Response'];
/** Response envelope containing account team members. */
export type AccountTeamMembersListResponse =
  components['schemas']['Organization.OrganizationAccountTeamMember.AccountTeamMember.Controller.Public.AccountTeamMembersList_Response'];
/** Type of organization operating the account. */
export type AccountTypePublic =
  components['schemas']['Msp.AccountSettings.Public.AccountTypePublic'];
/** A postal address surfaced as discrete fields so consumers can format their own display string. */
export type AddressPublic = components['schemas']['Organization.Model.Public.AddressPublic'];
/** Request body for attaching hardware assets to an agreement. */
export type AgreementAssetAttachRequest =
  components['schemas']['Agreement.Controller.Public.AgreementAssetAttach_Request'];
/** Request body for detaching hardware assets from an agreement. */
export type AgreementAssetBulkDeleteRequest =
  components['schemas']['Agreement.Controller.Public.AgreementAssetBulkDelete_Request'];
/** Agreement source for review-only AI agreement drafts. */
export type AgreementDocumentImportDraftCreateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementDocumentImportDraftCreate_Request'];
/** Review-only agreement drafts extracted from an uploaded agreement source. */
export type AgreementDocumentImportDraftCreateResponse =
  components['schemas']['Agreement.Controller.Public.AgreementDocumentImportDraftCreate_Response'];
/** One review-only agreement draft extracted from the uploaded agreement source. */
export type AgreementDocumentImportDraftCreateResponseDraft =
  components['schemas']['Agreement.Controller.Public.AgreementDocumentImportDraftCreate_Response_Draft'];
/** One recurring invoice item proposed as an agreement line item. */
export type AgreementDocumentImportDraftCreateResponseDraftLineItem =
  components['schemas']['Agreement.Controller.Public.AgreementDocumentImportDraftCreate_Response_Draft_LineItem'];
/** Request body for hiding or restoring an agreement. */
export type AgreementHiddenStatusUpdateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementHiddenStatusUpdate_Request'];
/** Payload for creating one manual agreement item. */
export type AgreementItemCreateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementItemCreate_Request'];
/** Identifier returned after a manual agreement item is created. */
export type AgreementItemCreateResponse =
  components['schemas']['Agreement.Controller.Public.AgreementItemCreate_Response'];
/** Agreement item line details, including linked agreement, product linkage, quantity, pricing amounts, billable status, and timestamps. */
export type AgreementItemPublic =
  components['schemas']['Agreement.Model.Public.AgreementItemPublic'];
/** Payload for updating one manual agreement item. */
export type AgreementItemUpdateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementItemUpdate_Request'];
/** Editable fields for a manual agreement item. */
export type AgreementItemUpsertPublic =
  components['schemas']['Agreement.Item.Model.Public.AgreementItemUpsertPublic'];
/** Auto-renew options supported by agreement exports. */
export type AgreementListExportAutoRenew =
  components['schemas']['Agreement.Model.Public.AgreementListExportAutoRenew'];
/** Billing cycle values supported by agreement exports and templates. */
export type AgreementListExportBillingCycle =
  components['schemas']['Agreement.Model.Public.AgreementListExportBillingCycle'];
/** Cost basis values supported by agreement exports and templates. */
export type AgreementListExportCostType =
  components['schemas']['Agreement.Model.Public.AgreementListExportCostType'];
/** Expiry-window options supported by agreement exports. */
export type AgreementListExportExpiry =
  components['schemas']['Agreement.Model.Public.AgreementListExportExpiry'];
/** Business impact values supported by agreement exports and templates. */
export type AgreementListExportImpact =
  components['schemas']['Agreement.Model.Public.AgreementListExportImpact'];
/** Filter and sort options used when exporting agreements. */
export type AgreementListExportRequest =
  components['schemas']['Agreement.Model.Public.AgreementListExportRequest'];
/** Status values supported by agreement exports and templates. */
export type AgreementListExportStatus =
  components['schemas']['Agreement.Model.Public.AgreementListExportStatus'];
/** Agreement summary shown in public agreement list responses, including client, source, status, billing cadence, and renewal metadata. */
export type AgreementOverviewApi =
  components['schemas']['Agreement.Model.Public.AgreementOverviewApi'];
/** Complete agreement header details, including source identity, client, status, billing cadence, renewal metadata, line items, and linked hardware keys. */
export type AgreementPublic = components['schemas']['Agreement.Model.Public.AgreementPublic'];
/** Request body identifying the agreements to delete. */
export type AgreementsBulkDeleteRequest =
  components['schemas']['Agreement.Controller.Public.AgreementsBulkDelete_Request'];
/** Request body identifying the client and agreement payload to create. */
export type AgreementsCreateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementsCreate_Request'];
/** Response containing the identifier of the newly-created agreement. */
export type AgreementsCreateResponse =
  components['schemas']['Agreement.Controller.Public.AgreementsCreate_Response'];
/** Response containing complete details for the requested agreement. */
export type AgreementsGetResponse =
  components['schemas']['Agreement.Controller.Public.AgreementsGet_Response'];
/** Source system and record identifiers for an agreement. */
export type AgreementSource = components['schemas']['Agreement.Model.Public.AgreementSource'];
/** Agreement counts and recurring spend totals for an account or client scope. */
export type AgreementSummaryPublic =
  components['schemas']['Agreement.Model.Public.AgreementSummaryPublic'];
/** Aggregated recurring agreement spend in a single currency. */
export type AgreementSummarySpendPublic =
  components['schemas']['Agreement.Model.Public.AgreementSummarySpendPublic'];
/** Request body containing the client identifier supplied with the replacement agreement payload. */
export type AgreementsUpdateRequest =
  components['schemas']['Agreement.Controller.Public.AgreementsUpdate_Request'];
/** Agreement template details containing reusable basic, billing, and renewal fields. */
export type AgreementTemplate = components['schemas']['Agreement.Template.Model.AgreementTemplate'];
/** Payload for creating an account-owned agreement template. */
export type AgreementTemplateCreateRequest =
  components['schemas']['Agreement.Template.Controller.Public.AgreementTemplateCreate_Request'];
/** Identifier returned after an agreement template is created. */
export type AgreementTemplateCreateResponse =
  components['schemas']['Agreement.Template.Controller.Public.AgreementTemplateCreate_Response'];
/** Envelope containing the requested agreement template details. */
export type AgreementTemplateGetResponse =
  components['schemas']['Agreement.Template.Controller.Public.AgreementTemplateGet_Response'];
/** Collection of agreement templates available to the authenticated account. */
export type AgreementTemplatesListResponse =
  components['schemas']['Agreement.Template.Controller.Public.AgreementTemplatesList_Response'];
/** Payload for updating an account-owned agreement template. */
export type AgreementTemplateUpdateRequest =
  components['schemas']['Agreement.Template.Controller.Public.AgreementTemplateUpdate_Request'];
/** Shared agreement template fields accepted by create and update operations. */
export type AgreementTemplateUpsertPayload =
  components['schemas']['Agreement.Template.Model.AgreementTemplateUpsertPayload'];
/** Agreement create or update payload containing basic, billing, renewal, and budgeting fields. */
export type AgreementUpsertPayloadApi =
  components['schemas']['Agreement.Model.Public.AgreementUpsertPayloadApi'];
/** Saved default filter settings for account and client Analytics dashboards. */
export type AnalyticsDisplaySettingsGetResponse =
  components['schemas']['Analytics.Controller.Public.AnalyticsDisplaySettingsGet_Response'];
/** Request body for saving default filters for an Analytics dashboard. */
export type AnalyticsDisplaySettingsPutRequest =
  components['schemas']['Analytics.Controller.Public.AnalyticsDisplaySettingsPut_Request'];
/** Response payload for Save Analytics Configuration. */
export type AnalyticsDisplaySettingsPutResponse =
  components['schemas']['Analytics.Controller.Public.AnalyticsDisplaySettingsPut_Response'];
/** Initial filter values applied when an Analytics dashboard is opened. */
export type AnalyticsInitialParameters =
  components['schemas']['Analytics.Model.AnalyticsInitialParameters'];
/** Non-secret connection settings of an integration configuration. */
export type ApiIntegrationConfigurationConnection =
  components['schemas']['ScalePadApi.ScalePadApiClient.Integration.Model.Response.ApiIntegrationConfigurationConnection'];
/** Vendor metadata for an integration configuration. */
export type ApiIntegrationConfigurationVendor =
  components['schemas']['ScalePadApi.ScalePadApiClient.Integration.Model.Response.ApiIntegrationConfigurationVendor'];
/**
 * Which frontend a user lands on when they open Lifecycle Manager.
 *
 * Transitional: removed along with `User.LmApplicationType` and
 * `MspPreference.LmDefaultApplicationType` when legacy is retired.
 */
export type ApplicationTypePublic = components['schemas']['Identity.Public.ApplicationTypePublic'];
/** Full assessment evaluation details, including categories, questions, criteria, comments, status, and score. */
export type AssessmentApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentApi'];
/** Category within an assessment evaluation, including its questions and category score. */
export type AssessmentCategoryApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentCategoryApi'];
/** A client's assessment access level, plus the included-usage detail when access is limited. */
export type AssessmentClientAccessApi =
  components['schemas']['Assessment.AssessmentClientAccess.Model.Public.AssessmentClientAccessApi'];
/** A client's assessment access level. Serialized as its name (for example `Limited`) on public responses. */
export type AssessmentClientAccessModePublicEnum =
  components['schemas']['Assessment.AssessmentClientAccess.Model.Public.AssessmentClientAccessModePublicEnum'];
/** Included assessment usage for a client that has limited (non-Lifecycle Manager X) assessment access. */
export type AssessmentClientLimitedAccessApi =
  components['schemas']['Assessment.AssessmentClientAccess.Model.Public.AssessmentClientLimitedAccessApi'];
/** How a created assessment is scoped across a client's sites. */
export type AssessmentCreateScopeApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentCreateScopeApi'];
/** A site an assessment is scoped to. */
export type AssessmentCreateScopeSiteApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentCreateScopeSiteApi'];
/** Selectable criterion answer for an assessment question. */
export type AssessmentCriterionApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentCriterionApi'];
/** A selectable response option for an assessment criterion, belonging to a criterion label type. */
export type AssessmentCriterionLabelPublic =
  components['schemas']['Assessment.AssessmentCriterionLabel.Model.Public.AssessmentCriterionLabelPublic'];
/** Collection of criterion label types available for assessment template questions. */
export type AssessmentCriterionLabelTypeListResponse =
  components['schemas']['Assessment.AssessmentCriterionLabelType.Controller.Public.AssessmentCriterionLabelTypeList_Response'];
/** A criterion label type (question response type) and its available response options. */
export type AssessmentCriterionLabelTypePublic =
  components['schemas']['Assessment.AssessmentCriterionLabelType.Model.Public.AssessmentCriterionLabelTypePublic'];
/**
 * Score buckets used to group items in the Item Detail PDF report.
 * Yes/No/Partial* criterion labels are folded into these via `PdfTheme`:
 * negative → AtRisk, warning → NeedsAttention, caution → AcceptableRisk,
 * positive → Satisfactory, secondary → Unknown, light → NotApplicable.
 */
export type AssessmentEvaluationItemDetailScoreBucket =
  components['schemas']['Assessment.AssessmentEvaluation.Model.AssessmentEvaluationItemDetailScoreBucket'];
/** Details used to create a new initiative when linking one to an assessment evaluation question. The client is inferred from the question. */
export type AssessmentEvaluationQuestionInitiativeLinkInitiativeCreatePayload =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionInitiativeLink_InitiativeCreatePayload'];
/** Request describing the initiative to link to an assessment evaluation question. Supply either an existing initiative id or a create payload, but not both. */
export type AssessmentEvaluationQuestionInitiativeLinkRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionInitiativeLink_Request'];
/** Payload linking an assessment's items to an existing initiative. */
export type AssessmentEvaluationQuestionsInitiativeLinkRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionsInitiativeLink_Request'];
/** Payload describing the full set of tags to apply to an assessment evaluation question. */
export type AssessmentEvaluationQuestionTagUpdateRequest =
  components['schemas']['Assessment.AssessmentItemTag.Controller.Public.AssessmentEvaluationQuestionTagUpdate_Request'];
/** Request body containing PSA ticket create-field values for the assessment evaluation question. */
export type AssessmentEvaluationQuestionTicketCreateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionTicketCreate_Request'];
/** Single PSA ticket create-field value keyed by the field metadata returned from the create-fields endpoint. */
export type AssessmentEvaluationQuestionTicketCreateRequestFieldValue =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionTicketCreate_Request_FieldValue'];
/** Response envelope containing the initial ticket link state after create is queued. */
export type AssessmentEvaluationQuestionTicketCreateResponse =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentEvaluationQuestionTicketCreate_Response'];
/** Profile details for the user who performed an assessment evaluation. */
export type AssessmentEvaluatorApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentEvaluatorApi'];
/** Site rollup counts for a multi-site assessment evaluation. */
export type AssessmentMultiSiteApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentMultiSiteApi'];
/** Summary details for an assessment evaluation returned by public list endpoints. */
export type AssessmentOverviewApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentOverviewApi'];
/** Type of PDF report format */
export type AssessmentPdfReportType =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.DeliverableCatalogComponentAssessments.AssessmentPdfReportType'];
/** Question within an assessment evaluation, including criteria, comments, and scoring guidance. */
export type AssessmentQuestionApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentQuestionApi'];
/** Comment recorded against an assessment question. */
export type AssessmentQuestionCommentApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentQuestionCommentApi'];
/** Action item linked to an assessment question. */
export type AssessmentQuestionLinkedTask =
  components['schemas']['Assessment.AssessmentEvaluation.AssessmentEvaluationQuestion.AssessmentEvaluationQuestionLink.AssessmentQuestionLinkedTask'];
/** Type of assessment report */
export type AssessmentReportType =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.DeliverableCatalogComponentAssessments.AssessmentReportType'];
/** Payload for marking an assessment evaluation complete or incomplete. */
export type AssessmentsCompletionStatusUpdateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsCompletionStatusUpdate_Request'];
/** The client or site boundary covered by an assessment evaluation. */
export type AssessmentScopeApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentScopeApi'];
/** Payload for creating a client assessment evaluation from a template. */
export type AssessmentsCreateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsCreate_Request'];
/** Identifier returned after an assessment evaluation is created. */
export type AssessmentsCreateResponse =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsCreate_Response'];
/** Payload for duplicating a client assessment evaluation into a new run. */
export type AssessmentsDuplicateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsDuplicate_Request'];
/** Identifier returned after an assessment evaluation is duplicated. */
export type AssessmentsDuplicateResponse =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsDuplicate_Response'];
/** Payload containing question answer selections for an assessment evaluation. */
export type AssessmentsEvaluateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsEvaluate_Request'];
/** Envelope containing the requested assessment evaluation. */
export type AssessmentsGetResponse =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsGet_Response'];
/** Payload for replacing the internal comment on an assessment evaluation. */
export type AssessmentsInternalCommentUpsertRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsInternalCommentUpsert_Request'];
/** A Core site covered by an assessment. */
export type AssessmentSiteApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.AssessmentSiteApi'];
/** Payload for replacing a public or internal assessment question comment. */
export type AssessmentsQuestionCommentUpsertRequest =
  components['schemas']['Assessment.AssessmentEvaluation.AssessmentEvaluationQuestion.AssessmentEvaluationQuestionComment.Controller.Public.AssessmentsQuestionCommentUpsertRequest'];
/** Payload for adding a custom answer to an assessment question. */
export type AssessmentsQuestionCriterionCreateRequest =
  components['schemas']['Assessment.AssessmentCriterion.Controller.Public.AssessmentsQuestionCriterionCreate_Request'];
/** Identifier returned after a custom answer is added to an assessment question. */
export type AssessmentsQuestionCriterionCreateResponse =
  components['schemas']['Assessment.AssessmentCriterion.Controller.Public.AssessmentsQuestionCriterionCreate_Response'];
/** Payload for updating assessment evaluation title, description, evaluator, and evaluated date. */
export type AssessmentsUpdateRequest =
  components['schemas']['Assessment.AssessmentEvaluation.Controller.Public.AssessmentsUpdate_Request'];
/** Category fields used while creating an assessment template. */
export type AssessmentTemplateCategoryCreatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCategory.Model.AssessmentTemplateCategoryCreatePayload'];
/** Reusable category within an assessment template. */
export type AssessmentTemplateCategoryPublic =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCategory.Model.Public.AssessmentTemplateCategoryPublic'];
/** Category fields used while updating an assessment template. */
export type AssessmentTemplateCategoryUpdatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCategory.Model.AssessmentTemplateCategoryUpdatePayload'];
/** Fields used to create an account-owned assessment template. */
export type AssessmentTemplateCreatePayload =
  components['schemas']['Assessment.AssessmentTemplate.Model.AssessmentTemplateCreatePayload'];
/** Payload for creating an account-owned assessment template. */
export type AssessmentTemplateCreateRequest =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateCreate_Request'];
/** Identifier returned after an assessment template is created. */
export type AssessmentTemplateCreateResponse =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateCreate_Response'];
/** Criterion answer fields used while creating an assessment template question. */
export type AssessmentTemplateCriterionCreatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCriterion.Model.AssessmentTemplateCriterionCreatePayload'];
/** Reusable criterion answer within an assessment template question. */
export type AssessmentTemplateCriterionPublic =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCriterion.Model.Public.AssessmentTemplateCriterionPublic'];
/** Criterion answer fields used while updating an assessment template question. */
export type AssessmentTemplateCriterionUpdatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateCriterion.Model.AssessmentTemplateCriterionUpdatePayload'];
/** Envelope containing the requested assessment template details. */
export type AssessmentTemplateGetResponse =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateGet_Response'];
/** Summary details for an assessment template returned by public list endpoints. */
export type AssessmentTemplateOverviewApi =
  components['schemas']['Assessment.AssessmentTemplate.Model.Public.AssessmentTemplateOverviewApi'];
/** Full assessment template details, including reusable categories, questions, criteria, and weighting settings. */
export type AssessmentTemplatePublic =
  components['schemas']['Assessment.AssessmentTemplate.Model.Public.AssessmentTemplatePublic'];
/** Question fields used while creating an assessment template. */
export type AssessmentTemplateQuestionCreatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateQuestion.Model.AssessmentTemplateQuestionCreatePayload'];
/** Reusable question within an assessment template. */
export type AssessmentTemplateQuestionPublic =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateQuestion.Model.Public.AssessmentTemplateQuestionPublic'];
/** One concrete assessment question response created from the template question. */
export type AssessmentTemplateQuestionResponseListResponse =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateQuestionResponseList_Response'];
/** A criterion selected for one assessment question response. */
export type AssessmentTemplateQuestionResponseListSelectedCriterion =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateQuestionResponseList_SelectedCriterion'];
/** Core site attached to a site-scoped assessment response. */
export type AssessmentTemplateQuestionResponseListSite =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateQuestionResponseList_Site'];
/** Payload describing the full set of tags to apply to an assessment template question. */
export type AssessmentTemplateQuestionTagUpdateRequest =
  components['schemas']['Assessment.AssessmentItemTag.Controller.Public.AssessmentTemplateQuestionTagUpdate_Request'];
/** Question fields used while updating an assessment template. */
export type AssessmentTemplateQuestionUpdatePayload =
  components['schemas']['Assessment.AssessmentTemplate.AssessmentTemplateQuestion.Model.AssessmentTemplateQuestionUpdatePayload'];
/** Collection of assessment templates visible to the authenticated account. */
export type AssessmentTemplatesListResponse =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplatesList_Response'];
/** Fields used to update an account-owned assessment template. */
export type AssessmentTemplateUpdatePayloadPublic =
  components['schemas']['Assessment.AssessmentTemplate.Model.Public.AssessmentTemplateUpdatePayloadPublic'];
/** Payload for updating an account-owned assessment template. */
export type AssessmentTemplateUpdateRequest =
  components['schemas']['Assessment.AssessmentTemplate.Controller.Public.AssessmentTemplateUpdate_Request'];
/** Effective hardware replacement settings and the source of each setting. */
export type AssetReplacement =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.AssetReplacement'];
/** Request body containing hardware asset identifiers used to look up attached contract agreements. */
export type AssetsHardwareAttachedAgreementsRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareAttachedAgreements_Request'];
/** Response containing contract agreement identifiers attached to the requested hardware assets. */
export type AssetsHardwareAttachedAgreementsResponse =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareAttachedAgreements_Response'];
/** Request body identifying the hardware asset whose attached initiative ids should be returned. */
export type AssetsHardwareAttachedInitiativesRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareAttachedInitiatives_Request'];
/** Response containing initiative ids for the initiatives currently attached to the requested hardware asset. */
export type AssetsHardwareAttachedInitiativesResponse =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareAttachedInitiatives_Response'];
/** An initiative that includes the hardware asset and the budget role of that link. */
export type AssetsHardwareAttachedInitiativesResponseAttachedInitiative =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareAttachedInitiatives_Response_AttachedInitiative'];
/** Whether the client has devices matching hardware lifecycle report criteria. */
export type AssetsHardwareLifecycleReportAvailabilityGetResponse =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareLifecycleReportAvailabilityGet_Response'];
/** Cursor-paginated list response. */
export type AssetsHardwareLifecycleResponse =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.AssetsHardwareLifecycle_Response'];
/** Filters, columns, and custom fields for the hardware asset list. */
export type AssetsHardwareMetadataGetResponse =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.AssetsHardwareMetadataGet_Response'];
/** Request body that identifies a hardware asset by Core API hardware id. */
export type AssetsHardwareSourcesGetRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Controller.Public.AssetsHardwareSourcesGet_Request'];
/** Client software access and indexed lifecycle counts. */
export type AssetSoftwareLifecycleSummaryGetResponse =
  components['schemas']['Asset.Software.Controller.Public.AssetSoftwareLifecycleSummaryGet_Response'];
/** Deliverable template component that calls attention to important content. */
export type AttentionComponent =
  components['schemas']['Deliverable.DeliverableTemplate.Model.AttentionComponent'];
/** Request payload for Filter Authorized Clients. */
export type AuthorizationClientsFilterRequest =
  components['schemas']['Feature.Access.Controller.Public.AuthorizationClientsFilter_Request'];
/** Response payload for Filter Authorized Clients. */
export type AuthorizationClientsFilterResponse =
  components['schemas']['Feature.Access.Controller.Public.AuthorizationClientsFilter_Response'];
/** A feature resource and the effective actions available to the current user. */
export type AuthorizationResource =
  components['schemas']['Feature.Access.Model.Public.AuthorizationResource'];
/** MSP branding details used when rendering Lifecycle Manager deliverables and shared presentation views. */
export type BrandingMspV2 =
  components['schemas']['AssetManagement.Strategy.Branding.Model.BrandingMspV2'];
/** MSP website link displayed in client-facing deliverable and roadmap branding. */
export type BrandingWebsiteInfo =
  components['schemas']['AssetManagement.Strategy.Branding.Model.BrandingWebsiteInfo'];
/** Initiative budget containing one-time costs, recurring costs, and currency details. */
export type Budget = components['schemas']['Initiative.Budget.Model.Budget'];
/** Response envelope containing the option lists used to construct Budget API queries. */
export type BudgetAvailabilitiesGetResponse =
  components['schemas']['BudgetForecast.Controller.Public.BudgetAvailabilitiesGet_Response'];
/** Option lists available for Budget API filters and grouping controls. */
export type BudgetAvailabilitiesPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetAvailabilitiesPublic'];
/** Lightweight client reference included on detailed Budget API rows. */
export type BudgetClientReferencePublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetClientReferencePublic'];
/** Contract budget detail row with forecast period amounts and billing status metadata. */
export type BudgetContractPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetContractPublic'];
/** This is a subset of currency information relevant to budgets in a proposal */
export type BudgetCurrency = components['schemas']['Initiative.Budget.Model.BudgetCurrency'];
/** Supported forecast period granularity for Budget API responses. */
export type BudgetForecastFrequencyPublicEnum =
  components['schemas']['BudgetForecast.Model.Public.BudgetForecastFrequencyPublicEnum'];
/** Initiative budget detail row with client, schedule, status, and forecast period amounts. */
export type BudgetInitiativePublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetInitiativePublic'];
/** IT Debt budget detail row for a hardware asset and its projected replacement cost. */
export type BudgetItDebtPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetItDebtPublic'];
/** One-time budget line item for an initiative or initiative template. */
export type BudgetLineItem = components['schemas']['Initiative.Budget.Model.BudgetLineItem'];
/** Cost calculation modes for initiative budget line items. */
export type BudgetLineItemCostTypeEnum =
  components['schemas']['Initiative.Budget.Model.BudgetLineItem_CostTypeEnum'];
/** Machine value and display label for a selectable Budget API option. */
export type BudgetOptionPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetOptionPublic'];
/** Monetary amount aligned to one forecast period column. */
export type BudgetPeriodAmountPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetPeriodAmountPublic'];
/** Date window or forecast bucket associated with a budget item. */
export type BudgetPeriodPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetPeriodPublic'];
/** Budget summary totals grouped by budget type and aligned to forecast period columns. */
export type BudgetSummaryPublicResponse =
  components['schemas']['BudgetForecast.Model.Public.BudgetSummaryPublicResponse'];
/** Aggregate budget amount row for one budget type, or one IT Debt asset type when asset-type grouping is enabled. */
export type BudgetSummaryRowPublic =
  components['schemas']['BudgetForecast.Model.Public.BudgetSummaryRowPublic'];
/** Recurrence cadence for a deliverable schedule. */
export type Cadence =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.Cadence'];
/** Cadence variants supported by a deliverable schedule. */
export type CadenceEnum =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.Cadence_Enum'];
/** Cursor-paginated list response. */
export type CalendarEventListResponse =
  components['schemas']['Calendar.Controller.Public.CalendarEventList_Response'];
/** A dated Lifecycle Manager record on the calendar: a task due date, an agreement renewal, or a scheduled deliverable send. */
export type CalendarEventPublic =
  components['schemas']['Calendar.Model.Public.CalendarEventPublic'];
/** Summary of a child assessment within a multi-site assessment evaluation. */
export type ChildAssessmentSummaryApi =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.ChildAssessmentSummaryApi'];
/** Assign or clear the client access group for one or more clients. Send client_access_group_id null to clear the assignment. */
export type ClientAccessGroupUpdateRequest =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientAccessGroupUpdate_Request'];
/** A Lifecycle Manager user assigned to a client account team, including their assigned role. */
export type ClientAccountTeamMemberPublic =
  components['schemas']['Organization.Console.Model.Public.ClientAccountTeamMemberPublic'];
/** The current user's effective authorization for the selected client. */
export type ClientAuthorizationGetResponse =
  components['schemas']['Feature.Access.Controller.Public.ClientAuthorizationGet_Response'];
/** Basic client identity and display information. */
export type ClientBasicInfo = components['schemas']['Organization.Model.ClientBasicInfo'];
/** Client summary with the identifier and display label used in public API lookup responses. */
export type ClientBasicInfoPublic =
  components['schemas']['Organization.Model.Public.ClientBasicInfoPublic'];
/** A single client profile for the client dashboard, including segment, location, owner, account team, and key contacts. */
export type ClientDetailPublic =
  components['schemas']['Organization.Console.Model.Public.ClientDetailPublic'];
/**
 * Qualitative band a client's Digital Maturity Index falls into. Serialized as its name (for example `Good`);
 * the consumer maps each band to its own display styling.
 */
export type ClientDmiBandPublicEnum =
  components['schemas']['AssetManagement.Strategy.Dmi.Model.Public.ClientDmiBandPublicEnum'];
/** Current Digital Maturity Index for a client, including the qualitative band and confidence flags. */
export type ClientDmiScorePublicResponse =
  components['schemas']['AssetManagement.Strategy.Dmi.Model.Public.ClientDmiScorePublicResponse'];
/** A single Digital Maturity Index reading for a client at a point in time. */
export type ClientDmiTrendPointPublic =
  components['schemas']['AssetManagement.Strategy.Dmi.Model.Public.ClientDmiTrendPointPublic'];
/** Digital Maturity Index readings for a client over the requested window, oldest first. */
export type ClientDmiTrendPublicResponse =
  components['schemas']['AssetManagement.Strategy.Dmi.Model.Public.ClientDmiTrendPublicResponse'];
/** Response containing the requested client profile. */
export type ClientGetResponse =
  components['schemas']['Organization.Console.Controller.Public.ClientGet_Response'];
/** Client group membership summary. */
export type ClientGroupInfo = components['schemas']['Organization.ClientGroupInfo'];
/** Request payload for Client Group Assign. */
export type ClientGroupMembersAssignRequest =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupMembersAssign_Request'];
/** Request payload for Client Group Unassign. */
export type ClientGroupMemberUnassignRequest =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupMemberUnassign_Request'];
/** Client group details and the clients assigned to the group. */
export type ClientGroupOverviewPublic =
  components['schemas']['Organization.ClientGroup.Model.Public.ClientGroupOverviewPublic'];
/** A named group of clients in the authenticated account. */
export type ClientGroupPublic =
  components['schemas']['Organization.ClientGroup.Model.Public.ClientGroupPublic'];
/** Request body for creating a client group. */
export type ClientGroupsCreateRequest =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupsCreate_Request'];
/** Response envelope containing a created client group. */
export type ClientGroupsCreateResponse =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupsCreate_Response'];
/** Response payload for Get Client Group. */
export type ClientGroupsGetResponse =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupsGet_Response'];
/** Response payload for List Client Groups. */
export type ClientGroupsListResponse =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupsList_Response'];
/** Request body for updating a client group. */
export type ClientGroupsUpdateRequest =
  components['schemas']['Organization.ClientGroup.Controller.Public.ClientGroupsUpdate_Request'];
/** The replacement settings to override for this client on this asset type. Send either field alone; an omitted field keeps the value currently in force for the client. At least one is required. */
export type ClientHardwareReportAssetTypeSettingsPatchRequest =
  components['schemas']['HardwareReplacement.Controller.Public.ClientHardwareReportAssetTypeSettingsPatch_Request'];
/** Basic client information */
export type ClientInfo = components['schemas']['Organization.Model.ClientInfo'];
/** AI-generated business overview for a client, including whether it has been manually edited. */
export type ClientIqClientSummaryPublic =
  components['schemas']['ClientIq.Model.Public.ClientIqClientSummaryPublic'];
/** Inputs controlling how ClientIQ content is generated for a client. */
export type ClientIqGenerateRequest =
  components['schemas']['ClientIq.Controller.Public.ClientIqGenerate_Request'];
/** The status of a ClientIQ content generation job. */
export type ClientIqGenerationStatusPublicEnum =
  components['schemas']['ClientIq.Model.Public.ClientIqGenerationStatusPublicEnum'];
/** A client's ClientIQ content and generation status, including the business summary, industry summary, and generation progress. */
export type ClientIqGetResponse =
  components['schemas']['ClientIq.Controller.Public.ClientIqGet_Response'];
/** AI-generated overview of the industry a client operates in, including whether it has been manually edited. */
export type ClientIqIndustrySummaryPublic =
  components['schemas']['ClientIq.Model.Public.ClientIqIndustrySummaryPublic'];
/** Generation progress for a client's ClientIQ content, including per-content-type job status. */
export type ClientIqProgressPublic =
  components['schemas']['ClientIq.Model.Public.ClientIqProgressPublic'];
/** A primary contact at the client organization that the MSP works with. */
export type ClientKeyContactPublic =
  components['schemas']['Organization.Console.Model.Public.ClientKeyContactPublic'];
/** The contacts to assign as key contacts. */
export type ClientKeyContactsAssignRequest =
  components['schemas']['Organization.OrganizationKeyContact.Controller.Public.ClientKeyContactsAssign_Request'];
/** The contacts to unassign as key contacts. */
export type ClientKeyContactsUnassignRequest =
  components['schemas']['Organization.OrganizationKeyContact.Controller.Public.ClientKeyContactsUnassign_Request'];
/** Filter, sort, and column options used when exporting the Clients list. */
export type ClientListExportRequest =
  components['schemas']['Organization.Console.Model.Public.ClientListExportRequest'];
/** A client list row containing lifecycle summaries and the settings needed by account-level client management surfaces. */
export type ClientListItemPublic =
  components['schemas']['Organization.Console.Model.Public.ClientListItemPublic'];
/**
 * A client offered for selection, with the two facts a picker needs to
 * group and label it: whether the caller starred it, and whether it came
 * from their visit log. The flags are independent, so a starred client the
 * caller also visited recently carries both.
 */
export type ClientLookupItemPublic =
  components['schemas']['Organization.Model.Public.ClientLookupItemPublic'];
/** One member's ability to open the client's notes and tasks. */
export type ClientMentionAccessGetMemberAccess =
  components['schemas']['Organization.Engagement.EngagementMention.Controller.Public.ClientMentionAccessGet_MemberAccess'];
/** Active account members with their access to the client's notes and tasks. */
export type ClientMentionAccessGetResponse =
  components['schemas']['Organization.Engagement.EngagementMention.Controller.Public.ClientMentionAccessGet_Response'];
/** Client willingness to act on lifecycle recommendations. */
export type ClientReadiness = components['schemas']['Wm.Copilot.Settings.Model.ClientReadiness'];
/** The segment a client is grouped under for reporting and prioritization. */
export type ClientSegmentPublic =
  components['schemas']['Organization.Console.Model.Public.ClientSegmentPublic'];
/** Consolidated general settings for a single client. */
export type ClientSettingsGetResponse =
  components['schemas']['Organization.Controller.Public.ClientSettingsGet_Response'];
/**
 * The consolidated general settings for a single client. Related entities are returned as identifiers
 * (the caller resolves labels through the matching list endpoints) and regional settings are returned as
 * the shared settings payload.
 */
export type ClientSettingsPublic =
  components['schemas']['Organization.Model.Public.ClientSettings.ClientSettingsPublic'];
/** An integration configuration that contributed source lineage to a client. */
export type ClientSourcePublic =
  components['schemas']['Organization.Console.Model.Public.ClientSourcePublic'];
/** Request body for applying settings to multiple clients. */
export type ClientsUpdateRequest =
  components['schemas']['Organization.Controller.Public.ClientsUpdate_Request'];
/** The complete set of tags that should be assigned to the client. Send an empty array to clear all tags. */
export type ClientTagUpdateRequest =
  components['schemas']['Organization.OrganizationTagAssignment.Controller.Public.ClientTagUpdate_Request'];
/** An account team member (and optional role) to assign to the selected clients. */
export type ClientTeamMemberAssignMember =
  components['schemas']['Organization.OrganizationAccountTeamMember.AccountTeamMember.Controller.Public.ClientTeamMemberAssign_Member'];
/** Request body for assigning account team members to one or more clients. */
export type ClientTeamMemberAssignRequest =
  components['schemas']['Organization.OrganizationAccountTeamMember.AccountTeamMember.Controller.Public.ClientTeamMemberAssign_Request'];
/** Request body for unassigning account team members from one or more clients. */
export type ClientTeamMemberRemoveRequest =
  components['schemas']['Organization.OrganizationAccountTeamMember.AccountTeamMember.Controller.Public.ClientTeamMemberRemove_Request'];
/** Payload for updating a client website. */
export type ClientUpdateRequest =
  components['schemas']['Organization.Controller.Public.ClientUpdate_Request'];
/** Payload for posting a top-level comment on a record. */
export type CommentCreateRequest =
  components['schemas']['Comment.Controller.Public.CommentCreate_Request'];
/** Identifier returned after a comment is created. */
export type CommentCreateResponse =
  components['schemas']['Comment.Controller.Public.CommentCreate_Response'];
/** The type of Lifecycle Manager record associated with the comment. */
export type CommentEntityType = components['schemas']['Comment.Model.CommentEntityType'];
/** A top-level comment attached to a record, with its most recent replies. */
export type CommentPublic = components['schemas']['Comment.Model.Public.CommentPublic'];
/** Payload for adding a reaction. */
export type CommentReactionAddRequest =
  components['schemas']['Comment.Controller.Public.CommentReactionAdd_Request'];
/** Everyone who reacted to a comment or reply with one emoji. */
export type CommentReactionPublic =
  components['schemas']['Comment.Model.Public.CommentReactionPublic'];
/** Payload for removing a reaction. */
export type CommentReactionRemoveRequest =
  components['schemas']['Comment.Controller.Public.CommentReactionRemove_Request'];
/** Payload for replying to a top-level comment. */
export type CommentReplyCreateRequest =
  components['schemas']['Comment.Controller.Public.CommentReplyCreate_Request'];
/** Identifier returned after a reply is created. */
export type CommentReplyCreateResponse =
  components['schemas']['Comment.Controller.Public.CommentReplyCreate_Response'];
/** A reply to a top-level comment. */
export type CommentReplyPublic = components['schemas']['Comment.Model.Public.CommentReplyPublic'];
/** Payload for editing the body of a comment or reply. */
export type CommentUpdateRequest =
  components['schemas']['Comment.Controller.Public.CommentUpdate_Request'];
/** Preferred direct, consultative or educational communication approach. */
export type CommunicationApproach =
  components['schemas']['Wm.Copilot.Settings.Model.CommunicationApproach'];
/** Executive, mixed or technical audience for generated client communication. */
export type CommunicationAudience =
  components['schemas']['Wm.Copilot.Settings.Model.CommunicationAudience'];
/** Preferred level of detail in generated client communication. */
export type CommunicationDetailPreference =
  components['schemas']['Wm.Copilot.Settings.Model.CommunicationDetailPreference'];
/** Preferred technical depth in generated client communication. */
export type CommunicationTechnicalDepth =
  components['schemas']['Wm.Copilot.Settings.Model.CommunicationTechnicalDepth'];
/** ScalePad API error detail. */
export type ConflictApiError = components['schemas']['ScalePadApi.Model.ConflictApiError'];
/** SaaS license assignment details associated with a contact. */
export type ContactAssignedLicensePublic =
  components['schemas']['Contact.Model.Public.ContactAssignedLicensePublic'];
/** Payload for creating a client contact. */
export type ContactCreateRequest =
  components['schemas']['Contact.Controller.Public.ContactCreate_Request'];
/** Identifier returned after a contact is created. */
export type ContactCreateResponse =
  components['schemas']['Contact.Controller.Public.ContactCreate_Response'];
/** Spreadsheet file format requested for a contact console export. */
export type ContactExportFormatPublicEnum =
  components['schemas']['AssetManagement.Asset.Contact.Model.Public.ContactExportFormatPublicEnum'];
/** Response envelope containing a contact record. */
export type ContactGetResponse =
  components['schemas']['Contact.Controller.Public.ContactGet_Response'];
/** Request body for hiding or restoring a contact in Lifecycle Manager. */
export type ContactHiddenStatusUpdateRequest =
  components['schemas']['Contact.Controller.Public.ContactHiddenStatusUpdate_Request'];
/** Contact lookup key that identifies a client contact by id or by email plus client key. */
export type ContactKeyPublic = components['schemas']['Contact.Model.Public.ContactKeyPublic'];
/** Contact list item with client, lineage, license, and security posture details. */
export type ContactListItemPublic =
  components['schemas']['Contact.Model.Public.ContactListItemPublic'];
/** Security posture and activity signals derived for a contact. */
export type ContactPosturePublic =
  components['schemas']['Contact.Model.Public.ContactPosturePublic'];
/** Client contact summary returned by Lifecycle Manager public lookup endpoints. */
export type ContactPublic = components['schemas']['Contact.Model.Public.ContactPublic'];
/** SaaS activity tracking details associated with a contact. */
export type ContactSatPublic = components['schemas']['Contact.Model.Public.ContactSatPublic'];
/** Contacts dashboard Microsoft 365 adoption metrics. */
export type ContactsDashboardMicrosoft365Public =
  components['schemas']['Contact.Model.Public.ContactsDashboardMicrosoft365Public'];
/** Contacts dashboard security awareness training metrics. */
export type ContactsDashboardSecurityTrainingPublic =
  components['schemas']['Contact.Model.Public.ContactsDashboardSecurityTrainingPublic'];
/** Contacts dashboard summary metrics for a client or account. */
export type ContactsDashboardSummaryPublic =
  components['schemas']['Contact.Model.Public.ContactsDashboardSummaryPublic'];
/** Payload identifying the contacts to update and the visibility state to apply to them. */
export type ContactsUpdateRequest =
  components['schemas']['AssetManagement.Asset.Contact.Controller.Public.ContactsUpdate_Request'];
/** Result of a bulk contact visibility update, with per-contact outcomes and summary counts. */
export type ContactsVisibilityUpdatePublic =
  components['schemas']['AssetManagement.Asset.Contact.Model.Public.ContactsVisibilityUpdatePublic'];
/** Outcome of a single contact within a bulk contact visibility update. */
export type ContactVisibilityResultPublic =
  components['schemas']['AssetManagement.Asset.Contact.Model.Public.ContactVisibilityResultPublic'];
/** Request body for attaching hardware assets to a contract. */
export type ContractAssetAttachRequest =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractAssetAttach_Request'];
/** Request body for detaching hardware assets from a contract. */
export type ContractAssetBulkDeleteRequest =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractAssetBulkDelete_Request'];
/** Hardware asset summary linked to a contract. */
export type ContractAssetPublic =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractAssetPublic'];
/** Basic contract fields such as title, category, status, impact, location, and external-sync metadata. */
export type ContractBasicPublic =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractBasicPublic'];
/** Contract billing terms including cycle, cost, currency, seats, next due date, renewal, and budgeting behavior. */
export type ContractBillingPublic =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractBillingPublic'];
/** Flags indicating which contract fields have account-level overrides. */
export type ContractOverriddenFieldsPublic =
  components['schemas']['Agreement.Compatibility.Contract.Override.Model.Public.ContractOverriddenFieldsPublic'];
/** Contract summary shown in public contract list responses, including client, billing, renewal, and asset-count details. */
export type ContractOverviewApi =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractOverviewApi'];
/** Complete contract details including client, basic contract fields, billing terms, notification settings, and linked assets. */
export type ContractPublic =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractPublic'];
/** Request body identifying the client and contract payload to create. */
export type ContractsCreateRequest =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractsCreate_Request'];
/** Response containing the identifier of the newly-created contract. */
export type ContractsCreateResponse =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractsCreate_Response'];
/** Response containing complete details for the requested contract. */
export type ContractsGetResponse =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractsGet_Response'];
/** Source system for a contract record. */
export type ContractSource =
  components['schemas']['Agreement.Compatibility.Contract.Model.ContractSource'];
/** Request body containing the client identifier supplied with the replacement contract payload. */
export type ContractsUpdateRequest =
  components['schemas']['Agreement.Compatibility.Contract.Controller.Public.ContractsUpdate_Request'];
/** Contract create or update payload containing basic, billing, renewal, and budgeting fields. */
export type ContractUpsertPayloadApi =
  components['schemas']['Agreement.Compatibility.Contract.Model.Public.ContractUpsertPayloadApi'];
/** Communication profile values explicitly configured at one scope. Null values inherit or use built-in defaults. */
export type CopilotSettingsConfiguredCommunicationPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsConfiguredCommunicationPublic'];
/** Planning posture values explicitly configured at one scope. Null values inherit or use built-in defaults. */
export type CopilotSettingsConfiguredPlanningPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsConfiguredPlanningPublic'];
/** Copilot settings explicitly configured at the requested scope. */
export type CopilotSettingsConfiguredPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsConfiguredPublic'];
/** Effective communication profile values and the scope that supplied each value. */
export type CopilotSettingsEffectiveCommunicationPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsEffectiveCommunicationPublic'];
/** Effective planning posture values and the scope that supplied each value. */
export type CopilotSettingsEffectivePlanningPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsEffectivePlanningPublic'];
/** Effective Copilot settings resolved from Client, Segment, Account, and built-in defaults. */
export type CopilotSettingsEffectivePublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsEffectivePublic'];
/** One effective Copilot setting value and the scope that supplied it. */
export type CopilotSettingsEffectiveValuePublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsEffectiveValuePublic'];
/** Partial Copilot settings update. Omitted fields remain unchanged; null resets a field to inheritance or its built-in default. */
export type CopilotSettingsPatchRequest =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsPatchRequest'];
/** Partial communication profile update. Null resets a field to inheritance or its built-in default. */
export type CopilotSettingsPatchRequestCommunicationProfilePatch =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsPatchRequest_CommunicationProfilePatch'];
/** Partial planning posture update. Null resets a field to inheritance or its built-in default. */
export type CopilotSettingsPatchRequestPlanningPosturePatch =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsPatchRequest_PlanningPosturePatch'];
/** Configured and inherited Copilot settings for an Account, Segment, or Client scope. */
export type CopilotSettingsPublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsPublic'];
/** Configured and inherited Copilot settings for one scope. */
export type CopilotSettingsResponse =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsResponse'];
/** Scope supplying the effective Copilot setting. */
export type CopilotSettingsScopeType =
  components['schemas']['Wm.Copilot.Settings.Model.CopilotSettingsScopeType'];
/** Scope that supplied an effective Copilot setting value. */
export type CopilotSettingsSourcePublic =
  components['schemas']['CopilotSettings.Model.Public.CopilotSettingsSourcePublic'];
/** Coverage type used by Lifecycle Manager warranty settings. */
export type CoverageType = components['schemas']['Settings.CoverageType'];
/** Number separators used to display currency values: currency defaults or English separators. */
export type CurrencyNumberFormatEnum = components['schemas']['Settings.CurrencyNumberFormatEnum'];
/** Number separator format used when displaying currency amounts across the account. */
export type CurrencyNumberFormatPublic =
  components['schemas']['Msp.AccountSettings.Public.CurrencyNumberFormatPublic'];
/** Identifies the Lifecycle Manager dashboard whose saved layout is being read or updated. */
export type DashboardKey = components['schemas']['Plan.Model.DashboardKey'];
/** Date format token used when rendering dates across the account. */
export type DateFormatPublic = components['schemas']['Msp.AccountSettings.Public.DateFormatPublic'];
/** Date and time format options available to an account. */
export type DateTimeFormatEnum = components['schemas']['Settings.DateTimeFormatEnum'];
/** Day of the week used by meeting recurrence patterns. */
export type DayOfWeek = components['schemas']['System.DayOfWeek'];
/** Day of the week, serialized as the day name over the public API. */
export type DayOfWeekPublic = components['schemas']['ScalePadApi.Model.Response.DayOfWeekPublic'];
/** Day selection used by a deliverable schedule cadence. */
export type DaySelector =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.DaySelector'];
/** Day-selector variants supported by a deliverable schedule. */
export type DaySelectorEnum =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.DaySelector_Enum'];
/** Time horizon for client investment decisions. */
export type DecisionHorizon = components['schemas']['Wm.Copilot.Settings.Model.DecisionHorizon'];
/** Complete deliverable information including all sections and components */
export type Deliverable = components['schemas']['Deliverable.Model.Deliverable'];
/** Assessment report configuration to add to a deliverable. */
export type DeliverableAssessmentReportAppendRequest =
  components['schemas']['Deliverable.Controller.Public.DeliverableAssessmentReportAppend_Request'];
/** Result of appending an assessment report to a deliverable. */
export type DeliverableAssessmentReportAppendResponse =
  components['schemas']['Deliverable.Controller.Public.DeliverableAssessmentReportAppend_Response'];
/** Summary information for a client deliverable returned by list endpoints. */
export type DeliverableBasicInfo = components['schemas']['Deliverable.Model.DeliverableBasicInfo'];
/** Represents a component definition with client-specific integration status and configuration */
export type DeliverableCatalogComponent =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponent'];
/** Component configuration including options and default values, each with their own schema and data */
export type DeliverableCatalogComponentConfiguration =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentConfiguration'];
/** Configuration data structure containing JSON Schema and data object */
export type DeliverableCatalogComponentConfigurationData =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentConfigurationData'];
/** Component output schema definition */
export type DeliverableCatalogComponentOutput =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentOutput'];
/** Represents a user-supplied custom content component */
export type DeliverableCatalogComponentTypeCustom =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_Custom'];
/** Represents a Lifecycle Manager internal component */
export type DeliverableCatalogComponentTypeLifecycleManager =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_LifecycleManager'];
/** If the component cannot be enabled, contains details describing why a component cannot be enabled and what must be done to resolve the issue. */
export type DeliverableCatalogComponentTypeResolutionInfo =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_ResolutionInfo'];
/** Code representing the reason the component cannot be enabled. */
export type DeliverableCatalogComponentTypeResolutionInfoReasonCodeEnum =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_ResolutionInfo_ReasonCodeEnum'];
/** Component source types supported by the deliverable catalog. */
export type DeliverableCatalogComponentTypeTypeEnum =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_TypeEnum'];
/** Represents a vendor integration component */
export type DeliverableCatalogComponentTypeVendor =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.Model.DeliverableCatalogComponentType_Vendor'];
/** Represents an available deliverable integration in the catalog */
export type DeliverableCatalogIntegration =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogIntegration.Model.DeliverableCatalogIntegration'];
/** Response envelope containing deliverable integration catalog entries available for MSP configuration. */
export type DeliverableCatalogIntegrationListResponse =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogIntegration.Controller.DeliverableCatalogIntegrationList_Response'];
/** Represents vendor information for a deliverable integration */
export type DeliverableCatalogIntegrationVendor =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogIntegration.Model.DeliverableCatalogIntegrationVendor'];
/** Collection of deliverable catalog components available for a client. */
export type DeliverableCatalogListResponse =
  components['schemas']['Deliverable.DeliverableCatalog.Controller.DeliverableCatalogList_Response'];
/** Deliverable custom component file with its base64-encoded content. */
export type DeliverableComponentFileGetResponse =
  components['schemas']['Deliverable.Controller.DeliverableComponentFileGet_Response'];
/** One approved display-safe field from an IT Glue flexible asset. */
export type DeliverableComponentItGlueFlexibleAssetListField =
  components['schemas']['Deliverable.Controller.Public.DeliverableComponentItGlueFlexibleAssetList_Field'];
/** One display-safe IT Glue flexible asset record. */
export type DeliverableComponentItGlueFlexibleAssetListResponse =
  components['schemas']['Deliverable.Controller.Public.DeliverableComponentItGlueFlexibleAssetList_Response'];
/** Custom component type (user-supplied content, no external integration) */
export type DeliverableComponentTypeConfigurationCustom =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableComponentTypeConfiguration_Custom'];
/** Lifecycle Manager component type (no external integration) */
export type DeliverableComponentTypeConfigurationLifecycleManager =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableComponentTypeConfiguration_LifecycleManager'];
/** Vendor component type */
export type DeliverableComponentTypeConfigurationVendor =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableComponentTypeConfiguration_Vendor'];
/** Payload for creating a client deliverable from an existing deliverable template. */
export type DeliverableCreateFromTemplateRequest =
  components['schemas']['Deliverable.Controller.DeliverableCreateFromTemplate_Request'];
/** Envelope containing the deliverable created from a template. */
export type DeliverableCreateFromTemplateResponse =
  components['schemas']['Deliverable.Controller.DeliverableCreateFromTemplate_Response'];
/** Payload for creating a client deliverable with sections and components. */
export type DeliverableCreateRequest =
  components['schemas']['Deliverable.Controller.DeliverableCreate_Request'];
/** Envelope containing the deliverable created for a client. */
export type DeliverableCreateResponse =
  components['schemas']['Deliverable.Controller.DeliverableCreate_Response'];
/** Requested executive summary length and advisory depth. */
export type DeliverableExecutiveSummaryStyle =
  components['schemas']['Deliverable.Logic.DeliverableExecutiveSummaryStyle'];
/** The current editor copy to preserve where it remains accurate and useful. */
export type DeliverableExecutiveSummarySuggestRequest =
  components['schemas']['Deliverable.Controller.Public.DeliverableExecutiveSummarySuggest_Request'];
/** A grounded executive summary suggestion for review before it is saved. */
export type DeliverableExecutiveSummarySuggestResponse =
  components['schemas']['Deliverable.Controller.Public.DeliverableExecutiveSummarySuggest_Response'];
/** Envelope containing the requested deliverable. */
export type DeliverableGetResponse =
  components['schemas']['Deliverable.Controller.DeliverableGet_Response'];
/** Represents an integrated deliverable item with configuration, vendor, and section information */
export type DeliverableIntegratedIntegration =
  components['schemas']['Deliverable.DeliverableIntegration.DeliverableIntegratedIntegration.Model.DeliverableIntegratedIntegration'];
/** Represents the configuration details of an integrated deliverable */
export type DeliverableIntegrationConfiguration =
  components['schemas']['Deliverable.DeliverableIntegration.DeliverableIntegratedIntegration.Model.DeliverableIntegrationConfiguration'];
/** Whether the configured integration has client data available for deliverable content. */
export type DeliverableIntegrationConfigurationDeliverableIntegrationClientDataAvailability =
  components['schemas']['Deliverable.DeliverableIntegration.DeliverableIntegratedIntegration.Model.DeliverableIntegrationConfiguration_DeliverableIntegrationClientDataAvailability'];
/** Connection status for a deliverable integration configuration. */
export type DeliverableIntegrationConfigurationDeliverableIntegrationStatus =
  components['schemas']['Deliverable.DeliverableIntegration.DeliverableIntegratedIntegration.Model.DeliverableIntegrationConfiguration_DeliverableIntegrationStatus'];
/** Response envelope containing deliverable integrations currently connected for a client. */
export type DeliverableIntegrationListResponse =
  components['schemas']['Deliverable.DeliverableIntegration.Controller.DeliverableIntegrationList_Response'];
/** Represents vendor information for an integrated deliverable */
export type DeliverableIntegrationVendor =
  components['schemas']['Deliverable.DeliverableIntegration.DeliverableIntegratedIntegration.Model.DeliverableIntegrationVendor'];
/** Collection of deliverables for a client. */
export type DeliverableListResponse =
  components['schemas']['Deliverable.Controller.DeliverableList_Response'];
/**
 * Request payload for updating a deliverable.
 * All fields are optional but at least one must be provided for a valid update.
 */
export type DeliverablePatchRequest =
  components['schemas']['Deliverable.Controller.DeliverablePatch_Request'];
/** Envelope containing the updated deliverable. */
export type DeliverablePatchResponse =
  components['schemas']['Deliverable.Controller.DeliverablePatch_Response'];
/**
 * Deliverable content for presentation.
 * Excludes sensitive fields like IDs, timestamps, creator information, and status.
 */
export type DeliverablePresentation =
  components['schemas']['Deliverable.DeliverablePresentation.Model.DeliverablePresentation'];
/**
 * Minimal client information for deliverable presentation.
 * Contains only the name needed for display purposes.
 */
export type DeliverablePresentationClientInfo =
  components['schemas']['Deliverable.DeliverablePresentation.Model.DeliverablePresentationClientInfo'];
/** Response containing a published deliverable presentation payload and the MSP branding needed to render it. */
export type DeliverablePresentationGetResponse =
  components['schemas']['Deliverable.DeliverablePresentation.Controller.DeliverablePresentationGet_Response'];
/** Presentation navigation and layout for the stored deliverable snapshot. */
export type DeliverablePresentationManifest =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverablePresentationManifest'];
/** A section or component node in the deliverable presentation. */
export type DeliverablePresentationManifestNode =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverablePresentationManifestNode'];
/** Ordered presentation nodes grouped by deliverable section. */
export type DeliverablePresentationManifestTree =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverablePresentationManifestTree'];
/**
 * Minimal section information for deliverable presentation.
 * Contains only the properties needed for tab rendering and component display.
 */
export type DeliverablePresentationSection =
  components['schemas']['Deliverable.DeliverablePresentation.Model.DeliverablePresentationSection'];
/**
 * Minimal component information for deliverable presentation.
 * Contains only the properties needed for rendering in the presentation view.
 * Excludes sensitive data like configuration, integration IDs, and audit information.
 */
export type DeliverablePresentationSectionComponent =
  components['schemas']['Deliverable.DeliverablePresentation.Model.DeliverablePresentationSectionComponent'];
/**
 * Minimal output information for deliverable component presentation.
 * Contains only the data needed for rendering component output.
 */
export type DeliverablePresentationSectionComponentOutput =
  components['schemas']['Deliverable.DeliverablePresentation.Model.DeliverablePresentationSectionComponentOutput'];
/**
 * Closed set of reasons a scheduled fire is recorded as Failed. Surfaced to the UI — which owns
 * the display text — via the schedule `LastError` and run-history `ErrorMessage` DTO
 * fields, and persisted by member name on the backing columns. Unknown is the
 * deserialization fallback for a stored value that no longer maps to a member.
 */
export type DeliverableScheduleFailureReason =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.DeliverableScheduleFailureReason'];
/** Section information within a deliverable */
export type DeliverableSection =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSection'];
/** Component information within a deliverable section */
export type DeliverableSectionComponent =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableSectionComponent'];
/** Details about the configuration of a deliverable section component */
export type DeliverableSectionComponentConfiguration =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableSectionComponentConfiguration'];
/** A component within a deliverable section provides specific information or functionality (e.g., budget details, asset lists, vendor data) */
export type DeliverableSectionComponentInput =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableSectionComponentInput'];
/** Details about the output of a deliverable section component */
export type DeliverableSectionComponentOutput =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableSectionComponentOutput'];
/**
 * A component within a deliverable section for PATCH operations with upsert semantics.
 *
 * <b>Update mode (id provided):</b> All other fields are optional.
 * <b>Create mode (id omitted):</b>`component_key` and `component_type_configuration` are required.
 *
 */
export type DeliverableSectionComponentPatchPayload =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableSectionComponentPatchPayload'];
/** The section of a deliverable, corresponding to a specific area such as 'Risk', 'Budget', or 'Roadmap' and contains various components that provide detailed information within that section. */
export type DeliverableSectionInput =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionInput'];
/**
 * Section configuration for PATCH operations with upsert semantics.
 *
 * <b>Update mode (id provided):</b> All other fields are optional.
 * <b>Create mode (id omitted):</b>`section_key` is required.
 *
 * Sections not included in the request remain unchanged.
 */
export type DeliverableSectionPatchPayload =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionPatchPayload'];
/** Service Delivery board options available for a client. */
export type DeliverableServiceDeliveryBoardOptionsListResponse =
  components['schemas']['Deliverable.DeliverableCatalog.DeliverableCatalogComponent.DeliverableCatalogComponentServiceDelivery.Controller.DeliverableServiceDeliveryBoardOptionsList_Response'];
/** Expiry window applied to a deliverable share link when it is created or regenerated. Unlimited never expires. */
export type DeliverableShareExpiryWindow =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Model.DeliverableShareExpiryWindow'];
/** Represents a share link for a deliverable */
export type DeliverableShareGeneralLink =
  components['schemas']['Deliverable.DeliverableShare.Model.DeliverableShareGeneralLink'];
/** Response containing the newly created general share link for a deliverable, including the one-time returned password. */
export type DeliverableShareGeneralLinkCreateResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkCreate_Response'];
/** Options applied when creating a general share link for a deliverable. */
export type DeliverableShareGeneralLinkCreateV2Request =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkCreateV2_Request'];
/** Response containing the newly created general share link for a deliverable, including the one-time returned password. */
export type DeliverableShareGeneralLinkCreateV2Response =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkCreateV2_Response'];
/** Response containing the latest general share link for a deliverable. */
export type DeliverableShareGeneralLinkGetResponse =
  components['schemas']['Deliverable.DeliverableShare.Controller.DeliverableShareGeneralLinkGet_Response'];
/** Response containing the general share link with its newly generated URL. The password is unchanged. */
export type DeliverableShareGeneralLinkRegenerateLinkResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRegenerateLink_Response'];
/** Response containing the general share link with its newly generated password. The link URL is unchanged. */
export type DeliverableShareGeneralLinkRegeneratePasswordResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRegeneratePassword_Response'];
/** Response containing the regenerated general share link for a deliverable, including the new one-time returned password. */
export type DeliverableShareGeneralLinkRegenerateResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRegenerate_Response'];
/** Options applied when regenerating a general share link for a deliverable. */
export type DeliverableShareGeneralLinkRegenerateV2Request =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRegenerateV2_Request'];
/** Response containing the regenerated general share link for a deliverable, including the new one-time returned password. */
export type DeliverableShareGeneralLinkRegenerateV2Response =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRegenerateV2_Response'];
/** Response containing the revoked general share link metadata for a deliverable. */
export type DeliverableShareGeneralLinkRevokeResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkRevoke_Response'];
/** The new expiry window to apply to a deliverable's existing general share link. */
export type DeliverableShareGeneralLinkUpdateExpiryRequest =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkUpdateExpiry_Request'];
/** Response containing the general share link for a deliverable with its updated expiry. */
export type DeliverableShareGeneralLinkUpdateExpiryResponse =
  components['schemas']['ShareAccess.DeliverableShareGeneralLink.Controller.DeliverableShareGeneralLinkUpdateExpiry_Response'];
/** Complete deliverable template information including all sections and components */
export type DeliverableTemplate =
  components['schemas']['Deliverable.DeliverableTemplate.Model.DeliverableTemplate'];
/** Summary information for a deliverable template returned by list endpoints. */
export type DeliverableTemplateBasicInfo =
  components['schemas']['Deliverable.DeliverableTemplate.Model.DeliverableTemplateBasicInfo'];
/** Summary information for a section included in a deliverable template. */
export type DeliverableTemplateBasicInfoSection =
  components['schemas']['Deliverable.DeliverableTemplate.Model.DeliverableTemplateBasicInfoSection'];
/** Collection of deliverable catalog components available for templates. */
export type DeliverableTemplateCatalogListResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateCatalog.Controller.DeliverableTemplateCatalogList_Response'];
/** Envelope containing the deliverable template created from a deliverable. */
export type DeliverableTemplateCreateFromDeliverableResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateCreateFromDeliverable_Response'];
/** Envelope containing the deliverable template duplicated from another template. */
export type DeliverableTemplateCreateFromTemplateResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateCreateFromTemplate_Response'];
/** Payload for creating an account-owned deliverable template. */
export type DeliverableTemplateCreateRequest =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateCreate_Request'];
/** Envelope containing the created deliverable template. */
export type DeliverableTemplateCreateResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateCreate_Response'];
/** Envelope containing the requested deliverable template. */
export type DeliverableTemplateGetResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateGet_Response'];
/** Collection of deliverable templates visible to the authenticated account. */
export type DeliverableTemplateListResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplateList_Response'];
/**
 * Request payload for updating a deliverable template.
 * All fields are optional but at least one must be provided for a valid update.
 */
export type DeliverableTemplatePatchRequest =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplatePatch_Request'];
/** Envelope containing the updated deliverable template. */
export type DeliverableTemplatePatchResponse =
  components['schemas']['Deliverable.DeliverableTemplate.Controller.DeliverableTemplatePatch_Response'];
/** Section information within a deliverable template */
export type DeliverableTemplateSection =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSection'];
/** Component information within a deliverable template section */
export type DeliverableTemplateSectionComponent =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSectionComponent.DeliverableTemplateSectionComponent'];
/** Input DTO for creating a component within a deliverable template section */
export type DeliverableTemplateSectionComponentInput =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSectionComponent.DeliverableTemplateSectionComponentInput'];
/**
 * A component within a deliverable template section for PATCH operations with upsert semantics.
 *
 * <b>Update mode (id provided):</b> All other fields are optional.
 * <b>Create mode (id omitted):</b>`component_key` and `component_type_configuration` are required.
 *
 */
export type DeliverableTemplateSectionComponentPatchPayload =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSectionComponent.DeliverableTemplateSectionComponentPatchPayload'];
/** Input DTO for creating a section within a deliverable template */
export type DeliverableTemplateSectionInput =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSectionInput'];
/**
 * Section configuration for PATCH operations with upsert semantics.
 *
 * <b>Update mode (id provided):</b> All other fields are optional.
 * <b>Create mode (id omitted):</b>`section_key` is required.
 *
 * Sections not included in the request remain unchanged.
 */
export type DeliverableTemplateSectionPatchPayload =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableTemplateSection.DeliverableTemplateSectionPatchPayload'];
/** The widget layout of a deliverable component. */
export type DeliverableWidgetLayout =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableWidgetLayout'];
/** A widget and its position in the deliverable component layout. */
export type DeliverableWidgetLayoutNode =
  components['schemas']['Deliverable.DeliverableSection.DeliverableSectionComponent.DeliverableWidgetLayoutNode'];
/** Capacity available to deliver client initiatives. */
export type DeliveryCapacity = components['schemas']['Wm.Copilot.Settings.Model.DeliveryCapacity'];
/** Hardware device types supported by Lifecycle Manager settings. */
export type DeviceTypeEnum = components['schemas']['Settings.DeviceTypeEnum'];
/** Replacement and retirement preferences for one hardware device type. */
export type DeviceTypePreference = components['schemas']['Settings.DeviceTypePreference'];
/** Digital maturity score summary for a client. */
export type DmiScoreInfo = components['schemas']['Organization.DmiScoreInfo'];
/** Represent an empty request */
export type EmptyRequest =
  components['schemas']['Wm.ApiServer.AspNetCore.Controller.Request.EmptyRequest'];
/** Request body for creating an action item. */
export type EngagementActionCreateRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionCreate_Request'];
/** Response envelope containing a created action item. */
export type EngagementActionCreateResponse =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionCreate_Response'];
/** Request body for marking an action item complete or incomplete. */
export type EngagementActionMarkCompletedRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionMarkCompleted_Request'];
/** Request body for pinning or unpinning an action item. */
export type EngagementActionPinRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionPin_Request'];
/** Lifecycle Manager action item with client, assignment, completion, pinning, and linked-item metadata. */
export type EngagementActionPublic =
  components['schemas']['Organization.Engagement.EngagementAction.Model.Public.EngagementActionPublic'];
/** Request body identifying the neighboring action items used to place an action item in manual sort order. */
export type EngagementActionRepositionRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionReposition_Request'];
/** Payload identifying the existing ticket to attach to the action item. */
export type EngagementActionTicketAttachRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketAttach_Request'];
/** State of the ticket link created between the action item and the selected ticket. */
export type EngagementActionTicketAttachResponse =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketAttach_Response'];
/** Request body containing PSA ticket create-field values for the action item. */
export type EngagementActionTicketCreateRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketCreate_Request'];
/** Single PSA ticket create-field value keyed by the field metadata returned from the create-fields endpoint. */
export type EngagementActionTicketCreateRequestFieldValue =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketCreate_Request_FieldValue'];
/** Response envelope containing the initial ticket link state after create is queued. */
export type EngagementActionTicketCreateResponse =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketCreate_Response'];
/** Response envelope containing the current state of the PSA ticket linked to an action item. */
export type EngagementActionTicketGetResponse =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionTicketGet_Response'];
/** Editable action-item fields used when updating description, due date, and assigned users. */
export type EngagementActionUpdatePayloadPublic =
  components['schemas']['Organization.Engagement.EngagementAction.Model.Public.EngagementActionUpdatePayloadPublic'];
/** Request body for updating an action item. */
export type EngagementActionUpdateRequest =
  components['schemas']['Organization.Engagement.EngagementAction.Controller.Public.EngagementActionUpdate_Request'];
/** An audit event in an entity history feed. */
export type EntityHistoryEventPublic =
  components['schemas']['EntityHistory.Model.Public.EntityHistoryEventPublic'];
/** A record related to an entity history event. */
export type EntityHistoryParentRecordPublic =
  components['schemas']['EntityHistory.Model.Public.EntityHistoryParentRecordPublic'];
/** Client-level feature access setting. */
export type FeatureAccessClientPublic =
  components['schemas']['Feature.Access.AccessOrganization.Public.FeatureAccessClientPublic'];
/** Feature access state for a Lifecycle Manager resource. */
export type FeatureAccessPublic =
  components['schemas']['Feature.Access.Model.Public.FeatureAccessPublic'];
/** Allowed values for feature access state. */
export type FeatureAccessPublicEnum =
  components['schemas']['Feature.Access.Model.Public.FeatureAccessPublic_Enum'];
/** Feature access state indicating full access. */
export type FeatureAccessPublicFullAccess =
  components['schemas']['Feature.Access.Model.Public.FeatureAccessPublic_FullAccess'];
/** Feature access state indicating limited access. */
export type FeatureAccessPublicLimitedAccess =
  components['schemas']['Feature.Access.Model.Public.FeatureAccessPublic_LimitedAccess'];
/** Feature access state indicating no access. */
export type FeatureAccessPublicNoAccess =
  components['schemas']['Feature.Access.Model.Public.FeatureAccessPublic_NoAccess'];
/** Response payload for List Featurebase Updates. */
export type FeaturebaseUpdatesListResponse =
  components['schemas']['ProductUpdates.Controller.FeaturebaseUpdatesList_Response'];
/** A product update with its content, publication time and read state. */
export type FeaturebaseUpdatesListUpdate =
  components['schemas']['ProductUpdates.Controller.FeaturebaseUpdatesList_Update'];
/** Request payload for Read Featurebase Updates. */
export type FeaturebaseUpdatesReadRequest =
  components['schemas']['ProductUpdates.Controller.FeaturebaseUpdatesRead_Request'];
/** Feature permission state for a Lifecycle Manager resource. */
export type FeaturePermissionPublic =
  components['schemas']['Feature.Permission.Model.Public.FeaturePermissionPublic'];
/** Allowed values for feature permission state. */
export type FeaturePermissionPublicEnum =
  components['schemas']['Feature.Permission.Model.Public.FeaturePermissionPublic_Enum'];
/** Feature permission state indicating full access. */
export type FeaturePermissionPublicFullAccess =
  components['schemas']['Feature.Permission.Model.Public.FeaturePermissionPublic_FullAccess'];
/** Feature permission state indicating limited access. */
export type FeaturePermissionPublicLimitedAccess =
  components['schemas']['Feature.Permission.Model.Public.FeaturePermissionPublic_LimitedAccess'];
/** Feature permission state indicating no access. */
export type FeaturePermissionPublicNoAccess =
  components['schemas']['Feature.Permission.Model.Public.FeaturePermissionPublic_NoAccess'];
/** Fiscal quarter represented by calendar year and quarter number. */
export type FiscalQuarter = components['schemas']['Date.Range.FiscalQuarter'];
/** Fiscal quarter range with explicit start and end quarters. */
export type FiscalQuarterRange = components['schemas']['Date.Range.FiscalQuarterRange'];
/** ScalePad API error detail. */
export type ForbiddenApiError = components['schemas']['ScalePadApi.Model.ForbiddenApiError'];
/** Response containing action item identifiers attached to a goal. */
export type GoalActionItemsListResponse =
  components['schemas']['Goal.Controller.Public.GoalActionItemsList_Response'];
/** Payload for creating a client goal from an existing goal template. */
export type GoalCreateFromTemplateRequest =
  components['schemas']['Goal.Controller.Public.GoalCreateFromTemplate_Request'];
/** Identifier returned after a goal is created from a template. */
export type GoalCreateFromTemplateResponse =
  components['schemas']['Goal.Controller.Public.GoalCreateFromTemplate_Response'];
/** Payload for creating a client goal, including ownership, status, and target period details. */
export type GoalCreateRequest = components['schemas']['Goal.Controller.Public.GoalCreate_Request'];
/** Identifier returned after a goal is created. */
export type GoalCreateResponse =
  components['schemas']['Goal.Controller.Public.GoalCreate_Response'];
/** Response containing initiative identifiers attached to a goal. */
export type GoalInitiativesListResponse =
  components['schemas']['Goal.Controller.Public.GoalInitiativesList_Response'];
/** Goal summary embedded in linked-resource responses. */
export type GoalLinkInfoV2 = components['schemas']['Goal.GoalLink.GoalLinkInfoV2'];
/** Response containing meeting identifiers attached to a goal. */
export type GoalMeetingsListResponse =
  components['schemas']['Goal.Controller.Public.GoalMeetingsList_Response'];
/** Summary details for a Lifecycle Manager goal returned by public goal list endpoints. */
export type GoalOverviewPublic = components['schemas']['Goal.Model.Public.GoalOverviewPublic'];
/** The target period of the goal. May be targeted for a year, half, or quarter. */
export type GoalPeriodRequest = components['schemas']['Goal.GoalPeriod.Model.GoalPeriodRequest'];
/** Period representing a half-year (H1 or H2). */
export type GoalPeriodRequestPeriodHalf =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodRequest_PeriodHalf'];
/** Period representing a quarter (Q1, Q2, Q3, Q4). */
export type GoalPeriodRequestPeriodQuarter =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodRequest_PeriodQuarter'];
/** Period representing a full year. */
export type GoalPeriodRequestPeriodYear =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodRequest_PeriodYear'];
/** Discriminator values identifying the period shape used for a goal target period. */
export type GoalPeriodV2PeriodEnum =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodV2_PeriodEnum'];
/** Target period for a goal, represented as a year, half-year, or quarter. */
export type GoalPeriodV2PeriodHalf =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodV2_PeriodHalf'];
/** Target period for a goal, represented as a year, half-year, or quarter. */
export type GoalPeriodV2PeriodQuarter =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodV2_PeriodQuarter'];
/** Target period for a goal, represented as a year, half-year, or quarter. */
export type GoalPeriodV2PeriodYear =
  components['schemas']['Goal.GoalPeriod.Model.GoalPeriodV2_PeriodYear'];
/** Payload for changing the target period assigned to an existing goal. */
export type GoalScheduleUpdateRequest =
  components['schemas']['Goal.Controller.Public.GoalScheduleUpdate_Request'];
/** Payload for changing the workflow status assigned to an existing goal. */
export type GoalStatusUpdateRequest =
  components['schemas']['Goal.Controller.Public.GoalStatusUpdate_Request'];
/** Display metadata for a Lifecycle Manager goal status. */
export type GoalStatusV2 = components['schemas']['Goal.GoalStatus.GoalStatusV2'];
/** Fields used to create an account-owned goal template. */
export type GoalTemplateCreatePayload =
  components['schemas']['Goal.GoalTemplate.Model.GoalTemplateCreatePayload'];
/** Payload for creating an account-owned goal template. */
export type GoalTemplateCreateRequest =
  components['schemas']['Goal.GoalTemplate.Controller.Public.GoalTemplateCreate_Request'];
/** Identifier returned after a goal template is created. */
export type GoalTemplateCreateResponse =
  components['schemas']['Goal.GoalTemplate.Controller.Public.GoalTemplateCreate_Response'];
/** Envelope containing the requested goal template details. */
export type GoalTemplateGetResponse =
  components['schemas']['Goal.GoalTemplate.Controller.Public.GoalTemplateGet_Response'];
/** Summary of an initiative template linked to a goal template. */
export type GoalTemplateInitiativeTemplateSummaryPublic =
  components['schemas']['Goal.GoalTemplate.Model.Public.GoalTemplateInitiativeTemplateSummaryPublic'];
/** Goal template details visible through the Lifecycle Manager public API. */
export type GoalTemplatePublic =
  components['schemas']['Goal.GoalTemplate.Model.Public.GoalTemplatePublic'];
/** Collection of goal templates visible to the authenticated account. */
export type GoalTemplatesListResponse =
  components['schemas']['Goal.GoalTemplate.Controller.Public.GoalTemplatesList_Response'];
/** Fields used to update an account-owned goal template. */
export type GoalTemplateUpdatePayloadPublic =
  components['schemas']['Goal.GoalTemplate.Model.Public.GoalTemplateUpdatePayloadPublic'];
/** Payload for updating an account-owned goal template. */
export type GoalTemplateUpdateRequest =
  components['schemas']['Goal.GoalTemplate.Controller.Public.GoalTemplateUpdate_Request'];
/** Partial update payload for the editable details of an existing goal. */
export type GoalUpdateRequest = components['schemas']['Goal.Controller.Public.GoalUpdate_Request'];
/** Request body for downloading the previous hardware spreadsheet export. */
export type HardwareAssetLegacyExportPublicRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetLegacyExportPublicRequest'];
/** Request body for exporting hardware asset data. */
export type HardwareAssetListExportPublicRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListExportPublicRequest'];
/** Hardware asset list item returned by the Lifecycle Manager hardware asset endpoint. */
export type HardwareAssetListItemPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListItemPublic'];
/** Initiative summary attached to a hardware asset list item. */
export type HardwareAssetListItemPublicHardwareAssetInitiativePublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListItemPublic_HardwareAssetInitiativePublic'];
/** Operating system details for a hardware asset list item. */
export type HardwareAssetListItemPublicHardwareAssetOperatingSystemPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListItemPublic_HardwareAssetOperatingSystemPublic'];
/** Processor details for a hardware asset list item. */
export type HardwareAssetListItemPublicHardwareAssetProcessorPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListItemPublic_HardwareAssetProcessorPublic'];
/** Canonical site assigned to a hardware asset list item. */
export type HardwareAssetListItemPublicHardwareAssetSitePublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetListItemPublic_HardwareAssetSitePublic'];
/** Request payload for Patch hardware asset overrides. */
export type HardwareAssetOverridePatchRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareAssetOverridePatch_Request'];
/**
 * Public hardware peek overview payload for `POST /v1/assets/hardware/overview`.
 * Values are indexed/source-oriented; callers format labels for display.
 */
export type HardwareAssetOverviewPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareAssetOverviewPublic'];
/** Request body that identifies a hardware asset by key and optional client scope. */
export type HardwareAssetOverviewRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareAssetOverview_Request'];
/** Payload identifying hardware assets and the estimated replacement cost to store against them. */
export type HardwareAssetReplacementCostUpdateRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareAssetReplacementCostUpdate_Request'];
/** Payload identifying hardware assets and the report asset type to assign to them. */
export type HardwareAssetReportAssetTypeUpdateRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareAssetReportAssetTypeUpdate_Request'];
/** Payload identifying hardware assets to hide from or restore to reporting. */
export type HardwareAssetVisibilityUpdateRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareAssetVisibilityUpdate_Request'];
/** A new option for a Select hardware custom field. */
export type HardwareCustomFieldCreateOptionRequest =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldCreate_OptionRequest'];
/** Payload for creating a hardware custom field definition. */
export type HardwareCustomFieldCreateRequestDate =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldCreate_Request_Date'];
/** Payload for creating a hardware custom field definition. */
export type HardwareCustomFieldCreateRequestSelect =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldCreate_Request_Select'];
/** Payload for creating a hardware custom field definition. */
export type HardwareCustomFieldCreateRequestText =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldCreate_Request_Text'];
/** Identifier returned after a hardware custom field is created. */
export type HardwareCustomFieldCreateResponse =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldCreate_Response'];
/** Hardware custom field definitions available to the authenticated account. */
export type HardwareCustomFieldListResponse =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldList_Response'];
/** An option for a Select hardware custom field, including retained historical options when requested. */
export type HardwareCustomFieldOptionPublic =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldOptionPublic'];
/** An account-level hardware custom field definition. */
export type HardwareCustomFieldPublic =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldPublic'];
/** An account-level hardware custom field definition. */
export type HardwareCustomFieldPublicDate =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldPublic_Date'];
/** An account-level hardware custom field definition. */
export type HardwareCustomFieldPublicSelect =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldPublic_Select'];
/** An account-level hardware custom field definition. */
export type HardwareCustomFieldPublicText =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldPublic_Text'];
/** The value type of a hardware custom field. */
export type HardwareCustomFieldTypePublicEnum =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldTypePublicEnum'];
/** An active option in the updated Select field. */
export type HardwareCustomFieldUpdateOptionRequest =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldUpdate_OptionRequest'];
/** Payload for updating a hardware custom field. The field type cannot be changed. */
export type HardwareCustomFieldUpdateRequestDate =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldUpdate_Request_Date'];
/** Payload for updating a hardware custom field. The field type cannot be changed. */
export type HardwareCustomFieldUpdateRequestSelect =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldUpdate_Request_Select'];
/** Payload for updating a hardware custom field. The field type cannot be changed. */
export type HardwareCustomFieldUpdateRequestText =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldUpdate_Request_Text'];
/** Payload assigning one typed custom field value to up to 200 hardware assets. */
export type HardwareCustomFieldValueAssignRequest =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueAssign_Request'];
/** Typed value assigned to the selected hardware assets. */
export type HardwareCustomFieldValueAssignValueRequestDate =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueAssign_ValueRequest_Date'];
/** Discriminator for the Text, Date or Select custom field value to assign. */
export type HardwareCustomFieldValueAssignValueRequestEnum =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueAssign_ValueRequest_Enum'];
/** Typed value assigned to the selected hardware assets. */
export type HardwareCustomFieldValueAssignValueRequestSelect =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueAssign_ValueRequest_Select'];
/** Typed value assigned to the selected hardware assets. */
export type HardwareCustomFieldValueAssignValueRequestText =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueAssign_ValueRequest_Text'];
/** A typed custom field value assigned to a hardware asset. */
export type HardwareCustomFieldValuePublic =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldValuePublic'];
/** A typed custom field value assigned to a hardware asset. */
export type HardwareCustomFieldValuePublicDate =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldValuePublic_Date'];
/** Discriminator for the Text, Date or Select hardware custom field value. */
export type HardwareCustomFieldValuePublicEnum =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldValuePublic_Enum'];
/** A typed custom field value assigned to a hardware asset. */
export type HardwareCustomFieldValuePublicSelect =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldValuePublic_Select'];
/** A typed custom field value assigned to a hardware asset. */
export type HardwareCustomFieldValuePublicText =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.HardwareCustomFieldValuePublic_Text'];
/** Payload removing one custom field value from up to 200 hardware assets. */
export type HardwareCustomFieldValueUnassignRequest =
  components['schemas']['AssetManagement.Asset.Hardware.CustomField.Controller.Public.HardwareCustomFieldValueUnassign_Request'];
/** One age bucket of the hardware in scope, in completed years since purchase. */
export type HardwareDashboardAgeBandPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardAgeBandPublic'];
/** Distribution of the hardware in scope by age, derived from purchase date. */
export type HardwareDashboardAgeBandsPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardAgeBandsPublic'];
/** Hardware dashboard count for assets due for replacement. */
export type HardwareDashboardReplacementDuePublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardReplacementDuePublic'];
/** Hardware dashboard summary metrics for a client. */
export type HardwareDashboardSummaryPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardSummaryPublic'];
/** Hardware dashboard count of total assets. */
export type HardwareDashboardTotalAssetsPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardTotalAssetsPublic'];
/** Hardware dashboard count grouped by hardware type. */
export type HardwareDashboardTypeCountPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardTypeCountPublic'];
/** Hardware dashboard count for assets with expired warranties. */
export type HardwareDashboardWarrantyExpiredPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareDashboardWarrantyExpiredPublic'];
/** Hardware due-soon threshold settings. */
export type HardwareDueSoonThresholdSettingsPayload =
  components['schemas']['Settings.HardwareDueSoonThresholdSettingsPayload'];
/** Hardware lifecycle record with client ownership, device identity, purchase date, and warranty expiry metadata. */
export type HardwareLifecycleInfo =
  components['schemas']['AssetManagement.Asset.Hardware.HardwareLifecycleInfo'];
/** Request body for downloading a client's hardware lifecycle PDF report. */
export type HardwareLifecycleReportPdfPublicRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareLifecycleReportPdfPublicRequest'];
/** Additional lifecycle report columns to include in the generated PDF. */
export type HardwareLifecycleReportPdfPublicRequestAdditionalColumns =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareLifecycleReportPdfPublicRequest_AdditionalColumns'];
/** Hardware lifecycle report settings. */
export type HardwareLifecycleReportSettingsPayload =
  components['schemas']['Settings.HardwareLifecycleReportSettingsPayload'];
/** Hardware lifecycle summary for a client. */
export type HardwareLifecycleSummary =
  components['schemas']['Organization.HardwareLifecycleSummary'];
/** Hardware replacement report asset-type settings. */
export type HardwareReplacementReportAssetTypeSettingsPayload =
  components['schemas']['Settings.HardwareReplacementReportAssetTypeSettingsPayload'];
/**
 * Replacement state for a hardware asset, derived from its replacement due date and the client's hardware due-soon threshold.
 * Serialized as its name (e.g. `DueSoon`) on public responses.
 */
export type HardwareReplacementStatusEnum =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareReplacementStatusEnum'];
/** Replacement cost and maximum device age used for this hardware type. */
export type HardwareReportAssetTypeSettingsCreateReplacementRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareReportAssetTypeSettingsCreate_ReplacementRequest'];
/** The hardware type to create and the replacement criteria it starts with. */
export type HardwareReportAssetTypeSettingsCreateRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareReportAssetTypeSettingsCreate_Request'];
/** The replacement settings to patch on the asset type. Send either field alone; an omitted field is left unchanged. At least one is required. The type name is not editable here. */
export type HardwareReportAssetTypeSettingsUpdateRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareReportAssetTypeSettingsUpdate_Request'];
/** Calendar-date source value and whether it matches the resolved hardware value. */
export type HardwareSourceCalendarDateFieldPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceCalendarDateFieldPublic'];
/** Resolved hardware values used as the summary column for source comparison. */
export type HardwareSourceHardwareDetailsPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceHardwareDetailsPublic'];
/** Integer source value and whether it matches the resolved hardware value. */
export type HardwareSourceLongFieldPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceLongFieldPublic'];
/** Normalized MAC-address source values and whether they match the resolved hardware values. */
export type HardwareSourceMacAddressFieldPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceMacAddressFieldPublic'];
/** One hardware information source row with field-level source values. */
export type HardwareSourceRecordPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceRecordPublic'];
/** Resolved hardware details and the ordered source rows that contributed hardware information. */
export type HardwareSourcesPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourcesPublic'];
/** Text source value and whether it matches the resolved hardware value. */
export type HardwareSourceTextFieldPublic =
  components['schemas']['AssetManagement.Asset.Hardware.Source.Model.Public.HardwareSourceTextFieldPublic'];
/** Hardware category with effective replacement settings. */
export type HardwareType = components['schemas']['HardwareReplacement.Model.Public.HardwareType'];
/** Available hardware categories and currency formatting for replacement costs. */
export type HardwareTypeListResponse =
  components['schemas']['HardwareReplacement.Model.Public.HardwareTypeListResponse'];
/** Request payload for Reassign hardware to another type. */
export type HardwareTypeReassignRequest =
  components['schemas']['AssetManagement.Asset.Hardware.Controller.Public.HardwareTypeReassign_Request'];
/** One hardware category and its effective replacement settings. */
export type HardwareTypeResponse =
  components['schemas']['HardwareReplacement.Model.Public.HardwareTypeResponse'];
/**
 * High-level warranty coverage state for a hardware asset, derived from expiry signals.
 * Serialized as its name (e.g. `Covered`) on public responses.
 */
export type HardwareWarrantyStatusEnum =
  components['schemas']['AssetManagement.Asset.Hardware.Model.Public.HardwareWarrantyStatusEnum'];
/** Lifecycle Manager user recorded on a past action, kept after the user leaves the account so the record keeps its attribution. */
export type HistoricalUserPublic =
  components['schemas']['Identity.User.Model.Public.HistoricalUserPublic'];
/** The action available for an inbox notification: open its subject, reply, open scheduled deliverables, or open the record that mentions the recipient. */
export type InboxActionType = components['schemas']['Inbox.Model.InboxActionType'];
/** The notification actor with their captured name and canonical user identifier. */
export type InboxActorPublic = components['schemas']['Inbox.Model.Public.InboxActorPublic'];
/** Delivery channel and enabled state for an inbox notification preference. */
export type InboxChannelPublic =
  components['schemas']['Inbox.InboxSettings.Model.Public.InboxChannelPublic'];
/** Original comment snippet with current subject and client names. */
export type InboxContentPublic = components['schemas']['Inbox.Model.Public.InboxContentPublic'];
/** The record a notification opens: a commentable subject, or the note or task that mentions the recipient. */
export type InboxDestinationEntityType =
  components['schemas']['Inbox.InboxAction.Model.InboxDestinationEntityType'];
/** A delivered Inbox notification with the original comment content, captured actor name and current subject names. */
export type InboxNotificationPublic =
  components['schemas']['Inbox.Model.Public.InboxNotificationPublic'];
/** Request payload for Mark All Inbox Notifications Read. */
export type InboxNotificationReadAllRequest =
  components['schemas']['Inbox.Controller.Public.InboxNotificationReadAll_Request'];
/** Response payload for Mark All Inbox Notifications Read. */
export type InboxNotificationReadAllResponse =
  components['schemas']['Inbox.Controller.Public.InboxNotificationReadAll_Response'];
/** Response payload for Mark Inbox Notification Read. */
export type InboxNotificationReadResponse =
  components['schemas']['Inbox.Controller.Public.InboxNotificationRead_Response'];
/** Request payload for Reply to Inbox Notification. */
export type InboxNotificationReplyCreateRequest =
  components['schemas']['Inbox.Controller.Public.InboxNotificationReplyCreate_Request'];
/** Response payload for Reply to Inbox Notification. */
export type InboxNotificationReplyCreateResponse =
  components['schemas']['Inbox.Controller.Public.InboxNotificationReplyCreate_Response'];
/** Response payload for Resolve Inbox Notification Destination. */
export type InboxNotificationResolveResponse =
  components['schemas']['Inbox.Controller.Public.InboxNotificationResolve_Response'];
/** Notification category and the entity that produced the notification. */
export type InboxNotificationTypePublic =
  components['schemas']['Inbox.Model.Public.InboxNotificationTypePublic'];
/** Response payload for Get Inbox Unread Count. */
export type InboxNotificationUnreadCountGetResponse =
  components['schemas']['Inbox.Controller.Public.InboxNotificationUnreadCountGet_Response'];
/** Response payload for Get Inbox Settings. */
export type InboxSettingsGetResponse =
  components['schemas']['Inbox.InboxSettings.Controller.Public.InboxSettingsGet_Response'];
/** The authenticated member's effective channel preferences for a notification type. */
export type InboxSettingsPublic =
  components['schemas']['Inbox.InboxSettings.Model.Public.InboxSettingsPublic'];
/** Request payload for Update Inbox Settings. */
export type InboxSettingsUpdateRequest =
  components['schemas']['Inbox.InboxSettings.Controller.Public.InboxSettingsUpdate_Request'];
/** Response containing action item identifiers attached to an initiative. */
export type InitiativeActionItemsListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeActionItemsList_Response'];
/** Manually maintained cumulative actual effort hours for an initiative. */
export type InitiativeActualHoursPublic =
  components['schemas']['Initiative.Model.Public.InitiativeActualHoursPublic'];
/** Actual effort hours to record. */
export type InitiativeActualHoursRequest =
  components['schemas']['Initiative.Model.Public.InitiativeActualHoursRequest'];
/** An assessment question linked to an initiative. */
export type InitiativeAssessmentQuestionsListInitiativeAssessmentQuestion =
  components['schemas']['Initiative.Controller.Public.InitiativeAssessmentQuestionsList_InitiativeAssessmentQuestion'];
/** Assessment questions linked to the initiative. */
export type InitiativeAssessmentQuestionsListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeAssessmentQuestionsList_Response'];
/** Payload identifying hardware assets to attach to an initiative. */
export type InitiativeAssetAttachRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeAssetAttach_Request'];
/** Whether an initiative asset contributes replacement cost or is only related. */
export type InitiativeAssetBudgetRole =
  components['schemas']['Initiative.InitiativeAsset.Model.InitiativeAssetBudgetRole'];
/** Payload identifying hardware assets to detach from an initiative. */
export type InitiativeAssetDetachRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeAssetDetach_Request'];
/** Response containing public hardware identifiers for assets linked to the initiative. */
export type InitiativeAssetsListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeAssetsList_Response'];
/** Response payload for Upload an Initiative Attachment. */
export type InitiativeAttachmentPostResponse =
  components['schemas']['Initiative.InitiativeAttachment.Controller.Public.InitiativeAttachmentPost_Response'];
/** A file attached to an initiative, identifying the stored attachment and the file name shown to users. */
export type InitiativeAttachmentPublic =
  components['schemas']['Initiative.InitiativeAttachment.Model.Public.InitiativeAttachmentPublic'];
/** Response payload for List Initiative Attachments. */
export type InitiativeAttachmentsListResponse =
  components['schemas']['Initiative.InitiativeAttachment.Controller.Public.InitiativeAttachmentsList_Response'];
/** Server-calculated initiative values in one requested display currency. */
export type InitiativeCalculatedValuePublic =
  components['schemas']['Initiative.Model.Public.InitiativeCalculatedValuePublic'];
/** Payload for creating a client initiative with schedule, owner, budget, priority, and status details. */
export type InitiativeCreateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeCreate_Request'];
/** Identifier returned after an initiative is created. */
export type InitiativeCreateResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeCreate_Response'];
/** Currency scope used for initiative totals and calculated values. */
export type InitiativeCurrencyScopePublicEnum =
  components['schemas']['Initiative.Model.Public.InitiativeCurrencyScopePublicEnum'];
/** Payload for creating a custom initiative status. */
export type InitiativeCustomStatusCreateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeCustomStatusCreate_Request'];
/** The newly created custom initiative status. */
export type InitiativeCustomStatusCreateResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeCustomStatusCreate_Response'];
/** Estimated effort hours for an initiative. A single estimate omits the maximum; a range supplies both bounds. */
export type InitiativeEstimatedHoursPublic =
  components['schemas']['Initiative.Model.Public.InitiativeEstimatedHoursPublic'];
/** Estimated effort hours to record. Supply minimum alone for a single estimate, or both bounds for a range. */
export type InitiativeEstimatedHoursRequest =
  components['schemas']['Initiative.Model.Public.InitiativeEstimatedHoursRequest'];
/** Request payload for Attach a Link to an Initiative. */
export type InitiativeExternalUrlPostRequest =
  components['schemas']['Initiative.InitiativeExternalUrl.Controller.Public.InitiativeExternalUrlPost_Request'];
/** Response payload for Attach a Link to an Initiative. */
export type InitiativeExternalUrlPostResponse =
  components['schemas']['Initiative.InitiativeExternalUrl.Controller.Public.InitiativeExternalUrlPost_Response'];
/** An external link attached to an initiative, carrying the destination URL and the label shown to users. */
export type InitiativeExternalUrlPublic =
  components['schemas']['Initiative.InitiativeExternalUrl.Model.Public.InitiativeExternalUrlPublic'];
/** Response payload for List Initiative Links. */
export type InitiativeExternalUrlsListResponse =
  components['schemas']['Initiative.InitiativeExternalUrl.Controller.Public.InitiativeExternalUrlsList_Response'];
/** Envelope containing the requested initiative details. */
export type InitiativeGetResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeGet_Response'];
/** Response containing goal identifiers attached to an initiative. */
export type InitiativeGoalsListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeGoalsList_Response'];
/** Monthly or yearly recurrence of an initiative item charge. */
export type InitiativeItemFrequency =
  components['schemas']['Initiative.InitiativeItem.Model.Public.InitiativeItemFrequency'];
/** One-time or recurring financial line item for an initiative. */
export type InitiativeItemPublic =
  components['schemas']['Initiative.InitiativeItem.Model.Public.InitiativeItemPublic'];
/** How an initiative item quantity is determined: fixed, explicit or asset-based. */
export type InitiativeItemQuantityBasis =
  components['schemas']['Initiative.InitiativeItem.Model.InitiativeItemQuantityBasis'];
/** Response payload for Get Initiative Items. */
export type InitiativeItemsGetResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeItemsGet_Response'];
/** Request payload for Update Initiative Items. */
export type InitiativeItemsUpdateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeItemsUpdate_Request'];
/** Initiative summary embedded in linked-resource responses. */
export type InitiativeLinkInfoV2 =
  components['schemas']['Initiative.InitiativeLink.InitiativeLinkInfoV2'];
/** Response containing meeting identifiers attached to an initiative. */
export type InitiativeMeetingsListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeMeetingsList_Response'];
/** Request body containing PSA opportunity create-field values for the initiative. */
export type InitiativeOpportunityCreateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeOpportunityCreate_Request'];
/** Single PSA opportunity create-field value keyed by the field metadata returned from the create-fields endpoint. */
export type InitiativeOpportunityCreateRequestFieldValue =
  components['schemas']['Initiative.Controller.Public.InitiativeOpportunityCreate_Request_FieldValue'];
/** Response envelope containing the initial linked opportunity state after create is queued. */
export type InitiativeOpportunityCreateResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeOpportunityCreate_Response'];
/** Response envelope containing the PSA opportunity linked to an initiative. */
export type InitiativeOpportunityGetResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeOpportunityGet_Response'];
/** Full public details for a Lifecycle Manager initiative. */
export type InitiativePublic = components['schemas']['Initiative.Model.Public.InitiativePublic'];
/** Public initiative summary with linked ticket, opportunity, quote, task, goal, and meeting state. */
export type InitiativePublicV2 =
  components['schemas']['Initiative.Model.Public.InitiativePublicV2'];
/** Response envelope containing quotes linked to an initiative and quote status display metadata. */
export type InitiativeQuotesListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeQuotesList_Response'];
/** Collection of initiative status label configurations for the authenticated account. */
export type InitiativeStatusLabelListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeStatusLabelList_Response'];
/** Display label configuration for a single initiative status, including factory defaults and any account-specific override. */
export type InitiativeStatusLabelPublic =
  components['schemas']['Initiative.InitiativeStatus.Public.InitiativeStatusLabelPublic'];
/** Payload for setting or resetting the account-specific display label for an initiative status. */
export type InitiativeStatusLabelUpdateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeStatusLabelUpdate_Request'];
/** Aggregate actual-hours totals for the matching initiatives. */
export type InitiativeSummaryActualHoursPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryActualHoursPublic'];
/** Initiative counts, budget totals, and effort-hour totals for one client. */
export type InitiativeSummaryClientTotalsPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryClientTotalsPublic'];
/** Initiative budget totals for one currency. */
export type InitiativeSummaryCurrencyTotalsPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryCurrencyTotalsPublic'];
/** Aggregate estimated-hours totals for the matching initiatives. */
export type InitiativeSummaryEstimatedHoursPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryEstimatedHoursPublic'];
/** Optional grouping dimension for initiative summary totals. */
export type InitiativeSummaryGroupByPublicEnum =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryGroupByPublicEnum'];
/** Counts and budget totals for all initiatives matching the supplied filters. */
export type InitiativeSummaryPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryPublic'];
/** Initiative totals for one lifecycle status. */
export type InitiativeSummaryStatusTotalsPublic =
  components['schemas']['Initiative.Model.Public.InitiativeSummaryStatusTotalsPublic'];
/** Request body for assigning tags to an initiative. */
export type InitiativeTagAssignRequest =
  components['schemas']['Initiative.InitiativeTag.InitiativeTagAssignment.Controller.Public.InitiativeTagAssign_Request'];
/** Request body for removing tags from an initiative. */
export type InitiativeTagUnassignRequest =
  components['schemas']['Initiative.InitiativeTag.InitiativeTagAssignment.Controller.Public.InitiativeTagUnassign_Request'];
/** Initiative template details available through the public API. */
export type InitiativeTemplate =
  components['schemas']['Initiative.InitiativeTemplate.Model.InitiativeTemplate'];
/** Fields used to create an account-owned initiative template. */
export type InitiativeTemplateCreatePayload =
  components['schemas']['Initiative.InitiativeTemplate.Model.InitiativeTemplateCreatePayload'];
/** Payload for creating an account-owned initiative template. */
export type InitiativeTemplateCreateRequest =
  components['schemas']['Initiative.InitiativeTemplate.Controller.Public.InitiativeTemplateCreate_Request'];
/** Identifier returned after an initiative template is created. */
export type InitiativeTemplateCreateResponse =
  components['schemas']['Initiative.InitiativeTemplate.Controller.Public.InitiativeTemplateCreate_Response'];
/** Identifier returned after an initiative template is duplicated. */
export type InitiativeTemplateDuplicateResponse =
  components['schemas']['Initiative.InitiativeTemplate.Controller.Public.InitiativeTemplateDuplicate_Response'];
/** Envelope containing the requested initiative template details. */
export type InitiativeTemplateGetResponse =
  components['schemas']['Initiative.InitiativeTemplate.Controller.Public.InitiativeTemplateGet_Response'];
/** Fields used to update an account-owned initiative template. */
export type InitiativeTemplateUpdatePayloadPublic =
  components['schemas']['Initiative.InitiativeTemplate.Model.InitiativeTemplateUpdatePayloadPublic'];
/** Payload for updating an account-owned initiative template. */
export type InitiativeTemplateUpdateRequest =
  components['schemas']['Initiative.InitiativeTemplate.Controller.Public.InitiativeTemplateUpdate_Request'];
/** Request body containing the ScalePad ticket identifier selected for linking. */
export type InitiativeTicketAttachRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketAttach_Request'];
/** State of the ticket link created between the initiative and the selected ticket. */
export type InitiativeTicketAttachResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketAttach_Response'];
/** Request body containing PSA ticket create-field values for the initiative. */
export type InitiativeTicketCreateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketCreate_Request'];
/** Single PSA ticket create-field value keyed by the field metadata returned from the create-fields endpoint. */
export type InitiativeTicketCreateRequestFieldValue =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketCreate_Request_FieldValue'];
/** Response envelope containing the initial ticket link state after create is queued. */
export type InitiativeTicketCreateResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketCreate_Response'];
/** Legacy single-ticket response. The state is the first linked ticket state in ticket-link identifier order. */
export type InitiativeTicketListLegacyResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketList_LegacyResponse'];
/** Response envelope containing every current ticket-link state for the initiative. */
export type InitiativeTicketListResponse =
  components['schemas']['Initiative.Controller.Public.InitiativeTicketList_Response'];
/** Payload for changing the account user assigned to an initiative. */
export type InitiativeUpdateAssignedUserRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdateAssignedUser_Request'];
/** Payload for replacing an initiative's one-time and recurring budget items. */
export type InitiativeUpdateBudgetRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdateBudget_Request'];
/** Payload for changing an initiative's priority. */
export type InitiativeUpdatePriorityRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdatePriority_Request'];
/** Payload for replacing an initiative's recurring budget line items. */
export type InitiativeUpdateRecurringRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdateRecurring_Request'];
/** Payload for updating the editable details of an existing initiative. */
export type InitiativeUpdateRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdate_Request'];
/** Payload for changing the canonical calendar schedule assigned to an initiative. */
export type InitiativeUpdateScheduleRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdateSchedule_Request'];
/** Payload for changing an initiative's lifecycle status. */
export type InitiativeUpdateStatusRequest =
  components['schemas']['Initiative.Controller.Public.InitiativeUpdateStatus_Request'];
/** Asset family and subtype options supported by insights. */
export type InsightCreateMetadataGetAssetScope =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_AssetScope'];
/** Specific asset type supported by an insight. */
export type InsightCreateMetadataGetAssetScopeValue =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_AssetScopeValue'];
/** Policy condition available when defining an insight. */
export type InsightCreateMetadataGetPolicy =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_Policy'];
/** Comparison operator supported by an insight policy. */
export type InsightCreateMetadataGetPolicyOperator =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_PolicyOperator'];
/** Value editor metadata for an insight policy. */
export type InsightCreateMetadataGetPolicyUnit =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_PolicyUnit'];
/** Selectable value for an insight policy. */
export type InsightCreateMetadataGetPolicyValueOption =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_PolicyValueOption'];
/** Options available when defining an insight for the authenticated account. */
export type InsightCreateMetadataGetResponse =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreateMetadataGet_Response'];
/** Policy condition submitted when creating an insight. */
export type InsightCreatePolicyRequest =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreate_PolicyRequest'];
/** Definition used to create an account-owned insight. */
export type InsightCreateRequest =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreate_Request'];
/** Identifier returned after an insight is created. */
export type InsightCreateResponse =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightCreate_Response'];
/** Asset type evaluated by an insight. */
export type InsightDefinitionsListAssetScope =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightDefinitionsList_AssetScope'];
/** An insight definition and the policies that determine which assets it affects. */
export type InsightDefinitionsListInsightDefinition =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightDefinitionsList_InsightDefinition'];
/** Human-readable condition used by an insight. */
export type InsightDefinitionsListPolicy =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightDefinitionsList_Policy'];
/** Collection of insight definitions owned by the authenticated account. */
export type InsightDefinitionsListResponse =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.InsightDefinitionsList_Response'];
/** Setup guidance for an insight that cannot yet be evaluated. */
export type InsightsInsightPrerequisite =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.Insights_InsightPrerequisite'];
/** Summary of a Lifecycle Manager insight, including its category, risk, asset scope, current count, and trend state. */
export type InsightsInsightSummary =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.Insights_InsightSummary'];
/** Response envelope containing the flattened insight summaries available in the requested account or client scope. */
export type InsightsResponse =
  components['schemas']['AssetManagement.Strategy.Insights.Controller.Public.Insights_Response'];
/** PSA integration field metadata used to render dynamic ticket creation forms. */
export type IntegrationFieldOptionPublic =
  components['schemas']['Integration.Model.Public.IntegrationFieldOptionPublic'];
/** Validation hints for a PSA integration field value. */
export type IntegrationFieldOptionPublicValidationPublic =
  components['schemas']['Integration.Model.Public.IntegrationFieldOptionPublic_ValidationPublic'];
/** Selectable value for a PSA integration field. */
export type IntegrationFieldOptionPublicValuePublic =
  components['schemas']['Integration.Model.Public.IntegrationFieldOptionPublic_ValuePublic'];
/** Client preference for investing in lifecycle improvements. */
export type InvestmentAppetite =
  components['schemas']['Wm.Copilot.Settings.Model.InvestmentAppetite'];
/** Summary of the most recent assessment evaluation for a client. */
export type LastAssessmentEvaluationSummary =
  components['schemas']['Organization.LastAssessmentEvaluationSummary'];
/** The most recent meeting summary for this client. */
export type LastMeetingSummary = components['schemas']['Organization.LastMeetingSummary'];
/** Payload for assigning a license to one or more clients. */
export type LicensesAssignRequest =
  components['schemas']['LifecycleManager.License.Controller.Public.LicensesAssign_Request'];
/** Response envelope containing license capacity per license type for the authenticated partner account. */
export type LicensesSummaryGetResponse =
  components['schemas']['License.Controller.Public.LicensesSummaryGet_Response'];
/** License capacity for a single license type on the authenticated partner account. */
export type LicenseSummaryPublic = components['schemas']['License.Public.LicenseSummaryPublic'];
/** Payload for unassigning licenses from one or more clients. */
export type LicensesUnassignRequest =
  components['schemas']['License.Controller.Public.LicensesUnassign_Request'];
/**
 * A client's Lifecycle Manager license as published on the public API.
 * The serialized values match Beast's copy exactly: both appear on client
 * responses the same readers consume, so a client cannot be lmx on one and
 * something else on the other.
 */
export type LicenseTypePublicEnum =
  components['schemas']['LifecycleManager.License.Model.Public.LicenseTypePublicEnum'];
/** Linked Lifecycle Manager item associated with another record, such as a note. */
export type LinkedItemPublic = components['schemas']['LinkType.Public.LinkedItemPublic'];
/** A supported list column and its display and sorting metadata. */
export type ListAvailableColumnPublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableColumnPublic'];
/** A group of related filters available for the list. */
export type ListAvailableFilterGroupPublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableFilterGroupPublic'];
/** An operator supported by a list filter. */
export type ListAvailableFilterOperatorPublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableFilterOperatorPublic'];
/** An allowed option value and its display label for a list filter. */
export type ListAvailableFilterOptionPublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableFilterOptionPublic'];
/** A supported list filter with its operators and selectable values. */
export type ListAvailableFilterPublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableFilterPublic'];
/** Allowed lower and upper bounds for a numeric list filter. */
export type ListAvailableFilterRangePublic =
  components['schemas']['ScalePadApi.Model.Response.ListAvailableFilterRangePublic'];
/** An account user with profile, lifecycle, access role, email delivery and multi-factor authentication details for user administration. */
export type ManagedUserPublic =
  components['schemas']['Identity.User.Model.Public.ManagedUserPublic'];
/** A client's Account Owner: an account team member assigned a primary team role for that client. */
export type MeetingAccountOwnerPublic =
  components['schemas']['Meeting.Model.Public.MeetingAccountOwnerPublic'];
/** Response containing action item identifiers attached to a meeting. */
export type MeetingActionItemsListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingActionItemsList_Response'];
/** Response envelope containing an uploaded meeting attachment. */
export type MeetingAttachmentPostResponse =
  components['schemas']['Meeting.MeetingAttachment.Controller.Public.MeetingAttachmentPost_Response'];
/** Meeting attachment metadata exposed by the public API. */
export type MeetingAttachmentPublic =
  components['schemas']['Meeting.MeetingAttachment.Model.Public.MeetingAttachmentPublic'];
/** Whether the attachment belongs to one meeting occurrence or its series. */
export type MeetingAttachmentScopePublicEnum =
  components['schemas']['Meeting.MeetingAttachment.Model.Public.MeetingAttachmentScopePublicEnum'];
/** Response envelope containing meeting attachments. */
export type MeetingAttachmentsListResponse =
  components['schemas']['Meeting.MeetingAttachment.Controller.Public.MeetingAttachmentsList_Response'];
/** Payload identifying client contacts to add as meeting attendees. */
export type MeetingAttendeeContactAddRequest =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeContactAdd_Request'];
/** Collection of contact identifiers that were newly added as meeting attendees. */
export type MeetingAttendeeContactAddResponse =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeContactAdd_Response'];
/** Payload identifying client contacts to remove from meeting attendees. */
export type MeetingAttendeeContactRemoveRequest =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeContactRemove_Request'];
/** One person invited to a meeting: a team member, a client contact, or an external email address. */
export type MeetingAttendeePublic =
  components['schemas']['Meeting.Model.Public.MeetingAttendeePublic'];
/** The kind of meeting attendee: a team member, a client contact, or an external email address. */
export type MeetingAttendeeType = components['schemas']['Meeting.Model.Public.MeetingAttendeeType'];
/** Payload identifying account users to add as meeting attendees. */
export type MeetingAttendeeUserAddRequest =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeUserAdd_Request'];
/** Collection of user identifiers that were newly added as meeting attendees. */
export type MeetingAttendeeUserAddResponse =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeUserAdd_Response'];
/** Payload identifying account users to remove from meeting attendees. */
export type MeetingAttendeeUserRemoveRequest =
  components['schemas']['Meeting.Controller.Public.MeetingAttendeeUserRemove_Request'];
/** Payload for marking a meeting complete or incomplete. */
export type MeetingCompleteStatusUpdateRequest =
  components['schemas']['Meeting.Controller.Public.MeetingCompleteStatusUpdate_Request'];
/** Payload for scheduling a meeting using the deprecated v1 meeting type enum. */
export type MeetingCreateV1Request =
  components['schemas']['Meeting.Controller.Public.MeetingCreateV1_Request'];
/** Identifier returned after a meeting is scheduled. */
export type MeetingCreateV1Response =
  components['schemas']['Meeting.Controller.Public.MeetingCreateV1_Response'];
/** Payload for scheduling a meeting with a custom meeting type. */
export type MeetingCreateV2Request =
  components['schemas']['Meeting.Controller.Public.MeetingCreateV2_Request'];
/** Identifier returned after a meeting is scheduled. */
export type MeetingCreateV2Response =
  components['schemas']['Meeting.Controller.Public.MeetingCreateV2_Response'];
/** Deliverable identifiers used to create meeting links. */
export type MeetingDeliverableAttachRequest =
  components['schemas']['Meeting.Controller.Public.MeetingDeliverableAttach_Request'];
/** Deliverable identifiers used to remove meeting links. */
export type MeetingDeliverableDetachRequest =
  components['schemas']['Meeting.Controller.Public.MeetingDeliverableDetach_Request'];
/** Identifiers for deliverables attached to a meeting. */
export type MeetingDeliverablesListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingDeliverablesList_Response'];
/** Envelope containing the requested meeting details. */
export type MeetingGetResponse =
  components['schemas']['Meeting.Controller.Public.MeetingGet_Response'];
/** Response containing goal identifiers attached to a meeting. */
export type MeetingGoalsListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingGoalsList_Response'];
/** Response containing initiative identifiers attached to a meeting. */
export type MeetingInitiativesListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingInitiativesList_Response'];
/** Meeting summary embedded in linked-resource responses. */
export type MeetingLinkInfoV2 = components['schemas']['Meeting.Model.MeetingLinkInfoV2'];
/** Collection containing the note linked to the meeting, or an empty collection when no note is linked. */
export type MeetingNotesListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingNotesList_Response'];
/** Summary details for a Lifecycle Manager meeting returned by public meeting list endpoints. */
export type MeetingOverviewPublic =
  components['schemas']['Meeting.Model.Public.MeetingOverviewPublic'];
/** Client explicitly targeted by a meeting policy. */
export type MeetingPolicyClientPublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyClientPublic'];
/** A meeting policy covering the client and its individual compliance status. */
export type MeetingPolicyComplianceCoveringPolicyPublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyComplianceCoveringPolicyPublic'];
/** The most recent completed meeting that qualifies for at least one policy covering the client. */
export type MeetingPolicyComplianceLastQualifyingMeetingPublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyComplianceLastQualifyingMeetingPublic'];
/** The client rolled-up compliance with every meeting policy that covers it. */
export type MeetingPolicyCompliancePublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyCompliancePublic'];
/** Whether a client is out of policy, approaching its meeting deadline or compliant. */
export type MeetingPolicyComplianceStatusPublicEnum =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyComplianceStatusPublicEnum'];
/** Meeting-policy compliance counts for the accessible client scope. */
export type MeetingPolicyComplianceSummaryGetResponse =
  components['schemas']['Meeting.MeetingPolicy.Controller.Public.MeetingPolicyComplianceSummaryGet_Response'];
/** Identifier returned after a meeting policy is created. */
export type MeetingPolicyCreateResponse =
  components['schemas']['Meeting.MeetingPolicy.Controller.Public.MeetingPolicyCreate_Response'];
/** Envelope containing the requested meeting policy. */
export type MeetingPolicyGetResponse =
  components['schemas']['Meeting.MeetingPolicy.Controller.Public.MeetingPolicyGet_Response'];
/** Collection of meeting policies configured for the authenticated account. */
export type MeetingPolicyListResponse =
  components['schemas']['Meeting.MeetingPolicy.Controller.Public.MeetingPolicyList_Response'];
/** Meeting type selected by a meeting policy, including whether it is still available in the account catalog. */
export type MeetingPolicyMeetingTypePublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyMeetingTypePublic'];
/** Meeting cadence policy that defines which clients are covered and how often a qualifying meeting must occur. */
export type MeetingPolicyPublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyPublic'];
/** Client scope to which the meeting policy applies. */
export type MeetingPolicyScopePublicEnum =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyScopePublicEnum'];
/** Client segment targeted by a meeting policy. */
export type MeetingPolicySegmentPublic =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicySegmentPublic'];
/** Payload for creating or fully replacing a meeting policy. */
export type MeetingPolicyWriteRequest =
  components['schemas']['Meeting.MeetingPolicy.Model.Public.MeetingPolicyWriteRequest'];
/** Full Lifecycle Manager meeting details, including client, type, agenda, and attendee fields. */
export type MeetingPublic = components['schemas']['Meeting.Model.Public.MeetingPublic'];
/** Ordinal week of the month used by relative recurrence patterns. */
export type MeetingRecurrenceIndex =
  components['schemas']['Meeting.MeetingSeries.Model.MeetingRecurrenceIndex'];
/** Pattern fields for a recurring meeting. */
export type MeetingRecurrencePatternPublic =
  components['schemas']['Meeting.Model.Public.MeetingRecurrencePatternPublic'];
/** Daily, weekly, monthly or yearly meeting recurrence pattern. */
export type MeetingRecurrencePatternType =
  components['schemas']['Meeting.MeetingSeries.Model.MeetingRecurrencePatternType'];
/** Recurrence rule for a meeting series. */
export type MeetingRecurrencePublic =
  components['schemas']['Meeting.Model.Public.MeetingRecurrencePublic'];
/** Range fields for a recurring meeting. */
export type MeetingRecurrenceRangePublic =
  components['schemas']['Meeting.Model.Public.MeetingRecurrenceRangePublic'];
/** How the recurring meeting series ends: no end, date or occurrence count. */
export type MeetingRecurrenceRangeType =
  components['schemas']['Meeting.MeetingSeries.Model.MeetingRecurrenceRangeType'];
/** Response containing goal identifiers attached to a meeting series. */
export type MeetingSeriesGoalsListResponse =
  components['schemas']['Meeting.Controller.Public.MeetingSeriesGoalsList_Response'];
/** Canonical editable metadata for the recurring series containing a meeting. */
export type MeetingSeriesMetadataPublic =
  components['schemas']['Meeting.Model.Public.MeetingSeriesMetadataPublic'];
/** A meeting or series requiring attention to restore calendar synchronization. */
export type MeetingSyncAttentionGetAttentionItem =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncAttentionGet_AttentionItem'];
/** Request payload for Create Meeting Sync Command. */
export type MeetingSyncCommandPostRequest =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncCommandPost_Request'];
/** Response payload for Create Meeting Sync Command. */
export type MeetingSyncCommandPostResponse =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncCommandPost_Response'];
/** Response payload for Create Meeting Sync Connection. */
export type MeetingSyncConnectionPostResponse =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncConnectionPost_Response'];
/** An Outlook event attendee and their attendance role. */
export type MeetingSyncEventsGetAttendee =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncEventsGet_Attendee'];
/** The display name and email address of an Outlook event participant. */
export type MeetingSyncEventsGetEmailAddress =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncEventsGet_EmailAddress'];
/** An Outlook calendar event available for meeting import or linking. */
export type MeetingSyncEventsGetEvent =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncEventsGet_Event'];
/** Response payload for Get Meeting Sync Events. */
export type MeetingSyncEventsGetResponse =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncEventsGet_Response'];
/** A meeting attendee response reported by Outlook. */
export type MeetingSyncGetAttendeeResponse =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_AttendeeResponse'];
/** Actions currently available for this meeting calendar connection. */
export type MeetingSyncGetCapabilities =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_Capabilities'];
/** The current user Microsoft 365 calendar connection and synchronization status. */
export type MeetingSyncGetConnection =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_Connection'];
/** Account defaults for meeting synchronization with Outlook. */
export type MeetingSyncGetDefaults =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_Defaults'];
/** Calendar synchronization status and settings for the requested meeting. */
export type MeetingSyncGetMeeting =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_Meeting'];
/** Response payload for Get Meeting Sync. */
export type MeetingSyncGetResponse =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_Response'];
/** Counts of meetings requiring review by synchronization issue. */
export type MeetingSyncGetReviewCounts =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_ReviewCounts'];
/** Counts of pending, failed and disconnected meeting synchronizations. */
export type MeetingSyncGetSyncHealth =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncGet_SyncHealth'];
/** Request payload for Update Meeting Sync Settings. */
export type MeetingSyncSettingsPutRequest =
  components['schemas']['Meeting.MeetingSync.Controller.Public.MeetingSyncSettingsPut_Request'];
/** Payload identifying account users to assign as default meeting template attendees. */
export type MeetingTemplateAttendeeUserAssignRequest =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateAttendeeUserAssign_Request'];
/** Payload identifying account users to unassign as default meeting template attendees. */
export type MeetingTemplateAttendeeUserUnassignRequest =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateAttendeeUserUnassign_Request'];
/** Payload for creating a reusable meeting template. */
export type MeetingTemplateCreateRequest =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateCreate_Request'];
/** Identifier returned after a meeting template is created. */
export type MeetingTemplateCreateResponse =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateCreate_Response'];
/** Collection of meeting templates available to the authenticated account. */
export type MeetingTemplateListResponse =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateList_Response'];
/** Meeting template details available to the authenticated account. */
export type MeetingTemplatePublic =
  components['schemas']['Meeting.MeetingTemplate.Model.Public.MeetingTemplatePublic'];
/** Payload for replacing the reusable details of a meeting template. */
export type MeetingTemplateUpdateRequest =
  components['schemas']['Meeting.MeetingTemplate.Controller.Public.MeetingTemplateUpdate_Request'];
/** Request body containing PSA ticket create-field values for the meeting. */
export type MeetingTicketCreateRequest =
  components['schemas']['Meeting.MeetingTicket.Controller.Public.MeetingTicketCreate_Request'];
/** Single PSA ticket create-field value keyed by the field metadata returned from the create-fields endpoint. */
export type MeetingTicketCreateRequestFieldValue =
  components['schemas']['Meeting.MeetingTicket.Controller.Public.MeetingTicketCreate_Request_FieldValue'];
/** Response envelope containing the initial ticket link state after create is queued. */
export type MeetingTicketCreateResponse =
  components['schemas']['Meeting.MeetingTicket.Controller.Public.MeetingTicketCreate_Response'];
/** Response envelope containing the current state of the PSA ticket linked to a meeting. */
export type MeetingTicketGetResponse =
  components['schemas']['Meeting.MeetingTicket.Controller.Public.MeetingTicketGet_Response'];
/** Custom meeting type available to an account. */
export type MeetingType = components['schemas']['Meeting.MeetingType.MeetingType'];
/** Payload for creating a custom meeting type. */
export type MeetingTypeCreateRequest =
  components['schemas']['Meeting.MeetingType.Controller.Public.MeetingTypeCreate_Request'];
/** Identifier returned after a meeting type is created. */
export type MeetingTypeCreateResponse =
  components['schemas']['Meeting.MeetingType.Controller.Public.MeetingTypeCreate_Response'];
/** Collection of meeting types available to the authenticated account. */
export type MeetingTypeListResponse =
  components['schemas']['Meeting.MeetingType.Controller.Public.MeetingTypeList_Response'];
/** Payload for updating the label on a custom meeting type. */
export type MeetingTypeUpdateRequest =
  components['schemas']['Meeting.MeetingType.Controller.Public.MeetingTypeUpdate_Request'];
/** Whether an update applies to this meeting or this and later series occurrences. */
export type MeetingUpdateScope = components['schemas']['Meeting.Model.MeetingUpdateScope'];
/** Payload for updating meeting details using the deprecated v1 meeting type enum. */
export type MeetingUpdateV1Request =
  components['schemas']['Meeting.Controller.Public.MeetingUpdateV1_Request'];
/** Payload for updating meeting details with a custom meeting type. */
export type MeetingUpdateV2Request =
  components['schemas']['Meeting.Controller.Public.MeetingUpdateV2_Request'];
/** Result of updating a meeting or its current and future series occurrences. */
export type MeetingUpdateV2Response =
  components['schemas']['Meeting.Controller.Public.MeetingUpdateV2_Response'];
/** Response envelope containing PSA members matching the account-scoped lookup search. */
export type MembersLookupResponse =
  components['schemas']['CoreApi.Controller.MembersLookup_Response'];
/** Account retirement-age preferences grouped by device type. */
export type MspRetirementValues = components['schemas']['Settings.MspRetirementValues'];
/** Lifecycle Manager note with rich-text content, archive state, timestamps, and optional linked item. */
export type NoteApi =
  components['schemas']['Organization.Engagement.EngagementNote.Model.Public.NoteApi'];
/** Request body setting whether a note is archived or active. */
export type NotesArchiveStatusRequest =
  components['schemas']['Organization.Engagement.EngagementNote.Controller.Public.NotesArchiveStatus_Request'];
/** Request body for creating a client note with title and rich-text description. */
export type NotesCreateRequest =
  components['schemas']['Organization.Engagement.EngagementNote.Controller.Public.NotesCreate_Request'];
/** Response containing the identifier of the newly-created note. */
export type NotesCreateResponse =
  components['schemas']['Organization.Engagement.EngagementNote.Controller.Public.NotesCreate_Response'];
/** Request body containing replacement note title and rich-text description fields. */
export type NotesUpdateRequest =
  components['schemas']['Organization.Engagement.EngagementNote.Controller.Public.NotesUpdate_Request'];
/** ScalePad API error detail. */
export type NotFoundApiError = components['schemas']['ScalePadApi.Model.NotFoundApiError'];
/** Response envelope containing PSA opportunities that can be linked to a Lifecycle Manager initiative. */
export type OpportunitiesListResponse =
  components['schemas']['Opportunity.Controller.Public.OpportunitiesList_Response'];
/** Current ability to create opportunities for a client through the MSP's PSA integration. */
export type OpportunityCreateAbilityPublic =
  components['schemas']['Opportunity.Model.Public.OpportunityCreateAbilityPublic'];
/** Opportunity create-field metadata for a client, including PSA availability, integration link, and supported field options. */
export type OpportunityCreateFieldsGetResponse =
  components['schemas']['Opportunity.Controller.Public.OpportunityCreateFieldsGet_Response'];
/** State returned when the PSA opportunity was created successfully. */
export type OpportunityCreateStatusPublicCreated =
  components['schemas']['Opportunity.Model.Public.OpportunityCreateStatusPublic_Created'];
/** Opportunity create-state discriminator values. */
export type OpportunityCreateStatusPublicEnum =
  components['schemas']['Opportunity.Model.Public.OpportunityCreateStatusPublic_Enum'];
/** State returned when PSA opportunity creation failed. */
export type OpportunityCreateStatusPublicError =
  components['schemas']['Opportunity.Model.Public.OpportunityCreateStatusPublic_Error'];
/** State returned while the PSA opportunity create job is still running. */
export type OpportunityCreateStatusPublicPending =
  components['schemas']['Opportunity.Model.Public.OpportunityCreateStatusPublic_Pending'];
/** Currency input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicCurrency =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Currency'];
/** Data-type lookup input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicDataTypeReference =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_DataTypeReference'];
/** Date-time input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicDateTime =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_DateTime'];
/** Integer input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicInteger =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Integer'];
/** Discriminator for the value input supported by an opportunity field. */
export type OpportunityFieldOptionInputTypePublicKind =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Kind'];
/** PSA data type that a reference field points at. */
export type OpportunityFieldOptionInputTypePublicReferenceKind =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_ReferenceKind'];
/** Select input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicSelect =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Select'];
/** Selectable value for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicSelectOption =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Select_Option'];
/** Text input configuration for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicText =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Text'];
/** Text length limits for an opportunity create field. */
export type OpportunityFieldOptionInputTypePublicTextValidation =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionInputTypePublic_Text_Validation'];
/** PSA opportunity field metadata used to render dynamic opportunity creation forms. */
export type OpportunityFieldOptionPublic =
  components['schemas']['Opportunity.Model.Public.OpportunityFieldOptionPublic'];
/** Lifecycle Manager opportunity link information for an initiative. */
export type OpportunityLinkInfoPublic =
  components['schemas']['Opportunity.Model.Public.OpportunityLinkInfoPublic'];
/** PSA opportunity summary shown when choosing an opportunity for a Lifecycle Manager initiative. */
export type OpportunityOverviewPublic =
  components['schemas']['Opportunity.Model.Public.OpportunityOverviewPublic'];
/** Payload for creating or reusing an account-owned Outcome. */
export type OutcomeCreateRequest =
  components['schemas']['Goal.Outcome.Controller.Public.OutcomeCreate_Request'];
/** Identifier returned after an account-owned Outcome is created or reused. */
export type OutcomeCreateResponse =
  components['schemas']['Goal.Outcome.Controller.Public.OutcomeCreate_Response'];
/** Collection of Outcomes visible to the authenticated account. */
export type OutcomeListResponse =
  components['schemas']['Goal.Outcome.Controller.Public.OutcomeList_Response'];
/** Outcome available to the authenticated account through the Lifecycle Manager public API. */
export type OutcomePublic = components['schemas']['Goal.Outcome.Model.Public.OutcomePublic'];
/** Payload for updating an account-owned Outcome. */
export type OutcomeUpdateRequest =
  components['schemas']['Goal.Outcome.Controller.Public.OutcomeUpdate_Request'];
/** A Lifecycle Manager permission available for assignment to a role or user. */
export type PermissionPublic = components['schemas']['Identity.User.Model.Public.PermissionPublic'];
/** Response envelope containing the Lifecycle Manager permission catalog. */
export type PermissionsListResponse =
  components['schemas']['Identity.User.Controller.Public.PermissionsList_Response'];
/** Forecast budget totals for one fiscal quarter in the Plan dashboard. */
export type PlanBudgetQuarterPublic =
  components['schemas']['Plan.Model.Public.PlanBudgetQuarterPublic'];
/** Plan dashboard budget forecast grouped by fiscal quarter. */
export type PlanBudgetSummaryPublic =
  components['schemas']['Plan.Model.Public.PlanBudgetSummaryPublic'];
/** Forecast amount attributed to one Plan dashboard budget type. */
export type PlanBudgetTypeAmountPublic =
  components['schemas']['Plan.Model.Public.PlanBudgetTypeAmountPublic'];
/** A single at-risk client: the client, its risk severity, and a short reason derived from goal health. */
export type PlanClientAtRiskPublic =
  components['schemas']['Plan.Model.Public.PlanClientAtRiskPublic'];
/** Clients flagged as at risk from goal health for an account or a single client, most severe first. */
export type PlanClientsAtRiskPublic =
  components['schemas']['Plan.Model.Public.PlanClientsAtRiskPublic'];
/** Saved Plan dashboard widget layout for the authenticated account. */
export type PlanDashboardLayoutPublic =
  components['schemas']['Plan.Model.Public.PlanDashboardLayoutPublic'];
/** Payload for saving the per-tenant Plan dashboard layout. */
export type PlanDashboardLayoutSetRequest =
  components['schemas']['Plan.Controller.Public.PlanDashboardLayoutSet_Request'];
/** Current-state Plan dashboard aggregates for an account or a single client. */
export type PlanDashboardSummaryPublic =
  components['schemas']['Plan.Model.Public.PlanDashboardSummaryPublic'];
/** Plan dashboard goal totals and status distribution. */
export type PlanGoalSummaryPublic =
  components['schemas']['Plan.Model.Public.PlanGoalSummaryPublic'];
/** Plan dashboard initiative totals and status distribution. */
export type PlanInitiativeSummaryPublic =
  components['schemas']['Plan.Model.Public.PlanInitiativeSummaryPublic'];
/** Plan dashboard pipeline value totals for initiatives in scope. */
export type PlanPipelineSummaryPublic =
  components['schemas']['Plan.Model.Public.PlanPipelineSummaryPublic'];
/** Number of Plan dashboard records in one status. */
export type PlanStatusCountPublic =
  components['schemas']['Plan.Model.Public.PlanStatusCountPublic'];
/** Product catalog record with source identifiers, classification, pricing, and activity state. */
export type ProductPublic = components['schemas']['Core.Product.Model.Public.ProductPublic'];
/** Response containing the requested product. */
export type ProductsGetResponse =
  components['schemas']['Core.Product.Controller.Public.ProductsGet_Response'];
/** PSA person returned by the contact and member search endpoints. */
export type PsaPersonPublic = components['schemas']['CoreApi.Model.Public.PsaPersonPublic'];
/** Selected answer for a single assessment question during evaluation. */
export type QuestionEvaluationPayload =
  components['schemas']['Assessment.AssessmentEvaluation.Model.Public.QuestionEvaluationPayload'];
/** Quoter quote linked to a Lifecycle Manager initiative, including status and pricing totals. */
export type QuoteLinkInfoPublic = components['schemas']['Quote.Model.Public.QuoteLinkInfoPublic'];
/** Summary details for a Quoter quote returned by the public quote list endpoint. */
export type QuoteOverviewPublic = components['schemas']['Quote.Model.Public.QuoteOverviewPublic'];
/** Quote status reference value with display label and badge color metadata. */
export type QuoteStatusAvailabilities = components['schemas']['Quote.QuoteStatusAvailabilities'];
/** Whether a client can have a quoting contact, or the primary contact integration requirement that prevents assignment. */
export type QuotingContactEligibility =
  components['schemas']['Organization.ContactDesignation.Model.QuotingContactEligibility'];
/** The contact assigned to receive quoting communication for a client. */
export type QuotingContactPublic =
  components['schemas']['Organization.ContactDesignation.Model.Public.QuotingContactPublic'];
/** The client's quoting-contact eligibility and current assignment. */
export type QuotingContactResponse =
  components['schemas']['Organization.ContactDesignation.Model.Public.QuotingContactResponse'];
/** The quoting contact to assign to a client. */
export type QuotingContactSetRequest =
  components['schemas']['Organization.ContactDesignation.Model.Public.QuotingContactSetRequest'];
/** Recipient details accepted when creating a schedule recipient. */
export type RecipientCreatePayload =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.RecipientCreatePayload'];
/** Recurring budget line item for an initiative or initiative template. */
export type RecurringLineItem =
  components['schemas']['Initiative.Recurring.Model.RecurringLineItem'];
/** Billing cadence options for recurring initiative budget line items. */
export type RecurringLineItemFrequencyEnum =
  components['schemas']['Initiative.Recurring.Model.RecurringLineItem_FrequencyEnum'];
/** Regional date, currency, time-zone, and fiscal-year settings. */
export type RegionalSettingsPayload = components['schemas']['Settings.RegionalSettingsPayload'];
/** Region and format settings used to localize currency, dates and reporting periods. */
export type RegionFormatPublic =
  components['schemas']['Msp.AccountSettings.Public.RegionFormatPublic'];
/** Replacement cost, maximum device age and the source of these settings. */
export type Replacement = components['schemas']['HardwareReplacement.Model.Public.Replacement'];
/** Request body for uploading a rich-text embedded image. */
export type RichTextFilesCreateRequest =
  components['schemas']['RichText.File.Controller.Public.RichTextFilesCreate_Request'];
/** Response containing the identifier of the uploaded rich-text image. */
export type RichTextFilesCreateResponse =
  components['schemas']['RichText.File.Controller.Public.RichTextFilesCreate_Response'];
/** Rich-text embedded image with its base64-encoded content. */
export type RichTextFilesGetResponse =
  components['schemas']['RichText.File.Controller.Public.RichTextFilesGet_Response'];
/**
 * Client risk severity derived from the worst goal status present. Ordered most
 * severe first so numeric ordering matches presentation ordering.
 */
export type RiskSeverity = components['schemas']['Plan.Model.RiskSeverity'];
/** Request body selecting the client and roadmap filters to include in the generated CSV. */
export type RoadmapCsvRequest = components['schemas']['Roadmap.Controller.RoadmapCsv_Request'];
/** Roadmap PDF export options controlling included initiatives, sections, fiscal range, and sort order. */
export type RoadmapPdfDownloadPayload =
  components['schemas']['Roadmap.Model.RoadmapPdfDownloadPayload'];
/** Request body selecting the client and roadmap sections to include in the generated PDF. */
export type RoadmapPdfRequest = components['schemas']['Roadmap.Controller.RoadmapPdf_Request'];
/** Roadmap spreadsheet or CSV export options controlling included initiatives, fiscal range, and priorities. */
export type RoadmapSpreadsheetDownloadPayload =
  components['schemas']['Roadmap.Model.RoadmapSpreadsheetDownloadPayload'];
/** Request body selecting the client and roadmap filters to include in the generated spreadsheet. */
export type RoadmapSpreadsheetRequest =
  components['schemas']['Roadmap.Controller.RoadmapSpreadsheet_Request'];
/** Confirmed Roadmap Template application request. */
export type RoadmapTemplateApplicationCreateRequest =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateApplicationCreate_Request'];
/** Durable exactly-once Roadmap Template application result. */
export type RoadmapTemplateApplicationCreateResponse =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateApplicationCreate_Response'];
/** One Goal that would be created from a Roadmap Goal Template. */
export type RoadmapTemplateApplicationPreviewGoalPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateApplicationPreviewGoalPublic'];
/** One resolved Initiative that would be created by Roadmap Template application. */
export type RoadmapTemplateApplicationPreviewItemPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateApplicationPreviewItemPublic'];
/** Resolved Roadmap Template application preview and signed confirmation fingerprint. */
export type RoadmapTemplateApplicationPreviewPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateApplicationPreviewPublic'];
/** Client and Initiative Owner bindings used to preview Roadmap Template application. */
export type RoadmapTemplateApplicationPreviewRequest =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateApplicationPreview_Request'];
/** Envelope containing a resolved Roadmap Template application preview. */
export type RoadmapTemplateApplicationPreviewResponse =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateApplicationPreview_Response'];
/** Payload for creating an account-owned roadmap template. */
export type RoadmapTemplateCreateRequest =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateCreate_Request'];
/** Created account-owned Roadmap Template returned from the master-backed write flow. */
export type RoadmapTemplateCreateResponse =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateCreate_Response'];
/** Created account-owned Roadmap Template returned after duplication. */
export type RoadmapTemplateDuplicateResponse =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateDuplicate_Response'];
/** Envelope containing the requested Roadmap Template. */
export type RoadmapTemplateGetResponse =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateGet_Response'];
/** Existing client Goals bound to one Initiative created by Roadmap Template application. */
export type RoadmapTemplateInitiativeGoalBindingPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateInitiativeGoalBindingPublic'];
/** An Initiative Owner selection bound to one Roadmap Template item. */
export type RoadmapTemplateInitiativeOwnerBindingPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateInitiativeOwnerBindingPublic'];
/** An ordered initiative template in a roadmap template. */
export type RoadmapTemplateItemPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateItemPublic'];
/** An initiative embedded in its parent Roadmap Template. */
export type RoadmapTemplateManualInitiativePublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateManualInitiativePublic'];
/** A concrete Initiative Owner selection for Roadmap Template application. */
export type RoadmapTemplateOwnerSelectionPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateOwnerSelectionPublic'];
/** A reusable ordered roadmap of initiative templates. */
export type RoadmapTemplatePublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplatePublic'];
/** Replacement content for an account-owned Roadmap Template. */
export type RoadmapTemplateUpdateRequest =
  components['schemas']['Initiative.RoadmapTemplate.Controller.Public.RoadmapTemplateUpdate_Request'];
/** Fields used to create or replace an account roadmap template. */
export type RoadmapTemplateWritePayloadPublic =
  components['schemas']['Initiative.RoadmapTemplate.Model.Public.RoadmapTemplateWritePayloadPublic'];
/** Details and permissions for a new custom Lifecycle Manager role. */
export type RoleCreateRequest =
  components['schemas']['Feature.Permission.LifecycleManager.Controller.Public.RoleCreate_Request'];
/** Identifier returned after a custom Lifecycle Manager role is created. */
export type RoleCreateResponse =
  components['schemas']['Feature.Permission.LifecycleManager.Controller.Public.RoleCreate_Response'];
/** A Lifecycle Manager role and the permissions it grants. */
export type RolePublic = components['schemas']['Feature.Permission.LifecycleManager.RolePublic'];
/** Response envelope containing the roles available to the account. */
export type RolesListResponse =
  components['schemas']['Feature.Permission.LifecycleManager.Controller.Public.RolesList_Response'];
/** Updated details and permissions for a custom Lifecycle Manager role. */
export type RoleUpdateRequest =
  components['schemas']['Feature.Permission.LifecycleManager.Controller.Public.RoleUpdate_Request'];
/** Per-client SaaS rollup: client identity, asset and product counts, statuses, and license pool counts. */
export type SaasAssetClientSummaryPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetClientSummaryPublic'];
/** License pool counts for a SaaS asset: capacity, utilized, available, suspended, and grace-period warnings. */
export type SaasAssetPoolPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetPoolPublic'];
/** Portfolio-wide SaaS totals: asset, client, and product counts with aggregate license pool counts. */
export type SaasAssetPortfolioSummaryPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetPortfolioSummaryPublic'];
/** SaaS product identity for an asset: identifier, display name, and category. */
export type SaasAssetProductPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetProductPublic'];
/** SaaS asset returned by the Lifecycle Manager public SaaS asset endpoint. */
export type SaasAssetPublic = components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetPublic'];
/** Account-wide SaaS portfolio totals with a per-client summary for every client that has SaaS assets. */
export type SaasAssetSummaryPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetSummaryPublic'];
/** Subscription term for a SaaS asset: start and end dates and the auto-renewal state. */
export type SaasAssetTermPublic =
  components['schemas']['Saas.SaasAsset.Model.Public.SaasAssetTermPublic'];
/** The resolved reporting period, echoing the request's date range and (when requested) comparison range. */
export type SaasManagementAggregatePeriod = components['schemas']['SaasManagementAggregatePeriod'];
/** Identifying and status fields for the client's instance of an app, distinct from the shared catalog data. */
export type SaasManagementAppDashboardApp = components['schemas']['SaasManagementAppDashboardApp'];
/** A page of app dashboard rows, with cursor-pagination metadata. */
export type SaasManagementAppDashboardAppsPage =
  components['schemas']['SaasManagementAppDashboardAppsPage'];
/** One app's usage, certification, and risk data for the reporting period. */
export type SaasManagementAppDashboardItem =
  components['schemas']['SaasManagementAppDashboardItem'];
/** Same shape as SaasManagementAppDashboardItem, plus the app's top users by average time. */
export type SaasManagementAppDashboardItemWithUsers =
  components['schemas']['SaasManagementAppDashboardItemWithUsers'];
/** App dashboard rows for a client, wrapped with pagination metadata. */
export type SaasManagementAppDashboardResponse =
  components['schemas']['SaasManagementAppDashboardResponse'];
/** App lifecycle segment counts for one granularity bucket. */
export type SaasManagementAppDashboardTimeseriesPoint =
  components['schemas']['SaasManagementAppDashboardTimeseriesPoint'];
/** The pointed lifecycle segment counts. This endpoint has no cursor pagination — every point in the range is always returned. */
export type SaasManagementAppDashboardTimeseriesPoints =
  components['schemas']['SaasManagementAppDashboardTimeseriesPoints'];
/** An app lifecycle timeseries for a client — one entry per granularity unit. */
export type SaasManagementAppDashboardTimeseriesResponse =
  components['schemas']['SaasManagementAppDashboardTimeseriesResponse'];
/** One user's usage of a given app within the reporting period. */
export type SaasManagementAppDashboardUser =
  components['schemas']['SaasManagementAppDashboardUser'];
/** A page of app dashboard rows, each with its top users embedded, with cursor-pagination metadata. */
export type SaasManagementAppDashboardWithUsersAppsPage =
  components['schemas']['SaasManagementAppDashboardWithUsersAppsPage'];
/** App dashboard rows for a client, each with its top users embedded, wrapped with pagination metadata. */
export type SaasManagementAppDashboardWithUsersResponse =
  components['schemas']['SaasManagementAppDashboardWithUsersResponse'];
/** The shared catalog application backing a client's app row: name, logo, vendor, categories, and compliance certifications. */
export type SaasManagementCatalogAppRef = components['schemas']['SaasManagementCatalogAppRef'];
/** A catalog category an application is classified under. */
export type SaasManagementCatalogCategory = components['schemas']['SaasManagementCatalogCategory'];
/** The vendor that publishes a catalog application. */
export type SaasManagementCatalogVendor = components['schemas']['SaasManagementCatalogVendor'];
/** One normalized compliance-framework assertion discovered for a catalog application. At most one current assertion is returned per framework. */
export type SaasManagementComplianceAssertionRef =
  components['schemas']['SaasManagementComplianceAssertionRef'];
/** An enrollment token, including its one-time-visible credential value. */
export type SaasManagementEnrollmentToken = components['schemas']['SaasManagementEnrollmentToken'];
/** Request body for creating a client enrollment token. */
export type SaasManagementEnrollmentTokenCreateRequest =
  components['schemas']['SaasManagementEnrollmentTokenCreateRequest'];
/** A single error entry describing one reason a request failed. */
export type SaasManagementError = components['schemas']['SaasManagementError'];
/** Error envelope returned when a request cannot be processed. Carries one or more error entries. */
export type SaasManagementErrorResponse = components['schemas']['SaasManagementErrorResponse'];
/** A numeric metric paired with its change against an optional comparison period. compare_value and change_value/change_pct are null when no comparison period was requested. */
export type SaasManagementMetricWithDelta = components['schemas']['SaasManagementMetricWithDelta'];
/** Same shape as SaasManagementMetricWithDelta, but value itself may also be null (used for averages that are undefined when there is no underlying data). */
export type SaasManagementNullableMetricWithDelta =
  components['schemas']['SaasManagementNullableMetricWithDelta'];
/** The most recent activity timestamps for a user, broken out by channel. */
export type SaasManagementUserLastActivity =
  components['schemas']['SaasManagementUserLastActivity'];
/** A lightweight reference to a client user. */
export type SaasManagementUserRef = components['schemas']['SaasManagementUserRef'];
/** SaaS-utilization summary metrics for a client over the reporting period. */
export type SaasManagementUtilizationSummary =
  components['schemas']['SaasManagementUtilizationSummary'];
/** Payload for creating a saved view configuration. */
export type SavedViewCreateRequest =
  components['schemas']['UserInterfaceView.Controller.Public.SavedViewCreate_Request'];
/** Scope at which a saved view is the default. */
export type SavedViewDefaultScopePublic =
  components['schemas']['UserInterfaceView.SavedViewDefaultScopePublic'];
/** Saved view to use as the default. For a personal default, omit the identifier to inherit the account default or send null to select the built-in view. */
export type SavedViewDefaultSetRequest =
  components['schemas']['UserInterfaceView.Controller.Public.SavedViewDefaultSet_Request'];
/** Saved views and the authenticated user's selected default for one view key. */
export type SavedViewListResponse =
  components['schemas']['UserInterfaceView.Controller.Public.SavedViewList_Response'];
/** A personal or account-visible named view configuration. */
export type SavedViewPublic = components['schemas']['UserInterfaceView.SavedViewPublic'];
/** Fields to change on a saved view. Omitted fields remain unchanged. */
export type SavedViewUpdateRequest =
  components['schemas']['UserInterfaceView.Controller.Public.SavedViewUpdate_Request'];
/** Request body for creating a deliverable schedule. */
export type ScheduleCreateRequest =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleCreate_Request'];
/** Response envelope containing a created deliverable schedule. */
export type ScheduleCreateResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleCreate_Response'];
/** The deliverable produced by a schedule's most recent successful fire. */
export type ScheduleDeliverableSummary =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleDeliverableSummary'];
/** Detailed deliverable schedule configuration and current delivery state. */
export type ScheduleDetail =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleDetail'];
/** A legacy scheduled report configured for one client. Legacy scheduled reports predate scheduled deliverables and are managed separately from them. */
export type ScheduledReport = components['schemas']['AutoEmail.Model.Public.ScheduledReport'];
/** Which assets a custom scheduled report covers. Send these values back to the configuration endpoint unchanged apart from what the advisor edited. */
export type ScheduledReportConfiguration =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportConfiguration'];
/** Response payload for List Custom scheduled report availability. */
export type ScheduledReportCustomAvailabilityGetResponse =
  components['schemas']['AutoEmail.AutoEmailReport.Controller.Public.ScheduledReportCustomAvailabilityGet_Response'];
/** Request payload for Update Custom scheduled report configuration. */
export type ScheduledReportCustomConfigurationPutRequest =
  components['schemas']['AutoEmail.AutoEmailReport.Controller.Public.ScheduledReportCustomConfigurationPut_Request'];
/** Request payload for Update Custom scheduled report email template. */
export type ScheduledReportCustomEmailTemplatePutRequest =
  components['schemas']['AutoEmail.AutoEmailReport.Controller.Public.ScheduledReportCustomEmailTemplatePut_Request'];
/** Request payload for Add Custom scheduled report recipient. */
export type ScheduledReportCustomRecipientCreateRequest =
  components['schemas']['AutoEmail.AutoEmailReport.Controller.Public.ScheduledReportCustomRecipientCreate_Request'];
/** Request payload for Update Custom scheduled report schedule. */
export type ScheduledReportCustomSchedulePutRequest =
  components['schemas']['AutoEmail.AutoEmailReport.Controller.Public.ScheduledReportCustomSchedulePut_Request'];
/** Everything configurable on one custom scheduled report: its schedule, the assets it covers, who receives it, and the email that carries it. This is the read to pair with the configuration, recipient and email template endpoints. */
export type ScheduledReportDetail =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportDetail'];
/** The email that carries a legacy scheduled report. Subject and body are stored exactly as authored, including any template variables, which are resolved only when the email is sent. */
export type ScheduledReportEmailTemplate =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportEmailTemplate'];
/** How often a legacy scheduled report is sent. Legacy cadence offers no other options, and no day, time or timezone control: a report is sent on the first of the period at 08:00 UTC, rolled forward to the next work day. */
export type ScheduledReportFrequency =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportFrequency'];
/** The hardware lifecycle report for one client, with everything needed to manage it. There is exactly one per client and it cannot be deleted, so it has no identifier of its own and is addressed by the client. */
export type ScheduledReportLifecycleDetail =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportLifecycleDetail'];
/** Request payload for Update Hardware lifecycle report email template. */
export type ScheduledReportLifecycleEmailTemplatePutRequest =
  components['schemas']['AutoEmail.Controller.Public.ScheduledReportLifecycleEmailTemplatePut_Request'];
/** A recipient of a client hardware lifecycle report. Unlike a custom scheduled report recipient, this is one of the client's contacts rather than a name and address stored on the report, so it is removed by email address and carries the opt-in state the unsubscribe link writes. */
export type ScheduledReportLifecycleRecipient =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportLifecycleRecipient'];
/** Request payload for Add Hardware lifecycle report recipient. */
export type ScheduledReportLifecycleRecipientCreateRequest =
  components['schemas']['AutoEmail.Controller.Public.ScheduledReportLifecycleRecipientCreate_Request'];
/** Request payload for Update Hardware lifecycle report schedule. */
export type ScheduledReportLifecycleSchedulePutRequest =
  components['schemas']['AutoEmail.Controller.Public.ScheduledReportLifecycleSchedulePut_Request'];
/** Response payload for List Scheduled reports. */
export type ScheduledReportListResponse =
  components['schemas']['AutoEmail.Controller.Public.ScheduledReportList_Response'];
/** One recipient of a custom scheduled report, stored on the report as a name and email rather than as a client contact. */
export type ScheduledReportRecipient =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportRecipient'];
/** How many people a legacy scheduled report is sent to, and how many of those addresses are bouncing. */
export type ScheduledReportRecipientSummary =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportRecipientSummary'];
/** Provides a high-level view of scheduled reports for a client */
export type ScheduledReportsSummary = components['schemas']['Organization.ScheduledReportsSummary'];
/** A variable that can be placed in a legacy scheduled report's email subject or body. Variables are stored unsubstituted and resolved when the email is sent. */
export type ScheduledReportTemplateVariable =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportTemplateVariable'];
/** Response payload for List Scheduled report template variables. */
export type ScheduledReportTemplateVariableListResponse =
  components['schemas']['AutoEmail.Controller.Public.ScheduledReportTemplateVariableList_Response'];
/** Which kind of legacy scheduled report a row represents. The two kinds are stored separately and differ in what can be configured: only Custom reports carry asset filters, columns and sort, and only Custom reports can be deleted. */
export type ScheduledReportType =
  components['schemas']['AutoEmail.Model.Public.ScheduledReportType'];
/** Response envelope containing deliverable schedules. */
export type ScheduleListResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleList_Response'];
/** Request body for calculating the next occurrence of a schedule cadence. */
export type ScheduleNextOccurrenceRequest =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleNextOccurrence_Request'];
/** The next time a schedule with the supplied cadence would fire. */
export type ScheduleNextOccurrenceResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleNextOccurrence_Response'];
/** Ordinal week selector used by monthly schedule cadences. */
export type ScheduleOrdinal =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.Cadence.ScheduleOrdinal'];
/** Summary information for a deliverable schedule. */
export type ScheduleOverview =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleOverview'];
/** Request body for updating a deliverable schedule. */
export type SchedulePatchRequest =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.SchedulePatch_Request'];
/** Recurrence period supported by a deliverable schedule. */
export type SchedulePeriod =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.Cadence.SchedulePeriod'];
/** Request body for previewing a deliverable schedule configuration. */
export type SchedulePreviewRequest =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.SchedulePreview_Request'];
/** The rendered email a schedule would send, with every variable resolved. */
export type SchedulePreviewResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.SchedulePreview_Response'];
/** Recipient configured to receive scheduled deliverables. */
export type ScheduleRecipient =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleRecipient'];
/** Response envelope containing a created schedule recipient. */
export type ScheduleRecipientCreateResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleRecipientCreate_Response'];
/** Summary of a schedule's recipient overrides for list display. */
export type ScheduleRecipientSummary =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleRecipientSummary'];
/** History entry for a deliverable schedule run. */
export type ScheduleRunHistory =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleRunHistory'];
/** Response payload for Send Schedule Now. */
export type ScheduleSendNowResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleSendNow_Response'];
/** Request body for sending a test delivery to schedule recipients. */
export type ScheduleSendTestRequest =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleSendTest_Request'];
/** The deliverable template a schedule produces deliverables from. */
export type ScheduleTemplateSummary =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.ScheduleTemplateSummary'];
/** Response envelope containing template variables available to a deliverable schedule. */
export type ScheduleTemplateVariableListResponse =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Controller.Public.ScheduleTemplateVariableList_Response'];
/** Scope key used by settings API contracts. */
export type ScopeKey = components['schemas']['Settings.ScopeKey'];
/** Client segment summary. */
export type SegmentInfo = components['schemas']['Organization.SegmentInfo'];
/** A client segment used to group and prioritize clients for reporting and planning. */
export type SegmentPublic = components['schemas']['Segment.Public.SegmentPublic'];
/** Response envelope containing client segments available to the authenticated partner account. */
export type SegmentsListResponse =
  components['schemas']['Segment.Controller.Public.SegmentsList_Response'];
/** Lifecycle Manager account setting and its configured value. */
export type Settings = components['schemas']['Settings.Settings'];
/** Unique key to isolate an individual settings entity for API contracts. */
export type SettingsKey = components['schemas']['Settings.SettingsKey'];
/** Setting-value variants supported by Lifecycle Manager. */
export type SettingsValueEnum = components['schemas']['Settings.SettingsValueEnum'];
/** Configured value for hardware due-soon thresholds. */
export type SettingsValueHardwareDueSoonThresholdSettings =
  components['schemas']['Settings.SettingsValue_HardwareDueSoonThresholdSettings'];
/** Configured value for hardware lifecycle reports. */
export type SettingsValueHardwareLifecycleReportSettings =
  components['schemas']['Settings.SettingsValue_HardwareLifecycleReportSettings'];
/** Configured value for hardware replacement report asset types. */
export type SettingsValueHardwareReplacementReportAssetTypeSettings =
  components['schemas']['Settings.SettingsValue_HardwareReplacementReportAssetTypeSettings'];
/** Configured value for account regional settings. */
export type SettingsValueRegionalSettings =
  components['schemas']['Settings.SettingsValue_RegionalSettings'];
/** Configured value for warranty coverage due-soon thresholds. */
export type SettingsValueWarrantyCoverageDueSoonThresholdSettings =
  components['schemas']['Settings.SettingsValue_WarrantyCoverageDueSoonThresholdSettings'];
/** Configured value for warranty coverage opportunities. */
export type SettingsValueWarrantyCoverageOpportunitySettings =
  components['schemas']['Settings.SettingsValue_WarrantyCoverageOpportunitySettings'];
/** Application used to render a shared Lifecycle Manager resource. */
export type ShareApplication = components['schemas']['ShareAccess.Model.ShareApplication'];
/** Payload identifying the canonical parent site. */
export type SiteLinkCreateRequest =
  components['schemas']['Organization.Site.Controller.Public.SiteLinkCreate_Request'];
/** A site merged under a canonical site, retaining its own identity, address, and source lineage. */
export type SiteLinkedSitePublic =
  components['schemas']['Organization.Site.Model.Public.SiteLinkedSitePublic'];
/** A canonical client site materialized from PSA location data, including its source lineage and any sites merged under it. */
export type SitePublic = components['schemas']['Organization.Site.Model.Public.SitePublic'];
/** Software Asset Management access and synchronization state. */
export type SoftwareAccessPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAccessPublic'];
/** Client associated with a software installation. */
export type SoftwareAssetClientPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetClientPublic'];
/** Manufacturer details for hardware associated with a software installation. */
export type SoftwareAssetHardwareManufacturerPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetHardwareManufacturerPublic'];
/** Model details for hardware associated with a software installation. */
export type SoftwareAssetHardwareModelPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetHardwareModelPublic'];
/** Hardware asset on which software is installed. */
export type SoftwareAssetHardwarePublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetHardwarePublic'];
/** Request body for exporting installed software assets. */
export type SoftwareAssetListExportPublicRequest =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetListExportPublicRequest'];
/** Software product associated with an installed software asset. */
export type SoftwareAssetProductPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetProductPublic'];
/** Installed software asset with client, product, version, and hardware details. */
export type SoftwareAssetPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetPublic'];
/** Publisher associated with an installed software product. */
export type SoftwareAssetPublisherPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetPublisherPublic'];
/** Source identifier associated with an installed software version. */
export type SoftwareAssetVersionIdentifierPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetVersionIdentifierPublic'];
/** Version details for an installed software product. */
export type SoftwareAssetVersionPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareAssetVersionPublic'];
/** Request body for downloading a client's software lifecycle PDF report for one software category. */
export type SoftwareCategoryLifecycleReportPdfPublicRequest =
  components['schemas']['Asset.Software.Model.Public.SoftwareCategoryLifecycleReportPdfPublicRequest'];
/** Lifecycle health for one supported software category. */
export type SoftwareCategorySummaryPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareCategorySummaryPublic'];
/** One installed software lifecycle record for a client device. */
export type SoftwareLifecycleAssetPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareLifecycleAssetPublic'];
/** Request body for downloading a client's software lifecycle PDF report. */
export type SoftwareLifecycleReportPdfPublicRequest =
  components['schemas']['Asset.Software.Model.Public.SoftwareLifecycleReportPdfPublicRequest'];
/** Lifecycle counts for installed software versions. */
export type SoftwareLifecycleSummaryPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareLifecycleSummaryPublic'];
/** Product lifecycle summary with installed versions and devices for a client. */
export type SoftwareProductDetailPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareProductDetailPublic'];
/** One hardware device with the versions of a software product installed on it. */
export type SoftwareProductDevicePublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareProductDevicePublic'];
/** Client-level deployment and lifecycle summary for one supported software product. */
export type SoftwareProductSummaryPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareProductSummaryPublic'];
/** Installed version usage for one software product. */
export type SoftwareProductVersionPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareProductVersionPublic'];
/** Software category a lifecycle report can be scoped to. */
export type SoftwareReportCategoryPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareReportCategoryPublic'];
/** Client-level software lifecycle dashboard data. */
export type SoftwareSummaryPublic =
  components['schemas']['Asset.Software.Model.Public.SoftwareSummaryPublic'];
/** Breakdown of the number of software instances by their version status and whether or not they are on the latest version */
export type SoftwareVersionLifecycleSummary =
  components['schemas']['Organization.SoftwareVersionLifecycleSummary'];
/** ScalePad API error detail. */
export type SubscriptionRequiredApiError =
  components['schemas']['ScalePadApi.Model.SubscriptionRequiredApiError'];
/** Payload for creating a tag in a specific domain. */
export type TagCreatePayloadPublic =
  components['schemas']['Tag.Model.Public.TagCreatePayloadPublic'];
/** Payload for creating a tag. */
export type TagCreateRequest = components['schemas']['Tag.Controller.Public.TagCreate_Request'];
/** Identifier returned after a tag is created. */
export type TagCreateResponse = components['schemas']['Tag.Controller.Public.TagCreate_Response'];
/** Resource domains in which an account tag can be used. */
export type TagDomainEnum = components['schemas']['Tag.Model.TagDomainEnum'];
/** Collection of tags available to the authenticated account. */
export type TagListResponse = components['schemas']['Tag.Controller.Public.TagList_Response'];
/** A reusable account-scoped tag that can apply to one or more domains. */
export type TagPublic = components['schemas']['Tag.Model.Public.TagPublic'];
/** Payload for updating a tag name, color, and domains. */
export type TagUpdatePayloadPublic =
  components['schemas']['Tag.Model.Public.TagUpdatePayloadPublic'];
/** Payload for updating a tag. */
export type TagUpdateRequest = components['schemas']['Tag.Controller.Public.TagUpdate_Request'];
/** Payload for creating an account-owned task template. */
export type TaskTemplateCreateRequest =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Controller.Public.TaskTemplateCreate_Request'];
/** Identifier returned after a task template is created. */
export type TaskTemplateCreateResponse =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Controller.Public.TaskTemplateCreate_Response'];
/** Created task template returned after duplication. */
export type TaskTemplateDuplicateResponse =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Controller.Public.TaskTemplateDuplicate_Response'];
/** Envelope containing the requested task template. */
export type TaskTemplateGetResponse =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Controller.Public.TaskTemplateGet_Response'];
/** Reusable Task-owned content available through the Lifecycle Manager public API. */
export type TaskTemplatePublic =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Model.Public.TaskTemplatePublic'];
/** Replacement payload for an account-owned task template. */
export type TaskTemplateUpdateRequest =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Controller.Public.TaskTemplateUpdate_Request'];
/** Reusable Task-owned fields used to create or update an account task template. */
export type TaskTemplateWritePayloadPublic =
  components['schemas']['Organization.Engagement.EngagementAction.TaskTemplate.Model.Public.TaskTemplateWritePayloadPublic'];
/** Template variable available when configuring a deliverable schedule. */
export type TemplateVariable =
  components['schemas']['Deliverable.DeliverableTemplate.DeliverableSchedule.Model.TemplateVariable'];
/** Service boards keyed by board ID. */
export type TicketBoardListResponse =
  components['schemas']['Core.Ticket.Controller.TicketBoardList_Response'];
/** Ticket create-field metadata for a client, including PSA availability, integration link, and supported field options. */
export type TicketCreateFieldsGetResponse =
  components['schemas']['Core.Ticket.Controller.Public.TicketCreateFieldsGet_Response'];
/** Current ability to create tickets for a client through the MSP's PSA integration. */
export type TicketCreatePublicStatus =
  components['schemas']['Core.Ticket.Model.Public.TicketCreatePublicStatus'];
/** Response payload for Get Ticket Field Options. */
export type TicketFieldOptionsGetResponse =
  components['schemas']['Core.Ticket.Controller.Public.TicketFieldOptionsGet_Response'];
/** External PSA ticket details for a successfully created ticket link. */
export type TicketLinkPublic =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkPublic'];
/** Discriminated state of an initiative-to-ticket link while PSA ticket creation is pending, complete, or failed. */
export type TicketLinkStatePublic =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkStatePublic'];
/** State returned when the PSA ticket was created successfully. */
export type TicketLinkStatePublicCreated =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkStatePublic_Created'];
/** Ticket link state discriminator values. */
export type TicketLinkStatePublicEnum =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkStatePublic_Enum'];
/** State returned when PSA ticket creation failed permanently. */
export type TicketLinkStatePublicError =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkStatePublic_Error'];
/** State returned while the PSA ticket create worker is still running. */
export type TicketLinkStatePublicPending =
  components['schemas']['Core.Ticket.TicketLink.Model.Public.TicketLinkStatePublic_Pending'];
/** The state when a ticket link is successfully created */
export type TicketLinkStateV2Created =
  components['schemas']['Core.Ticket.TicketLink.Model.TicketLinkStateV2_Created'];
/** Possible lifecycle states for an attempted PSA ticket link. */
export type TicketLinkStateV2Enum =
  components['schemas']['Core.Ticket.TicketLink.Model.TicketLinkStateV2_Enum'];
/** The state when there is an error creating a ticket link */
export type TicketLinkStateV2Error =
  components['schemas']['Core.Ticket.TicketLink.Model.TicketLinkStateV2_Error'];
/** The state when a ticket link is pending creation */
export type TicketLinkStateV2Pending =
  components['schemas']['Core.Ticket.TicketLink.Model.TicketLinkStateV2_Pending'];
/** Linked PSA ticket summary used when an initiative or action item has an associated ticket. */
export type TicketLinkV2 = components['schemas']['Core.Ticket.TicketLink.Model.TicketLinkV2'];
/** Cursor-paginated list response. */
export type TicketListResponse =
  components['schemas']['Core.Ticket.Controller.Public.TicketList_Response'];
/** Ticket search result from the client's primary PSA integration. */
export type TicketListTicket =
  components['schemas']['Core.Ticket.Controller.Public.TicketList_Ticket'];
/** Upcoming meeting summary for a client. */
export type UpcomingMeetingSummary = components['schemas']['Organization.UpcomingMeetingSummary'];
/** Effective client access for the authenticated ScalePad user. */
export type UserClientAccessGetResponse =
  components['schemas']['Organization.ClientGroupAccess.Controller.Public.UserClientAccessGet_Response'];
/** Allowed effective client access types. */
export type UserClientAccessGetResponseAccessTypeEnum =
  components['schemas']['Organization.ClientGroupAccess.Controller.Public.UserClientAccessGet_Response_AccessTypeEnum'];
/** Effective client access scope and Core client identifiers. */
export type UserClientAccessGetResponseClientAccess =
  components['schemas']['Organization.ClientGroupAccess.Controller.Public.UserClientAccessGet_Response_ClientAccess'];
/** Response envelope containing a Lifecycle Manager user. */
export type UserGetResponse =
  components['schemas']['Identity.User.Controller.Public.UserGet_Response'];
/** Frontend surface that supports saved views over the public API. */
export type UserInterfaceViewKeyPublic =
  components['schemas']['UserInterfaceView.UserInterfaceViewKeyPublic'];
/** Visibility scope of a saved list view. */
export type UserInterfaceViewScopePublic =
  components['schemas']['UserInterfaceView.UserInterfaceViewScopePublic'];
/** User identity using a public identifier or email address. */
export type UserKeyPublic = components['schemas']['Identity.User.Model.Public.UserKeyPublic'];
/** Partial update payload for the authenticated user's own record. Any omitted field is left unchanged. */
export type UserPatchRequest =
  components['schemas']['Identity.User.Controller.Public.UserPatch_Request'];
/** A Lifecycle Manager permission held by a user and the source of that access. */
export type UserPermissionPublic =
  components['schemas']['Feature.Permission.LifecycleManager.UserPermissionPublic'];
/** Response envelope containing the user's effective Lifecycle Manager permissions. */
export type UserPermissionsGetResponse =
  components['schemas']['Feature.Permission.LifecycleManager.Controller.Public.UserPermissionsGet_Response'];
/** The complete set of Lifecycle Manager roles and direct permissions to assign to the user. */
export type UserPermissionsUpdateRequest =
  components['schemas']['Identity.User.Controller.Public.UserPermissionsUpdate_Request'];
/** Lifecycle Manager user identity exposed by the public API. */
export type UserPublic = components['schemas']['Identity.User.Model.Public.UserPublic'];
/** Response envelope containing account users sorted by full name. */
export type UsersListResponse =
  components['schemas']['Identity.User.Controller.UsersList_Response'];
/** Request payload for Grant Lifecycle Manager access. */
export type UsersManageAccessGrantRequest =
  components['schemas']['Identity.User.Controller.Public.UsersManageAccessGrant_Request'];
/** Response envelope containing the user granted Lifecycle Manager access. */
export type UsersManageAccessGrantResponse =
  components['schemas']['Identity.User.Controller.Public.UsersManageAccessGrant_Response'];
/** Payload identifying account members whose Lifecycle Manager access will be revoked. */
export type UsersManageAccessRevokeRequest =
  components['schemas']['Identity.User.Controller.Public.UsersManageAccessRevoke_Request'];
/** A client-team membership visible to the caller. Team roles describe responsibilities and do not grant access permissions. */
export type UserTeamAssignmentsGetAssignment =
  components['schemas']['Organization.OrganizationAccountTeamMember.Controller.Public.UserTeamAssignmentsGet_Assignment'];
/** ScalePad API error detail. */
export type ValidationApiError = components['schemas']['ScalePadApi.Model.ValidationApiError'];
/** Client vertical configured for the authenticated account. */
export type Vertical = components['schemas']['Vertical.Vertical'];
/** Fields accepted when creating a client vertical. */
export type VerticalCreatePayload = components['schemas']['Vertical.VerticalCreatePayload'];
/** Request body for creating a client vertical. */
export type VerticalsCreateRequest =
  components['schemas']['Vertical.Controller.Public.VerticalsCreate_Request'];
/** Response envelope containing a created client vertical. */
export type VerticalsCreateResponse =
  components['schemas']['Vertical.Controller.Public.VerticalsCreate_Response'];
/** Response envelope containing client verticals. */
export type VerticalsListResponse =
  components['schemas']['Vertical.Controller.Public.VerticalsList_Response'];
/** Request body for updating a client vertical. */
export type VerticalsUpdateRequest =
  components['schemas']['Vertical.Controller.Public.VerticalsUpdate_Request'];
/** Fields accepted when updating a client vertical. */
export type VerticalUpdatePayload = components['schemas']['Vertical.VerticalUpdatePayload'];
/** Warranty coverage due-soon threshold settings. */
export type WarrantyCoverageDueSoonThresholdSettingsPayload =
  components['schemas']['Settings.WarrantyCoverageDueSoonThresholdSettingsPayload'];
/** Warranty coverage opportunity preferences for a hardware device type. */
export type WarrantyCoverageOpportunityPreference =
  components['schemas']['Settings.WarrantyCoverageOpportunityPreference'];
/** Warranty coverage opportunity settings. */
export type WarrantyCoverageOpportunitySettingsPayload =
  components['schemas']['Settings.WarrantyCoverageOpportunitySettingsPayload'];
/** Monthly warranty renewal price option for a renewable hardware asset. */
export type WarrantyPricingOptionPublic =
  components['schemas']['Warranties.Model.Public.WarrantyPricingOptionPublic'];
/** Renewable warranty asset with warranty context and available monthly pricing options. */
export type WarrantyPricingPublic =
  components['schemas']['Warranties.Model.Public.WarrantyPricingPublic'];

/**
 * Schemas without a unique short name; reach them through `components['schemas']`:
 * - Beast.Identity.User.Model.Public.ActiveUserPublic
 * - AutoEmail.Model.Public.ActiveUserPublic
 * - LifecycleManager.Identity.User.Model.Public.ActiveUserPublic
 * - Beast.ScalePadApi.ScalePadApiClient.Integration.Model.Response.ApiIntegrationConfiguration
 * - LifecycleManager.ScalePadApi.ScalePadApiClient.Integration.Model.Response.ApiIntegrationConfiguration
 * - Beast.Organization.Model.Public.ClientKeyPublic
 * - LifecycleManager.Organization.Model.Public.ClientKeyPublic
 * - Asset.Model.Public.HardwareKeyPublic
 * - Asset.HardwareKey.Model.Public.HardwareKeyPublic
 * - Asset.Model.Public.HardwareUniqueKeyPublic
 * - Asset.HardwareKey.Model.Public.HardwareUniqueKeyPublic
 * - Beast.ScalePadApi.ScalePadApiClient.Model.Response.RecordLineage.RecordLineage
 * - LifecycleManager.ScalePadApi.ScalePadApiClient.Model.Response.RecordLineage.RecordLineage
 * - Beast.AutoEmail.Model.Public.ScheduledReportLifecycleEmailTemplate
 * - LifecycleManager.AutoEmail.Model.Public.ScheduledReportLifecycleEmailTemplate
 * - Identity.Model.User.UserStatus
 * - Identity.User.Model.UserStatus
 */
