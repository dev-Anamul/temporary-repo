/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
  return JSON.stringify(o1) === JSON.stringify(o2);
};

console.log(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 }));
