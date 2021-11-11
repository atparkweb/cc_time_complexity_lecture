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

export {
  range,
  trace
};