/**
 *
 * @param {number} n
 */
const fibonacchi = (n) => {
  if (n === 0 || n === 1) return n;

  return fibonacchi(n - 1) + fibonacchi(n - 2);
};

console.log(fibonacchi(50));
