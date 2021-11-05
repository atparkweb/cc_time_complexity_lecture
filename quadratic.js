import Counter from './counter';
import { range, trace } from './utils';

function nestedLoop(arr) {
  const counter = new Counter();

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - i; j > 0; j--) {
      result.push(arr[i] + arr[j]);
      counter.inc();
    }
  }
  
  console.log(result);

  return trace(arr.length, counter.count);
}

// nestedLoop([1]);
// nestedLoop([1, 2]);
// nestedLoop([1, 2, 3, 4]);
// nestedLoop([...range(0, 25)]);
// nestedLoop([...range(0, 50)]);
// nestedLoop([...range(0, 51)]);