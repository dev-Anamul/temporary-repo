/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let ansArr = [];

  for (let ltr of s) {
    if (ltr !== "*") {
      //   if (!ansArr.includes(ltr))
      ansArr.push(ltr);
    } else ansArr.pop();
  }
  return ansArr.join("");
};

console.log(removeStars("leet**cod*e"));
