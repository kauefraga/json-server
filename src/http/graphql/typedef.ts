export function createTypeDefs() {
  const typeDefs = `#graphql
    type Query {
      data: String!
    }
  `;

  return typeDefs;
}
