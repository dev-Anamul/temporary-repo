/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let len = Math.max(arr1.length, arr2.length);
  let ansArr = [];
  for (let inner of arr1) {
    let id = inner.id;
    let ind = arr2.findIndex((el) => el.id === id);
    if (ind !== -1) {
      let obj = { ...inner, ...arr2[ind] };
      ansArr.push(obj);
      arr2.splice(ind, 1);
    } else ansArr.push(inner);
  }

  ansArr = ansArr.concat(arr2);
  return ansArr.sort((a, b) => a.id - b.id);
};

let arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
let arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(arr1, arr2));
