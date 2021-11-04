/**
 * A counter to keep track of operations
 * @constructor
 */
class Counter {
  constructor() {
    this.count = 0;
  }
  inc(step = 1) {
    this.count += step;
  }
}

export default Counter;