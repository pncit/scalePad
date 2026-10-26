/**
 * Builds the SDK's product namespaces from the OpenAPI documents in spec/.
 *
 * For each product it writes, under its output directory:
 * - schema.generated.ts     the document's types (openapi-typescript)
 * - operations.generated.ts one class per tag with one method per operation,
 *                           plus a typed query interface per operation
 * - types.generated.ts      friendly aliases for the component schemas
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';
import prettier from 'prettier';
import { PRODUCTS, METHOD_NAME_OVERRIDES } from './products.mjs';
import {
  camel,
  methodName,
  pascal,
  resolveCollisions,
  schemaAlias,
  tagClass,
  tagProperty,
  words,
} from './naming.mjs';

const root = new URL('../', import.meta.url);
const METHODS = ['get', 'post', 'put', 'patch', 'delete'];
const HEADER = (specFile) =>
  `// Generated from spec/${specFile} by scripts/generate.mjs. Regenerate with \`npm run generate\`; do not edit.\n`;

const usedOverrides = new Set();

for (const product of PRODUCTS) {
  const spec = JSON.parse(await readFile(new URL(`spec/${product.specFile}`, root), 'utf8'));
  const outDir = new URL(`${product.outDir}/`, root);
  await mkdir(outDir, { recursive: true });

  const schemaTypes = astToString(
    await openapiTS(new URL(`spec/${product.specFile}`, root), { alphabetize: true })
  );
  await writeFile(new URL('schema.generated.ts', outDir), HEADER(product.specFile) + schemaTypes);

  const ops = collectOperations(spec);
  const tags = groupByTag(ops);
  const operationsSource = await format(renderOperations(product, spec, tags));
  await writeFile(
    new URL('operations.generated.ts', outDir),
    HEADER(product.specFile) + operationsSource
  );

  const typesSource = await format(renderTypeAliases(spec));
  await writeFile(new URL('types.generated.ts', outDir), HEADER(product.specFile) + typesSource);

  const paged = ops.filter((op) => op.paged).length;
  console.log(
    `${product.specFile}: ${ops.length} operations in ${tags.size} tags (${paged} paginated, ${ops.filter((o) => o.deprecated).length} deprecated)`
  );
}

const unusedOverrides = Object.keys(METHOD_NAME_OVERRIDES).filter((id) => !usedOverrides.has(id));
if (unusedOverrides.length) {
  throw new Error(
    `METHOD_NAME_OVERRIDES has no matching operation for: ${unusedOverrides.join(', ')}`
  );
}

// ---------------------------------------------------------------------------

function collectOperations(spec) {
  const ops = [];
  for (const [path, item] of Object.entries(spec.paths)) {
    for (const method of METHODS) {
      const op = item[method];
      if (!op) continue;
      const tag = op.tags?.[0];
      if (!tag) throw new Error(`${method.toUpperCase()} ${path} has no tag`);
      const parameters = [...(item.parameters ?? []), ...(op.parameters ?? [])];
      const pathParams = parameters.filter((p) => p.in === 'path');
      const queryParams = parameters.filter((p) => p.in === 'query');
      const pathParamNames = [...path.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
      for (const name of pathParamNames) {
        if (!pathParams.some((p) => p.name === name)) {
          throw new Error(
            `${method.toUpperCase()} ${path} does not declare path parameter ${name}`
          );
        }
      }
      const response = classifyResponse(op);
      const body = classifyBody(op);
      const record = {
        operationId: op.operationId,
        tag,
        summary: op.summary ?? op.operationId,
        description: op.description ?? '',
        deprecated: Boolean(op.deprecated),
        method: method.toUpperCase(),
        path,
        pathParamNames,
        queryParams,
        body,
        response,
        paged:
          response.kind === 'json' &&
          isPaged(spec, response.schema) &&
          queryParams.some((q) => q.name === 'cursor'),
        methodName:
          METHOD_NAME_OVERRIDES[op.operationId] ?? methodName(tag, op.summary ?? op.operationId),
      };
      if (METHOD_NAME_OVERRIDES[op.operationId]) usedOverrides.add(op.operationId);
      ops.push(record);
    }
  }
  return ops;
}

function classifyResponse(op) {
  const code = Object.keys(op.responses).find((c) => /^2\d\d$/.test(c));
  // A few operations document only their failure codes; they succeed with an empty 2xx.
  if (!code) return { kind: 'void', code: '204' };
  const content = op.responses[code].content ?? {};
  const types = Object.keys(content);
  if (types.includes('application/json')) {
    return { kind: 'json', code, schema: content['application/json'].schema };
  }
  return { kind: types.length ? 'binary' : 'void', code };
}

function classifyBody(op) {
  const content = op.requestBody?.content;
  if (!content) return undefined;
  const required = Boolean(op.requestBody.required);
  if (content['multipart/form-data']) {
    return { kind: 'multipart', required, schema: content['multipart/form-data'].schema };
  }
  const json = content['application/json'];
  if (!json)
    throw new Error(`${op.operationId} has a request body without JSON or multipart content`);
  const filter = json.schema?.properties?.filter;
  if (filter?.additionalProperties && Object.keys(json.schema.properties).length === 1) {
    return {
      kind: 'bodyFilters',
      required,
      fields: Object.keys(filter.properties ?? {}),
    };
  }
  return { kind: 'json', required };
}

function isPaged(spec, schema) {
  const resolved = resolveRef(spec, schema);
  const props = resolved?.properties ?? {};
  return props.data?.type === 'array' && 'next_cursor' in props;
}

function resolveRef(spec, schema) {
  if (!schema) return undefined;
  if (schema.$ref) return spec.components.schemas[schema.$ref.split('/').pop()];
  if (schema.allOf?.length === 1) return resolveRef(spec, schema.allOf[0]);
  return schema;
}

function groupByTag(ops) {
  const tags = new Map();
  for (const op of ops) {
    if (!tags.has(op.tag)) tags.set(op.tag, []);
    tags.get(op.tag).push(op);
  }
  const problems = [];
  for (const [tag, tagOps] of tags) {
    for (const group of resolveCollisions(tagOps)) {
      problems.push(
        `${tag}.${group.name}: ${group.ops.map((o) => `${o.operationId} (${o.method} ${o.path})`).join(' | ')}`
      );
    }
  }
  if (problems.length) {
    throw new Error(
      `Method name collisions need METHOD_NAME_OVERRIDES entries:\n  ${problems.join('\n  ')}`
    );
  }
  return tags;
}

// ---------------------------------------------------------------------------

function renderOperations(product, spec, tags) {
  const body = renderOperationsBody(product, spec, tags);
  const uses = (name) => new RegExp(`\\b${name}\\b`).test(body);
  const typeImport = (names, from) => {
    const used = names.filter(uses);
    return used.length ? `import type { ${used.join(', ')} } from '${from}';` : undefined;
  };
  const valueImport = (names, from) => {
    const used = names.filter(uses);
    return used.length ? `import { ${used.join(', ')} } from '${from}';` : undefined;
  };
  const imports = [
    typeImport(['components', 'operations'], './schema.generated.js'),
    typeImport(['HttpClient', 'BinaryResponse', 'MultipartBody'], '../../http/httpClient.js'),
    typeImport(['FilterValue', 'FilterOp'], '../../types/filters.js'),
    valueImport(['splitBodyFilters'], '../../types/filters.js'),
    typeImport(['SortSpec'], '../../types/sorting.js'),
    valueImport(['paginateItems'], '../../types/pagination.js'),
  ].filter(Boolean);
  return [...imports, '', body].join('\n');
}

function renderOperationsBody(product, spec, tags) {
  const out = [];

  const tagEntries = [...tags.entries()].sort(([a], [b]) => a.localeCompare(b));

  out.push(
    docComment([`${product.docsTitle} ${spec.info.version}`, '', spec.info.description ?? ''])
  );
  out.push(`export class ${product.className} {`);
  for (const [tag] of tagEntries) {
    const description = spec.tags?.find((t) => t.name === tag)?.description;
    if (description) out.push(docComment([description]));
    out.push(`  readonly ${tagProperty(tag)}: ${tagClass(tag)};`);
  }
  out.push('  constructor(http: HttpClient) {');
  for (const [tag] of tagEntries)
    out.push(`    this.${tagProperty(tag)} = new ${tagClass(tag)}(http);`);
  out.push('  }');
  out.push('}');
  out.push('');

  for (const [tag, ops] of tagEntries) {
    const description = spec.tags?.find((t) => t.name === tag)?.description;
    out.push(docComment([tag, ...(description ? ['', description] : [])]));
    out.push(`export class ${tagClass(tag)} {`);
    out.push('  constructor(private readonly http: HttpClient) {}');
    for (const op of ops) {
      out.push('');
      out.push(renderMethod(spec, tag, op));
    }
    out.push('}');
    out.push('');
    for (const op of ops) {
      const queryType = renderQueryInterface(spec, tag, op);
      if (queryType) out.push(queryType, '');
    }
  }
  return out.join('\n');
}

function queryTypeName(tag, op) {
  return `${tagClass(tag)}${pascal([op.methodName])}Query`;
}

function pathArgName(param) {
  return camel(words(param));
}

function operationRef(op) {
  return `operations[${JSON.stringify(op.operationId)}]`;
}

function responseType(op) {
  switch (op.response.kind) {
    case 'void':
      return 'void';
    case 'binary':
      return 'BinaryResponse';
    case 'json':
      return `${operationRef(op)}['responses'][${op.response.code}]['content']['application/json']`;
  }
}

function bodyType(spec, op) {
  if (op.body.kind === 'json') {
    return `NonNullable<${operationRef(op)}['requestBody']>['content']['application/json']`;
  }
  const schema = op.body.schema;
  const required = new Set(schema.required ?? []);
  const fields = Object.entries(schema.properties ?? {}).map(([name, prop]) => {
    const type = prop.format === 'binary' ? 'Blob' : schemaTypeExpr(spec, prop);
    const doc = prop.description ? docComment([prop.description], 4) + '\n' : '';
    return `${doc}    ${propertyKey(name)}${required.has(name) ? '' : '?'}: ${type};`;
  });
  return `{\n${fields.join('\n')}\n  }`;
}

function renderMethod(spec, tag, op) {
  const lines = [];
  const doc = [op.summary];
  if (op.description.trim()) doc.push('', ...op.description.trim().split(/\r?\n/));
  doc.push('', `\`${op.method} ${op.path}\``);
  if (op.deprecated) doc.push('', '@deprecated');
  lines.push(docComment(doc, 2));

  const args = [];
  const pathArgs = op.pathParamNames.map(pathArgName);
  for (const name of pathArgs) args.push(`${name}: string`);
  if (op.body && op.body.kind !== 'bodyFilters') {
    args.push(`body${op.body.required ? '' : '?'}: ${bodyType(spec, op)}`);
  }
  const hasQuery = op.queryParams.length > 0 || op.body?.kind === 'bodyFilters';
  const queryRequired = op.queryParams.some((q) => q.required);
  if (hasQuery) args.push(`query${queryRequired ? '' : '?'}: ${queryTypeName(tag, op)}`);

  const pathExpr =
    '`' +
    op.path.replace(/\{([^}]+)\}/g, (_, name) => `\${encodeURIComponent(${pathArgName(name)})}`) +
    '`';

  const commaArrays = op.queryParams
    .filter((q) => q.schema?.type === 'array' && q.explode === false)
    .map((q) => q.name);
  const dateOnly = op.queryParams.filter((q) => q.schema?.format === 'date').map((q) => q.name);

  const requestFields = [`method: '${op.method}'`, `path: ${pathExpr}`];
  if (op.body?.kind === 'bodyFilters') {
    requestFields.push('query: { ...rest, filters: queryFilters }', 'body');
  } else {
    if (hasQuery) requestFields.push('query');
    if (op.body?.kind === 'json') requestFields.push('body');
    if (op.body?.kind === 'multipart') requestFields.push('multipart: body as MultipartBody');
  }
  if (commaArrays.length) requestFields.push(`commaArrays: ${JSON.stringify(commaArrays)}`);
  if (dateOnly.length) requestFields.push(`dateOnlyParams: ${JSON.stringify(dateOnly)}`);
  requestFields.push(`responseType: '${op.response.kind}'`);

  const returnType = responseType(op);
  lines.push(`  ${op.methodName}(${args.join(', ')}): Promise<${returnType}> {`);
  if (op.body?.kind === 'bodyFilters') {
    lines.push(`    const { filters, ...rest } = query ?? {};`);
    lines.push(
      `    const { queryFilters, body } = splitBodyFilters(filters, ${JSON.stringify(op.body.fields)});`
    );
  }
  lines.push(`    return this.http.request<${returnType}>({ ${requestFields.join(', ')} });`);
  lines.push('  }');

  if (op.paged) {
    const itemType = `${returnType}['data'][number]`;
    const allArgs = [
      ...pathArgs.map((n) => `${n}: string`),
      `query${queryRequired ? '' : '?'}: Omit<${queryTypeName(tag, op)}, 'cursor'>`,
    ];
    const callArgs = [...pathArgs, '{ ...query, cursor }'];
    lines.push('');
    lines.push(
      docComment(
        [
          `Every item of \`${op.methodName}()\`, fetched page by page.`,
          '',
          'Cursor pagination is not atomic: records changed while iterating may be skipped or repeated.',
          ...(op.deprecated ? ['', '@deprecated'] : []),
        ],
        2
      )
    );
    lines.push(`  ${op.methodName}All(${allArgs.join(', ')}): AsyncGenerator<${itemType}, void> {`);
    lines.push(
      `    return paginateItems((cursor) => this.${op.methodName}(${callArgs.join(', ')}));`
    );
    lines.push('  }');
  }
  return lines.join('\n');
}

function renderQueryInterface(spec, tag, op) {
  const hasQuery = op.queryParams.length > 0 || op.body?.kind === 'bodyFilters';
  if (!hasQuery) return undefined;
  const lines = [];
  lines.push(docComment([`Query parameters for \`${tagClass(tag)}.${op.methodName}()\`.`]));
  lines.push(`export interface ${queryTypeName(tag, op)} {`);

  const filterParams = op.queryParams.filter((q) => /^filter\[.+\]$/.test(q.name));
  const bodyFilterFields = op.body?.kind === 'bodyFilters' ? op.body.fields : [];
  if (filterParams.length || bodyFilterFields.length) {
    lines.push(docComment(['Field filters, combined with AND.'], 2));
    lines.push('  filters?: {');
    for (const param of filterParams) {
      const field = param.name.slice('filter['.length, -1);
      const ops = filterOps(param);
      const repeatable = param.schema?.type === 'array';
      const valueType = `FilterValue<${ops.map((o) => `'${o}'`).join(' | ')}>`;
      const doc = [`Operators: ${ops.join(', ')}.`];
      const available = /Available values:\s*(.+)/.exec(param.description ?? '');
      if (available) doc.push(`Available values: ${available[1].replace(/`/g, '').trim()}`);
      if (repeatable) doc.push('Repeatable: pass an array to send several clauses.');
      lines.push(docComment(doc, 4));
      lines.push(
        `    ${propertyKey(field)}?: ${valueType}${repeatable ? ` | readonly ${valueType}[]` : ''};`
      );
    }
    for (const field of bodyFilterFields) {
      lines.push(docComment(['Sent in the request body rather than the query string.'], 4));
      lines.push(`    ${propertyKey(field)}?: FilterValue<FilterOp>;`);
    }
    lines.push('  };');
  }

  for (const param of op.queryParams) {
    if (/^filter\[.+\]$/.test(param.name)) continue;
    if (param.name === 'sort') {
      const fields = sortableFields(param);
      const spec = fields.length
        ? `SortSpec<${fields.map((f) => `'${f}'`).join(' | ')}>`
        : 'SortSpec';
      lines.push(docComment([cleanDescription(param.description) || 'Sort order.'], 2));
      lines.push(`  sort?: readonly ${spec}[];`);
      continue;
    }
    const doc = cleanDescription(param.description);
    if (doc) lines.push(docComment([doc], 2));
    lines.push(
      `  ${propertyKey(param.name)}${param.required ? '' : '?'}: ${schemaTypeExpr(spec, param.schema)};`
    );
  }
  lines.push('}');
  return lines.join('\n');
}

function filterOps(param) {
  const pattern = param.schema?.pattern ?? param.schema?.items?.pattern;
  const m = pattern && /^\^\(([a-z|]+)\):/.exec(pattern);
  const ops = m ? m[1].split('|') : ['eq'];
  if (/null:true/.test(param.description ?? '')) ops.push('null');
  return ops;
}

/**
 * Sortable fields are documented in prose ("Sortable fields: \`a\`, \`b.c\`." or
 * "Available fields: a, b.c") or, for the Core API, enumerated in the pattern.
 */
