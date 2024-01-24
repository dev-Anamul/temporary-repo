/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length < 3) return -1;
  else return nums.sort((a, b) => a - b)[1];
};

console.log(findNonMinOrMax([3, 2, 1, 4]));
