/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let ind = s.indexOf("b");

  if (ind === -1) return true;

  let sub = s.substring(ind);
  return !sub.includes("a");
};

console.log(checkString("aa"));
