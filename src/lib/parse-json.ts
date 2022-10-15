import { resolve } from 'path';
import { readFile } from 'fs/promises';

export function readJson(path: string) {
  const json = readFile(resolve(path), 'utf-8')
    .then((raw) => JSON.parse(raw));

  return json;
}
