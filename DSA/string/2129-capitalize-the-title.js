/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let words = title.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1 || words[i].length == 2)
      words[i] = makeLower(words[i]);
    else
      words[i] =
        words[i].charAt(0).toUpperCase() + makeLower(words[i].substring(1));
  }

  return words.join(" ");
};

/**
 *
 * @param {string} str
 */
const makeLower = (str) => {
  if (str.length === 1) return str.toLowerCase();
  return str.charAt(0).toLowerCase() + makeLower(str.substring(1));
};

console.log(capitalizeTitle("First leTTeR of EACH Word"));
