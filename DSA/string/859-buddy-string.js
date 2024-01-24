/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  const revStr = reverseStr(s);
  return revStr === goal;
};

/**
 *
 * @param {string} str
 */
const reverseStr = (str) => {
  if (str.length === 1) return str;
  return reverseStr(str.substring(1)) + str.charAt(0);
};

console.log(buddyStrings("ab", "ab"));
