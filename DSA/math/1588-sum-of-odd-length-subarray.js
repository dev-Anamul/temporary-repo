/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subArr = arr.slice(i, j + 1);
      if (subArr.length % 2 === 1) {
        sum += subArr.reduce((acc, cur) => acc + cur, 0);
      }
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
