/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let newS = s.trim();
  let isNegative = false;
  let res = "";

  if (newS.startsWith("-")) {
    isNegative = true;
    newS = newS.substring(1);
  }

  if (newS.startsWith(".")) return 0;

  for (let ltr of newS) {
    if (!Number.isNaN(+ltr)) res += ltr;
    else if (Number.isNaN(+ltr)) break;
  }

  if (isNegative) res = -1 * Number.parseInt(res);
  else res = Number.parseInt(res);

  if (res > 2147483647) return 2147483647;
  else if (res < -2147483648) return -2147483648;
  else return res || 0;
};

console.log(myAtoi("words and 987"));
