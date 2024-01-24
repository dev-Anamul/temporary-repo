/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const obj = {};

  for (let dig of num) {
    obj[dig] = obj[dig] ? obj[dig] + 1 : 1;
  }

  for (let ind of Object.keys(obj)) {
    if (num.charAt(ind) != obj[ind]) return false;
  }

  return true;
};

console.log(digitCount("030"));
