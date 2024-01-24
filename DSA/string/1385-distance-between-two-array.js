/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let num of arr1) {
    let i = 0;
    let isAdd = true;
    while (i < arr2.length) {
      if (Math.abs(arr2[i] - num) <= d) isAdd = false;

      i++;
    }
    if (isAdd) count++;
  }

  return count;
};

console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
