/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
 let min = Math.min(...nums)
 let max = Math.max(...nums)

  if (max - k <= min + k) return 0;
  else return max - k - (min + k);
};

console.log(smallestRangeI([4,5,3,2,5], 1));
