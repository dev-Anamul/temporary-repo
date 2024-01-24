/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  const xAxis = [];

  for (const [x, _] of points) {
    xAxis.push(x);
  }

  xAxis.sort((a, b) => a - b);

  let max = 0;

  for (let i = 1; i < xAxis.length; i++) {
    max = Math.max(xAxis[i] - xAxis[i - 1], max);
  }

  return max;
};

console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
