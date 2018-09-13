import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import DataLoader from 'dataloader';
import typeDefs from './typedefs';
import resolvers from './resolvers';
import { listsByBoardIds } from './dal';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    listLoader: new DataLoader(listsByBoardIds),
  }),
});

const app = express();

server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);
