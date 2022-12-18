import { clear } from 'console';
import { resolve, basename } from 'path';
import { blue, dim } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { useFetch } from '../lib/use-fetch';
import { jsonServer } from '../http/server';
import { isUrl } from '../lib/is-url';
import { args } from './args';

export async function main() {
  clear();

  blue('\n  \\{^_^}/ hi!'); // blue

  const { json, port } = args();

  const data = {};

  if (isUrl(json)) {
    Object.assign(data, await useFetch(json));
  } else {
    Object.assign(data, await readJson(resolve(json)));
  }

  dim(`\n  Loading ${json}\n  Done`);

  jsonServer({
    port,
    routes: [
      `/${basename(json, '.json')}`,
    ],
    data,
  });
}
