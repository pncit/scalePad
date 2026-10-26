/**
 * Quickstart for the ScalePad SDK: Core API reads, Lifecycle Manager reads and
 * writes, pagination, and a file download.
 *
 *   SCALEPAD_API_KEY=... npx tsx examples/quickstart.ts
 */
import { writeFile } from 'node:fs/promises';
import { ScalePadClient, SubscriptionRequiredError } from '../src/index.js';

const client = new ScalePadClient({
  apiKey: process.env.SCALEPAD_API_KEY!,
  logLevel: 'info',
});

// Core API: filter, sort, and page through clients.
const clients = await client.core.v1.clients.list({
  filters: { num_hardware_assets: { op: 'gte', value: 10 } },
  sort: ['-num_hardware_assets'],
  page_size: 25,
});
console.log(
  `${clients.total_count} clients with 10+ hardware assets; first page has ${clients.data.length}`
);

// Core API: workstations with 8 GB of RAM or less, across every page.
let lowRam = 0;
for await (const asset of client.core.v1.hardwareAssets.listAll({
  filters: { type: 'WORKSTATION', 'configuration.ram_bytes': { op: 'lte', value: 8_000_000_000 } },
  page_size: 200,
})) {
  lowRam++;
  if (lowRam <= 3) console.log(`  ${asset.name ?? asset.id} at ${asset.client?.name}`);
}
console.log(`${lowRam} workstations have 8 GB or less`);

// Core API: contacts by name. PII filters travel in the request body; the SDK routes them.
const contacts = await client.core.v1.contacts.list({
  filters: { 'name.full': { op: 'cont', value: 'smith' } },
});
console.log(`${contacts.total_count} contacts named smith`);

// Lifecycle Manager requires its own subscription; the error is specific when it is missing.
try {
  const agreements = await client.lifecycleManager.v1.agreements.list({
    filters: {
      status: 'Active',
      expiry: { op: 'in', value: ['ZeroToThirty', 'ThirtyOneToSixty'] },
    },
    sort: ['end_at'],
  });
  console.log(`${agreements.total_count} active agreements expire within 60 days`);

  const csv = await client.lifecycleManager.v1.agreementReports.exportCsv({});
  await writeFile(csv.fileName ?? 'agreements.csv', csv.data);
  console.log(`wrote ${csv.fileName ?? 'agreements.csv'} (${csv.data.byteLength} bytes)`);
} catch (error) {
  if (error instanceof SubscriptionRequiredError) {
    console.log('This account has no Lifecycle Manager subscription.');
  } else {
    throw error;
  }
}
