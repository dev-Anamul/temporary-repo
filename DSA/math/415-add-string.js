/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let strSun = _sumStr(num1, num2, 0);
  if (strSun.startsWith("0") && strSun.length !== 1) return strSun.substring(1);
  else return strSun;
};

/**
 * @param {String} num1
 * @param {String} num2
 * @param {Number} carry
 * @returns
 */

const _sumStr = (num1, num2, carry) => {
  if (!num1 && !num2) return carry;
  let n1 = +num1.charAt(num1.length - 1) || 0;
  let n2 = +num2.charAt(num2.length - 1) || 0;
  let sum = n1 + n2 + carry;

  if (sum >= 10) {
    let remin = sum % 10;
    return (
      _sumStr(
        num1.substring(0, num1.length - 1),
        num2.substring(0, num2.length - 1),
        Math.floor(sum / 10)
      ) +
      "" +
      remin
    );
  } else {
    return (
      _sumStr(
        num1.substring(0, num1.length - 1),
        num2.substring(0, num2.length - 1),
        0
      ) +
      "" +
      sum
    );
  }
};

console.log(addStrings("0", "0"));
