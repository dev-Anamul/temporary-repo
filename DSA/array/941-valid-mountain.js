/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  else {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      if (left === right && left !== arr.length - 1 && right !== 0) return true;
      else if (arr[left] < arr[left + 1]) left++;
      else if (arr[right] < arr[right - 1]) right--;
      else return false;
    }
  }
};

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
