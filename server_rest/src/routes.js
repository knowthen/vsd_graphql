import {
  allBoards,
  boardById,
  listsByBoardId,
  itemsByListId,
  commentsByItemId,
  userById,
} from './dal';
const routes = app => {
  app.get('/api/boards', async (req, res) => {
    const boards = await allBoards();
    res.status(200).send(boards);
  });
  app.get('/api/boards/:id', async (req, res) => {
    const id = req.params.id;
    const board = await boardById(id);
    res.status(200).send(board);
  });
  app.get('/api/boards/:id/lists', async (req, res) => {
    const id = req.params.id;
    const lists = await listsByBoardId(id);
    res.status(200).send(lists);
  });
  app.get('/api/lists/:id/items', async (req, res) => {
    const id = req.params.id;
    const items = await itemsByListId(id);
    res.status(200).send(items);
  });
  app.get('/api/items/:id/comments', async (req, res) => {
    const id = req.params.id;
    const comments = await commentsByItemId(id);
    res.status(200).send(comments);
  });
  app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    const user = await userById(id);
    res.status(200).send(user);
  });
};

export default routes;
