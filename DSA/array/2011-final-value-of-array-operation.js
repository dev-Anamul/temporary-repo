/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  for (let op of operations) {
    if (op === "++X" || op === "X++") result += 1;
    else if (op === "--X" || op === "X--") result -= 1;
  }

  return result;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
