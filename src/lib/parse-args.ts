type QuickyServerCliArgs = [port: number, path: string];

export function parseArgs(args: string[]): QuickyServerCliArgs {
  const [port, path] = args.splice(2);

  const portTypeInt = Number(port);

  return [portTypeInt, path];
}
