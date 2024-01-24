/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let max = releaseTimes[0];
  let ans = keysPressed.charAt(0);

  for (let i = 1; i < keysPressed.length; i++) {
    if (releaseTimes[i] - releaseTimes[i - 1] > max) {
      max = releaseTimes[i] - releaseTimes[i - 1];
      ans = keysPressed.charAt(i);
    } else if (releaseTimes[i] - releaseTimes[i - 1] === max) {
      max = releaseTimes[i] - releaseTimes[i - 1];
      ans += keysPressed.charAt(i);
    }
  }
  return ans.split("").sort((a, b) => a.localeCompare(b))[ans.length - 1];
};

console.log(slowestKey([9, 29, 49, 50], "cbcd"));
