/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameObj = {};
  let typeObj = {};

  for (let ltr of name) {
    nameObj[ltr] = nameObj[ltr] ? nameObj[ltr] + 1 : 1;
  }

  for (let ltr of typed) {
    typeObj[ltr] = typeObj[ltr] ? typeObj[ltr] + 1 : 1;
  }

  for (let key of Object.keys(nameObj)) {
    if (nameObj[key] > typeObj[key]) return false;
  }

  return true
};
