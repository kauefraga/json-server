import { clear } from 'node:console';
import { resolve } from 'path';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { createApp } from '../http/server';

interface MainProps {
  port: number,
  jsonPath: string
}

export async function main({ port, jsonPath }: MainProps) {
  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const data = await readJson(resolve(jsonPath));

  log.dim(`\n  Loading ${jsonPath}\n  Done`);

  const server = createApp((req, res) => {
    log.green(`${res.req.method} - ${res.req.url} - ${new Date()}`);

    if (req.method !== 'GET') {
      res.writeHead(405, {
        'Content-Type': 'application/json',
      });

      return res.end(JSON.stringify({
        success: false,
        error: 'You must request with GET method',
      }));
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    return res.end(JSON.stringify({
      success: true,
      data,
    }));
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}\n`);
  });
}
