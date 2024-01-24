/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const uniqueArr = Array.from(new Set(nums));

  let left = 0;
  let right = uniqueArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === uniqueArr[mid]) return true;

    if (uniqueArr[left] <= uniqueArr[mid]) {
      // sorted left part
      if (target >= uniqueArr[left] && target <= uniqueArr[mid])
        right = mid - 1;
      else left = mid + 1;
    } else {
      // sorted right part of the array
      if (target > uniqueArr[mid] && target <= uniqueArr[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return false;
};

console.log(search([2, 2, 2, 3, 2, 2, 2], 3));
