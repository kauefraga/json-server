/* eslint-disable class-methods-use-this */
import { RequestOptions, Server, ServerResponse } from 'http';
import { log } from '../lib/colorized-console';

function notFound(_: RequestOptions, res: ServerResponse) {
  res.statusCode = 404;

  return res.end(JSON.stringify({
    error: 'Resource not found',
  }));
}

export type Listener = (req: RequestOptions, res: ServerResponse) => void;

export class Router {
  constructor(private server: Server) {
    this.server = server;
  }

  get(
    path: string,
    listener: Listener,
  ) {
    return this.server.addListener('request', (req: RequestOptions, res: ServerResponse) => {
      res.setHeader('Content-Type', 'application/json');

      if (req.method !== 'GET') {
        res.statusCode = 405;

        log.warn(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

        res.end(JSON.stringify({
          error: 'You must request with GET method',
        }));
      }

      switch (res.req.url) {
        case '/': listener(req, res);
          break;

        case `/${path}`: listener(req, res);
          break;

        default: notFound(req, res);
          break;
      }
    });
  }
}
