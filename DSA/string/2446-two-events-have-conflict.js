/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  let firstEnd = Number(event1[1].split(":").join(""));
  let firstStart = Number(event1[0].split(":").join(""));
  let secondStart = Number(event2[0].split(":").join(""));
  let secondEnd = Number(event2[1].split(":").join(""));

  return secondStart <= firstEnd && secondEnd >= firstStart;
};

console.log(haveConflict(["14:13","22:08"], ["02:40","08:08"]));
