import * as R from 'ramda';
import query from './query';

export const allBoards = () => {
  const sql = `
  select * from kanban.board;
  `;
  return query(sql);
};

export const boardById = async id => {
  const sql = `
  select * from kanban.board
  where id = $1;
  `;
  const params = [id];
  const [board] = await query(sql, params);
  return board;
};

export const listsByBoardId = id => {
  const sql = `
  select * from kanban.list 
  where board_id = $1;
  `;
  const params = [id];
  return query(sql, params);
};

export const listsByBoardIds = async boardIds => {
  const sql = `
  select * from kanban.list
  where board_id = any($1);
  `;
  const params = [boardIds];
  const lists = await query(sql, params);
  const groupedByIds = R.groupBy(list => list.boardId, lists);
  return R.map(boardId => groupedByIds[boardId] || [], boardIds);
};

export const itemsByListIds = async listIds => {
  const sql = `
  select * from kanban.item
  where list_id = any($1);
  `;
  const params = [listIds];
  const items = await query(sql, params);
  const groupedByIds = R.groupBy(item => item.listId, items);
  return R.map(listId => groupedByIds[listId] || [], listIds);
};

export const commentsByItemIds = async itemIds => {
  const sql = `
  select * from kanban.comment
  where item_id = any($1);
  `;
  const params = [itemIds];
  const comments = await query(sql, params);
  const groupedByIds = R.groupBy(comment => comment.itemId, comments);
  return R.map(itemId => groupedByIds[itemId] || [], itemIds);
};
