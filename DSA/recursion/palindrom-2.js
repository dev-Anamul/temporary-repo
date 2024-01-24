/**
 *
 * @param {string} s
 * @param {number} i
 * @returns
 */
const palindrom = (s, i) => {
  if (i >= s.length / 2) return true;

  if (s.charAt(i) !== s.charAt(s.length - i - 1)) return false;

  return palindrom(s, i + 1);
};

console.log(palindrom("madsam", 0));
