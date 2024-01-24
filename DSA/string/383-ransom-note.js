/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magArr = magazine.split("");

  for (let ltr of ransomNote) {
    let ind = magArr.indexOf(ltr);
    if (ind === -1) return false;
    else magArr.splice(ind, 1);
  }

  return true;
};

console.log(canConstruct("aaa", "aab"));
