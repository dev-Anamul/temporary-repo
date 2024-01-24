/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let ansArr = [s.charAt(0)];

  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === ansArr[ansArr.length - 1]) ansArr.pop();
    else ansArr.push(s.charAt(i));
  }

  return ansArr.join("");
};

console.log(removeDuplicates("azxxzy"));
