/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let addition = extraLiter(mainTank);

  let total = mainTank;

  if (addition > additionalTank) total += additionalTank;
  else total += addition;

  return total * 10;
};

const extraLiter = (num) => {
  if (num < 5) return 0;

  let remin = num % 5;
  let add = Math.floor(num / 5);

  return add + extraLiter(remin + add);
};

console.log(distanceTraveled(1, 5));
