import React, { Component } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { KanbanBoard, Loading } from '../components';

const isProd = process.env.REACT_APP_STAGE === 'production';
const url = isProd ? '??' : 'http://localhost:4001';
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
const getLists = boardId => get(`${url}/boards/${boardId}/lists`);
const getItems = listId => get(`${url}/lists/${listId}/items`);
const getComments = itemId => get(`${url}/items/${itemId}/comments`);

const queryLists = async id => {
  // const { data: board } = await axios.get(`${url}/boards/${id}`);
  const lists = await getLists(id);
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
  return result;
};

class Rest extends Component {
  state = {
    loading: true,
    lists: [],
  };
  async componentDidMount() {
    const id = R.path(['props', 'match', 'params', 'id'], this);
    const lists = await queryLists(id);
    this.setState({ lists, loading: false });
  }
  render() {
    const { lists, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return <KanbanBoard lists={lists} />;
  }
}

export default Rest;
