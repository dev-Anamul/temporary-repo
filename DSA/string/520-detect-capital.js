/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (checkAllCaps(word)) return true;
  else if (checkAllSmall(word)) return true;
  else if (checkAllCaps(word.charAt(0)) && checkAllSmall(word.substring(1)))
    return true;
  else return false;
};

/**
 *
 * @param {string} str
 */
const checkAllSmall = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) continue;
    else return false;
  }

  return true;
};

const checkAllCaps = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) continue;
    else return false;
  }
  return true;
};


console.log(detectCapitalUse("UssS"));