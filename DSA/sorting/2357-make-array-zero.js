/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);

  if (nums.length === 1) return;
  let count = 0;
  let min = 0;
  while (nums.some((el) => el !== 0)) {
    nums.shift();
    min = nums[0];
    nums = nums.map((el) => {
      return el - min;
    });

    if (min !== 0) count++;
  }

  return count - 1;
};

console.log(minimumOperations([0]));
