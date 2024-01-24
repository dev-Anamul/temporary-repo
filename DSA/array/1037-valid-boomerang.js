/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  let arr1 = points[0];
  let arr2 = points[1];
  let dx = arr2[0] - arr1[0];
  let dy = arr2[1] - arr1[1];
  let count = 0;

  for (let i = 1; i < points.length; i++) {
    let curArr = points[i];
    let prevArr = points[i - 1];

    if (dx * (curArr[1] - prevArr[1]) !== dy * (curArr[0] - prevArr[0]))
      count++;
  }

  return count !== 0 ? true : false;
};

console.log(
  isBoomerang([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
