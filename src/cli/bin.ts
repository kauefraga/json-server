#! /usr/bin/env node
import { main } from '.';

try {
  main(process.argv.slice(2));
} catch (e: any) {
  console.error(
    new Error(`${e.code} - ${e.message}`),
  );
}
