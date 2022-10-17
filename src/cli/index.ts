import { clear } from 'console';
import { resolve, basename } from 'path';
import { parseArgs } from '../lib/parse-args';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { jsonServer } from '../http/server';

export async function main(args: string[]) {
  const [port, jsonPath] = parseArgs(args);

  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const data = await readJson(resolve(jsonPath));

  const path = basename(jsonPath, '.json');

  log.dim(`\n  Loading ${jsonPath}\n  Done`);

  const server = jsonServer(path, (req, res) => {
    log.green(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

    return res.end(JSON.stringify(data));
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}/${path}\n`);
  });
}
