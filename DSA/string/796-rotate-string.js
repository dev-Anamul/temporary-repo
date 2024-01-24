/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let ind = s.indexOf(goal.charAt(0));
  let count = 2;
  while (ind !== -1 && count <= goal.length) {
    let rotateStr = s.substring(ind) + s.substring(0, ind);
    if (rotateStr === goal) return true;
    ind = s.indexOf(goal.substring(0, count));
    count++;
  }

  return false;
};

console.log(rotateString("aa", "a"));
