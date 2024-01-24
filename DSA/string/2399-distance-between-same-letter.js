/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    let ltr = s.charAt(i);
    let firstInd = s.indexOf(ltr);
    let lstInd = s.lastIndexOf(ltr);
    let charInd = s.charCodeAt(i) - 97;

    if (distance[charInd] !== lstInd - (firstInd + 1)) return false;
  }

  return true;
};

console.log(
  checkDistances(
    "aa",
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
