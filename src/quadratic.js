const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function selectionSort(arr) {
  let i, j, minIndex;
  const counter = new Counter();
  const n = arr.length;

  for (i = 0; i < n - 1; i++) {
    minIndex = i;
    counter.inc();

    for (j = i + 1; j < n; j++) {
      counter.inc();
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        counter.inc();
      }
    }

    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    counter.inc(3);
  }

  trace(arr.length, counter.total);
}

function run() {
  const start = 1, end = 32;

  for (let i = start; i <= end; i *= 2) {
    selectionSort(getRandomInput(i));
  }
}

module.exports = { run };
