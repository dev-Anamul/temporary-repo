/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let output = 0;
  let dif = Number.MAX_VALUE;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < dif) {
        dif = Math.abs(sum - target);
        output = nums[i] + nums[j] + nums[k];
        j++;
      } else if (Math.abs(sum - target) > dif) k--;
      else j++;
    }
  }

  return output;
};

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
