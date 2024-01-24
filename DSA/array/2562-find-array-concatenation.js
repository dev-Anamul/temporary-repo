/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 0) return 0;

  let conCat = nums[0] + "" + nums[nums.length - 1];

  nums.shift();
  nums.pop();

  return +conCat + Number(findTheArrayConcVal(nums));
};

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
