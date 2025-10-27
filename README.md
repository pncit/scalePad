# ScalePad SDK for Node.js

A TypeScript SDK for the [ScalePad API](https://developer.scalepad.com/) with strong typing, Zod v4 validation, pagination helpers, filtering/sorting support, and rate-limit aware retries.

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- 🔒 **Type-safe**: Full TypeScript support with strong typing
- ✅ **Validated**: Zod v4 schema validation for API responses
- 🔄 **Pagination**: Built-in cursor-based pagination with async generators
- 🔍 **Filtering & Sorting**: Intuitive API for filtering and sorting resources
- ⚡ **Rate Limiting**: Automatic retry with exponential backoff and `Retry-After` support
- 📝 **Logging**: Configurable logging with secret redaction
- 🧪 **Well-tested**: Comprehensive test coverage
- 📦 **Dual Package**: ESM and CommonJS support

## Installation

```bash
npm install @scalepad/sdk
```

## Quick Start

```typescript
import { ScalePadClient } from '@scalepad/sdk';

const client = new ScalePadClient({
  apiKey: process.env.SCALEPAD_API_KEY!,
  logLevel: 'info',
});

// List clients
const result = await client.core.v1.clients.list({
  pageSize: 100,
});

console.log(`Found ${result.total_count} clients`);
```

## Authentication

The SDK requires a ScalePad API key. You can generate one in your ScalePad account:

1. Sign into your ScalePad account
2. Navigate to your personal API keys
3. Select **New API key**
4. Copy the generated API key

For more details, see the [Getting Started Guide](https://developer.scalepad.com/docs/getting-started).

## Usage

### Initialization

```typescript
import { ScalePadClient } from '@scalepad/sdk';

const client = new ScalePadClient({
  apiKey: 'your-api-key',
  
  // Optional configuration
  baseUrl: 'https://api.scalepad.com', // default
  timeoutMs: 60000, // default: 60 seconds
  logLevel: 'info', // 'debug' | 'info' | 'warn' | 'error' | 'none'
  
  // Retry configuration
  retry: {
    maxRetries: 3, // default
    retryOn429: true, // default
    retryOn5xx: true, // default
  },
});
```

### Listing Resources

```typescript
// List clients
const clients = await client.core.v1.clients.list({
  pageSize: 100,
});

// List contacts
const contacts = await client.core.v1.contacts.list();

// List hardware assets
const assets = await client.core.v1.hardwareAssets.list();

// Other resources:
// - client.core.v1.contracts
// - client.core.v1.members
// - client.core.v1.saas
// - client.core.v1.tickets
// - client.core.v1.opportunities
```

### Filtering

The SDK supports all ScalePad API filter operators: `eq`, `in`, `lt`, `lte`, `gt`, `gte`.

```typescript
// Exact match
const workstations = await client.core.v1.hardwareAssets.list({
  filters: {
    type: { op: 'eq', value: 'WORKSTATION' },
  },
});

// Multiple values (IN operator)
const serverOrWorkstation = await client.core.v1.hardwareAssets.list({
  filters: {
    type: { op: 'in', value: ['SERVER', 'WORKSTATION'] },
  },
});

// Numeric comparison
const lowRamAssets = await client.core.v1.hardwareAssets.list({
  filters: {
    'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 },
  },
});

// Multiple filters (combined with AND)
const filtered = await client.core.v1.hardwareAssets.list({
  filters: {
    type: { op: 'eq', value: 'WORKSTATION' },
    'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 },
  },
});

// Special characters (automatically quoted)
const client = await client.core.v1.clients.list({
  filters: {
    name: { op: 'eq', value: 'Space Sprockets, Inc.' },
  },
});
```

### Sorting

```typescript
// Sort by field (ascending by default)
const clients = await client.core.v1.clients.list({
  sort: ['name'],
});

// Sort descending
const clients = await client.core.v1.clients.list({
  sort: ['-num_hardware_assets'],
});

// Multiple sort fields
const clients = await client.core.v1.clients.list({
  sort: ['num_hardware_assets', '-num_contacts'],
});
```

### Pagination

The SDK provides multiple ways to work with paginated results:

#### Manual Pagination

```typescript
let cursor: string | undefined;
let allClients = [];

do {
  const result = await client.core.v1.clients.list({
    pageSize: 200,
    cursor,
  });
  
  allClients.push(...result.data);
  cursor = result.next_cursor ?? undefined;
} while (cursor);
```

#### Async Generator (Pages)

```typescript
// Iterate through pages
for await (const page of client.core.v1.clients.paginate({ pageSize: 200 })) {
  console.log(`Processing ${page.length} clients`);
  // Process page...
}
```

#### Async Generator (Items)

```typescript
// Iterate through individual items
for await (const client of client.core.v1.clients.paginateItems({ pageSize: 200 })) {
  console.log(`Processing client: ${client.id}`);
  // Process individual client...
}
```

#### Collect All

```typescript
import { collectAll } from '@scalepad/sdk';

// Collect all pages into a single array
const allClients = await collectAll(
  (cursor) => client.core.v1.clients.list({ cursor, pageSize: 200 })
);
```

### Getting a Resource by ID

```typescript
const client = await client.core.v1.clients.getById('client-id');
const contact = await client.core.v1.contacts.getById('contact-id');
```

### Error Handling

```typescript
import {
  ScalePadClient,
  ApiError,
  AuthenticationError,
  RateLimitError,
  NetworkError,
  TimeoutError,
  ResponseValidationError,
} from '@scalepad/sdk';

try {
  const result = await client.core.v1.clients.list();
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid API credentials');
  } else if (error instanceof RateLimitError) {
    console.error('Rate limited. Retry after:', error.retryAfter);
  } else if (error instanceof ApiError) {
    console.error('API error:', error.statusCode, error.errors);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else if (error instanceof TimeoutError) {
    console.error('Request timed out');
  } else if (error instanceof ResponseValidationError) {
    console.error('Invalid response format:', error.issues);
  }
}
```

### Custom Logger

```typescript
import { ScalePadClient, Logger } from '@scalepad/sdk';

class CustomLogger implements Logger {
  debug(message: string, ...args: unknown[]): void {
    // Your custom debug logging
  }
  
  info(message: string, ...args: unknown[]): void {
    // Your custom info logging
  }
  
  warn(message: string, ...args: unknown[]): void {
    // Your custom warn logging
  }
  
  error(message: string, ...args: unknown[]): void {
    // Your custom error logging
  }
}

const client = new ScalePadClient({
  apiKey: 'your-api-key',
  logger: new CustomLogger(),
});
```

## Available Resources

The SDK currently supports the following Core API v1 resources (read-only):

- **Clients**: `client.core.v1.clients`
- **Contacts**: `client.core.v1.contacts`
- **Contracts**: `client.core.v1.contracts`
- **Hardware Assets**: `client.core.v1.hardwareAssets`
- **Members**: `client.core.v1.members`
- **SaaS**: `client.core.v1.saas`
- **Tickets**: `client.core.v1.tickets`
- **Opportunities**: `client.core.v1.opportunities`

Each resource provides:
- `list(options?)` - List resources with filtering, sorting, and pagination
- `getById(id)` - Get a single resource by ID
- `paginate(options?)` - Async generator for pages
- `paginateItems(options?)` - Async generator for individual items

## Rate Limiting

The SDK automatically handles rate limiting according to the [ScalePad API rate limits](https://developer.scalepad.com/docs/getting-started#rate-limiting):

- Default limit: 50 requests per 5 seconds
- On `429 Too Many Requests`, the SDK automatically retries after the `Retry-After` duration
- Configurable retry behavior via the `retry` option

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions:

```typescript
import type {
  Client,
  Contact,
  Contract,
  HardwareAsset,
  Member,
  SaaS,
  Ticket,
  Opportunity,
  Filters,
  SortSpec,
  ListResult,
  PaginatedResponse,
} from '@scalepad/sdk';
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Type check
npm run typecheck

# Lint
npm run lint
```

## Examples

See the [examples](./examples) directory for complete usage examples:

- [quickstart.ts](./examples/quickstart.ts) - Basic usage and common patterns

## API Documentation

For full API documentation, visit:
- [ScalePad API Getting Started](https://developer.scalepad.com/docs/getting-started)
- [ScalePad API Reference](https://developer.scalepad.com/reference)
- [API Versioning Policy](https://developer.scalepad.com/docs/api-versioning-policy)

## Requirements

- Node.js >= 18 (for native `fetch` support)
- TypeScript >= 5.0 (if using TypeScript)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions:
- [GitHub Issues](https://github.com/robgilbreath/scalePad/issues)
- [ScalePad Developer Documentation](https://developer.scalepad.com/)
