'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _emptyCollection = require('./emptyCollection');

var _emptyCollection2 = _interopRequireDefault(_emptyCollection);

var _filter2 = require('./filter');

var _filter3 = _interopRequireDefault(_filter2);

var _map2 = require('./map');

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collection = function () {
  function Collection(iterable) {
    _classCallCheck(this, Collection);

    this.iterable = iterable || _emptyCollection2.default;
  }

  _createClass(Collection, [{
    key: 'filter',
    value: function filter(filterFunc) {
      return new Collection((0, _filter3.default)(this.iterable, filterFunc));
    }
  }, {
    key: 'map',
    value: function map(mapFunc) {
      return new Collection((0, _map3.default)(this.iterable, mapFunc));
    }
  }]);

  return Collection;
}();

exports.default = Collection;