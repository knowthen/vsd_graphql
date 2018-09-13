const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    boardById(id: ID!): Board
    boards: [Board]
  }
  type Board {
    id: ID!
    name: String
    lists: [List]
  }
  type List {
    id: ID!
    name: String
  }
`;

export default typeDefs;
