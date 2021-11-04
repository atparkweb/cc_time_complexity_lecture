import Counter from './counter';
import { range, trace } from './utils';

function binarySearch(arr, target) {
  // TODO: create a counter

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // TODO: increment counter

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log(`Found ${mid}`);
      // TODO: return trace

    } else if (arr[mid] < target) {
      left = mid + 1;
      // TODO: increment counter

    } else {
      right = mid - 1;
      // TODO: increment counter

    }
  }
  
  console.log("Not found");

  // TODO: return trace
}

// TODO: invoke binarySearch with various arrays, long arrays