/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let oldVal = 0;
  let newVal = 1;

  yield oldVal;
  yield newVal;
  while (true) {
    let result = oldVal + newVal;
    oldVal = newVal;
    newVal = result;
    yield result;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

const gen = fibGenerator();
console.log(gen.next().value);
