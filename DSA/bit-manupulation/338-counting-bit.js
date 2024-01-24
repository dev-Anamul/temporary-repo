/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const resulArr = [];
  for (let i = 0; i <= n; i++) {
    let bitCount = 0;
    let j = i;
    while (j !== 0) {
      if (((j >> 0) & 1) !== 0) bitCount++;
      j = j >> 1;
    }
    resulArr.push(bitCount);
    bitCount = 0;
  }

  return resulArr;
};

console.log(countBits(5));
