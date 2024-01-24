/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const obj = {};
  for (let ltr of s) {
    if (obj[ltr]) return ltr;
    else obj[ltr] = 1;
  }
  return -1;
};

console.log(repeatedCharacter("abcdd"));
