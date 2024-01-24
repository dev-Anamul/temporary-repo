/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  nums.sort((a, b) => a - b);

  for (let num of nums) {
    if (num === original) original *= 2;
  }

  return original;
};

console.log(findFinalValue([2, 7, 9], 4));
