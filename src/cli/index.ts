import { clear } from 'console';
import { resolve, basename } from 'path';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { jsonServer } from '../http/server';

export async function main(args: string[]) {
  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const [port, jsonPath] = args;

  const data = await readJson(resolve(jsonPath));

  const resource = basename(jsonPath, '.json');

  log.dim(`\n  Loading ${jsonPath}\n  Done`);

  const server = jsonServer(resource, (_, res) => {
    log.green(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

    return res.end(JSON.stringify(data));
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}/${resource}\n`);
  });
}
