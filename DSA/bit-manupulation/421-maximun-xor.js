/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let maxXor = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let xorVal = nums[i] ^ nums[j];
      maxXor = Math.max(maxXor, xorVal);
    }
  }

  return maxXor;
};

console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));
