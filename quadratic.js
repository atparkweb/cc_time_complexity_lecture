import Counter from './counter';
import { range, trace } from './utils';

function nestedLoop(arr) {
  // TODO: Create a counter

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - i; j > 0; j--) {
      result.push(arr[i] + arr[j]);
      
      // TODO: increment the counter
    }
  }
  
  console.log(result);

  // TODO: return the trace result
}

// TODO: invoke nestedLoops with various sized arrays