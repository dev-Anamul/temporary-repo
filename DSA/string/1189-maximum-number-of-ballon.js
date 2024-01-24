/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let textArr = text.split("");
  let b = "balloon";
  let ans = 0;

  while (textArr.length >= b.length) {
    let add = true;
    for (let i = 0; i < b.length; i++) {
      let ind = textArr.indexOf(b.charAt(i));
      if (ind !== -1) {
        textArr.splice(ind, 1);
        continue;
      } else add = false;
    }

    if (add) ans++;
    else break;
  }
  return ans;
};

console.log(maxNumberOfBalloons("leetcode"));
