const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
  
function selectionSort(arr,  n) {
  let i, j, minIndex;
  const counter = new Counter();

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n-1; i++) {
    counter.inc();
    // Find the minimum element in unsorted array
    minIndex = i;
    for (j = i + 1; j < n; j++) {
      counter.inc();
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    counter.inc();
    // Swap the found minimum element with the first element
    swap(arr, minIndex, i);
  }

  trace(arr.length, counter.count);
}
 
function run() {
  selectionSort([1], 1);
  selectionSort([3, 2], 2);
  selectionSort([1, 20, 3, 14, 5], 5);
  selectionSort(getRandomInput(25), 25);
  selectionSort(getRandomInput(50), 50);
  selectionSort(getRandomInput(75), 100);
  selectionSort(getRandomInput(100), 200);
}

module.exports = { run };