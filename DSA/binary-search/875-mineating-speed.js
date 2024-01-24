/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  piles.sort((a, b) => a - b);
  const totalPiles = piles.reduce((acc, cur) => acc + cur, 0);

  let low = piles[0];
  let high = piles[piles.length - 1];
  let min = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (mid * h >= totalPiles) {
      min = Math.min(min, mid);
      high = mid - 1;
    } else low = mid + 1;
  }

  return min;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
