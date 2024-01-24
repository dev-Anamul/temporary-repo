/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const len = grid.length - 2;
  //define two dimentional array here
  let ans = new Array(len).fill().map(() => new Array(len));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let max = 0;
      for (let innerI = i; innerI < i + 3; innerI++) {
        for (let innerJ = j; innerJ < j + 3; innerJ++) {
          max = Math.max(grid[innerI][innerJ], max);
        }
      }

      ans[i][j] = max;
    }
  }

  return ans;
};

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
