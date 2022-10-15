#! /usr/bin/env node
import { main } from '.';

try {
  const [/* runtime */, /* run file */, port, jsonPath] = process.argv;
  // prod: [runtime, port, jsonPath] -> quicky-server 8080 file.json

  if (!jsonPath) throw new Error('path to json must be specified');

  main({
    port: Number(port) ?? 8080,
    jsonPath,
  });
} catch (e: any) {
  console.error(
    new Error(`${e.code} - ${e.message}`),
  );
}
