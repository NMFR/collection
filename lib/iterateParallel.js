"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterateParallel;

var _marked = [iterateParallel].map(regeneratorRuntime.mark);

function iterateParallel() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var iterators, nexts;
  return regeneratorRuntime.wrap(function iterateParallel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          iterators = args.map(function (a) {
            return a[Symbol.iterator]();
          });
          nexts = void 0;
          // eslint-disable-next-line no-cond-assign

        case 2:
          if ((nexts = iterators.map(function (i) {
            return i.next();
          })).reduce(function (a, c) {
            return a && c.done;
          }, true)) {
            _context.next = 7;
            break;
          }

          _context.next = 5;
          return nexts.map(function (r) {
            return r.value;
          });

        case 5:
          _context.next = 2;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}