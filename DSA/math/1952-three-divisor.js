/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let count = 0;

  for (let i = 1; i <= n && count <= 3; i++) {
    if (n % i === 0) count++;
  }

  return count === 3 ? true : false;
};

console.log(isThree(4));
