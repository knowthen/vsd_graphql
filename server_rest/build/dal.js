'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userById = exports.commentsByItemId = exports.itemsByListId = exports.listsByBoardId = exports.boardById = exports.allBoards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allBoards = exports.allBoards = function allBoards() {
  var sql = '\n  select * from kanban.board;\n  ';
  return (0, _query2.default)(sql);
};
var boardById = exports.boardById = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
    var sql, params, _ref2, _ref3, board;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sql = '\n  select * from kanban.board\n  where id = $1;\n  ';
            params = [id];
            _context.next = 4;
            return (0, _query2.default)(sql, params);

          case 4:
            _ref2 = _context.sent;
            _ref3 = (0, _slicedToArray3.default)(_ref2, 1);
            board = _ref3[0];
            return _context.abrupt('return', board);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function boardById(_x) {
    return _ref.apply(this, arguments);
  };
}();

var listsByBoardId = exports.listsByBoardId = function listsByBoardId(id) {
  var sql = '\n  select * from kanban.list\n  where board_id = $1;\n  ';
  var params = [id];
  return (0, _query2.default)(sql, params);
};

var itemsByListId = exports.itemsByListId = function itemsByListId(id) {
  var sql = '\n  select * from kanban.item\n  where list_id = $1;\n  ';
  var params = [id];
  return (0, _query2.default)(sql, params);
};

var commentsByItemId = exports.commentsByItemId = function commentsByItemId(id) {
  var sql = '\n  select * from kanban.comment\n  where item_id = $1;\n  ';
  var params = [id];
  return (0, _query2.default)(sql, params);
};

var userById = exports.userById = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
    var sql, params, _ref5, _ref6, user;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = '\n  select * from kanban.user\n  where id = $1;\n  ';
            params = [id];
            _context2.next = 4;
            return (0, _query2.default)(sql, params);

          case 4:
            _ref5 = _context2.sent;
            _ref6 = (0, _slicedToArray3.default)(_ref5, 1);
            user = _ref6[0];
            return _context2.abrupt('return', user);

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function userById(_x2) {
    return _ref4.apply(this, arguments);
  };
}();