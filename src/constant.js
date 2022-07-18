const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function increaseItemAt(arr, i) {
  const counter = new Counter();

  counter.inc(2); // two comparisons below
  if (i < 0 || i >= arr.length) {
    throw new RangeError('Index out of range');
  }

  arr[i] += 1;
  counter.inc(1);

  trace(arr.length, counter.total);
}

function run() {
  const argList = [[1, 0], [2, 1], [4, 3], [8, 7], [16, 15], [32, 31]];

  argList.forEach(([size, i]) => {
    increaseItemAt(getRandomInput(size), i);
  });
}

module.exports = { run };
