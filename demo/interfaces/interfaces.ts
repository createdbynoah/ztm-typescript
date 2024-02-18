/* eslint-disable */
import { strict as assert } from 'assert';

// Interfaces provide a way to define the shape of objects or classes. They
// define the contracts that objects must follow, specifying the properties and
// methods that an object must have. Interfaces make it easier to write
// type-safe code by providing a way to ensure that objects are of the correct
// shape before they are used in a program. They also allow for code to be more
// modular and reusable, since objects can be easily swapped out as long as
// they adhere to the interface's contract.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

interface Area {
  area(): number;
}

interface Perimeter {
  perimeter(): number;
}

class Rectangle implements Area, Perimeter {
  length: number = 1;
  width: number = 1;

  area(): number {
    return this.length * this.width;
  }

  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}

// merge interfaces with a type alias, use '&'
type AreaAndPerimeter = Area & Perimeter;

class Circle implements AreaAndPerimeter {
  radius: number = 4;

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const r = new Rectangle();

const c = new Circle();

const objectsWithArea: Area[] = [r, c];

for (const obj of objectsWithArea) {
  // cannot access other properties or methods besides area() because the type is Area
  console.log(obj.area());
}

interface CustomerInfo {
  name: string;
  age: number;
}

class Customer implements CustomerInfo {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// prefer interfaces instead of type aliases for objects
interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

function printAddress(address: Address): void {
  console.log(
    `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  );
}

const address = {
  street: '123 Main St',
  city: 'Springfield',
  state: 'IL',
  zip: '62701',
};

printAddress(address);
