/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let wordArr = Array.from(new Set(words[i])).sort();
    for (let j = i + 1; j < words.length; j++) {
      let innerStr = Array.from(new Set(words[j])).sort();
      if (wordArr.join("") === innerStr.join("")) count++;
    }
  }

  return count;
};

console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]));
