/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWelth = 0;
  for (let account of accounts) {
    const totalWealth = account.reduce((acc, cur) => acc + cur, 0);
    maxWelth = Math.max(maxWelth, totalWealth);
  }

  return maxWelth;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
