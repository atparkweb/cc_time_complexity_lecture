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
  return `len: ${size}, steps: ${cost}`;
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

function getRandomInput(size = 10) {
  const arr = [...range(0, size)];
  shuffle(arr);
  return arr;
}

export {
  trace,
  getRandomInput
};
