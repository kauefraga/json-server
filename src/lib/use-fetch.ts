import http, { IncomingMessage } from 'http';
import https from 'https';
import { isHttps } from './validators';

export async function useFetch(url: string) {
  const client = isHttps(url)
    ? https
    : http;

  return new Promise((resolve, reject) => {
    client.get(url, (response: IncomingMessage) => {
      let data = '';

      response.on('data', (chunk) => { data += chunk; });

      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
}
