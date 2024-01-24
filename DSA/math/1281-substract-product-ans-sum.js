/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let prod = _product(n);
  let sum = _sum(n);

  return prod - sum;
};

const _sum = function (num) {
  if (num <= 9) return num;
  let dig = num % 10;
  return dig + _sum(Math.floor(num / 10));
};

const _product = function (num) {
  if (num <= 9) return num;
  let dig = num % 10;
  return dig * _product(Math.floor(num / 10));
};

console.log(_sum(1239));
console.log(_product(12390));
