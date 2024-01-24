/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  let evenCount = 0;
  let oddCount = 0;
  let index = 0;
  while (n !== 0) {
    if (index % 2 === 0 && (n & 1) !== 0) evenCount++;
    else if (index % 2 !== 0 && (n & 1) !== 0) oddCount++;
    n = n >> 1;
    index++;
  }

  return [evenCount, oddCount];
};

console.log(evenOddBit(17));
