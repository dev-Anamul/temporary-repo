/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < word1.length; i++) {
    let ltr = word1.charAt(i);
    let ltr2 = word2.charAt(i);

    obj1[ltr] = obj1[ltr] ? obj1[ltr] + 1 : 1;
    obj2[ltr2] = obj2[ltr2] ? obj2[ltr2] + 1 : 1;
  }

  let keys = Object.keys(obj1).concat(Object.keys(obj2));

  for (let key of keys) {
    let count1 = obj1[key];
    let count2 = obj2[key];

    if (count1 && count2 && Math.abs(count1 - count2) > 3) return false;
    else if (count1 && !count2 && count1 > 3) return false;
    else if (!count1 && count2 && count2 > 3) return false;
  }

  return true;
};

console.log(checkAlmostEquivalent("abcdeef", "abaaacc"));
