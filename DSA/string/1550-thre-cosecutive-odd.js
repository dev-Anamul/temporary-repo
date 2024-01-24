/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
      return true;
  }

  return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
