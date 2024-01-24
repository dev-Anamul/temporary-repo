/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let inner of grid) {
    for (let num of inner) {
      if (num < 0) count++;
    }
  }

  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
