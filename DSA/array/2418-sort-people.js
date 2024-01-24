/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const obj = heights.reduce((acc, cur, index) => {
    acc[cur] = names[index];
    return acc;
  }, {});

  return Object.keys(obj)
    .sort((a, b) => b - a)
    .map((el) => obj[el]);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
