/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) return nums;

  let count = 1;

  while (nums.length !== 1) {
    let newNums = [];

    for (let i = 1; i < nums.length; i += 2) {
      if (count % 2 === 0) {
        newNums.push(Math.max(nums[i], nums[i - 1]));
      } else {
        newNums.push(Math.min(nums[i], nums[i - 1]));
      }
      count++;
    }
    nums = newNums;
  }

  return nums;
};

console.log(minMaxGame([3]));
