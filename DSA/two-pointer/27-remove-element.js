/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;

  for (let num of nums) {
    if (num !== val) count++;
  }

  return count;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
