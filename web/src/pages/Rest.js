import React, { Component } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { KanbanBoard, Loading } from '../components';

const isProd = process.env.NODE_ENV === 'production';
const url = isProd
  ? 'http://kanban.trythen.com/api'
  : 'http://localhost:3001/api';
const lists = [
  {
    id: 1,
    name: 'Todo',
    items: [
      { id: 1, name: 'Do this', comments: [{ id: 1, body: 'make sure you' }] },
    ],
  },
];

const get = async url => {
  const result = await axios.get(url);
  return result.data;
};
const getBoard = boardId => get(`${url}/boards/${boardId}`);
const getLists = boardId => get(`${url}/boards/${boardId}/lists`);
const getItems = listId => get(`${url}/lists/${listId}/items`);
const getComments = itemId => get(`${url}/items/${itemId}/comments`);

const queryBoard = async id => {
  const [board, lists] = await Promise.all([getBoard(id), getLists(id)]);
  const itemPromises = R.map(list => {
    return getItems(list.id);
  }, lists);
  const items = await Promise.all(itemPromises);
  const commentsPromises = R.map(item => {
    const p = R.map(item2 => getComments(item2.id), item);
    return Promise.all(p);
  }, items);
  const comments = await Promise.all(commentsPromises);
  const map = R.addIndex(R.map);
  const result = map((list, idx) => {
    const updatedItems = map((item, idx2) => {
      const itemComments = comments[idx][idx2];
      return { ...item, comments: itemComments };
    }, items[idx]);
    return { ...list, items: updatedItems };
  }, lists);
  return [board, result];
};

class Rest extends Component {
  state = {
    loading: true,
    lists: [],
    boardName: '',
  };
  async componentDidMount() {
    const id = R.path(['props', 'match', 'params', 'id'], this);
    const [board, lists] = await queryBoard(id);
    this.setState({ lists, loading: false, boardName: board.name });
  }
  render() {
    const { lists, loading, boardName } = this.state;
    if (loading) {
      return <Loading />;
    }
    return <KanbanBoard lists={lists} boardName={boardName} />;
  }
}

export default Rest;
