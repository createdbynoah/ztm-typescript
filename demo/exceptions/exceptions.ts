/* eslint-disable */

// Exceptions are a way to handle errors and unexpected behavior in your code.
// When an exception occurs, it interrupts the normal flow of the program and
// jumps to a predefined error-handling routine. Exceptions can be used to
// catch and handle errors in a way that doesn't crash the program or cause
// unexpected behavior. Exceptions are thrown using the `throw` keyword and
// caught using the `try...catch` statement.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error('Cannot divide by zero');
  }
  return x / y;
}

const a = divide(10, 2);
console.log(a);

// const b = divide(10, 0); // This will throw an exception
// console.log(b);

// To catch the exception, we can use a try...catch statement
try {
  const c = divide(10, 3);
  console.log(c);
} catch (e) {
  console.error(`${e}`);
} finally {
  console.log('This will always run, regardless of the exception.');
}
