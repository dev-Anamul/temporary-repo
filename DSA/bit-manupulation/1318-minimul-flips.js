/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let aBit = (a >> i) & 1;
    let bBit = (b >> i) & 1;
    let cBit = (c >> i) & 1;
    let count = aBit + bBit;

    if (cBit === 0) ans += count;
    else {
      if (count === 0) ans++;
    }
  }
  return ans;
};

console.log(minFlips(2, 4, 7));
