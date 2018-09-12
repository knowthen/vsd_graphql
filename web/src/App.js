import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Nav } from './components';
import { RestPage, Home, GraphQLPage } from './pages';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/rest/:id" exact component={RestPage} />
          <Route path="/graphql/:id" exact component={GraphQLPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
