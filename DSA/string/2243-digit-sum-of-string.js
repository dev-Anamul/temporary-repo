/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  if (s.length <= k) return s;

  let sumStr = sumOfDig(s, k);

  while (sumStr.length > k) {
    console.log(sumStr);
    sumStr = sumOfDig(sumStr, k);
  }

  return sumStr;
};

/**
 *
 * @param {string} str
 * @param {number} k
 * @returns {string}
 */

const sumOfDig = (str, k) => {
  if (str === "") return "";

  let result = 0;
  for (let i = 0; i < k; i++) {
    if (Number(str.charAt(i))) result += Number(str.charAt(i));
  }

  return result + "" + sumOfDig(str.substring(k), k);
};

console.log(digitSum("01234567890", 2));
