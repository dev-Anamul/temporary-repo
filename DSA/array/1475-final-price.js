/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let ans = [];
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    let lesId = null;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        lesId = j;
        break;
      }
    }
    if (lesId !== null) ans.push(prices[i] - prices[lesId]);
    else ans.push(prices[i]);
  }

  return ans;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
