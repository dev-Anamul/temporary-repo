/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const v1 = romanSymbol[s.charAt(i)];

    if (i + 1 < s.length) {
      const v2 = romanSymbol[s.charAt(i + 1)];
      if (v1 >= v2) result += v1;
      else result -= v1;
    } else result += v1;
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
