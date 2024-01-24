/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let set = new Set(key.split(" ").join("").split(""));
  let strKey = Array.from(set);
  let ans = "";
  for (let ltr of message) {
    if (ltr !== " ") {
      ans += alphabet[strKey.indexOf(ltr)];
    } else ans += " ";
  }

  return ans;
};

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
