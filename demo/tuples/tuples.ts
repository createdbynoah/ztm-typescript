/* eslint-disable */
import { strict as assert } from 'assert';

// Tuples provide a way to express an array with a fixed number of elements of
// different types, creating a data structure with multiple different types.
// They can be especially handy when dealing with scenarios such as
// representing coordinates, storing key-value pairs, or returning multiple
// values from a function. Since they are type-checked, TypeScript can ensure
// that the values in the tuple are correct at compile time.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

type Title = string;
type PublishYear = number;

type Book = [Title, PublishYear];

const sampleBook: Book = ['The Hobbit', 1937];

// destructuring a tuple
const [title, year] = sampleBook;

// accessing a tuple by index
const title2 = sampleBook[0];

// returning a tuple from a function
function coord(): [number, number] {
  return [10, 20];
}

// array of tuples
const multi: [number, number][] = [
  [10, 20],
  [30, 40],
  [50, 60],
];
