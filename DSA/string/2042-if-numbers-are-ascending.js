/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let senArr = s.split(" ");
  let prev = -1;

  for (let word of senArr) {
    let num = Number(word);
    if (num && num <= prev) return false;
    if (num) prev = num;
  }

  return true;
};

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