function sortableFields(param) {
  const text = (param.description ?? '').replace(/\r?\n/g, ' ');
  const m =
    /(?:Sortable fields|Available fields|Available values|sort fields)\*?:\s*(.+?)(?:\.(?=\s|$)|$)/i.exec(
      text
    );
  if (m) {
    return m[1]
      .replace(/\bor\b/g, ',')
      .split(',')
      .map((f) => f.replace(/[`*]/g, '').trim())
      .filter((f) => /^[a-z][a-z0-9_.]*$/i.test(f));
  }
  const pattern = param.schema?.pattern ?? '';
  const alternation = /\(([a-z0-9_.|]+)\)/.exec(pattern);
  return alternation ? alternation[1].split('|') : [];
}

function schemaTypeExpr(spec, schema) {
  if (!schema) return 'string';
  if (schema.$ref) return `components['schemas'][${JSON.stringify(schema.$ref.split('/').pop())}]`;
  if (schema.allOf?.length === 1) return schemaTypeExpr(spec, schema.allOf[0]);
  if (schema.enum) return schema.enum.map((v) => JSON.stringify(v)).join(' | ');
  switch (schema.type) {
    case 'integer':
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      return `readonly (${schemaTypeExpr(spec, schema.items)})[]`;
    case 'object': {
      const value = schema.additionalProperties;
      const valueType = value && typeof value === 'object' ? schemaTypeExpr(spec, value) : 'string';
      return `Record<string, ${valueType} | null | undefined>`;
    }
    case 'string':
      return schema.format === 'date' || schema.format === 'date-time' ? 'string | Date' : 'string';
    default:
      return 'string';
  }
}

function renderTypeAliases(spec) {
  const out = [];
  out.push(`import type { components } from './schema.generated.js';`);
  out.push(`export type { components, operations, paths } from './schema.generated.js';`);
  out.push('');
  const schemas = Object.keys(spec.components?.schemas ?? {}).filter((name) => !name.endsWith('_'));
  const byAlias = new Map();
  for (const name of schemas) {
    const alias = schemaAlias(name);
    if (!byAlias.has(alias)) byAlias.set(alias, []);
    byAlias.get(alias).push(name);
  }
  const skipped = [];
  for (const [alias, names] of [...byAlias.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    if (names.length > 1 || !/^[A-Za-z_][A-Za-z0-9_]*$/.test(alias)) {
      skipped.push(...names);
      continue;
    }
    const description = spec.components.schemas[names[0]].description;
    if (description) out.push(docComment([description]));
    out.push(`export type ${alias} = components['schemas'][${JSON.stringify(names[0])}];`);
  }
  if (skipped.length) {
    out.push('');
    out.push(
      docComment([
        "Schemas without a unique short name; reach them through `components['schemas']`:",
        ...skipped.map((n) => `- ${n}`),
      ])
    );
  }
  return out.join('\n');
}

// ---------------------------------------------------------------------------

function propertyKey(name) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}

function cleanDescription(text) {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}

function docComment(lines, indent = 0) {
  const pad = ' '.repeat(indent);
  const body = lines
    .flatMap((line) => String(line).split(/\r?\n/))
    .map((line) => line.replace(/\*\//g, '*\\/').trimEnd());
  if (body.length === 1) return `${pad}/** ${body[0]} */`;
  return [
    `${pad}/**`,
    ...body.map((line) => `${pad} *${line ? ` ${line}` : ''}`),
    `${pad} */`,
  ].join('\n');
}

async function format(source) {
  const config = await prettier.resolveConfig(fileURLToPath(new URL('package.json', root)));
  return prettier.format(source, { ...config, parser: 'typescript' });
}
