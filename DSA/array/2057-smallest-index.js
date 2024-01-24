/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (i % 10 === nums[i]) return i;
  }
  return -1;
};

console.log(smallestEqual([0, 1, 2]));

console.log(0 % 10);
