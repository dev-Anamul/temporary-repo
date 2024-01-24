/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return (
        isPalindrom(s.substring(i, j)) || isPalindrom(s.substring(i + 1, j + 1))
      );
    } else {
      i++;
      j--;
    }
  }

  return true;
};

const isPalindrom = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str.charAt(i) !== str.charAt(j)) return false;
    i++;
    j--;
  }

  return true;
};

console.log(validPalindrome("ebcbbececabbacecbbcbe"));
