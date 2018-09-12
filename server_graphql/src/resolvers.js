import { allBoards, boardById } from './dal';
export default {
  Query: {
    allBoards: () => {
      return allBoards();
    },
    boardById: (root, args) => {
      const { id } = args;
      return boardById(id);
    },
  },
  Board: {
    createdAt: board => board.createdAt.getTime(),
    lists: (board, args, context) => {
      const { listLoader } = context.loaders;
      return listLoader.load(board.id);
    },
  },
  List: {
    items: (list, args, context) => {
      const { itemLoader } = context.loaders;
      return itemLoader.load(list.id);
    },
  },
  Item: {
    comments: (item, args, context) => {
      const { commentLoader } = context.loaders;
      return commentLoader.load(item.id);
    },
  },
};
