'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _pg = require('pg');

var _humps = require('humps');

var _humps2 = _interopRequireDefault(_humps);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dotEnvPath = _path2.default.join(__dirname, '..', '.env');
_dotenv2.default.config({ path: dotEnvPath });

var pool = new _pg.Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

function logQuery(sql, params) {
  console.log('BEGIN-------------------------------------');
  console.log('SQL:', sql);
  console.log('PARAMS:', JSON.stringify(params));
  console.log('END---------------------------------------');
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sql, params) {
    var client, result, rows;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logQuery(sql, params);
            _context.next = 3;
            return pool.connect();

          case 3:
            client = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return client.query(sql, params);

          case 7:
            result = _context.sent;
            rows = _humps2.default.camelizeKeys(result.rows);
            return _context.abrupt('return', rows);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](4);

            console.log(_context.t0);

          case 15:
            _context.prev = 15;

            client.release();
            return _context.finish(15);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12, 15, 18]]);
  }));

  function query(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return query;
}();