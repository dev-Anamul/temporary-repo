/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let phone = number
    .split("")
    .filter((el) => el !== " " && el !== "-")
    .join("");

  return formatNum(phone);
};

/**
 *
 * @param {string} str
 */
const formatNum = (str) => {
  if (str.length === 2 || str.length === 3) return str;
  if (str.length === 4) return str.substring(0, 2) + "-" + str.substring(2);

  return str.substring(0, 3) + "-" + formatNum(str.substring(3));
};

console.log(reformatNumber("123 4-5678"));
