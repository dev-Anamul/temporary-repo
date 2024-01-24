/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  let ans = true;

  for (let i = 2; i <= n - 2; i++) {
    let baseNum = convertoKbase(n, i);
    ans = ans && isPalindrom(baseNum);
  }

  return ans;
};

/**
 *
 * @param {number} num
 * @returns {string}
 */
const convertoKbase = (num, base) => {
  if (num < base) return num;
  const remin = num % base;
  return convertoKbase(Math.floor(num / base), base) + "" + remin;
};

/**
 *
 * @param {string} str
 */
const isPalindrom = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str.charAt(i) !== str.charAt(j)) return false;
    else {
      i++;
      j--;
    }
  }

  return true;
};

console.log(isStrictlyPalindromic(9));
