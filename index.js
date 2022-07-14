const prompt = require('prompt-sync')({ sigint: true });

let choice;
const options = {
  a: 'constant',
  b: 'linear',
  c: 'quadratic',
  d: 'logarithmic'
};

const labels = Object.keys(options);

while (!labels.includes(choice)) {
  console.log('Pick a time complexity:');
  for (let key in options) {
    console.log(`${key}) ${options[key]}`);
  }
  choice = prompt('Which time complexity? ');
}

console.log(`Your choice is ${options[choice]}`);
