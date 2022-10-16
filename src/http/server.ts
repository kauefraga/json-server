import {
  createServer, RequestOptions, ServerResponse,
} from 'http';

type Listener = (request: RequestOptions, response: ServerResponse) => void;

export function createApp(listener: Listener) {
  return createServer(listener);
}
