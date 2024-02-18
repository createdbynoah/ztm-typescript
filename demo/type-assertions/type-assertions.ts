/* eslint-disable */
import { strict as assert } from 'assert';

// Type assertions allow you to tell the compiler that a value should be
// considered a certain type, even if TypeScript cannot infer the type
// automatically. You can use type assertions to help the compiler recognize
// the types of variables, function return types, and more. When using type
// assertions, be sure to only assert types that are actually correct, as
// asserting an incorrect type can lead to runtime errors in your code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

const greeting: unknown = 'Hello, world!';

// type assertion using 'as', from here on greeting is treated as a string
const greet = greeting as string;

// type assertion using angle-bracket syntax
const greet2 = <string>greeting;

// perform type assertion inline and use the typed value immediately
const numChars = (greet as string).length;

interface Employee {
  position(): string;
}

class Manager implements Employee {
  position(): string {
    return 'manager';
  }
  sayHello(): void {
    console.log('Hello!');
  }
}

class Developer implements Employee {
  position(): string {
    return 'developer';
  }
  writeCode(): void {
    console.log('Writing code...');
  }
}

// alice and bob will only have access to the methods defined in the Employee interface if typed as Employee even though they are instances of Manager and Developer
const alice: Employee = new Manager();
const bob: Employee = new Developer();

// type assertion to access methods not in the interface
const aliceAsManager = alice as Manager;
