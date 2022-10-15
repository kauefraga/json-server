import { resolve } from 'path';
import { readJson } from '../lib/parse-json';
import { createApp } from '../http/server';

interface MainProps {
  port: number,
  jsonPath: string
}

export async function main({ port, jsonPath }: MainProps) {
  const db = await readJson(resolve(jsonPath));

  const server = createApp((req, res) => {
    if (req.method !== 'GET') {
      return res.end();
    }

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    return res.end(JSON.stringify({
      success: true,
      data: db,
    }));
  });

  server.listen(port, () => {
    console.log(`[server] listening on http://localhost:${port}`);
  });
}
