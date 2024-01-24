/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  return JSON.stringify(target) === JSON.stringify(arr);
};
