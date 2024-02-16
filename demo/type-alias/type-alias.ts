/* eslint-disable */
import { strict as assert } from 'assert';

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type PersonName = string; // anything typed as 'PersonName' will be a string

const myName: PersonName = 'Noah';
const alsoMyName: string = 'Noah';

// bad
function print(thing: string) {
  console.log(`Name is ${thing}`);
}

// good
function printName(name: PersonName) {
  console.log(`Name is ${name}`);
}
