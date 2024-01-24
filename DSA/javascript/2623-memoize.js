/**
 * @param {Function} fn
 */
function memoize(fn) {
  let memo = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in memo) return memo[key];

    memo[key] = fn(...args);
    return memo[key];
  };
}
