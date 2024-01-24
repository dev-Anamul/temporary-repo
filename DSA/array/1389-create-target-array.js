/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    resultArr.splice(index[i], 0, nums[i]);
  }

  return resultArr;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

const countBit = (n) => {
  let count = 0;

  while (n !== 0) {
    if ((n & 1) !== 0) count++;
    n = n >> 1;
  }
  return count;
};

console.log(countBit(10));
