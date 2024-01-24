/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) count += 1;
    }
    result.push(count);
  }

  return result;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
