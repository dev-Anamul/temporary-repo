/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

const newMap = map([1, 2, 3, 4], (x) => x * 2);
console.log(newMap);
