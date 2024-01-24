/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let firstRow = "qwertyuiop";
  let secondRow = "asdfghjkl";
  let thirdRow = "zxcvbnm";

  let ans = [];

  for (let word of words) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
 
    for (let ltr of word.toLowerCase()) {
      if (firstRow.includes(ltr)) count1++;
      if (secondRow.includes(ltr)) count2++;
      if (thirdRow.includes(ltr)) count3++;
    }

    if (
      count1 === word.length ||
      count2 === word.length ||
      count3 === word.length
    )
      ans.push(word);
  }

  return ans;
};

console.log(findWords(["adsdf", "sfd"]));
