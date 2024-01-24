/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  /// convert array into number
  let num = 0;
  for (let n of digits) {
    num = num * 10 + n;
  }

  num += 1;
  let result = [];
  while (num > 0) {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  }

  return result;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
