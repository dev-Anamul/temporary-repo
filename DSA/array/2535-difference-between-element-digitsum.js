/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elSum = 0;
  const digitArr = [];
  let dSum = 0;

  for (let num of nums) {
    elSum += num;
    if (num.toString() > 1) {
      let numOfdSum = eval(num.toString(10).split("").join("+"));
      dSum += numOfdSum;
    } else dSum += num;
  }

  return Math.abs(elSum - dSum);
};

console.log(differenceOfSum([1, 2, 3, 4]));
