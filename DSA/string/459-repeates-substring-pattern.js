/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let patter = "";

  while (s) {
    if (!patter.includes(s.charAt(0))) {
      patter += s.charAt(0);
      s = s.substring(1);
    } else break;
  }

  while (s) {
    if (!s.startsWith(patter)) return false;
    else s = s.substring(patter.length);
  }

  return true;
};

console.log(repeatedSubstringPattern("ab"));
