/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let waterAmount = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      waterAmount = Math.max(height[left] * (right - left), waterAmount);
      left++;
    } else {
      waterAmount = Math.max(height[right] * (right - left), waterAmount);
      right--;
    }
  }

  return waterAmount;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
