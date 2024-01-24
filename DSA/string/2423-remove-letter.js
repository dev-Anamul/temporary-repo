/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  let obj = {};
  for (let ltr of word) {
    obj[ltr] = obj[ltr] ? obj[ltr] + 1 : 1;
  }
  let valArr = Object.values(obj);
  let min = Math.min(...valArr);
  let count = 0;

  if (min === 1 && valArr.every((el) => el === min)) return true;
  else if (min === 1) {
    let newArr = valArr.slice();
    newArr.splice(valArr.indexOf(min), 1);
    if (newArr.every((el) => el === newArr[0])) return true;
  } else if (min > 1 && valArr.every((el) => el === min)) return false;
  else {
    for (let val of valArr) count += val - min;
  }
  console.log(count);

  if (count === 1) return true;
  else return false;
};

console.log(equalFrequency("abcc"));
