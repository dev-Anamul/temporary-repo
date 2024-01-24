/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let ansArr = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i++) {
    let lastOfAns = ansArr[ansArr.length - 1];
    let curAst = asteroids[i];
    if ((lastOfAns > 0 && curAst > 0) || (lastOfAns < 0 && curAst < 0))
      ansArr.push(curAst);
    else {
      if (Math.abs(lastOfAns) === Math.abs(curAst)) ansArr.pop();
      else if (Math.abs(lastOfAns) < Math.abs(curAst)) ansArr.pop();
    }
  }

  return ansArr;
};

console.log(asteroidCollision([10,2,-5]));
