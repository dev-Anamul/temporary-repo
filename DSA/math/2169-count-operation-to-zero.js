/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  if (num1 === 0 && num2 === 0) return 0;
  else if (num1 === num2) return 1;
  else {
    let count = 0;

    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        let sub = num1 - num2;
        num1 = sub;
        count++;
      } else {
        num2 = num2 - num1;
        count++;
      }
    }

    return count;
  }
};

console.log(countOperations(10, 10));



