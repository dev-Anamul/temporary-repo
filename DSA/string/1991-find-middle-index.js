/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let leftSum = 0;
    let rightSum = 0;

    while (left >= 0) {
      leftSum += nums[left];
      left--;
    }

    while (right < nums.length) {
      rightSum += nums[right];
      right++;
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
};

console.log(findMiddleIndex([2,5]));
