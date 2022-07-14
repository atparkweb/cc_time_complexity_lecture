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
  increaseItemAt([1, 2], 1);
  increaseItemAt([1, 2, 3, 4], 2);
  increaseItemAt(getRandomInput(1000), 21);
  increaseItemAt(getRandomInput(1000000), 3000);
}

module.exports = { run };