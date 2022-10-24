import { clear } from 'console';
import { resolve, basename } from 'path';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { useFetch } from '../lib/use-fetch';
import { jsonServer } from '../http/server';
import { isUrl } from '../lib/is-url';

export async function main(args: string[]) {
  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const [port, json] = args;

  const data = {};

  if (isUrl(json)) {
    Object.assign(data, await useFetch(json));
  } else {
    Object.assign(data, await readJson(resolve(json)));
  }

  const resource = basename(json, '.json');

  log.dim(`\n  Loading ${json}\n  Done`);

  const server = jsonServer(resource, (_, res) => {
    log.green(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

    return res.end(JSON.stringify(data));
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}/${resource}\n`);
  });
}
