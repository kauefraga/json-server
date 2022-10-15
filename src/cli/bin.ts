import { main } from '.';

try {
  const [/* runtime */, /* run file */, port, jsonPath] = process.argv;

  main({
    port: Number(port),
    jsonPath,
  });
} catch (e) {
  console.error(e);
}
