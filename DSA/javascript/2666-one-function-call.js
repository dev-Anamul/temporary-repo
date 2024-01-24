/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let call = 0;
  return function (...args) {
    if (call < 1) {
      call += 1;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
