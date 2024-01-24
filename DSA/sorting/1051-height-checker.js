/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sortHeight = heights.slice().sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (sortHeight[i] !== heights[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
