/**
 * Generate a range of integers from start to end
 * @param {number} start
 * @param {number} end
 * @param {number} step
 */
 function* range(start, end, step = 1) {
  let current = start;
  while (current < end) {
    yield current;
    current += step;
  }
}

/**
 * Format the input and time cost as a string
 * @param {number} size
 * @param {number} cost
 * @returns {string}
 */
function trace(size = 0, cost = 0) {
  console.log(`len: ${size}, steps: ${cost}`);
  graph(cost);
}

/**
 * Print out a series of squares
 * @param {number} n - The number of squares to print
 */
function graph(n) {
  console.log('⬜ '.repeat(n));
}

/**
 * Shuffle an array in place. Original array is mutated.
 * @param {Array} arr
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]], arr[i];
  }
}

/**
 * Generate an randomly sorted array of numbers.
 * @param {number} length - The length of the array to generate.
 */
function getRandomInput(length = 10) {
  const arr = [...range(0, length)];
  shuffle(arr);
  return arr;
}

module.exports = {
  getRandomInput,
  trace,
};
