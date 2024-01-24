/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sumOfLen = (nums.length * (nums.length + 1)) / 2;
  let arrSum = nums.reduce((acc, cur) => acc + cur, 0);

  return sumOfLen - arrSum;
};

console.log(missingNumber([3, 0, 1]));
