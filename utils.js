function* range(start, end, step = 1) {
  let current = start;
  while (current < end) {
    yield current;
    current += step;
  }
}

function trace(size = 0, cost = 0) {
  return `len: ${size}, time: ${cost}`;
}

export {
  range,
  trace
};