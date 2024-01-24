/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let def = arr[0] - arr[1];

  return arr;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
