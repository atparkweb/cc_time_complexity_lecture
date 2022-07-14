import Counter from './lib/counter.js';
import { getRandomInput, trace } from './lib/utils.js';

function linearSearch(arr, target) {
  const counter = new Counter();
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      counter.inc();
      console.log(`Found item: ${target}`);
      found = true;
      break;
    }
  }

  // TODO: Try adding another operation with count increment
  // TODO: Try adding another for loop

  if (!found) {
    console.log(`${target} not found in the array`);
  }

  return trace(arr.length, counter.count);
}

linearSearch([1], 2);
linearSearch([11, 3], 3);
linearSearch([0, 4, 1, 10], 10);
linearSearch(getRandomInput(100), 45);
linearSearch(getRandomInput(1000000), 300);

export default linearSearch;