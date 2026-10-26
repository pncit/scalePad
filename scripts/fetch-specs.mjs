/**
 * Downloads the published OpenAPI documents into spec/. Run `npm run generate`
 * afterwards to rebuild the SDK from them.
 */
import { writeFile } from 'node:fs/promises';
import { PRODUCTS } from './products.mjs';

for (const product of PRODUCTS) {
  const url = `https://developer.scalepad.com/openapi/${product.specFile}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} -> ${response.status}`);
  const text = await response.text();
  JSON.parse(text);
  await writeFile(new URL(`../spec/${product.specFile}`, import.meta.url), text);
  console.log(`${product.specFile}: ${text.length} bytes`);
}
