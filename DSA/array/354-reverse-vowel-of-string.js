/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const index = [];
  const vow = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s.charAt(i).toLowerCase())) {
      index.push(i);
      vow.push(s.charAt(i));
    }
  }

  let str = s.split("");
  for (let i = 0; i < index.length; i++) {
    str.splice(index[i], 1, vow[vow.length - i - 1]).join("");
  }

  return str.join("");
};

console.log(reverseVowels("leetcode"));
