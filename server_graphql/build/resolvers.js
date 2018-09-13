'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dal = require('./dal');

exports.default = {
  Query: {
    allBoards: function allBoards() {
      return (0, _dal.allBoards)();
    },
    boardById: function boardById(root, args) {
      var id = args.id;

      return (0, _dal.boardById)(id);
    }
  },
  Board: {
    createdAt: function createdAt(board) {
      return board.createdAt.getTime();
    },
    lists: function lists(board, args, context) {
      var listLoader = context.loaders.listLoader;

      return listLoader.load(board.id);
    }
  },
  List: {
    items: function items(list, args, context) {
      var itemLoader = context.loaders.itemLoader;

      return itemLoader.load(list.id);
    }
  },
  Item: {
    comments: function comments(item, args, context) {
      var commentLoader = context.loaders.commentLoader;

      return commentLoader.load(item.id);
    }
  }
};