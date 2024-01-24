/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let index = -1;
  let distance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      let mDis = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      if (mDis < distance) {
        index = i;
        distance = mDis;
      }
    }
  }

  return index;
};

console.log(nearestValidPoint(3, 4, [[3, 4]]));
