import { resolve } from 'path';
import { readFile } from 'fs/promises';

export async function readJson(path: string) {
  const json = await readFile(resolve(path), 'utf-8')
    .then((raw) => JSON.parse(raw));

  return json;
}
