import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import loaders from './loaders';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    loaders: loaders(),
  }),
});

const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3002;

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
