/* eslint-disable */
import { strict as assert } from 'assert';

// A `Map` is a data structure that allows you to store data in a key-value
// pair format. Keys in a map must be unique, and each key can map to only one
// value. You can use any type of value as the key, including objects and
// functions. Maps are useful when you want to quickly access data and you are
// able to maintain the key in memory. In situations where you have to search
// (you don't have a key) for the data you need, a difference data structure
// would be more appropriate.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Create a new map   <KEY,   VALUE>
const testScores1: Map<string, number> = new Map();

type Name = string;
type Score = number;

const testScores: Map<Name, Score> = new Map();

testScores.set('Alice', 96);
testScores.set('Bob', 88);
testScores.set('Charlie', 92);

// iterate through map like array with for...of loop
//          [KEY, VALUE]
for (const [name, score] of testScores) {
  console.log(`${name} scored ${score}`);
}

// order is not guaranteed in maps when iterating

// delete a key-value pair
testScores.delete('Bob');

// check if a key exists
testScores.has('Bob'); // false

// iterate over keys
for (const name of testScores.keys()) {
  console.log(name);
}

// iterate over values
for (const score of testScores.values()) {
  console.log(score);
}

// reset the map
testScores.clear();
