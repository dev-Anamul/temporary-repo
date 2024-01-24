/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let str1 = command.replaceAll("()", "o").replaceAll("(al)", "al");
  return str1;
};

console.log(interpret("G()()()()(al)"));
