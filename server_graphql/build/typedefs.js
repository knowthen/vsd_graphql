'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  type Query {\n    allBoards: [Board]\n    boardById(id: ID!): Board\n  }\n  type Board {\n    id: ID!\n    name: String\n    userId: ID!\n    createdAt: Float!\n    lists: [List]!\n  }\n  type List {\n    id: ID!\n    name: String\n    sequence: Int\n    boardId: ID!\n    userId: ID!\n    createdAt: Float!\n    items: [Item]!\n  }\n  type Item {\n    id: ID!\n    name: String\n    listId: ID!\n    userId: ID!\n    createdAt: Float!\n    comments: [Comment]!\n  }\n  type Comment {\n    id: ID!\n    body: String\n    sequence: Int\n    itemId: ID!\n    userID: ID!\n    createdAt: Float!\n  }\n'], ['\n  type Query {\n    allBoards: [Board]\n    boardById(id: ID!): Board\n  }\n  type Board {\n    id: ID!\n    name: String\n    userId: ID!\n    createdAt: Float!\n    lists: [List]!\n  }\n  type List {\n    id: ID!\n    name: String\n    sequence: Int\n    boardId: ID!\n    userId: ID!\n    createdAt: Float!\n    items: [Item]!\n  }\n  type Item {\n    id: ID!\n    name: String\n    listId: ID!\n    userId: ID!\n    createdAt: Float!\n    comments: [Comment]!\n  }\n  type Comment {\n    id: ID!\n    body: String\n    sequence: Int\n    itemId: ID!\n    userID: ID!\n    createdAt: Float!\n  }\n']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('apollo-server-express'),
    gql = _require.gql;

exports.default = gql(_templateObject);