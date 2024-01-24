/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   return eval(nums.join("^"));
// };

var singleNumber = function (nums) {
  return nums.reduce((acc, cur) => (acc ^= cur), 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
