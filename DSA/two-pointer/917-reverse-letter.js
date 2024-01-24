/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let strArr = s.split("");
  let i = 0;
  let j = strArr.length - 1;

  while (i <= j) {
    if (
      s.toLowerCase().charCodeAt(i) < 97 ||
      s.toLowerCase().charCodeAt(i) > 122
    ) {
      i++;
    } else if (
      s.toLowerCase().charCodeAt(j) < 97 ||
      s.toLowerCase().charCodeAt(j) > 122
    ) {
      j--;
    } else {
      let temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;

      i++;
      j--;
    }
  }

  return strArr.join("");
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
