/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let result = [];
  for (let log of logs) {
    if (log === "./") continue;
    else if (log === "../") result.pop();
    else result.push(log);
  }

  return result.length;
};

console.log(minOperations(["d1/", "../", "../", "../"]));
