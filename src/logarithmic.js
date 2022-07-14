const Counter = require('./lib/counter.js');
const { trace, getRandomInput } = require('./lib/utils.js');

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

  trace(arr.length, counter.count);
}

function run() {
  binarySearch([1,2,3], 3);
  binarySearch([11,2,3,40,5,63], 8);
  binarySearch(getRandomInput(1000), 2000);
  binarySearch(getRandomInput(100000), 200000);
  binarySearch(getRandomInput(1000000), 2000);
}

module.exports = { run };