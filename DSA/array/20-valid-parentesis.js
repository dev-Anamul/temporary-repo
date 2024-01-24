/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parenthesis = "(){}[]";

  for (let v of s) {
    const index = parenthesis.indexOf(v);

    if (index % 2 === 0) stack.push(v);
    else if (
      index % 2 !== 0 &&
      parenthesis.charAt(index - 1) === stack[stack.length - 1]
    )
      stack.pop();
    else return false;
  }

  return stack.length === 0;
};

console.log(isValid("(]"));
