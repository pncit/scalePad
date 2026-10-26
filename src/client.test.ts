import { describe, it, expect, vi } from 'vitest';
import { ScalePadClient, SubscriptionRequiredError } from './index.js';

type Call = { url: URL; init: RequestInit };

function harness(responder: (call: Call, index: number) => Response) {
  const calls: Call[] = [];
  const fetch = vi.fn(async (input: string | URL | Request, init?: RequestInit) => {
    const call = { url: new URL(String(input)), init: init ?? {} };
    calls.push(call);
    return responder(call, calls.length - 1);
  });
  const client = new ScalePadClient({
    apiKey: 'k',
    logLevel: 'none',
    retry: { maxRetries: 0 },
    fetch: fetch as unknown as typeof globalThis.fetch,
  });
  return { client, calls };
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

describe('ScalePadClient', () => {
  it('requires an API key', () => {
    expect(() => new ScalePadClient({ apiKey: '' })).toThrow('API key is required');
  });

  it('lists Core clients with typed filters and sorting', async () => {
    const page = {
      data: [{ id: 'c1', name: 'Space Sprockets, Inc' }],
      total_count: 1,
      next_cursor: null,
    };
    const { client, calls } = harness(() => json(page));
    const result = await client.core.v1.clients.list({
      filters: { name: { op: 'cont', value: 'Sprocket' }, num_contacts: { op: 'gte', value: 10 } },
      sort: ['-num_hardware_assets', 'name'],
      page_size: 50,
    });
    expect(result.data[0]?.name).toBe('Space Sprockets, Inc');
    const { url, init } = calls[0];
    expect(init.method).toBe('GET');
    expect(url.origin + url.pathname).toBe('https://api.scalepad.com/core/v1/clients');
    expect(url.searchParams.get('filter[name]')).toBe('cont:Sprocket');
    expect(url.searchParams.get('filter[num_contacts]')).toBe('gte:10');
    expect(url.searchParams.get('sort')).toBe('-num_hardware_assets,name');
    expect(url.searchParams.get('page_size')).toBe('50');
  });

  it('posts Core contact PII filters in the body and the rest in the query string', async () => {
    const { client, calls } = harness(() => json({ data: [], total_count: 0, next_cursor: null }));
    await client.core.v1.contacts.list({
      filters: { 'client.id': 'c1', 'name.full': { op: 'cont', value: 'Rob' } },
      page_size: 5,
    });
    const { url, init } = calls[0];
    expect(init.method).toBe('POST');
    expect(url.pathname).toBe('/core/v1/contacts');
    expect(url.searchParams.get('filter[client.id]')).toBe('eq:c1');
    expect(url.searchParams.has('filter[name.full]')).toBe(false);
    expect(JSON.parse(String(init.body))).toEqual({ filter: { 'name.full': 'cont:Rob' } });
  });

  it('encodes path parameters', async () => {
    const { client, calls } = harness(() => json({ id: 'a/b c' }));
    await client.lifecycleManager.v1.agreements.get('a/b c');
    expect(calls[0].url.pathname).toBe('/lifecycle-manager/v1/agreements/a%2Fb%20c');
  });

  it('walks every page with the All variant', async () => {
    const pages = [
      { data: [{ id: '1' }, { id: '2' }], total_count: 3, next_cursor: 'next' },
      { data: [{ id: '3' }], total_count: 3, next_cursor: null },
    ];
    const { client, calls } = harness((_call, i) => json(pages[i]));
    const ids: string[] = [];
    for await (const agreement of client.lifecycleManager.v1.agreements.listAll({
      filters: { status: 'Active' },
    })) {
      ids.push(agreement.id);
    }
    expect(ids).toEqual(['1', '2', '3']);
    expect(calls[0].url.searchParams.has('cursor')).toBe(false);
    expect(calls[1].url.searchParams.get('cursor')).toBe('next');
    expect(calls[1].url.searchParams.get('filter[status]')).toBe('eq:Active');
  });

  it('repeats array filters and sends null clauses', async () => {
    const { client, calls } = harness(() => json({ data: [], total_count: 0, next_cursor: null }));
    await client.lifecycleManager.v1.agreements.list({
      filters: {
        'client.segment_id': [
          { op: 'in', value: ['s1', 's2'] },
          { op: 'null', value: true },
        ],
      },
    });
    expect(calls[0].url.searchParams.getAll('filter[client.segment_id]')).toEqual([
      'in:s1,s2',
      'null:true',
    ]);
  });

  it('downloads exports as binary responses', async () => {
    const { client, calls } = harness(
      () =>
        new Response(new Uint8Array([1, 2, 3]), {
          status: 200,
          headers: {
            'content-type': 'text/csv',
            'content-disposition': 'attachment; filename="agreements.csv"',
          },
        })
    );
    const file = await client.lifecycleManager.v1.agreementReports.exportCsv({});
    expect(file.fileName).toBe('agreements.csv');
    expect(file.contentType).toBe('text/csv');
    expect(Array.from(file.data)).toEqual([1, 2, 3]);
    expect(calls[0].init.method).toBe('POST');
    expect(calls[0].url.pathname).toBe('/lifecycle-manager/v1/agreements/export/csv');
  });

  it('uploads files as multipart form data', async () => {
    const { client, calls } = harness(() => json({}));
    const file = new File([new Uint8Array([137, 80, 78, 71])], 'logo.png', { type: 'image/png' });
    await client.lifecycleManager.v1.account.uploadLogo({ file });
    const form = calls[0].init.body as FormData;
    expect(form).toBeInstanceOf(FormData);
    expect((form.get('file') as File).name).toBe('logo.png');
  });

  it('resolves empty-bodied updates to undefined', async () => {
    const { client, calls } = harness(() => new Response(null, { status: 200 }));
    await expect(
      client.lifecycleManager.v1.clients.update('c1', { website: 'https://example.com' })
    ).resolves.toBeUndefined();
    expect(calls[0].init.method).toBe('PATCH');
    expect(calls[0].url.pathname).toBe('/lifecycle-manager/v1/clients/c1');
  });

  it('surfaces a missing Lifecycle Manager subscription as SubscriptionRequiredError', async () => {
    const { client } = harness(() =>
      json(
        {
          errors: [
            {
              code: 'PRODUCT_SUBSCRIPTION_REQUIRED',
              title: 'Lifecycle Manager subscription required',
            },
          ],
        },
        402
      )
    );
    await expect(client.lifecycleManager.v1.agreements.list()).rejects.toBeInstanceOf(
      SubscriptionRequiredError
    );
  });
});
