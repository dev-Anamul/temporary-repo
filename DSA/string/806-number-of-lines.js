/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let line = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let ltrcode = s.charCodeAt(i);
    count += widths[ltrcode - 97];

    if (count === 100) {
      line++;
      count = 0;
    } else if (count > 100) {
      line++;
      count = widths[ltrcode - 97];
    }
  }

  if (count === 0) return [line, 100];
  else if (count < 100 && count > 0) return [line + 1, count];
};

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  )
);
