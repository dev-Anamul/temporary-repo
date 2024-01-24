/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sArr = [];
  let tArr = [];

  for (let ltr of s) {
    if (ltr === "#") sArr.pop();
    else sArr.push(ltr);
  }

  for (let ltr of t) {
    if (ltr === "#") tArr.pop();
    else tArr.push(ltr);
  }

  return sArr.join("") === tArr.join("");
};

console.log(backspaceCompare("a#c", "b"));
