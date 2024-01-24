/**
 *
 * @param {Number[]} arr
 * @returns {Number}
 */
const bulbsCost = (arr) => {
  let cost = 0;

  for (let a of arr) {
    if (cost % 2 === 0) a = a;
    else a = Number(!a);

    if (a % 2 === 1) continue;
    else cost++;
  }

  return cost;
};

console.log(bulbsCost([1, 0, 1]));
