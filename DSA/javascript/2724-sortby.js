/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  //   const userReturn = arr.map((item) => fn(item));
  //   return userReturn.sort((a, b) => a - b);
  return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy([{ x: -1 }, { x: 0 }, { x: 1 }], (x) => x.x));
