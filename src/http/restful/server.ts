import express from 'express';
import { white } from '../../lib/colorized-console';
import { NotFound } from './middlewares/404';
import { cors } from './middlewares/cors';
import { logger } from './middlewares/logger';

type Route = `/${string}`;

export interface JsonServerOptions {
  port: string | number;
  routes: Route | Route[];
  data: any;
}

export function RestfulJsonServer({
  port,
  routes,
  data,
}: JsonServerOptions) {
  const server = express();

  server.disable('x-powered-by'); // don't expose that this application use express

  server.use(cors);

  server.get(['/', ...routes], logger, (_, res) => res.json(data));

  server.use(NotFound);

  server.listen(port, () => {
    white('\n  Resources');
    white(`  http://localhost:${port}/`);
    white(`  http://localhost:${port}${routes}\n`);
  });
}
