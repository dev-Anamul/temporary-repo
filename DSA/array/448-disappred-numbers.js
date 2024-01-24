/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  nums.sort((a, b) => a - b);

  let ans = [];

  let uniqArr = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (!uniqArr.has(i + 1)) ans.push(i + 1);
    else uniqArr.delete(i + 1);
  }

  return ans;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
