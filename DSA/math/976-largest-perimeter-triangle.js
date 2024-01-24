/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let j = i + 1;
    let k = j + 1;
    while (k < nums.length) {
      if (n < nums[j] + nums[k]) return n + nums[j] + nums[k];
      j++;
      k++;
    }
  }

  return 0;
};

console.log(largestPerimeter([1,2,1,10]));
