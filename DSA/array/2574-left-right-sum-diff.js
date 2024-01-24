/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  const resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      let sum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);
      resultArr.push(sum);
    } else {
      let leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
      let rightSum = nums.slice(i + 1).reduce((acc, cur) => acc + cur, 0);
      resultArr.push(Math.abs(leftSum - rightSum));
    }
  }
  return resultArr;
};

console.log(leftRightDifference([1]));
