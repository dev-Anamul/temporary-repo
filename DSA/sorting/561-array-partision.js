/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let len = nums.length;
  let subSets = 1 << len;
  let ans = 0;

  for (let mask = 0; mask < subSets; mask++) {
    let sub = [];
    for (let i = 0; i < len; i++) {
      if (((mask >> i) & 1) !== 0) sub.push(nums[i]);
    }
    if (sub.length === 2) ans += Math.min(...sub);
  }

  return ans;
};

console.log(arrayPairSum([1, 4, 3, 2]));
