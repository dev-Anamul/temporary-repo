/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  if (n % 2 !== 0) return true;
  else {
    if ((n / 2) % 2 !== 0) return true;
    else return false;
  }
};

console.log(canWinNim(5));

console.log(Math.sqrt(122122));
