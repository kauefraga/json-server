#! /usr/bin/env node
import { main } from '.';

try {
  main(process.argv);
} catch (e: any) {
  console.error(
    new Error(`${e.code} - ${e.message}`),
  );
}
