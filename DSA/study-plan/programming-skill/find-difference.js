/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let tObj = {};
  let sObj = {};

  for (let letter of s) {
    if (sObj[letter]) sObj[letter] += 1;
    else sObj[letter] = 1;
  }

  for (let letter of t) {
    if (tObj[letter]) tObj[letter] += 1;
    else tObj[letter] = 1;
  }

  //   const arr = Object.keys(tObj).map((el) => {
  //     if (tObj[el] !== sObj[el]) return el;
  //   });

  for (let el of Object.keys(tObj)) if (tObj[el] !== sObj[el]) return el;
};

console.log(
  findTheDifference(
    "",
    "a"
  )
);
