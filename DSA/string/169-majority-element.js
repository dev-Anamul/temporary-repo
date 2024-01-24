/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {};
  for (let num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let key of Object.keys(obj)) {
    if (obj[key] > nums.length / 2) return +key;
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
