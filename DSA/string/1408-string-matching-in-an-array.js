/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let j = 0;

    while (j < words.length) {
      if (j === i) {
        j++;
        continue;
      }

      if (words[j].includes(word)) {
        ans.push(word);
        break;
      }

      j++;
    }
  }

  return ans;
};

console.log(stringMatching(["blue", "green", "bu"]));
