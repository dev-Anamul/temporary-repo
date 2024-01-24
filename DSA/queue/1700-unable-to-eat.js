/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;

  while (count !== students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      students.push(students.shift());
      count += 1;
    }
  }

  return students.length;
};

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
