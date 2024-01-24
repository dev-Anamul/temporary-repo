/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let ltr of t) {
    if (ltr === s.charAt(0)) s = s.substring(1);
  }

  return s === "";
};

console.log(isSubsequence("abc", "ahbgdc"));
