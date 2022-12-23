import { clear } from 'console';
import { basename } from 'path';
import { blue, dim } from '../lib/colorized-console';
import { readJson } from '../lib/parse-json';
import { useFetch } from '../lib/use-fetch';
import { RestfulJsonServer } from '../http/restful/server';
import { GraphQLJsonServer } from '../http/graphql/server';
import { isUrl } from '../lib/validators';
import { args } from './args';

export async function main() {
  const { json, port, graphql } = args();

  clear();

  blue('\n  \\{^_^}/ hi!'); // blue

  const data = isUrl(json)
    ? await useFetch(json)
    : await readJson(json);

  dim(`\n  GraphQL server: ${graphql}`);
  dim(`\n  Loading ${json}\n  Done`);

  const baseName = basename(json, '.json');

  graphql
    ? GraphQLJsonServer({
      port,
      data,
      // dataName: baseName,
    })
    : RestfulJsonServer({
      port,
      routes: [
        `/${baseName}`,
      ],
      data,
    });
}
