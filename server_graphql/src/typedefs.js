const { gql } = require('apollo-server-express');

export default gql`
  type Query {
    allBoards: [Board]
    boardById(id: ID!): Board
  }
  type Board {
    id: ID!
    name: String
    userId: ID!
    createdAt: Float!
    lists: [List]!
  }
  type List {
    id: ID!
    name: String
    sequence: Int
    boardId: ID!
    userId: ID!
    createdAt: Float!
    items: [Item]!
  }
  type Item {
    id: ID!
    name: String
    listId: ID!
    userId: ID!
    createdAt: Float!
    comments: [Comment]!
  }
  type Comment {
    id: ID!
    body: String
    sequence: Int
    itemId: ID!
    userID: ID!
    createdAt: Float!
  }
`;
