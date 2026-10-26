/**
 * Naming rules shared by the generator and its tests.
 *
 * Method names come from each operation's documented summary with the words of
 * its tag removed, so `List Agreements` under the `Agreements` tag becomes
 * `list()` and `Get Agreement Summary` becomes `getSummary()`. Articles and a
 * trailing preposition left dangling by the removal are dropped too.
 */

const ARTICLES = new Set(['a', 'an', 'the']);
const DANGLING = new Set(['to', 'from', 'for', 'of', 'in', 'on', 'with', 'as', 'by', 'into']);

export function words(text) {
  return (text.match(/[A-Za-z0-9]+/g) ?? []).map((w) => w.toLowerCase());
}

export function singular(word) {
  if (word.endsWith('ies')) return `${word.slice(0, -3)}y`;
  if (word.endsWith('ses') || word.endsWith('xes')) return word.slice(0, -2);
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
  return word;
}

export function camel(parts) {
  return parts.map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join('');
}

export function pascal(parts) {
  return parts.map((p) => p[0].toUpperCase() + p.slice(1)).join('');
}

/** `Agreement Reports` → `agreementReports` */
export function tagProperty(tag) {
  return camel(words(tag));
}

/** `Agreement Reports` → `AgreementReports` */
export function tagClass(tag) {
  return pascal(words(tag));
}

export function methodName(tag, summary) {
  const tagWords = new Set(words(tag).map(singular));
  const all = words(summary).filter((w) => !ARTICLES.has(w) && w !== 's');
  let kept = all.filter((w) => !tagWords.has(singular(w)));
  while (kept.length && DANGLING.has(kept[kept.length - 1])) kept.pop();
  if (kept.length === 0) kept = all;
  return camel(kept);
}

/** `/lifecycle-manager/v2/meetings` → 2; paths without a version segment → 0 */
export function pathVersion(path) {
  const m = /\/v(\d+)\//.exec(path);
  return m ? Number(m[1]) : 0;
}

/**
 * Resolves name collisions inside one tag. When the colliding operations are
 * the same route at different API versions, the newest keeps the bare name and
 * older ones get a `V<n>` suffix. Anything else is a generator error to be
 * settled with an explicit override.
 */
export function resolveCollisions(ops) {
  const byName = new Map();
  for (const op of ops) {
    const list = byName.get(op.methodName) ?? [];
    list.push(op);
    byName.set(op.methodName, list);
  }
  const unresolved = [];
  for (const [name, group] of byName) {
    if (group.length < 2) continue;
    const versions = group.map((op) => pathVersion(op.path));
    if (new Set(versions).size !== group.length || versions.includes(0)) {
      unresolved.push({ name, ops: group });
      continue;
    }
    const newest = Math.max(...versions);
    for (const op of group) {
      const v = pathVersion(op.path);
      if (v !== newest) op.methodName = `${name}V${v}`;
    }
  }
  return unresolved;
}

/**
 * Friendly alias for a component schema name such as
 * `Agreement.Model.Public.AgreementOverviewApi` → `AgreementOverviewApi` or
 * `Organization.Controller.Public.ClientUpdate_Request` → `ClientUpdateRequest`.
 */
export function schemaAlias(fullName) {
  const last = fullName.split('.').pop();
  return (last.match(/[A-Za-z0-9]+/g) ?? []).map((p) => p[0].toUpperCase() + p.slice(1)).join('');
}
