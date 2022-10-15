import {
  createServer, RequestOptions, ServerResponse,
} from 'http';

type Listener = (request: RequestOptions, response: ServerResponse) => void;

export function createApp(listener: Listener) {
  const server = createServer(listener);

  return server;
}
