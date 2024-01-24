/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) return s;
  let ltrArr = s.split("");

  for (let i = 1; i < s.length; i++) {
    if (
      s.charAt(i - 1) === s.charAt(i) &&
      s.charAt(i) === s.charAt(i + 1) &&
      s.charAt(i - 1) === s.charAt(i + 1)
    )
      ltrArr[i - 1] = 0;
  }

  let ans = "";

  for (let ltr of ltrArr) {
    if (ltr === 0) continue;
    else ans += ltr;
  }

  return ans;
};

console.log(makeFancyString("aaabaaaa"));
