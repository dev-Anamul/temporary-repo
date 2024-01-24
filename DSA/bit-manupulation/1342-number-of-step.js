/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let step = -1;
  if (num === 0) step = 0;
  while (num !== 0) {
    if (((num >> 0) & 1) !== 0) step += 2;
    else step++;
    num = num >> 1;
  }

  return step;
};

console.log(numberOfSteps(123));
