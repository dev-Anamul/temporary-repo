/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let ansStr = "";

  for (let ltr of word) {
    if (isNaN(Number(ltr))) {
      ansStr += " ";
    } else ansStr += ltr;
  }

  const ansArr = ansStr.split(" ").filter((el) => el.trim());
  let set = new Set();

  for (let item of ansArr) {
    if (item.startsWith("0")) {
      while (item.startsWith("0")) {
        item = item.substring(1);
      }
      set.add(item);
    } else set.add(item);
  }

  return set.size;
};

console.log(numDifferentIntegers("a1b01c001"));
