/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let countA = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "A") countA++;
    else if (
      s.charAt(i - 1) === "L" &&
      s.charAt(i) === "L" &&
      s.charAt(i + 1) === "L"
    )
      return false;
  }

  return countA < 2;
};

console.log(checkRecord("PPALLL"));
