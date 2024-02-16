/* eslint-disable */

import { some } from 'core-js/core/array';

// A variable is a named memory location that can hold a value. Variables can
// be used to store a wide range of data types, such as numbers, strings, and
// arrays. A variable is declared by specifying its name, data type, and
// optionally an initial value. Once a variable is declared, it can be read
// potentially updated in other parts of the program.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let-declarations

const courseName = 'typescript';
const courseName2 = 'typescript';
const courseName3 = `typescript`;

const amount = 10;
const fraction = 10.5;

const onThousand = 1e3; // 1000

const allPermissions = 0o777; // octal 511

const hexByte = 0xff; // hexadecimal 255
const binary = 0b0110; // binary 6

const bigInt = 9000n; // bigint

const isTrue = true;
const isFalse = false;

const missing = undefined; // completely missing
const empty = null; // we know it's missing

let someNum = 10;
someNum = 20;

// block scope useful for writing tests
{
  let someNum = 30;
  // test code
}
{
  let someNum = 40;
  // test code
}
{
  let someNum = 50;
  // test code
}

// uninitialized variable
let uninitialized;

uninitialized = 'hi';
uninitialized = 'hello';

// const whoops; // error: missing initializer
