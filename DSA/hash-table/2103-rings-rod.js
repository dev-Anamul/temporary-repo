/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let obj = {};
  for (let i = 1; i < rings.length; i += 2) {
    let rod = rings.charAt(i);
    obj[rod] = obj[rod] ? obj[rod] + rings.charAt(i - 1) : rings.charAt(i - 1);
  }

  let count = 0;
  Object.values(obj).forEach((el) => {
    let set = new Set(el.split(""));
    if (set.size === 3) count++;
  });

  return count;
};

console.log(countPoints("B0R0G0R9R0B0G0"));
