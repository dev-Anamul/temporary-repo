/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let obj = {};
  for (let num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  let count = 0;
  for (let key of Object.keys(obj)) {
    if (obj[key] % 2 === 0) count++;
  }

  if (Object.keys(obj).length === count) return true;
  else return false;
};

console.log(divideArray([3, 2, 3, 2, 2, 2]));
