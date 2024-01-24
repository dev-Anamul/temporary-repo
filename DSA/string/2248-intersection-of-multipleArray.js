/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let singleArr = nums.flat(1);

  let obj = {};

  for (let num of singleArr) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  return Object.keys(obj)
    .filter((key) => obj[key] >= nums.length)
    .map((el) => +el);
};

console.log(
  intersection([[1,2,3],[4,5,6]])
);
