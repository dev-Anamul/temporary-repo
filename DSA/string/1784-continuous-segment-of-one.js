/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  if (s.length === 1 && s.charAt(0) === "1") return true;
  if (s.length === 2 && (s.charAt(0) === "1" || s.charAt(1) === "1"))
    return true;
  let i = 0;
  let j = 1;

  while (j < s.length) {
    if (s.charAt(i) === "1" && s.charAt(j) === "1") return true;
    else {
      i++;
      j++;
    }
  }

  return false;
};

console.log(checkOnesSegment("11001"));
