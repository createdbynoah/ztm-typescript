/* eslint-disable */
import { strict as assert } from 'assert';

// Classes are a way to define blueprints for objects. They encapsulate data
// and behavior and can be used to create instances of objects with predefined
// properties and methods. Classes can be extended and inherited, allowing for
// the creation of complex object hierarchies.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/classes.html

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  translate(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }
}

const p = new Point(10, 20);
p.translate(-5, -15);
