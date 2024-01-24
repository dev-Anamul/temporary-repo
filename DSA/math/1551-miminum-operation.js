/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let count = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    count += i * 2;
  }

  if (n % 2 !== 0) return count;
  else return count - n / 2;
};

console.log(minOperations(6));

// [
//   [1, 3, 5],
//   [1, 3, 5, 7],
//   [1, 3, 5, 7, 9],
//   [1, 3, 5, 7, 9, 11],
//   [1, 3, 5, 7, 9, 11, 13],
//   [1, 3, 5, 7, 9, 11, 13, 15],
//   [1, 3, 5, 7, 9, 11, 13, 15, 17],
// ];
