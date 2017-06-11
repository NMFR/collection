'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = exports.map = exports.iterateParallel = exports.iterateAll = exports.filter = exports.emptyCollection = undefined;

var _emptyCollection = require('./emptyCollection');

var _emptyCollection2 = _interopRequireDefault(_emptyCollection);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _iterateAll = require('./iterateAll');

var _iterateAll2 = _interopRequireDefault(_iterateAll);

var _iterateParallel = require('./iterateParallel');

var _iterateParallel2 = _interopRequireDefault(_iterateParallel);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _pipe = require('./pipe');

var _pipe2 = _interopRequireDefault(_pipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.emptyCollection = _emptyCollection2.default;
exports.filter = _filter2.default;
exports.iterateAll = _iterateAll2.default;
exports.iterateParallel = _iterateParallel2.default;
exports.map = _map2.default;
exports.pipe = _pipe2.default;