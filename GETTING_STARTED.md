# Getting Started with ScalePad SDK

This guide will help you get up and running with the ScalePad SDK.

## Installation

Once published to npm, you can install the package:

```bash
npm install @scalepad/sdk
```

For local development, you can build from source:

```bash
npm install
npm run build
```

## Quick Start

### 1. Get Your API Key

1. Sign into your ScalePad account
2. Navigate to your personal API keys
3. Select **New API key**
4. Copy the generated API key

Store your API key securely (e.g., in environment variables):

```bash
export SCALEPAD_API_KEY="your-api-key-here"
```

### 2. Initialize the Client

```typescript
import { ScalePadClient } from '@scalepad/sdk';

const client = new ScalePadClient({
  apiKey: process.env.SCALEPAD_API_KEY!,
  logLevel: 'info', // Optional: 'debug' | 'info' | 'warn' | 'error' | 'none'
});
```

### 3. List Resources

```typescript
// List clients
const clients = await client.core.v1.clients.list({
  pageSize: 100,
});

console.log(`Found ${clients.total_count} clients`);
console.log(`Retrieved ${clients.data.length} clients in this page`);
```

### 4. Filter Resources

```typescript
// Filter hardware assets by type
const workstations = await client.core.v1.hardwareAssets.list({
  filters: {
    type: { op: 'eq', value: 'WORKSTATION' },
  },
});

// Multiple filters
const filtered = await client.core.v1.hardwareAssets.list({
  filters: {
    type: { op: 'eq', value: 'WORKSTATION' },
    'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 },
  },
});
```

### 5. Sort Resources

```typescript
// Sort by field (descending)
const sorted = await client.core.v1.clients.list({
  sort: ['-num_hardware_assets'],
  pageSize: 50,
});
```

### 6. Paginate Through All Results

```typescript
// Using async generators
for await (const page of client.core.v1.contacts.paginate({ pageSize: 200 })) {
  console.log(`Processing ${page.length} contacts`);
  // Process each page...
}

// Or iterate individual items
for await (const contact of client.core.v1.contacts.paginateItems({ pageSize: 200 })) {
  console.log(`Processing contact: ${contact.id}`);
}
```

### 7. Get Resource by ID

```typescript
const client = await client.core.v1.clients.getById('client-id');
console.log(client);
```

## Available Resources

All resources support the same operations:

- **Clients**: `client.core.v1.clients`
- **Contacts**: `client.core.v1.contacts`
- **Contracts**: `client.core.v1.contracts`
- **Hardware Assets**: `client.core.v1.hardwareAssets`
- **Members**: `client.core.v1.members`
- **SaaS**: `client.core.v1.saas`
- **Tickets**: `client.core.v1.tickets`
- **Opportunities**: `client.core.v1.opportunities`

## Filter Operators

The SDK supports all ScalePad API filter operators:

- `eq` - Exact match
- `in` - Match any value in array
- `lt` - Less than
- `lte` - Less than or equal
- `gt` - Greater than
- `gte` - Greater than or equal

Examples:

```typescript
// Exact match
{ type: { op: 'eq', value: 'WORKSTATION' } }

// In list
{ type: { op: 'in', value: ['SERVER', 'WORKSTATION'] } }

// Numeric comparison
{ num_hardware_assets: { op: 'gte', value: 100 } }

// Nested fields
{ 'configuration.ram_bytes': { op: 'lte', value: 8000000000 } }

// Special characters (automatically quoted)
{ name: { op: 'eq', value: 'Space Sprockets, Inc.' } }
```

## Error Handling

```typescript
import {
  ApiError,
  AuthenticationError,
  RateLimitError,
  NetworkError,
} from '@scalepad/sdk';

try {
  const result = await client.core.v1.clients.list();
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid API credentials');
  } else if (error instanceof RateLimitError) {
    console.error(`Rate limited. Retry after ${error.retryAfter}s`);
  } else if (error instanceof ApiError) {
    console.error(`API error ${error.statusCode}:`, error.errors);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  }
}
```

## Configuration Options

```typescript
const client = new ScalePadClient({
  // Required
  apiKey: 'your-api-key',

  // Optional
  baseUrl: 'https://api.scalepad.com', // default
  timeoutMs: 60000, // default: 60 seconds
  logLevel: 'info', // default

  // Retry configuration
  retry: {
    maxRetries: 3, // default
    retryOn429: true, // default
    retryOn5xx: true, // default
  },

  // Custom logger
  logger: customLoggerInstance,

  // Custom fetch (for testing)
  fetch: customFetch,
});
```

## TypeScript Support

The SDK is fully typed:

```typescript
import type {
  Client,
  Contact,
  ListResult,
  Filters,
  SortSpec,
} from '@scalepad/sdk';

// Use types in your code
const filters: Filters = {
  type: { op: 'eq', value: 'WORKSTATION' },
};

const result: ListResult<Client> = await client.core.v1.clients.list({
  filters,
});
```

## Running the Example

```bash
# Set your API key
export SCALEPAD_API_KEY="your-api-key"

# Run the quickstart example
npx tsx examples/quickstart.ts
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

# Watch mode
npm run dev
```

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Check out [examples/quickstart.ts](./examples/quickstart.ts) for more examples
- Visit the [ScalePad API documentation](https://developer.scalepad.com/)
- Review the [CHANGELOG.md](./CHANGELOG.md) for version history

## Support

- GitHub Issues: [Report an issue](https://github.com/robgilbreath/scalePad/issues)
- API Documentation: [developer.scalepad.com](https://developer.scalepad.com/)

