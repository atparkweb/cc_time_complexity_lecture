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
  binarySearch([1], 3);
  binarySearch(getRandomInput(2), 4);
  binarySearch(getRandomInput(4), 8);
  binarySearch(getRandomInput(8), 20);
  binarySearch(getRandomInput(16), 32);
  binarySearch(getRandomInput(32), 43);
  //binarySearch(getRandomInput(1000000), 43);
}

module.exports = { run };