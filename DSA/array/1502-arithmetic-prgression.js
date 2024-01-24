/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  let dif = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    let innerDif = arr[i] - arr[i - 1];
    if (dif !== innerDif) return false;
  }

  return true;
};

console.log(canMakeArithmeticProgression([1, 2, 4]));
