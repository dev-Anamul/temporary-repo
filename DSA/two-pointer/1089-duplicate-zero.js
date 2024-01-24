/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[i] !== 0 && arr[j] !== 0) {
      i++;
      j--;
    } else if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i += 2;
      j++;
    } else if (arr[j] === 0) {
      arr.splice(j, 0, 0);
      arr.pop();
      j--;
    }
  }

  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
