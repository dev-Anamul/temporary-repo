/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  let m = str1.length;
  let n = str2.length;

  let div = findGCD(m, n);

  return str2.substring(0, div);
};

var findGCD = function (m, n) {
  while (n !== 0) {
    let newReminder = m % n;
    m = n;
    n = newReminder;
  }
  return m;
};

console.log(gcdOfStrings("ABABAB", "ABAB"));
