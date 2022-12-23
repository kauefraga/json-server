import { clear } from 'console';
import { basename } from 'path';
import { blue, dim } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { useFetch } from '../lib/use-fetch';
import { RestfulJsonServer } from '../http/restful/server';
import { isUrl } from '../lib/validators';
import { args } from './args';

export async function main() {
  const { json, port } = args();

  clear();

  blue('\n  \\{^_^}/ hi!'); // blue

  const data = isUrl(json)
    ? await useFetch(json)
    : await readJson(json);

  dim(`\n  Loading ${json}\n  Done`);

  RestfulJsonServer({
    port,
    routes: [
      `/${basename(json, '.json')}`,
    ],
    data,
  });
}
