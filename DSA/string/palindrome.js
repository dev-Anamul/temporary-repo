/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  if (s.length === 0 || s.length === 1) return true;
  s = s.toLocaleLowerCase();
  if (s.charAt(0) === s.charAt(s.length - 1)) {
    return isPalindrome(s.substring(1, s.length - 1));
  }

  return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
