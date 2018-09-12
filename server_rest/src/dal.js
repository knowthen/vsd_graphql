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

export const itemsByListId = id => {
  const sql = `
  select * from kanban.item
  where list_id = $1;
  `;
  const params = [id];
  return query(sql, params);
};

export const commentsByItemId = id => {
  const sql = `
  select * from kanban.comment
  where item_id = $1;
  `;
  const params = [id];
  return query(sql, params);
};

export const userById = async id => {
  const sql = `
  select * from kanban.user
  where id = $1;
  `;
  const params = [id];
  const [user] = await query(sql, params);
  return user;
};
