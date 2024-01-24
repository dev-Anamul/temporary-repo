/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let ans = Array.from({ length: num_people }, (_) => 0);
  let count = 0;

  while (candies !== 0) {
    let remin = count % num_people;

    if (count + 1 <= candies) {
      ans[remin] = ans[remin] + count + 1;
      candies -= count + 1;
    } else {
      ans[remin] = ans[remin] + candies;
      candies = 0;
    }
    count++;
  }

  return ans;
};

console.log(distributeCandies(10, 3));
