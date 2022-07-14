/**
 * Generate a range of integers from start to end
 * @param {Number} start 
 * @param {Number} end 
 * @param {Number} step 
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
 * @param {Number} size 
 * @param {Number} cost 
 * @returns 
 */
function trace(size = 0, cost = 0) {
  return `len: ${size}, time: ${cost}`;
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
  const arr = [...range(0, 10000)];
  shuffle(arr);
  return arr;
}

export {
  trace,
  getRandomInput
};
