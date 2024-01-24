/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  if (n === 1) return 0;

  if (n % 2 === 0) {
    const matches = n / 2;
    const nextTeams = n / 2;
    return matches + numberOfMatches(nextTeams);
  } else {
    const matches = (n - 1) / 2;
    const nextTeams = matches + 1;

    return matches + numberOfMatches(nextTeams);
  }
};

console.log(numberOfMatches(14));
