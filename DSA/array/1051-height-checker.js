/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let prev = 0;
  let left = 0;
  let right = heights.length - 1;
  let count = 0;

  while (left <= right) {
    if (prev <= heights[left]) {
      prev = heights[left];
      left++;
    } else {
      count++;
      prev = heights[left] + 1;
      left++;
    }
  }

  console.log(count, prev);
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
