import { describe, it, expect } from 'vitest';
import { methodName, resolveCollisions, schemaAlias, tagClass, tagProperty } from './naming.mjs';

describe('methodName', () => {
  it('drops the tag words from the summary', () => {
    expect(methodName('Agreements', 'List Agreements')).toBe('list');
    expect(methodName('Agreements', 'Get Agreement Summary')).toBe('getSummary');
    expect(methodName('Agreement Templates', 'Create Agreement Template')).toBe('create');
    expect(methodName('Hardware Assets', 'List Hardware Assets')).toBe('list');
  });

  it('drops articles and a preposition left dangling at the end', () => {
    expect(methodName('Goal Links', 'Attach Action Item to Goal')).toBe('attachActionItem');
    expect(methodName('Initiative Attachments', 'Upload an Initiative Attachment')).toBe('upload');
    expect(methodName('Deliverable Content', "Get a Component's File")).toBe('getComponentFile');
  });

  it('keeps the full summary when every word belongs to the tag', () => {
    expect(methodName('Account', 'Account')).toBe('account');
  });

  it('keeps version markers from the summary', () => {
    expect(methodName('Initiatives', 'List Initiatives v2')).toBe('listV2');
  });
});

describe('resolveCollisions', () => {
  it('suffixes older API versions of the same route', () => {
    const ops = [
      { methodName: 'create', path: '/lifecycle-manager/v1/deliverables/{id}/shares/general-link' },
      { methodName: 'create', path: '/lifecycle-manager/v2/deliverables/{id}/shares/general-link' },
    ];
    expect(resolveCollisions(ops)).toEqual([]);
    expect(ops.map((o) => o.methodName)).toEqual(['createV1', 'create']);
  });

  it('reports collisions it cannot settle', () => {
    const ops = [
      { methodName: 'update', path: '/lifecycle-manager/v1/clients' },
      { methodName: 'update', path: '/lifecycle-manager/v1/clients/{client_id}' },
    ];
    expect(resolveCollisions(ops)).toHaveLength(1);
  });
});

describe('tag and schema names', () => {
  it('derives property and class names from tags', () => {
    expect(tagProperty('Agreement Reports')).toBe('agreementReports');
    expect(tagClass('Client IQ')).toBe('ClientIq');
    expect(tagProperty('SaaS Management')).toBe('saasManagement');
  });

  it('keeps the casing of the schema short name', () => {
    expect(schemaAlias('Agreement.Model.Public.AgreementOverviewApi')).toBe('AgreementOverviewApi');
    expect(schemaAlias('Organization.Controller.Public.ClientUpdate_Request')).toBe(
      'ClientUpdateRequest'
    );
    expect(schemaAlias('SpApi.CoreApi.Core.v1.Clients.Model.Client')).toBe('Client');
  });
});
