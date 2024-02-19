/* eslint-disable */
import { strict as assert } from 'assert';

// Generic classes offer the ability to define a class that can work with a
// variety of different data types. By using generic type parameters, you can
// create a single class that can be customized to work with any type of data
// that you need.
//
// Similarly to generic functions, generic classes allow you to write more
// flexible and reusable code, since you don't have to create a separate class
// for every possible data type.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes

class Stack<T> {
  private elements: T[] = [];
  public push(element: T): void {
    this.elements.push(element);
  }
  public pop(): T | undefined {
    return this.elements.pop();
  }
  public peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }
  public isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

// a stack of strings
const strings = new Stack<string>();
strings.push('hello');

// always use <type> annotation in generic classes to get appropriate feedback from typescript
const anything = new Stack();
anything.push('world');
anything.push(42);
