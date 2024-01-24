/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let numArr = _convert(n, k, []);
  return numArr.reduce((acc, cur) => acc + cur, 0);
};

/**
 *
 * @param {number} n
 * @param {number} k
 */
const _convert = (n, k, arr) => {
  if (n === 0) return arr;
  arr.push(n % k);
  return _convert(Math.floor(n / k), k, arr);
};

console.log(sumBase(10, 10));
