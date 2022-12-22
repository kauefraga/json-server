import { basename, resolve } from 'path';
import { readFile } from 'fs/promises';

export async function readJson(path: string) {
  if (!basename(path).includes('json')) {
    throw new Error(`${path} is not a valid json file`);
  }

  const json = await readFile(resolve(path), 'utf-8')
    .then((raw) => JSON.parse(raw));

  return json;
}
