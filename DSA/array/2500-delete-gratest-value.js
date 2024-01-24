/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  /// define fial sum whice is 0
  let finalSum = 0;

  // loop over the grid untill it become empty
  while (grid.length) {
    /// let max number in ervery interation
    let maxInEveryIter = 0;

    // loop over the inner array
    for (let i = 0; i < grid.length; i++) {
      let inner = grid[i];

      // if inner array have any item
      if (inner.length) {
        let maxNum = Math.max(...inner);
        let indexOfLarge = inner.indexOf(maxNum);
        maxInEveryIter = Math.max(maxInEveryIter, maxNum);
        inner.splice(indexOfLarge, 1);

        /// remove inner array from the grid array
      } else grid.splice(i, 1);
    }

    finalSum += maxInEveryIter;
  }

  return finalSum;
};

console.log(deleteGreatestValue([[10]]));
