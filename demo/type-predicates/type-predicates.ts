/* eslint-disable */
import { strict as assert } from 'assert';

// Type predicates offer a way to determine the type of data based on a
// condition. This is achieved by defining a function that takes a some data as
// an argument, applies type guards, and returns a boolean indicating whether
// the data is a specific type. The function is then used to narrow down the
// type of the variable in subsequent code. Type predicates are useful when
// dealing with union types or other situations where the type of a variable
// may not be known at compile-time. Type predicates allow the type to be
// determined correctly which avoids runtime errors.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

type NumberOrString = number | string;

// type guard
function sample(data: NumberOrString) {
  // type guard to handle each type possibility
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  } else if (typeof data === 'number') {
    console.log(data.toFixed());
  }
}

interface Square {
  kind: 'square';
  size: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

// type predicate               this is the predicate
function isSquare(shape: Shape): shape is Square {
  // when 'shape' is a square, run this code
  return shape.kind === 'square';
}

function isCircle(shape: Shape): shape is Circle {
  // when 'shape' is a circle, run this code
  return shape.kind === 'circle';
}

function area(shape: Shape): number {
  // type guard using the type predicate
  if (isSquare(shape)) {
    return shape.size ** 2;
  }
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }
  // if shape is neither a square nor a circle
  throw new Error('Unknown shape');
}

const square: Shape = { kind: 'square', size: 10 };
const circle: Shape = { kind: 'circle', radius: 2 };
