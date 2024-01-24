/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) return mid;

    if (target < nums[mid]) right = mid - 1;
    else if (target > nums[mid]) left = mid + 1;
  }

  return (left + right + 1) / 2;
};

console.log(searchInsert([1, 3, 5, 6], 7));
