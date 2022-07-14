import Counter from './counter.js';
import { range, trace } from './lib/utils.js';

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

linearSearch([1], 2);                        //?
linearSearch([11, 3], 3);                    //?
linearSearch([0, 4, 1, 10], 10);             //?
linearSearch([...range(0, 100)], 100);       //?
linearSearch([...range(0, 10000)], 9999);    //?

export default linearSearch;