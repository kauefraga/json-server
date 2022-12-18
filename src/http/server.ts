import express from 'express';
import { white } from '../lib/colorized-console';
import { NotFound } from './middlewares/404';

type Route = `/${string}`;

export interface JsonServerOptions<Data> {
  port: string | number;
  routes: Route[] | Route;
  data: Data;
}

export function jsonServer<Data = any>({
  port,
  routes,
  data,
}: JsonServerOptions<Data>) {
  const server = express();

  server.disable('x-powered-by'); // don't expose that this application use express

  server.get(['/', ...routes], (_, res) => res.json(data));

  server.use(NotFound);

  server.listen(port, () => {
    white('\n  Resources');
    white(`  http://localhost:${port}/`);
    white(`  http://localhost:${port}${routes}`);
  });
}
