/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let numStr = replaceWord(s);

  for (let i = 0; i < k; i++) {
    let ns = 0;
    for (let j = 0; j < numStr.length; j++) {
      ns += Number(numStr.charAt(j));
    }
    numStr = ns + "";
  }

  return numStr;
};

/**
 *
 * @param {string} str
 * @returns {string}
 */
const replaceWord = (str) => {
  if (str.length === 1) return str.charCodeAt(0) - 96;
  return str.charCodeAt(0) - 96 + "" + replaceWord(str.substring(1));
};

console.log(getLucky("zbax", 2));
