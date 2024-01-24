/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  let set = new Set();
  let notIn = -1;
  let dupli = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) notIn = i + 1;
    if (set.has(nums[i])) dupli = nums[i];
    else set.add(nums[i]);
  }

  return [dupli, notIn];
};

console.log(findErrorNums([1, 0, 1, 1]));
