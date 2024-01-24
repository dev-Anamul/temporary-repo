const romanSymbol = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 *
 * @param {string} s
 * @returns {number}
 */
const romanToNumber = (s) => {
  const romanSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // ! initial result
  let result = romanSymbol[s[0]];

  if(s.length < 2) {

  }

  //
  for (let i = 1; i < s.length; i += 2) {
    if (
      romanSymbol[s[i]] === romanSymbol[s[i + 1]] ||
      romanSymbol[s[i]] > romanSymbol[s[i + 1]]
    ) {
      const inc1 = romanSymbol[s[i]] + romanSymbol[s[i + 1]];
      result += inc1;
    } else if (romanSymbol[s[i]] < romanSymbol[s[i + 1]]) {
      const inc2 = romanSymbol[s[i + 1]] - romanSymbol[s[i]];
      result += inc2;
    }
  }

  return result;
};

console.log(romanToNumber("XCII"));
// 1 traverse to the roman number
// 2 compare current number value to the next number value
// if current number value is equal or less than previous number add the two numbers
// else minus previous sum from the current number

/// finally return the sum
