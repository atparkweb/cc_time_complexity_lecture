import Counter from './counter';
import { range, trace } from './utils';

function linearSearch(arr, target) {
  //  TODO: create a counter

  for (let i = 0; i < arr.length; i++) {

    // TODO: increment the counter

    if (arr[i] === target) {
      console.log(`Found item: ${target}`);
      
      // TODO: return the trace result
    }
  }

  console.log(`${target} not found in the array`);
}

// TODO: invoke linearSearch with various sized arrays