import Counter from './counter.js';
import { range, trace } from './utils.js';

function linearSearch(arr, target) {
  //  TODO: create a counter

  for (let i = 0; i < arr.length; i++) {
    // TODO: increment the counter
    console.log(`Item at ${i}`);

    if (arr[i] === target) {
      console.log(`Found item: ${target}`);
    }
  }

  // TODO: Try adding another operation with count increment
  // TODO: Try adding another for loop

  console.log(`${target} not found in the array`);

  return trace(arr.length, counter.count);
}

// TODO: invoke linearSearch with various sized arrays

export default linearSearch;