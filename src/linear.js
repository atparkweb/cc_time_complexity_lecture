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

  trace(len, counter.total);

  return -1;
}

function run() {
  const argList = [[1, 2], [2, 3], [4, 5], [8, 9], [16, 17], [32, 33]];

  argList.forEach(([size, i]) => {
    linearSearch(getRandomInput(size), i);
  });
}

module.exports = { run };
