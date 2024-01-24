/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let maxLength = Math.max(a.length, b.length);
  let ansStr = "";
  let carry = 0;
  for (let i = 0; i < maxLength; i++) {
    let aBit = +a.charAt(a.length - i - 1) || 0;
    let bBit = +b.charAt(b.length - i - 1) || 0;
    let sum = aBit + bBit + carry;

    if (sum === 0 || sum === 1) {
      carry = 0;
      ansStr = sum + ansStr;
    } else if (sum === 2) {
      carry = 1;
      ansStr = 0 + ansStr;
    } else if (sum === 3) {
      carry = 1;
      ansStr = 1 + ansStr;
    }
  }
  if (carry) ansStr = carry + ansStr;
  return ansStr;
};

console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
