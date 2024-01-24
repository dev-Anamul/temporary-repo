/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];
  let length = s.length;
  let subStrs = 1 << length;
  let ans = 0;
  for (let mask = 0; mask < subStrs; mask++) {
    let sbStr = "";
    for (let i = 0; i < length; i++) {
      if (((mask >> i) & 1) !== 0) sbStr += s.charAt(i);
    }
    if (sbStr.length === k) {
      let count = 0;
      for (let i = 0; i < k; i++) {
        if (vowels.includes(sbStr.charAt(i))) count++;
      }
      ans = Math.max(ans, count);
    }
  }

  return ans;
};

console.log(maxVowels("abciiidef", 3));
