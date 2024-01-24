/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let soldierInd = mat
    .map((el, i) => [eval(el.join("+")), i])
    .sort((a, b) => a[0] - b[0]);
  return soldierInd.slice(0, k).map((el) => el[1]);
};

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
