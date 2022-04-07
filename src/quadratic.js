import Counter from './counter.js';
import { range, trace } from './utils.js';

function swap(arr, x, y) {
    var temp = arr[x];
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

    arr
    return trace(arr.length, counter.count);
}
 

selectionSort([1], 1);                    //?
// selectionSort([3, 2], 2);                //?
// selectionSort([1, 20, 3, 14, 5], 5);       //?
// selectionSort([...range(0, 25)], 25);    //?
// selectionSort([...range(0, 50)], 50);    //?
// selectionSort([...range(0, 51)], 100);    //?
// selectionSort([...range(0, 51)], 200);    //?

export default selectionSort;