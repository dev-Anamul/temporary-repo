/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let tax = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (i === 0) {
      if (brackets[i][0] >= income) {
        tax += income * (brackets[i][1] / 100);
        break;
      } else {
        tax += brackets[i][0] * (brackets[i][1] / 100);
        income -= brackets[i][0];
      }
    } else {
      let amount = brackets[i][0] - brackets[i - 1][0];
      if (amount >= income) {
        tax += income * (brackets[i][1] / 100);
        break;
      } else {
        tax += amount * (brackets[i][1] / 100);
        income -= amount;
      }
    }
  }

  return tax;
};

console.log(
  calculateTax(
    [
      [1, 0],
      [4, 25],
      [5, 50],
    ],
    2
  )
);
