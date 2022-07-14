import Counter from './lib/counter.js';
import { range, trace } from './lib/utils.js';

function firstItem(arr) {
  const counter = new Counter();

  const result = arr[0];
  counter.inc();

  console.log(result);

  return trace(arr.length, counter.count);
}

firstItem([1]);                        //?
//firstItem([1, 2]);                   //?
//firstItem([1, 2, 3, 4]);             //?
//firstItem([...range(0, 100)]);       //?
firstItem([...range(0, 1000000)]);     //?

export default firstItem;