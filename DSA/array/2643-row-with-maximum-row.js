/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let sumArr = mat.map((el) => el.reduce((acc, cur) => acc + cur, 0));
  let max = Math.max(...sumArr);
  return [sumArr.indexOf(max), max];
};

console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
