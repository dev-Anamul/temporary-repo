/**
 *
 * @param {number[]} nums
 * @param {number} k
 */

const slidingWind = (nums, k) => {
  let start = 0;
  let ans = 0;
  let wind = 0;
  for (let i = 0; i < nums.length; i++) {
    wind += nums[i];
    if (i - start + 1 === k) {
      ans = Math.max(ans, wind);
      wind -= nums[start];
      start++;
    }
  }

  return ans;
};

console.log(slidingWind([2, 1, 3, 5, 4, 7, 5, 7], 5));
