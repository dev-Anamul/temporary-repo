/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let nStr = n + "" + n * 2 + "" + n * 3;

  let sortStr = nStr
    .split("")
    .sort((a, b) => a - b)
    .join("");

  if (sortStr === "123456789") return true;
  else return false;
};

console.log(isFascinating(192));
