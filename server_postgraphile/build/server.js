'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _postgraphile = require('postgraphile');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotEnvPath = _path2.default.join(__dirname, '..', '.env');
_dotenv2.default.config({ path: dotEnvPath });

var isProduction = process.env.NODE_ENV === 'production';
var app = (0, _express2.default)();

var pgConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
};

var schemaName = 'kanban';
var options = {
  watchPg: !isProduction,
  pgDefaultRole: 'kanban_anonymous',
  graphiql: !isProduction,
  enableCors: !isProduction
};

app.use((0, _postgraphile.postgraphile)(pgConfig, schemaName, options));
var PORT = process.env.PORT || 4000;
app.listen(PORT, function (err) {
  console.log('running at http://localhost:' + PORT + '/graphiql');
});