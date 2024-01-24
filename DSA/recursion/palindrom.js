/**
 *
 * @param {string} s
 */
const palidrom = (s) => {
  if (s.length === 0 || s.length === 1) return true;

  if (s.charAt(0) === s.charAt(s.length - 1)) {
    return palidrom(s.substring(1, s.length - 1));
  }

  return false;
};

console.log(palidrom("raceecar"));
