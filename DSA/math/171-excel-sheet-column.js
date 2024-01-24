/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  return _help(columnTitle);
};

/**
 *
 * @param {string} title
 */
const _help = (title) => {
  if (title.length === 1) return title.charCodeAt(0) - 64;
  let chrCod = title.charCodeAt(0) - 64;
  let posNum = chrCod * 26 ** (title.length - 1);
  return posNum + _help(title.substring(1));
};

console.log(titleToNumber("AA"));
