/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const charOjb = chars.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  return Object.keys(charOjb).reduce((acc, cur) => {
    if (charOjb[cur] === 1) acc.push(cur);
    else if (charOjb[cur] < 9) {
      acc.push(cur);
      acc.push(charOjb[cur].toString());
    } else {
      let elNum = charOjb[cur].toString();
      acc.push(cur);
      acc.push(elNum.charAt(0));
      acc.push(elNum.charAt(1));
    }
    return acc;
  }, []).length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
