/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(max, Math.max(...prices.slice(i)) - prices[i]);
  }

  return max;
};

console.log(maxProfit([2,4,1]));
