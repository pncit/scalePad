/**
 * Quickstart example for the ScalePad SDK
 * 
 * This example demonstrates basic usage of the SDK including:
 * - Client initialization
 * - Listing resources
 * - Filtering and sorting
 * - Pagination
 */

import { ScalePadClient } from '../src/index.js';

async function main() {
  // Initialize the client
  const client = new ScalePadClient({
    apiKey: process.env.SCALEPAD_API_KEY!,
    logLevel: 'info',
  });

  console.log('ScalePad SDK Quickstart\n');

  // Example 1: List clients with pagination
  console.log('Example 1: List clients');
  const clientsResult = await client.core.v1.clients.list({
    pageSize: 10,
  });
  console.log(`Found ${clientsResult.total_count} total clients`);
  console.log(`Retrieved ${clientsResult.data.length} clients in this page\n`);

  // Example 2: List with filtering
  console.log('Example 2: Filter workstations');
  const workstationsResult = await client.core.v1.hardwareAssets.list({
    pageSize: 50,
    filters: {
      type: { op: 'eq', value: 'WORKSTATION' },
    },
  });
  console.log(`Found ${workstationsResult.total_count} workstations\n`);

  // Example 3: List with multiple filters
  console.log('Example 3: Filter by type and RAM');
  const filteredAssetsResult = await client.core.v1.hardwareAssets.list({
    filters: {
      type: { op: 'eq', value: 'WORKSTATION' },
      'configuration.ram_bytes': { op: 'lte', value: 8000000000 },
    },
  });
  console.log(`Found ${filteredAssetsResult.total_count} workstations with <= 8GB RAM\n`);

  // Example 4: List with sorting
  console.log('Example 4: Sort clients by hardware assets');
  const sortedClientsResult = await client.core.v1.clients.list({
    pageSize: 10,
    sort: ['-num_hardware_assets'], // descending order
  });
  console.log(`Retrieved ${sortedClientsResult.data.length} clients sorted by hardware count\n`);

  // Example 5: Paginate through all results
  console.log('Example 5: Iterate through all pages');
  let totalContacts = 0;
  let pageCount = 0;
  
  for await (const page of client.core.v1.contacts.paginate({ pageSize: 100 })) {
    pageCount++;
    totalContacts += page.length;
    console.log(`  Page ${pageCount}: ${page.length} contacts`);
    
    // Limit to first 3 pages for demo
    if (pageCount >= 3) break;
  }
  console.log(`Total contacts processed: ${totalContacts}\n`);

  // Example 6: Get a specific resource by ID
  console.log('Example 6: Get client by ID');
  if (clientsResult.data.length > 0) {
    const firstClientId = (clientsResult.data[0] as any).id;
    if (firstClientId) {
      const retrievedClient = await client.core.v1.clients.getById(firstClientId);
      console.log(`Retrieved client: ${JSON.stringify(retrievedClient, null, 2)}\n`);
    }
  }

  // Example 7: Complex filtering with IN operator
  console.log('Example 7: Filter with IN operator');
  const multiTypeResult = await client.core.v1.hardwareAssets.list({
    filters: {
      type: { op: 'in', value: ['SERVER', 'WORKSTATION'] },
    },
    pageSize: 50,
  });
  console.log(`Found ${multiTypeResult.total_count} servers or workstations\n`);

  console.log('Quickstart complete!');
}

// Run the example
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
  main().catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}

export { main };

