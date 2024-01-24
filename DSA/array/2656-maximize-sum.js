/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  nums.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    if (i === 0) sum += nums[0];
    else sum += nums[0] + i;
  }

  return sum;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
