/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let obj = {};

  for (let rec of rectangles) {
    let min = Math.min(...rec);
    obj[min] = obj[min] ? obj[min] + 1 : 1;
  }

  let maxLen = Math.max(...Object.keys(obj));
  return obj[maxLen];
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [3, 12],
  ])
);
