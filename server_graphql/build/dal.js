'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentsByItemIds = exports.itemsByListIds = exports.listsByBoardIds = exports.listsByBoardId = exports.boardById = exports.allBoards = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
  var sql = '\n  select * from kanban.list \n  where board_id = $1;\n  ';
  var params = [id];
  return (0, _query2.default)(sql, params);
};

var listsByBoardIds = exports.listsByBoardIds = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(boardIds) {
    var sql, params, lists, groupedByIds;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sql = '\n  select * from kanban.list\n  where board_id = any($1);\n  ';
            params = [boardIds];
            _context2.next = 4;
            return (0, _query2.default)(sql, params);

          case 4:
            lists = _context2.sent;
            groupedByIds = R.groupBy(function (list) {
              return list.boardId;
            }, lists);
            return _context2.abrupt('return', R.map(function (boardId) {
              return groupedByIds[boardId] || [];
            }, boardIds));

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function listsByBoardIds(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var itemsByListIds = exports.itemsByListIds = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(listIds) {
    var sql, params, items, groupedByIds;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            sql = '\n  select * from kanban.item\n  where list_id = any($1);\n  ';
            params = [listIds];
            _context3.next = 4;
            return (0, _query2.default)(sql, params);

          case 4:
            items = _context3.sent;
            groupedByIds = R.groupBy(function (item) {
              return item.listId;
            }, items);
            return _context3.abrupt('return', R.map(function (listId) {
              return groupedByIds[listId] || [];
            }, listIds));

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function itemsByListIds(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var commentsByItemIds = exports.commentsByItemIds = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(itemIds) {
    var sql, params, comments, groupedByIds;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            sql = '\n  select * from kanban.comment\n  where item_id = any($1);\n  ';
            params = [itemIds];
            _context4.next = 4;
            return (0, _query2.default)(sql, params);

          case 4:
            comments = _context4.sent;
            groupedByIds = R.groupBy(function (comment) {
              return comment.itemId;
            }, comments);
            return _context4.abrupt('return', R.map(function (itemId) {
              return groupedByIds[itemId] || [];
            }, itemIds));

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function commentsByItemIds(_x4) {
    return _ref6.apply(this, arguments);
  };
}();