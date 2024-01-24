/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const length = nums.length;
  const subsetSize = 1 << length;
  let ans = 0;
  for (let mask = 0; mask < subsetSize; mask++) {
    let subXOR = 0;
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) subXOR ^= nums[i];
    }
    ans += subXOR;
  }

  return ans;
};

console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
