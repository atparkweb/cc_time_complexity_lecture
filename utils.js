function* range(start, end, step = 1) {
  let current = start;
  while (current < end) {
    yield current;
    current += step;
  }
}

function trace(input, counter) {
  return `len: ${input.length}, time: ${counter.count}`;
}

export {
  range,
  trace
};