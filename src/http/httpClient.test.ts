import { describe, it, expect, vi } from 'vitest';
import { HttpClient } from './httpClient.js';
import {
  ApiError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  SubscriptionRequiredError,
  TimeoutError,
  NetworkError,
} from './errors.js';
import { NoOpLogger } from '../logging/logger.js';

function client(fetch: typeof globalThis.fetch, timeoutMs = 1000) {
  return new HttpClient({
    apiKey: 'test-key',
    baseUrl: 'https://api.example.test',
    timeoutMs,
    retry: { maxRetries: 0, retryOn429: true, retryOn5xx: true },
    logger: new NoOpLogger(),
    fetch,
  });
}

const json = (body: unknown, init: ResponseInit = {}) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'content-type': 'application/json' },
    ...init,
  });

describe('HttpClient', () => {
  it('sends the API key, accept header, and query string', async () => {
    const fetch = vi.fn(async () => json({ ok: true }));
    const result = await client(fetch).request<{ ok: boolean }>({
      method: 'GET',
      path: '/core/v1/clients',
      query: { page_size: 10, filters: { name: 'Acme' } },
      responseType: 'json',
    });
    expect(result).toEqual({ ok: true });
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    const parsed = new URL(url);
    expect(parsed.pathname).toBe('/core/v1/clients');
    expect(parsed.searchParams.get('page_size')).toBe('10');
    expect(parsed.searchParams.get('filter[name]')).toBe('eq:Acme');
    expect(init.method).toBe('GET');
    expect((init.headers as Record<string, string>)['x-api-key']).toBe('test-key');
    expect((init.headers as Record<string, string>).accept).toBe('application/json');
    expect(init.body).toBeUndefined();
  });

  it('serializes JSON bodies with a content-type header', async () => {
    const fetch = vi.fn(async () => json({ id: 'n1' }, { status: 201 }));
    await client(fetch).request({
      method: 'POST',
      path: '/x',
      body: { name: 'a' },
      responseType: 'json',
    });
    const [, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(init.body).toBe('{"name":"a"}');
    expect((init.headers as Record<string, string>)['content-type']).toBe('application/json');
  });

  it('builds multipart bodies from blobs and scalar fields', async () => {
    const fetch = vi.fn(async () => new Response(null, { status: 204 }));
    const file = new File([new Uint8Array([1, 2, 3])], 'logo.png', { type: 'image/png' });
    await client(fetch).request({
      method: 'POST',
      path: '/upload',
      multipart: { file, scope: 'Series', omitted: undefined },
      responseType: 'void',
    });
    const [, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    const form = init.body as FormData;
    expect(form).toBeInstanceOf(FormData);
    expect((form.get('file') as File).name).toBe('logo.png');
    expect(form.get('scope')).toBe('Series');
    expect(form.has('omitted')).toBe(false);
    expect((init.headers as Record<string, string>)['content-type']).toBeUndefined();
  });

  it('resolves void responses to undefined, including empty 200s', async () => {
    const noContent = client(vi.fn(async () => new Response(null, { status: 204 })));
    await expect(
      noContent.request({ method: 'DELETE', path: '/x', responseType: 'void' })
    ).resolves.toBeUndefined();
    const emptyOk = client(vi.fn(async () => new Response('', { status: 200 })));
    await expect(
      emptyOk.request({ method: 'PATCH', path: '/x', responseType: 'json' })
    ).resolves.toBeUndefined();
  });

  it('returns binary responses with content type and file name', async () => {
    const fetch = vi.fn(
      async () =>
        new Response(new Uint8Array([0x25, 0x50, 0x44, 0x46]), {
          status: 200,
          headers: {
            'content-type': 'application/pdf',
            'content-disposition': 'attachment; filename="agreements.pdf"',
          },
        })
    );
    const result = await client(fetch).request<{
      data: Uint8Array;
      contentType: string;
      fileName: string;
    }>({
      method: 'POST',
      path: '/export/pdf',
      responseType: 'binary',
    });
    expect(Array.from(result.data)).toEqual([0x25, 0x50, 0x44, 0x46]);
    expect(result.contentType).toBe('application/pdf');
    expect(result.fileName).toBe('agreements.pdf');
    const [, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect((init.headers as Record<string, string>).accept).toBe('*/*');
  });

  it('maps error statuses to typed errors carrying the envelope', async () => {
    const envelope = (code: string) => ({ errors: [{ code, title: 't', detail: 'd' }] });
    const cases: Array<[number, unknown, new (...args: never[]) => ApiError]> = [
      [401, envelope('UNAUTHORIZED'), AuthenticationError],
      [402, envelope('PRODUCT_SUBSCRIPTION_REQUIRED'), SubscriptionRequiredError],
      [403, envelope('FORBIDDEN'), ForbiddenError],
      [404, envelope('NOT_FOUND'), NotFoundError],
      [422, envelope('VALIDATION_ERROR'), ApiError],
    ];
    for (const [status, body, type] of cases) {
      const fetch = vi.fn(async () => json(body, { status }));
      const error = await client(fetch)
        .request({ method: 'GET', path: '/x', responseType: 'json' })
        .catch((e: unknown) => e);
      expect(error).toBeInstanceOf(type);
      expect((error as ApiError).statusCode).toBe(status);
      expect((error as ApiError).errors[0].code).toBe(
        (body as { errors: { code: string }[] }).errors[0].code
      );
    }
  });

  it('reports plain-text 429 bodies with the Retry-After value', async () => {
    const fetch = vi.fn(
      async () =>
        new Response('Too Many Requests', { status: 429, headers: { 'retry-after': '23' } })
    );
    const error = (await client(fetch)
      .request({ method: 'GET', path: '/x', responseType: 'json' })
      .catch((e: unknown) => e)) as RateLimitError;
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.retryAfter).toBe(23);
    expect(error.errors[0]).toEqual({
      code: 'HTTP_429',
      title: 'HTTP 429 error',
      detail: 'Too Many Requests',
    });
  });

  it('turns an aborted request into a TimeoutError', async () => {
    const fetch = vi.fn(
      (_url: string | URL | Request, init?: RequestInit) =>
        new Promise<Response>((_, reject) => {
          init?.signal?.addEventListener('abort', () =>
            reject(Object.assign(new Error('aborted'), { name: 'AbortError' }))
          );
        })
    );
    await expect(
      client(fetch as unknown as typeof globalThis.fetch, 10).request({
        method: 'GET',
        path: '/x',
        responseType: 'json',
      })
    ).rejects.toBeInstanceOf(TimeoutError);
  });

  it('wraps transport failures in NetworkError with the cause attached', async () => {
    const boom = new TypeError('fetch failed');
    const fetch = vi.fn(async () => {
      throw boom;
    });
    const error = (await client(fetch)
      .request({ method: 'GET', path: '/x', responseType: 'json' })
      .catch((e: unknown) => e)) as NetworkError;
    expect(error).toBeInstanceOf(NetworkError);
    expect(error.cause).toBe(boom);
  });
});
