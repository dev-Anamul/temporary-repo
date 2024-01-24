/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  let totalStudent = students.reduce((acc, cur) => acc + cur, 0);
  let tatalSeat = seats.reduce((acc, cur) => acc + cur, 0);

  return Math.abs(totalStudent - tatalSeat);
};
