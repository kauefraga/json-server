import { clear } from 'node:console';
import { resolve, basename } from 'path';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { createApp } from '../http/server';
import { router } from '../http/routes';

interface MainProps {
  port: number,
  jsonPath: string
}

export async function main({ port, jsonPath }: MainProps) {
  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const data = await readJson(resolve(jsonPath));
  const resource = basename(jsonPath, '.json');

  log.dim(`\n  Loading ${jsonPath}\n  Done`);

  const server = createApp((req, res) => {
    if (req.method !== 'GET') {
      res.statusCode = 405;

      log.warn(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

      res.setHeader('Content-Type', 'application/json');

      return res.end(JSON.stringify({
        success: false,
        error: 'You must request with GET method',
      }));
    }

    log.green(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

    return router(
      req,
      res,
      {
        data,
        resource,
      },
    );
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}/${resource}\n`);
  });
}
