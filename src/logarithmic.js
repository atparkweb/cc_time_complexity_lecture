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
      return trace(arr.length, counter.total);
    } else if (arr[mid] < target) {
      left = mid + 1;
      counter.inc();
    } else {
      right = mid - 1;
      counter.inc();
    }
  }

  trace(arr.length, counter.total);
}

function run() {
  const argList = [[1, 3], [2, 4], [4, 8], [8, 20], [16, 32], [32, 43]];

  argList.forEach(([size, i]) => {
    binarySearch(getRandomInput(size), i);
  });
}

module.exports = { run };
