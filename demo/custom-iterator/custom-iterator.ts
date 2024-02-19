/* eslint-disable */
import { strict as assert } from 'assert';

// Useful links:
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

// write a generator function that yields values for a custom iterator
// function* instead of function for generator functions
// use keyword 'yield' to return values
function* genValues(): Generator<number> {
  yield 1;
  yield 2;
  yield 3;
}

const values = genValues();

// get the next values by calling the next method and accessing the value property
assert.equal(values.next().value, 1);
assert.equal(values.next().value, 2);
assert.equal(values.next().value, 3);
// the generator function has no more values to yield and returns undefined
assert.equal(values.next().value, undefined);

class Range implements Iterable<number> {
  private readonly start: number;
  private readonly end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  // define a custom iterator by implementing the Symbol.iterator method
  *[Symbol.iterator](): Generator<number> {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);

// iterate over the range of numbers using a for...of loop
for (const num of range) {
  console.log(num);
}
