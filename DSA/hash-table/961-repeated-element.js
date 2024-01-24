/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) return num;
    else set.add(num);
  }
};

console.log(repeatedNTimes([2,1,2,5,3,2]));
