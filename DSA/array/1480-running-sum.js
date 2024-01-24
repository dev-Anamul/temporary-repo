/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  for (let num of nums) {
    if (result.length > 0) {
      result.push(result[result.length - 1] + num);
    } else result.push(num);
  }

  return result;
};

console.log(runningSum([3, 1, 2, 10, 1]));
