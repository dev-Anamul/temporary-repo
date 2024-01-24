/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let callStackSize = 0;
  Number.POSITIVE_INFINITY;
  while (n !== 1) {
    n = _sumDigit(n);
    callStackSize++;
    if (callStackSize > Number.MAX_SAFE_INTEGER) return false;
  }

  return true;
};

const _sumDigit = (num) => {
  if (num <= 9) return num ** 2;
  let remin = num % 10;
  return remin ** 2 + _sumDigit(Math.floor(num / 10));
};

console.log(isHappy(19));
