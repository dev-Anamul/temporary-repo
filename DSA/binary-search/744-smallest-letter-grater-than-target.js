/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let low = 0;
  let high = letters.length - 1;
  let ans = letters[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (letters[mid] > target) {
      ans = letters[mid];
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
