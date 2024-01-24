/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 0) return false;
  else {
    let countSet = 0;
    while (n !== 0) {
      if ((n & 1) !== 0) countSet++;
      n = n >> 1;
    }
    if (countSet === 1) return true;
    else return false;
  }
};

console.log(isPowerOfTwo(2147483648));
