/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let oddArr = [];
  let evenArr = [];
  let ans = [];

  for (let num of nums) {
    if (num % 2 === 0) evenArr.push(num);
    else oddArr.push(num);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) ans.push(evenArr.pop());
    else ans.push(oddArr.pop());
  }

  return ans;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
