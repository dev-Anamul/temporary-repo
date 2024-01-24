/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let count = 0;
  let count2 = 1;
  let temp = s.charAt(0);
  let temp2 = s.charAt(0) === "0" ? "1" : "0";

  for (let i = 1; i < s.length; i++) {
    if (temp === s.charAt(i)) {
      count++;
      temp = s.charAt(i) === "0" ? "1" : "0";
    } else temp = s.charAt(i);

    if (temp2 === s.charAt(i)) {
      count2++;
      temp = s.charAt(i) === "0" ? "1" : "0";
    } else temp2 = s.charAt(i);
  }

  return Math.min(count, count2);
};

console.log(minOperations("0100"));
