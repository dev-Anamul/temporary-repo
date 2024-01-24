/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let start = 0;
  let end = 1;
  while (start < end && end < nums.length) {
    if (nums[start] === nums[end]) {
      if (start !== nums.length && Math.abs(start - end) <= k) return true;
      else {
        start++;
      }
    } else {
      if (end < nums.length) end++;
      else start++;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
