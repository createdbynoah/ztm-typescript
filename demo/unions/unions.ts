/* eslint-disable */

// Union types allows you to declare a variable or parameter that can hold
// multiple types of value and are declared using the pipe symbol (|) between
// the types. Union types can be useful when you want something to accept
// multiple types of input.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// variable with type Color can only be 'red', 'green', or 'blue'
type Color = 'red' | 'green' | 'blue';

// can't mess it up because TypeScript will be checking the type
const r: Color = 'red';

function setBgColor(c: Color) {
  // type guard
  switch (c) {
    case 'red':
      break;
    case 'green':
      break;
    case 'blue':
      break;
  }
}

// setBgColor('purple'); // error: Argument of type 'purple' is not assignable to parameter of type 'Color'.

// union types can also be used with other types
type OneTwoThree = 1 | 2 | 3;

// union types can be composed of any types
type NumberOrString = number | string;

function sample(data: NumberOrString) {
  // type guard to handle each type possibility
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  } else if (typeof data === 'number') {
    console.log(data.toFixed());
  }
}

// both are valid
sample('hello');
sample(10);

// but this is invalid
// sample(true); // error: Argument of type 'true' is not assignable to parameter of type 'NumberOrString'.

// union types can also be used as return types for functions
// can replace the need for try catch blocks
function find(): string | undefined {
  return undefined;
}
