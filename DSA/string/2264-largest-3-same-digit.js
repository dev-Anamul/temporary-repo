/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let ans = "";
  for (let i = 1; i < num.length - 1; i++) {
    if (
      num.charAt(i - 1) === num.charAt(i) &&
      num.charAt(i) === num.charAt(i + 1) &&
      num.charAt(i - 1) === num.charAt(i + 1)
    ) {
      ans = Math.max(ans, num.substring(i - 1, i + 2));
      //   return num.substring(i - 1, i + 2);
      //   break;
    }
  }
  if (ans === 0) return "000";
  else return ans + "";
};

console.log(largestGoodInteger("2300019"));
