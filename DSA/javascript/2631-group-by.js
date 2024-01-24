/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const userReturn = fn(cur);
    acc[userReturn] = acc[userReturn] ? [...acc[userReturn], cur] : [cur];
    return acc;
  }, {});
};

const arr = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];
console.log(arr.groupBy((n) => n[0]));
