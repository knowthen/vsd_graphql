'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _typedefs = require('./typedefs');

var _typedefs2 = _interopRequireDefault(_typedefs);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typedefs2.default,
  resolvers: _resolvers2.default,
  context: function context() {
    return {
      loaders: (0, _loaders2.default)()
    };
  }
});

var app = (0, _express2.default)();

server.applyMiddleware({ app: app });

var PORT = process.env.PORT || 3002;

app.listen({ port: PORT }, function () {
  return console.log('Server ready at http://localhost:' + PORT + server.graphqlPath);
});