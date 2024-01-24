/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let arr = [0, ...flowerbed, 0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (
      arr[i] === 0 &&
      arr[i + 1] === 0 &&
      arr[i - 1] === 0
    ) {
      arr[i] = 1;
      n -= 1;
      console.log(arr);
    }
  }

  return n <= 0;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
