/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ansArr = [];
  let start = 0;
  let result = "";

  for (let ltr of s) {
    ansArr.push(ltr);

    if (ltr === "(") start++;
    else if (ltr === ")") {
      start--;
      if (!start) {
        ansArr.pop();
        ansArr.shift();
        result += ansArr.join("");
        ansArr = [];
      }
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())(()(()))"));
