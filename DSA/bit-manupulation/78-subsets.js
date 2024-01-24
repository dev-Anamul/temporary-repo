/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let length = nums.length;
  let subsetSize = 1 << length;
  let ans = [];
  for (let mask = 0; mask < subsetSize; mask++) {
    let subset = [];
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) subset.push(nums[i]);
    }
    ans.push(subset);
  }

  return ans;
};

console.log(subsets([1, 2, 3]));
