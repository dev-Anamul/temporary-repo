/**
 * @param {number} n
 * @return {number}
 */

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

var trailingZeroes = function (n) {
  const factorialNum = factorial(n);

  let count = 0;
  while (Number.isInteger(factorialNum / 10 ** count)) {
    count++;
  }

  return count - 1;
};

console.log(trailingZeroes(10));

const trailingZeroes = (n) => {
  let count = 0;

  while (n >= 5) {
    count += Math.floor(n / 5);
    n /= 5;
  }

  return count;
};
