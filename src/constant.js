const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function increaseItemAt(arr, i) {
  const counter = new Counter();

  counter.inc(2); // 2 comparisons below
  if (i < 0 || i >= arr.length) {
    throw new RangeError('Index out of range');
  }

  arr[i] += 1;
  counter.inc(1);

  trace(arr.length, counter.count);
}

function run() {
  increaseItemAt([1], 0);
  increaseItemAt(getRandomInput(2), 1);
  increaseItemAt(getRandomInput(4), 3);
  increaseItemAt(getRandomInput(8), 7);
  increaseItemAt(getRandomInput(16), 12);
  increaseItemAt(getRandomInput(32), 4);
  increaseItemAt(getRandomInput(1000000), 4);
}

module.exports = { run };