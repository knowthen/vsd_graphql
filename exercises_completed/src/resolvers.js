import { boardById, listsByBoardId, boards } from './dal';

const resolvers = {
  Query: {
    hello: () => 'World',
    boardById: (root, args) => boardById(args.id),
    boards: () => boards(),
  },
  Board: {
    lists: (board, args, context) => {
      const { listLoader } = context;
      return listLoader.load(board.id);
    },
  },
};
export default resolvers;
