import React, { Component } from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { Link } from 'react-router-dom';

const isProd = process.env.REACT_APP_STAGE === 'production';
const url = isProd ? '??' : 'http://localhost:3001';

const get = async url => {
  const result = await axios.get(url);
  return result.data;
};

const getBoards = () => {
  return get(`${url}/boards`);
};

const Board = ({ board }) => {
  return (
    <div className="column">
      <div className="box">
        <h4>
          {board.name} (<Link to={`/rest/${board.id}`}>Rest</Link>) (
          <Link to={`/graphql/${board.id}`}>GraphQL</Link>)
        </h4>
      </div>
    </div>
  );
};

class Home extends Component {
  state = {
    boards: [],
  };
  async componentDidMount() {
    const boards = await getBoards();
    this.setState({ boards });
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="heading is-size-3">Kanban Boards</h1>
          <div className="columns content">
            {R.map(
              board => (
                <Board key={board.id} board={board} />
              ),
              this.state.boards,
            )}
            {/* <div className="column">
              <pre>{JSON.stringify(this.state.boards, null, 2)}</pre>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
