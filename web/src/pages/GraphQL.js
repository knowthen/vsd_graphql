import React, { Component } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { KanbanBoard, Loading } from '../components';

const isProd = process.env.REACT_APP_STAGE === 'production';
const url = isProd ? '??' : 'http://localhost:3002/graphql';

const query = `
query Board($id: ID!){
  boardById(id: $id){
    id
    name
    lists{
      id
      name
      items{
        id
        name
        comments{
          id
          body
        }
      }
    }
  }
}
`;

class GraphQL extends Component {
  state = {
    loading: true,
    lists: [],
    boardName: '',
  };
  async componentDidMount() {
    const id = R.path(['props', 'match', 'params', 'id'], this);
    const variables = { id };
    const result = await axios.post(url, { query, variables });
    const lists = R.path(['data', 'data', 'boardById', 'lists'], result);
    const boardName = R.path(['data', 'data', 'boardById', 'name'], result);
    this.setState({ lists, loading: false, boardName });
  }
  render() {
    const { lists, loading, boardName } = this.state;
    if (loading) {
      return <Loading />;
    }
    return <KanbanBoard lists={lists} boardName={boardName} />;
  }
}

export default GraphQL;
