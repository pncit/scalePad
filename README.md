# ScalePad SDK for Node.js

A TypeScript SDK for the [ScalePad API](https://developer.scalepad.com/), generated from ScalePad's published OpenAPI documents. It covers the **Core API** and the **Lifecycle Manager API**, with typed request and response models, typed filters and sorting per endpoint, cursor pagination helpers, file uploads and downloads, and rate-limit aware retries.

## Installation

```bash
npm install scalepad
```

Requires Node.js 18 or later (native `fetch`, `FormData`, `Blob`). TypeScript 5 or later for the types.

## Quick start

```typescript
import { ScalePadClient } from 'scalepad';

const client = new ScalePadClient({ apiKey: process.env.SCALEPAD_API_KEY! });

// Core API → Clients → List Clients
const clients = await client.core.v1.clients.list({
  filters: { num_hardware_assets: { op: 'gte', value: 10 } },
  sort: ['-num_hardware_assets'],
  page_size: 50,
});
console.log(clients.total_count, clients.data[0]?.name);

// Lifecycle Manager API → Agreements → List Agreements
const agreements = await client.lifecycleManager.v1.agreements.list({
  filters: { status: 'Active', expiry: { op: 'in', value: ['ZeroToThirty', 'ThirtyOneToSixty'] } },
});
```

The client mirrors the [API reference](https://developer.scalepad.com/reference): each product is a namespace, each sidebar group is a property, and each operation is a method named after its documented title with the group's words removed. "Lifecycle Manager API → Agreement Templates → Create Agreement Template" is `client.lifecycleManager.v1.agreementTemplates.create(body)`. Every method's JSDoc carries the HTTP method and path.

## Authentication

Create a personal API key in the ScalePad application (the user must be active and have the Administrator permission). Pass it as `apiKey`; the SDK sends it in the `x-api-key` header.

```typescript
const client = new ScalePadClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.scalepad.com', // default; Core and Lifecycle Manager are US-only
  timeoutMs: 60_000, // per attempt
  retry: { maxRetries: 3, retryOn429: true, retryOn5xx: true },
  logLevel: 'info', // 'debug' | 'info' | 'warn' | 'error' | 'none'
  logger: customLogger, // optional Logger implementation
  fetch: customFetch, // optional fetch implementation
});
```

Lifecycle Manager endpoints need a Lifecycle Manager subscription. Without one the API answers 402 and the SDK throws `SubscriptionRequiredError`.

## Filtering

List methods take a `filters` map keyed by field name. Each field accepts only the operators the endpoint documents; your editor will show them.

```typescript
await client.core.v1.hardwareAssets.list({
  filters: {
    type: 'WORKSTATION', // a bare value means eq
    'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 },
    name: { op: 'cont', value: 'latitude' }, // substring match
    record_updated_at: { op: 'gt', value: new Date('2026-01-01') }, // dates become ISO 8601
  },
});

await client.lifecycleManager.v1.agreements.list({
  filters: {
    'client.id': { op: 'in', value: ['c1', 'c2'] },
    // Repeatable fields take an array of clauses; null matches records with no value.
    'client.segment_id': [{ op: 'eq', value: 'seg1' }, { op: 'null', value: true }],
  },
});
```

Filters combine with AND. Values containing commas, colons, spaces, or the words `OR`/`AND` are quoted for you.

Core API endpoints that filter on personal data (List Contacts, List Members) take those fields in a request body. Put them in the same `filters` map; the SDK sends them where the API expects them.

## Sorting

```typescript
await client.core.v1.clients.list({ sort: ['-num_hardware_assets', 'name'] });
```

`sort` is typed to the endpoint's sortable fields, each optionally prefixed with `-` (descending) or `+`.

## Pagination

List methods return one page: `{ data, total_count, next_cursor }`. Every paginated method has an `…All()` sibling that yields items across pages.

```typescript
for await (const asset of client.core.v1.hardwareAssets.listAll({ page_size: 200 })) {
  console.log(asset.id);
}

// Manual paging
let cursor: string | undefined;
do {
  const page = await client.lifecycleManager.v1.contacts.list({ cursor, page_size: 100 });
  cursor = page.next_cursor ?? undefined;
} while (cursor);

// Or collect into an array
import { collectAll } from 'scalepad';
const all = await collectAll((cursor) => client.core.v1.sites.list({ cursor, page_size: 200 }));
```

Cursor pagination is not atomic: records changed while you iterate may be skipped or repeated.

## Writes, uploads, and downloads

```typescript
// JSON bodies are typed from the specification
const agreement = await client.lifecycleManager.v1.agreements.create({
  client_id: 'c1',
  name: 'Microsoft 365 E5',
  // …
});
await client.lifecycleManager.v1.agreements.update(agreement.id, { name: 'Microsoft 365 E5 (renewed)' });
await client.lifecycleManager.v1.agreements.delete(agreement.id);

// Multipart uploads take Blob/File values
await client.lifecycleManager.v1.account.uploadLogo({ file: new File([bytes], 'logo.png', { type: 'image/png' }) });

// Exports and reports resolve to { data: Uint8Array, contentType, fileName }
const pdf = await client.lifecycleManager.v1.agreementReports.exportPdf({});
await writeFile(pdf.fileName ?? 'agreements.pdf', pdf.data);
```

Operations the API documents as deprecated are marked `@deprecated` and strike through in editors; they keep working until the date in their description.

## Types

Response and request types are indexed from the specification. Friendly aliases are exported per product:

```typescript
import type { CoreV1Types, LifecycleManagerV1Types } from 'scalepad';

const firstClient: CoreV1Types.Client = (await client.core.v1.clients.list()).data[0]!;
const agreement: LifecycleManagerV1Types.AgreementOverviewApi = /* … */;

// Anything without a unique short name is reachable through the raw components
type Lineage = LifecycleManagerV1Types.components['schemas']['Beast.ScalePadApi.ScalePadApiClient.Model.Response.RecordLineage.RecordLineage'];
```

Method return types can also be derived: `Awaited<ReturnType<LifecycleManagerV1['agreements']['get']>>`.

## Errors

```typescript
import {
  ApiError,
  AuthenticationError, // 401
  SubscriptionRequiredError, // 402
  ForbiddenError, // 403
  NotFoundError, // 404
  RateLimitError, // 429, with retryAfter in seconds
  NetworkError,
  TimeoutError,
} from 'scalepad';

try {
  await client.lifecycleManager.v1.agreements.get('missing');
} catch (error) {
  if (error instanceof NotFoundError) {
    // error.errors: [{ code: 'NOT_FOUND', title, detail }]
  } else if (error instanceof ApiError) {
    console.error(error.statusCode, error.errors);
  }
}
```

The API's default limit is 50 requests per 5 seconds. On 429 the SDK waits for the `Retry-After` header and retries; 5xx and network failures retry with exponential backoff. Other 4xx errors are thrown immediately.

## Logging

The default console logger redacts API keys and any object key containing `key`, `token`, or `secret`. Pass `logLevel: 'none'` to silence it or `logger` to supply your own `debug/info/warn/error` implementation.

## Regenerating from the specification

The product namespaces are generated from `spec/*.json`, which are the documents ScalePad publishes at `https://developer.scalepad.com/openapi/<product>.json`.

```bash
npm run fetch-specs   # download the current documents into spec/
npm run generate      # rebuild src/**/*.generated.ts
npm run validate      # typecheck, lint, test
```

Method names come from each operation's title; `scripts/products.mjs` holds the handful of explicit overrides. The generator fails loudly when two operations in one group would share a name, so a new specification never silently renames or drops a method.

## Development

```bash
npm install
npm run build       # ESM + CJS + .d.ts into dist/
npm test
npm run typecheck
npm run lint
```

## Links

- [Getting started with the ScalePad API](https://developer.scalepad.com/docs/getting-started)
- [API reference](https://developer.scalepad.com/reference)
- [API versioning policy](https://developer.scalepad.com/docs/api-versioning-policy)
- [Changelog](https://developer.scalepad.com/changelog)

## License

MIT
