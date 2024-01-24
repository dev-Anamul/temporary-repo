/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      j++;
    } else {
      nums.splice(j, 1);
    }
  }

  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
