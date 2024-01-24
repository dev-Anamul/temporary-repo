/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let leftArr = Array.from(new Set(nums.slice(0, i + 1)));
    let rightArr = Array.from(new Set(nums.slice(i + 1)));

    ans.push(leftArr.length - rightArr.length);
  }

  return ans;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
