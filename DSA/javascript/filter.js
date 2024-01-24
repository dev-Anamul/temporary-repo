/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

const arr = filter([1, 2, 3, 4, 90, 54, 30], (x) => x < 50);
console.log(arr);
