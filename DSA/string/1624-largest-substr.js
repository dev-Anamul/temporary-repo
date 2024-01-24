/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    let j = s.length - 1;
    while (i < j) {
      if (s.charAt(i) === s.charAt(j)) {
        max = Math.max(max, s.substring(i + 1, j).length);
      }
      j--;
    }
  }

  return max;
};

console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"));
