/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let dividend = nums[nums.length - 1];
  let reminder = nums[0];

  while (reminder !== 0) {
    let newReminder = dividend % reminder;
    dividend = reminder;
    reminder = newReminder;
  }
  return dividend;
};

console.log(findGCD([3768, 1701]));
