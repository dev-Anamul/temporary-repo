/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let first = 0;
  let second = 0;
  let third = 0;

  for (let ltr of s) {
    if (ltr === parenthesis.fs) first++;
    else if (ltr === parenthesis.fe) {
      if (second % 2 !== 0 || third % 2 !== 0) return false;
      else first--;
    } else if (ltr === parenthesis.ss) second++;
    else if (ltr === parenthesis.se) {
      if (third % 2 !== 0) return false;
      else second--;
    } else if (ltr === parenthesis.ts) third++;
    else if (ltr === parenthesis.te) {
      third--;
    }
  }

  return first == 0 && second == 0 && third == 0;
};

const parenthesis = {
  fs: "(",
  fe: ")",
  ss: "{",
  se: "}",
  ts: "[",
  te: "]",
};

console.log(isValid("(){}}{"));
