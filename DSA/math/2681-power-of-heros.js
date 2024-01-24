/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfPower = function (nums) {
  let len = nums.length;
  let totalSub = 1 << len;

  let result = 0n;

  for (let mask = 0; mask < totalSub; mask++) {
    let subet = [];
    for (let i = 0; i < len; i++) {
      if ((mask >> i) & (1 !== 0)) subet.push(nums[i]);
    }

    if (subet.length > 0) {
      let mx = Math.max(...subet);
      let min = Math.min(...subet);
      console.log(mx, min);
      result += BigInt(mx * mx * min);
    }
  }

  return result;
};

console.log(sumOfPower([2, 1, 4]));
