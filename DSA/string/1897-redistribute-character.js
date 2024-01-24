/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let obj = words.reduce((acc, cur) => {
    for (let ltr of cur) {
      acc[ltr] = acc[ltr] ? acc[ltr] + 1 : 1;
    }

    return acc;
  }, {});

  return Object.keys(obj).every((el) => obj[el] % words.length === 0);
};

console.log(makeEqual(["ab", "a"]));
