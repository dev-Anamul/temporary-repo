/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = Number.MIN_SAFE_INTEGER;


  let i = 0;
  let j = 0;
  let winSum = 0;

  while (j <= nums.length) {
    if (j - i === k) {
      console.log(winSum);
      max = Math.max(winSum / k, max);
      winSum -= nums[i];
      winSum += nums[j];
      j++;
      i++;
    } else {
      winSum += nums[j];
      j++;
    }
  }

  return max;
};

console.log(findMaxAverage([5], 1));
