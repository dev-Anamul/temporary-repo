/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== goal.charAt(i)) count++;
  }
  return count === 2 || count === 0;
};

console.log(buddyStrings("aa", "aa"));
