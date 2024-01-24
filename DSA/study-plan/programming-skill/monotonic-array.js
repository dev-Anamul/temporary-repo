/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let incCount = 0;
  let decCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) incCount += 1;
    if (nums[i] >= nums[i + 1]) decCount += 1;
  }
  console.log(incCount, decCount);
  if (incCount === nums.length - 1 || decCount === nums.length - 1) return true;
  else return false;
};

console.log(isMonotonic([1, 3, 2]));
