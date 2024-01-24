/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((el) => el ** 2).sort((a, b) => a - b);
};

console.log(sortedSquares([-7,-3,2,3,11]));
