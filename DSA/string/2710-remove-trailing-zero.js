/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let withOutFirst = removeStartZero(num);
  return removeEndZero(withOutFirst);
};

/**
 *
 * @param {string} num
 */
const removeStartZero = (num) => {
  if (!num.startsWith("0")) return num;
  return removeStartZero(num.substring(1));
};

/**
 *
 * @param {string} num
 */
const removeEndZero = (num) => {
  if (!num.endsWith("0")) return num;
  return removeEndZero(num.substring(0, num.length - 1));
};

console.log(removeTrailingZeros("005123010"));
