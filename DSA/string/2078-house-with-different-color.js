/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = 0;

  let i = 0;
  let j = colors.length - 1;

  while (i < colors.length) {
    if (colors[i] !== colors[j]) max = Math.max(max, Math.abs(j - i));

    i++;
  }

  while (j >= 0) {
    if (colors[0] !== colors[j]) max = Math.max(max, Math.abs(j - 0));
    j--;
  }

  return max;
};

console.log(maxDistance([6, 6, 6, 6, 6, 6, 6, 6, 6, 19, 19, 6, 6]));
