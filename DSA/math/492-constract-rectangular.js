/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  if (isPrime(area)) return [area, 1];

  let half = Math.floor(Math.sqrt(area));

  for (i = half; i >= 0; i--) {
    if (area % i === 0) {
      let val = area / i;
      if (i > val) return [i, val];
      else return [val, i];
    }
  }
};

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(constructRectangle(1000000000000));

console.log(Math.sqrt(122122));
