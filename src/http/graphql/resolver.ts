export function createMainResolver(
  data: unknown,
) {
  const MainResolver = {
    Query: {
      data: () => JSON.stringify(data),
    },
  };

  return MainResolver;
}
