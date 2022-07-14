import Counter from './lib/counter.js';
import { getRandomInput, trace } from './lib/utils.js';

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

  console.log(trace(len, counter.count));

  return -1;
}

linearSearch([1], 2);
linearSearch([11, 3], 3);
linearSearch([0, 4, 1, 10], 10);
linearSearch(getRandomInput(100), 45);
linearSearch(getRandomInput(1000000), 1000000);

export default linearSearch;