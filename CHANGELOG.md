# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2026-10-26

The SDK is now generated from ScalePad's published OpenAPI documents
(`spec/*.json`, refreshed with `npm run fetch-specs && npm run generate`), and
releases are published from CI: a merge to `main` that bumps `package.json`'s
version is validated and then published by GitHub Actions through npm trusted
publishing (OIDC), with a provenance attestation.

### Added

- Lifecycle Manager API v1: every documented operation (526 across 89 tags)
  under `client.lifecycleManager.v1`, including file uploads, CSV/PDF/XLSX
  exports, and paginated `…All()` iterators.
- Core API resources that were missing: Integrations, Product Catalog, SaaS
  Users, and Sites.
- Typed models for every endpoint: response and request body types come from
  the specification, and each list method's `filters` and `sort` accept only
  the fields and operators the endpoint documents.
- `cont` (substring) and `null` filter operators; bare scalars mean `eq`; `Date`
  values serialize as ISO 8601.
- Error classes for 402 (`SubscriptionRequiredError`), 403 (`ForbiddenError`)
  and 404 (`NotFoundError`).

### Changed

- Core API paths now match the specification: contracts live at
  `/core/v1/service/contracts`, tickets at `/core/v1/service/tickets`, SaaS
  assets at `/core/v1/assets/saas`.
- List Contacts and List Members are `POST` requests. PII filters
  (`name.full`, `contact_info.email`, …) are sent in the request body; the SDK
  routes them automatically from the same `filters` map.
- Filter values are rendered as `operator:value` with no space, as documented.
- Method names follow the API reference: `get(id)` replaces `getById(id)`,
  `listAll()` replaces `paginate()`/`paginateItems()`, query options use the
  API's own parameter names (`page_size`, `cursor`).
- Zod has been removed; responses are typed from the specification and not
  validated at runtime, so additive API changes never break callers.
- Node.js 20 or later is required (`File` and `FormData` are used for uploads).

## [0.1.0] - 2025-10-27

### Added

- Initial release of the ScalePad SDK
- Core API v1 support (read-only operations)
- Resources: Clients, Contacts, Contracts, Hardware Assets, Members, SaaS, Tickets, Opportunities
- Full TypeScript support with strong typing
- Zod v4 validation for API responses
- Cursor-based pagination with async generators
- Filtering support (eq, in, lt, lte, gt, gte operators)
- Sorting support (ascending/descending)
- Automatic retry logic with exponential backoff
- Rate limit handling with Retry-After support
- Configurable logging with secret redaction
- Comprehensive error handling
- ESM and CommonJS support
- Full test coverage
- Documentation and examples

[0.2.1]: https://github.com/pncit/scalePad/releases/tag/v0.2.1
[0.1.0]: https://github.com/pncit/scalePad/releases/tag/v0.1.0
