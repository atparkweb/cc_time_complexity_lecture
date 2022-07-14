const Counter = require('./lib/counter.js');
const { getRandomInput, trace } = require('./lib/utils.js');

function linearSearch(arr, target) {
  const counter = new Counter();

  const len = arr.length;
  counter.inc();

  for (let i = 0; i <= len - 1; i++) {
    counter.inc();
    if (arr[i] === target) {
      console.log(trace(len, counter.count));
      return i;
    } else if (i > len) {
      break;
    }
  }

  // TODO: Try adding another operation with count increment
  // TODO: Try adding another for loop

  trace(len, counter.count);

  return -1;
}

function run() {
  linearSearch([1], 2);
  linearSearch(getRandomInput(2), 3);
  linearSearch(getRandomInput(4), 5);
  linearSearch(getRandomInput(8), 9);
  linearSearch(getRandomInput(16), 17);
  linearSearch(getRandomInput(32), 33);
  //linearSearch(getRandomInput(1000000), 33);
}

module.exports = { run };