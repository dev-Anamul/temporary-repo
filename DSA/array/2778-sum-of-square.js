/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (len % (i + 1) === 0) sum = sum + nums[i] * nums[i];
  }

  return sum;
};

console.log(sumOfSquares([1, 2, 3, 4]));
