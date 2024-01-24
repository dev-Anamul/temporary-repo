/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const sortArr = nums.sort((a, b) => a - b);

  return (sortArr[sortArr.length - 2] - 1) * (sortArr[sortArr.length - 1] - 1);
};

console.log(maxProduct([1, 5, 4, 5]));
