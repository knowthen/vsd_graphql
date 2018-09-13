'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

var _dal = require('./dal');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loaders = function loaders() {
  return {
    listLoader: new _dataloader2.default(_dal.listsByBoardIds),
    itemLoader: new _dataloader2.default(_dal.itemsByListIds),
    commentLoader: new _dataloader2.default(_dal.commentsByItemIds)
  };
};

exports.default = loaders;