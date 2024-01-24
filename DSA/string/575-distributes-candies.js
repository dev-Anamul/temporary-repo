/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let uniqCandies = Array.from(new Set(candyType));
  let eatCan = candyType.length / 2;

  return uniqCandies.length >= eatCan ? eatCan : uniqCandies.length;
};

console.log(distributeCandies([6, 6, 6, 6]));
