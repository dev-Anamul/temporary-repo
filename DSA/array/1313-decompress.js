/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    for (let j = 1; j <= nums[i]; j++) {
      ans.push(nums[i + 1]);
    }
  }

  return ans;
};

console.log(decompressRLElist([1, 2, 3, 4]));
