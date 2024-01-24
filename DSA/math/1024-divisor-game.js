/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  let count = 0;
  while (n > 1) {
    let randomNum = randomRange(1, n - 1);
    if (n % randomNum === 0) {
      count++;
      n = n - randomNum;
    }
  }

  if (count % 2 === 0) return false;
  else return true;
};

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(divisorGame(5));
