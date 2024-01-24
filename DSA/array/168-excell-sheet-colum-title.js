/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  return title(columnNumber);
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
const title = (num) => {
  if (num <= 25) return String.fromCharCode(65 + num);
  let reminder = num % 26;
  return title(Math.floor(num / 26)) + String.fromCharCode(65 + reminder);
};

console.log(convertToTitle(52));
