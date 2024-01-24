/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;

  for (let passenger of details) {
    let age = +passenger.substring(11, 13);
    console.log(age);
    if (age > 60) count++;
  }

  return count;
};

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
