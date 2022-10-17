import {
  createServer, RequestOptions, ServerResponse,
} from 'http';
import { Router } from './router';

type Listener = (request: RequestOptions, response: ServerResponse) => void;

export function jsonServer(path: string, listener: Listener) {
  const server = createServer();

  const router = new Router(server);

  router.get(path, listener);

  return server;
}
