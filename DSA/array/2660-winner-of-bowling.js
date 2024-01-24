/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let tenInd1 = -1;
  let tenInd2 = -1;

  let player1Score = player1.reduce((acc, cur, ind) => {
    if (tenInd1 !== -1 && ind - tenInd1 >= 1 && ind - tenInd1 <= 2)
      acc += cur * 2;
    else acc = acc + cur;

    if (cur === 10) tenInd1 = ind;

    return acc;
  }, 0);

  let player2Score = player2.reduce((acc, cur, ind) => {
    if (tenInd2 !== -1 && ind - tenInd2 >= 1 && ind - tenInd2 <= 2)
      acc += cur * 2;
    else acc = acc + cur;

    if (cur === 10) tenInd2 = ind;

    return acc;
  }, 0);

  console.log(player1Score, player2Score);

  return player1Score > player2Score ? 1 : player2Score > player1Score ? 2 : 0;
};

console.log(isWinner([4, 10, 7, 10, 9, 3], [6, 5, 2, 3]));
