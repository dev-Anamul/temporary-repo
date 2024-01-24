/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  let ans = [];
  let zero = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zero.push(nums[i]);
    else if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
      ans.push(nums[i]);
    } else ans.push(nums[i]);
  }

  return [...ans, ...zero];
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
