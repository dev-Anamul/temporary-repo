/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...arg2) {
        return curried.apply(this, args.concat(arg2));
      };
    }
  };
};

function sub(x, y) {
  return x - y;
}
const csum = curry(sub);
