/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const stoneObj = {};
  for (let lttr of stones) {
    stoneObj[lttr] = stoneObj[lttr] ? stoneObj[lttr] + 1 : 1;
  }

  let result = 0;

  for (let lttr of jewels) {
    if (stoneObj[lttr]) result += stoneObj[lttr];
  }

  return result;
};

console.log(numJewelsInStones("z", "ZZ"));
