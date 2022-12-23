import { Command } from 'commander';

export const program = new Command();

program
  .name('Quicky Server')
  .description('A fast json server built with some native libraries and with some mocks. Inspired in json-server.')
  .version('2.1.1');

interface QuickyServerOptions {
  port: string | number;
  json: string;
  graphql: boolean;
}

export function args() {
  program
    .option('-p, --port [number]', 'port that will be into server', '3333')
    .option('-j, --json <path>', 'path to json file')
    .option('-g --graphql', 'use graphql server instead of restful', false);

  program.parse(process.argv, { from: 'user' });

  return program.opts<QuickyServerOptions>();
}
