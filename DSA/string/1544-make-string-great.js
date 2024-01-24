/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let strs = [];

  for (let ltr of s) {
    if (ltr.toLowerCase() === strs[strs.length - 1]?.toLowerCase()) {
      if (ltr !== strs[strs.length - 1]) strs.pop();
      else strs.push(ltr);
    } else strs.push(ltr);
  }

  return strs.join("");
};

console.log(makeGood("abBAcC"));
