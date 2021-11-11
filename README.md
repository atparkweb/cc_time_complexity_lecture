# Time Complexity Analysis in Code

Example code to demonstrate basic time complexity analysis.

## Utilities
Use the `Counter` class to demonstrate operation counting and how it relates to time complexity.

```
const counter = new Counter();
counter.inc(); // one operation by default
counter.inc(3); // three operations
```

Use the `range` generator function to quickly build large arrays.

```
// a list of 100,000 consecutive integers.
const largeArray = [...range(0, 100000)] 
```

## Live Demo
I recommend using [Quokka](https://quokkajs.com/) to show the input length and time values inline with the function calls. This makes it easier to show students how the input size and time are related and how that grow.

1. Demonstrate linear complexity by counting operations in the `linear.js` file and outputing the length and time result (`trace`);
  a. Count iterations of the for loop
  b. Run the function with larger inputs
2. Demonstrate constant time complexity function in the `constant.js` file
3. Demonstrate quadratic time complexity function in the `quadratic.js` file
4. Demonstrate log time complexity function in the `logarithmic.js` file