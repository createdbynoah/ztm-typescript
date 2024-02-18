/* eslint-disable */

// Iterators offer a way to traverse the elements of a collection one by one.
// The purpose of iterators is to provide a standard way for accessing and
// iterating over collections, such as arrays or maps, in a language-agnostic
// way. Using iterators, you can iterate over collections in a loop without
// having to worry about the underlying implementation of the collection.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

const abc = ['a', 'b', 'c'];

// c-style for loop, should RARELY be used
for (let i = 0; i < abc.length; i++) {
  console.log(abc[i]);
}

// for-of loop, used for arrays and other iterables
for (const letter of abc) {
  console.log(letter);
}

const nums = {
  one: 1,
  two: 2,
  three: 3,
};

// for-in loop, used for iterating over object properties
for (const key in nums) {
  console.log(key, nums[key]);
}

// for-in loop with type annotations
let property: keyof typeof nums;

// calculated at runtime!!
for (property in nums) {
  console.log(property, nums[property]);
}

// adding a property to existing object at runtime can cause issues
nums['four'] = 'four';

// will cause unexpected behavior with 'four' property being a string
for (property in nums) {
  const answer = nums[property] * 2;
  console.log(answer);
}
