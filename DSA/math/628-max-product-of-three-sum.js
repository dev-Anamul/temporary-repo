/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);

  let len = nums.length;

  let prod1 = nums[len - 1] * nums[len - 2] * nums[len - 3];
  let prod2 = nums[0] * nums[1] * nums[len - 1];

  return Math.max(prod1, prod2);
};

console.log(maximumProduct([1, 2, 3, 4]));
