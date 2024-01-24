/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let odd = [];
  let even = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) even.push(nums[i]);
    else odd.push(nums[i]);
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => b - a);

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) ans.push(even.pop());
    else ans.push(odd.pop());
  }

  return ans;
};

console.log(sortEvenOdd([2, 1]));
