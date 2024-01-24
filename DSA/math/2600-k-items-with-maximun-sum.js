/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  if (k <= numOnes) return k;
  else if (k <= numOnes + numZeros) return numOnes;
  else if (k <= numOnes + numZeros + numNegOnes) {
    let withoutNeg = numOnes + numZeros;
    let neg = k - withoutNeg;
    return numOnes - neg;
  }
};

console.log(kItemsWithMaximumSum(6, 6, 6, 13));
