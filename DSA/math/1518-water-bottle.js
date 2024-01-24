/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let extraBottle = _exteraBottle(numBottles, numExchange);

  return numBottles + extraBottle;
};

const _exteraBottle = (totalBottle, exchange) => {
  if (totalBottle < exchange) return 0;

  let numOfBottle = Math.floor(totalBottle / exchange);
  let remin = totalBottle % exchange;

  return numOfBottle + _exteraBottle(numOfBottle + remin, exchange);
};

console.log(numWaterBottles(15, 4));

