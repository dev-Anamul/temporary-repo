/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let gtestcommondivisor;
      if (nums[i] > nums[j]) gtestcommondivisor = gcd(nums[i], nums[j]);
      else gtestcommondivisor = gcd(nums[j], nums[i]);
      if (gtestcommondivisor === 1) count++;
    }
  }

  return count;
};

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

console.log(countBeautifulPairs([2, 5, 1, 4]));
