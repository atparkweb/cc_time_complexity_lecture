/**
 * A counter to keep track of operations
 * @constructor
 */
class Counter {
  constructor() {
    this.total = 0;
  }

  inc(step = 1) {
    this.total += step;
  }

  reset() {
    this.total = 0;
  }
}

module.exports = Counter;
