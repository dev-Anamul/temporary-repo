/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++) {
    if (!i.toString().includes("0") && !(n - i).toString().includes("0"))
      return [i, n - i];
  }
};

console.log(getNoZeroIntegers(1010));
