/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let arr = [nums[0]];
  for (let i = 0; i < k; i++) {
    for (let num of nums) {
      if (num > arr[i]) {
        arr.pop();
        arr.push(num);
      }
    }
  }

  console.log(arr);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
