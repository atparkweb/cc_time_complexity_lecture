const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
  
function selectionSort(arr) {
  let i, j, minIndex;
  const counter = new Counter();
  const n = arr.length;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    minIndex = i;
    counter.inc();

    for (j = i + 1; j < n; j++) {
      counter.inc();
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        counter.inc();
      }
    }

    // Swap the found minimum element with the first element
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    counter.inc(3);
  }

  trace(arr.length, counter.count);
}
 
function run() {
  selectionSort([1]);
  selectionSort(getRandomInput(2));
  selectionSort(getRandomInput(4));
  selectionSort(getRandomInput(8));
  selectionSort(getRandomInput(16));
  selectionSort(getRandomInput(32));
  //selectionSort(getRandomInput(1000000));
}

module.exports = { run };