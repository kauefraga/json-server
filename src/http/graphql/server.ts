import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { white } from '../../lib/colorized-console';
import { createMainResolver } from './resolver';
import { createTypeDefs } from './typedef';

export interface GraphQLJsonServerOptions {
  port: string | number;
  data: any;
  // dataName: string;
}

export async function GraphQLJsonServer({
  port,
  data,
}: GraphQLJsonServerOptions) {
  const server = new ApolloServer({
    typeDefs: createTypeDefs(),
    resolvers: createMainResolver(data),
  });

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: Number(port),
    },
  });

  white('\n  Resources');
  white(`  ${url}`);
}
