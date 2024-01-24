/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b);

  let set = new Set();

  while (nums.length !== 0) {
    set.add((nums.pop() + nums.shift()) / 2);
  }

  return set.size;
};

console.log(distinctAverages([1, 100]));
