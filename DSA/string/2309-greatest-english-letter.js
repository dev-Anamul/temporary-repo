/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      // this is uppercase letter
      let lowerCode = s.charCodeAt(i) + 32;
      if (s.includes(String.fromCharCode(lowerCode)))
        max = Math.max(max, s.charCodeAt(i));
    } else {
      // this is lowercase letter
      let upperCode = s.charCodeAt(i) - 32;
      if (s.includes(String.fromCharCode(upperCode)))
        max = Math.max(max, upperCode);
    }
  }

  if (max) return String.fromCharCode(max);
  else return "";
};

console.log(greatestLetter("AbCdEfGhIjK"));
