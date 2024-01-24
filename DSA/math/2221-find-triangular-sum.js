/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length !== 1) {
    let i = 0;
    let j = 1;
    let temp = [];
    while (j < nums.length) {
      let sum = nums[i] + nums[j];

      if (sum > 10) temp.push(sum % 10);
      else temp.push(sum);
      i++;
      j++;
    }
    nums = temp;
  }
  return nums[0];
};

console.log(triangularSum([5]));
