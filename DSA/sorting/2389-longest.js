/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  let ans = [];

  for (let query of queries) {
    let count = 0;
    for (let num of nums) {
      if (num <= query) {
        count++;
        query -= num;
      }
    }

    ans.push(count);
  }

  return ans;
};

console.log(answerQueries([2, 3, 4, 5], [1]));
