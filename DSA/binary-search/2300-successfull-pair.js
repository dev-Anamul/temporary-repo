/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  const ans = [];

  for (let i = 0; i < spells.length; i++) {
    let low = 0;
    let high = potions.length - 1;
    let ind = 0;
    let count = 0;

    while (low <= high) {
      let mid = Math.floor((high + low) / 2);

      if (potions[mid] * spells[i] >= success) {
        count++;
        ind = mid;
        high = mid - 1;
      } else low = mid + 1;
    }

    if (count > 0) ans.push(potions.length - ind);
    else ans.push(ind);
  }

  return ans;
};

console.log(successfulPairs([15, 8, 19], [38, 36, 23], 328));
