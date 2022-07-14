const prompt = require('prompt-sync')({ sigint: true });
const constant = require('./src/constant');
const linear = require('./src/linear');
const quadratic = require('./src/quadratic');
const logarithmic = require('./src/logarithmic');

function start() {
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

  switch(options[choice]) {
    case 'constant':
      constant.run();
      break;
    case 'linear':
      linear.run();
      break;
    case 'quadratic':
      quadratic.run();
      break;
    case 'logarithmic':
      logarithmic.run();
      break;
    default:
      throw new Error('Invalid choice: ' + choice);
  }
}

start();