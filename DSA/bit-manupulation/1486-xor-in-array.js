/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let resultXor = 0;
  for (let i = 0; i < n; i++) {
    resultXor = resultXor ^ (start + 2 * i);
  }

  return resultXor;
};

console.log(xorOperation(4, 3));
