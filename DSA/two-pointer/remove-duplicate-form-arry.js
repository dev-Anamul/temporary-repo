/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 0;
  let k = 1;
  while (j <= k && k < nums.length) {
    if (nums[j] === nums[k]) k++;
    else {
      nums[j + 1] = nums[k];
      j++;
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 2, 2, 2]));
