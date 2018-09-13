import * as R from 'ramda';
import query from './query';

export const boardById = async id => {
  const sql = `
  select * from kanban.board 
  where id = $1;
  `;
  const params = [id];
  const [board] = await query(sql, params);
  return board;
};

export const boards = () => {
  const sql = `
  select * from kanban.board;
  `;
  return query(sql);
};

export const listsByBoardId = boardId => {
  const sql = `
  select * from kanban.list
  where board_id = $1;
  `;
  const params = [boardId];
  return query(sql, params);
};

export const listsByBoardIds = async boardIds => {
  const sql = `
  select * from kanban.list
  where board_id = any($1);
  `;
  const params = [boardIds];
  const result = await query(sql, params);
  const groupedById = R.groupBy(list => list.boardId, result);
  return R.map(id => groupedById[id] || [], boardIds);
};
