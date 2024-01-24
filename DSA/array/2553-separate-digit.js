/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let finalArr = [];

  for (let num of nums) {
    if (num.toString().length > 1) {
      let digitArr = num
        .toString()
        .split("")
        .map((el) => +el);

      finalArr = finalArr.concat(digitArr);
    } else finalArr.push(num);
  }

  return finalArr;
};

console.log(separateDigits([13, 25, 83, 77]));
