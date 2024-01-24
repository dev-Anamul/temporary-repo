/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [[1]];
  for (let i = 1; i <= numRows; i++) {
    let i = 0;
    let newArr = [ans[ans.length - 1][0]];
    while (i < ans[ans.length - 1].length) {
      newArr.push(ans[ans.length - 1][i] + (ans[ans.length - 1][i + 1] || 0));
      i++;
    }
    ans.push(newArr);
  }

  return ans[ans.length - 1];
};

console.log(generate(3));
