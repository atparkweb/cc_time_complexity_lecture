import Counter from './lib/counter.js';
import { range, trace } from './lib/utils.js';

function increaseItemAt(arr, i) {
  const counter = new Counter();

  if (i < 0 || i >= arr.length) throw new RangeError('Index out of range');
  counter.inc(2);
  arr[i] += 1;
  counter.inc(1);

  trace(arr.length, counter.count);
}

increaseItemAt([1], 0);
//increaseItemAt([1, 2], 1);
//increaseItemAt([1, 2, 3, 4], 2);
//increaseItemAt([...range(0, 100)], 21);
increaseItemAt([...range(0, 1000000)], 3000);

export default increaseItemAt;