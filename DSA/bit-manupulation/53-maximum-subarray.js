/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let length = nums.length;
  let subarraySize = 1 << length;
  let ans = 0;
  for (let mask = 0; mask < subarraySize; mask++) {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) sum += nums[i];
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));

console.log(1 ^ 2);
