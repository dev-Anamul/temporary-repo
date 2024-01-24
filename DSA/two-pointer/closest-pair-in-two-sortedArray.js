/**
 *
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @param {Number} x
 * @returns {String}
 */
const closestPair = (arr1, arr2, x) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let left = 0;
  let right = arr2.length - 1;
  let dif = x;
  let val1, val2;
  while (left < arr1.length && right >= 0) {
    let sum = arr1[left] + arr2[right];

    if (Math.abs(sum - x) < dif) {
      val1 = arr1[left];
      val2 = arr2[right];
      dif = Math.abs(sum - x);
    }
    if (sum > x) right--;
    else left++;
  }

  return `${val1} + ${val2} = ${val1 + val2}`;
};

console.log(closestPair([1, 2, 3, 4, 5], [5, 7, 8, 9, 10], 8));
