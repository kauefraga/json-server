import { clear } from 'console';
import { resolve, basename } from 'path';
import { log } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { useFetch } from '../lib/use-fetch';
import { jsonServer } from '../http/server';

export async function main(args: string[]) {
  clear();

  log.blue('\n  \\{^_^}/ hi!');

  const [port, json] = args;

  let data = {};

  // source: https://urlregex.com
  // eslint-disable-next-line no-useless-escape
  const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;

  if (urlRegEx.test(json)) {
    try {
      data = await useFetch(json);
    } catch (e: any) {
      log.red(e);
    }
  } else {
    data = await readJson(resolve(json));
  }

  const resource = basename(json, '.json');

  log.dim(`\n  Loading ${json}\n  Done`);

  const server = jsonServer(resource, (_, res) => {
    log.green(`${res.req.method} ${res.req.url} ${res.statusCode} - ${new Date()}`);

    return res.end(JSON.stringify(data));
  });

  server.listen(port, () => {
    log.white(`\n  Resources\n  http://localhost:${port}/${resource}\n`);
  });
}
