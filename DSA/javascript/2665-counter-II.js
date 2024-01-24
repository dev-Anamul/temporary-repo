/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  return {
    increment: () => {
      value += 1;
      return value;
    },
    decrement: () => {
      value -= 1;
      return value;
    },
    reset: () => {
      value = init;
      return value;
    },
  };
};

const counter = createCounter(1);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());

console.log(String([1, 2]));
