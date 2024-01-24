/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
const highestProduct = (arr) => {
  arr.sort((a, b) => a - b);

  const length = arr.length;

  const product1 = arr[length - 1] * arr[length - 2] * arr[length - 3];
  const product2 = arr[0] * arr[1] * arr[length - 1];

  return Math.max(product1, product2);
};

console.log(highestProduct([0, 0, 3, 4, 5, -5, -2, -1]));
console.log(highestProduct([0, 0, 1, 1, 5, -5, -2, -1]));
