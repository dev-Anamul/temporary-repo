/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);

  let coins = 0;
  let ind = 1;
  let i = 1;
  while (i <= Math.floor(piles.length / 3)) {
    coins += piles[ind];
    ind += 2;
    i++;
  }

  return coins;
};

console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
