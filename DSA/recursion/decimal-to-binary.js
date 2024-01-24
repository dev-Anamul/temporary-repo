/**
 * @param {number} n
 * @returns {string}
 */

const decimalToBinary = (n, str) => {
  if (n === 0) return str;
  let ans = (n % 2) + str;

  return decimalToBinary(Math.floor(n / 2), ans);
};

console.log(decimalToBinary(6, ""));
console.log(decimalToBinary(7, ""));
console.log(decimalToBinary(12, ""));
console.log(decimalToBinary(1234, ""));
