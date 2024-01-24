/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let strArr = s.split("");

  for (let i = 0; i < strArr.length; i += 2) {
    if (i !== strArr.length - 1) {
      let nextDig = Number(strArr[i + 1]);
      let charCode = s.charCodeAt(i);
      strArr[i + 1] = String.fromCharCode(charCode + nextDig);
    }
  }

  return strArr.join("");
};

console.log(replaceDigits("a1b2c3d4e"));
