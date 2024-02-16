/* eslint-disable */
import { strict as assert } from 'assert';

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

const myName = 'Noah';
const amount = 2 + 2;
const hello = `Hello, ${myName}!`;
const powerLevel = 9000n + 1n;
const yes = true;

// can type function returns by adding [: type] after the signature
function sum(lhs: number, rhs: number): number {
  // type of total is inferred from the return type
  const total = lhs + rhs;
  return total;
}

const one = sum(1, 0);
console.log(one);

const two = sum(1, 1);
console.log(two);
