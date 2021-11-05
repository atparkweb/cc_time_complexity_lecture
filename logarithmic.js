import Counter from './counter';
import { range, trace } from './utils';

/**
 * Given a sorted array of integers, find the target
 * @param {Array} arr
 * @param {Number} target 
 */
function binarySearch(arr, target) {
  const counter = new Counter();

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    counter.inc();

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log(`Found ${mid}`);
      return trace(arr.length, counter.count);
    } else if (arr[mid] < target) {
      left = mid + 1;
      counter.inc();
    } else {
      right = mid - 1;
      counter.inc();
    }
  }
  
  console.log("Not found");

  return trace(arr.length, counter.count);
}

binarySearch([1,2,3], 3);
binarySearch([1,2,3,4,5,6], 8);
binarySearch([...range(0, 1000)], 2000);
binarySearch([...range(0, 100000)], 200000);
binarySearch([...range(0, 10000000)], 20000000);