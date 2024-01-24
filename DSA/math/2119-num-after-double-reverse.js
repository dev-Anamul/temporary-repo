/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let reverseNum = parseInt(_reverse(num.toString()), 10);
  let reverse2Num = parseInt(_reverse(reverseNum.toString()), 10);

  return num === reverse2Num;
};

/**
 *
 * @param {string} str
 */
const _reverse = (str) => {
  if (!str) return "";
  return _reverse(str.substring(1)) + str.charAt(0);
};

console.log(isSameAfterReversals(1800));
