/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];

    while (j >= 0 && temp < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
};

const arr = [4, 3, 2, 5, 4, 6, 4, 2, 4];

sortColors(arr);

console.log(arr);
