/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  for (let i = 0; i < arr1.length; i++) {
    let num1 = arr1[i];
    for (let num2 of arr2) {
      if (Math.abs(num1 - num2) <= d && num1 !== num2) return i;
    }
  }
};

console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
