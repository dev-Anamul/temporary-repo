/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let win = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     win += nums[i];

  //     if (i - start + 1 === k) {
  //       sum = Math.max(sum, win);
  //       win -= nums[start];
  //       start++;
  //     }
  //   }

  while (end < nums.length) {
    win += nums[end];
    if (end - start + 1 < k) end++;
    else if (end - start + 1 === k) {
      sum = Math.max(sum, win);
      win -= nums[start];
      start++;
      end++;
    }
  }

  return sum;
};

console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3));
