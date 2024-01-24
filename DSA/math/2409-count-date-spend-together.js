/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  const daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let arriveLate =
    Number(arriveAlice.replace("-", "")) > Number(arriveBob.replace("-", ""))
      ? arriveAlice
      : arriveBob;

  let leaveBefore =
    Number(leaveAlice.replace("-", "")) < Number(leaveBob.replace("-", ""))
      ? leaveAlice
      : leaveBob;

  let alArr = arriveLate.split("-");
  let lbArr = leaveBefore.split("-");

  let ans = 0;

  for (let i = Number(alArr[0]); i <= Number(lbArr[0]); i++) {
    ans += daysArr[i - 1];
  }

  ans = ans - Number(alArr[1]);
  let dayAfLe = daysArr[Number(lbArr[0])] - Number(lbArr[1]);
  ans = ans - dayAfLe;
  return ans;
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
