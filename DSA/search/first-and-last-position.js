/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      let fst = mid;
      let lst = mid;
      while (lst < nums.length) {
        if (target === nums[lst + 1]) lst++;
        else break;
      }
      while (fst > 0) {
        if (target === nums[fst - 1]) fst--;
        else break;
      }

      return [fst, lst];
    }

    if (target < nums[mid]) right = mid - 1;
    else if (target > nums[mid]) left = mid + 1;
  }

  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
