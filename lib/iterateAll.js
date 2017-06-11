"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterateAll;

var _marked = [iterateAll].map(regeneratorRuntime.mark);

function iterateAll() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, arg, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

  return regeneratorRuntime.wrap(function iterateAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = args[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 36;
            break;
          }

          arg = _step.value;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context.prev = 10;
          _iterator2 = (arg || [])[Symbol.iterator]();

        case 12:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context.next = 19;
            break;
          }

          item = _step2.value;
          _context.next = 16;
          return item;

        case 16:
          _iteratorNormalCompletion2 = true;
          _context.next = 12;
          break;

        case 19:
          _context.next = 25;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](10);
          _didIteratorError2 = true;
          _iteratorError2 = _context.t0;

        case 25:
          _context.prev = 25;
          _context.prev = 26;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 28:
          _context.prev = 28;

          if (!_didIteratorError2) {
            _context.next = 31;
            break;
          }

          throw _iteratorError2;

        case 31:
          return _context.finish(28);

        case 32:
          return _context.finish(25);

        case 33:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 36:
          _context.next = 42;
          break;

        case 38:
          _context.prev = 38;
          _context.t1 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 42:
          _context.prev = 42;
          _context.prev = 43;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 45:
          _context.prev = 45;

          if (!_didIteratorError) {
            _context.next = 48;
            break;
          }

          throw _iteratorError;

        case 48:
          return _context.finish(45);

        case 49:
          return _context.finish(42);

        case 50:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[3, 38, 42, 50], [10, 21, 25, 33], [26,, 28, 32], [43,, 45, 49]]);
}