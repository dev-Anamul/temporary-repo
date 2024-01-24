/**
 *
 * @param {number} n
 */
const sumNumber = (n) => {
  if (n === 0) return 0;
  return n + sumNumber(n - 1);
};

console.log(sumNumber(1000));
