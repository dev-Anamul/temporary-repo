/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const obj = {};
  let count = 0;
  for (let num of nums) {
    if (obj[num]) {
      delete obj[num];
      count++;
    } else obj[num] = 1;
  }

  return [count, Object.keys(obj).length];
};

console.log(numberOfPairs([1]));
