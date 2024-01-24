/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums.length - i) return i;
  }

  return -1;
};

console.log(specialArray([3, 5]));
