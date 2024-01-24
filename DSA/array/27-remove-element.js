/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== val) i++;
    else nums.splice(i, 1);
  }

  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
