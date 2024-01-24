/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (gcd(nums[i], nums[j]) > 1) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

console.log(gcdSort([10, 5, 9, 3, 15]));
