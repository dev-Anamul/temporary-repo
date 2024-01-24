/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let firstOfRange = nums[0];
  let temp = nums[0];
  const ranges = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - temp === 1) temp = nums[i];
    else {
      if (temp === firstOfRange) ranges.push(`${firstOfRange}`);
      else ranges.push(`${firstOfRange}->${temp}`);

      firstOfRange = nums[i];
      temp = nums[i];
    }
  }

  if (temp === firstOfRange) ranges.push(`${firstOfRange}`);
  else ranges.push(`${firstOfRange}->${temp}`);

  return ranges;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
