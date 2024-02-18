/* eslint-disable */

// You can define optional fields in your object types. Optional fields are
// fields that may or may not be present in an object. You can make a field
// optional by appending a question mark "?" to its name in the type
// definition. This is useful when you have an object with some properties that
// are not always required.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties

type Warranty = 'standard' | 'extended';

function warrantyInfo(warranty: Warranty): string {
  switch (warranty) {
    case 'standard':
      return '90 day warranty';
    case 'extended':
      return '1 year warranty';
  }
}

// Optional fields are defined by appending a question mark "?" to the field name
interface LineItem {
  name: string;
  quantity: number;
  // undefined if not present
  warranty?: Warranty;
}

function printLine(item: LineItem): void {
  console.log(`${item.name} x ${item.quantity}`);
  if (item.warranty) {
    console.log(`Warranty: ${warrantyInfo(item.warranty)}`);
  } else {
    console.log('No warranty');
  }
}

const boxFan: LineItem = {
  name: 'Box Fan',
  quantity: 2,
};

const heater: LineItem = {
  name: 'Space Heater',
  quantity: 1,
  warranty: 'standard',
};

printLine(boxFan);
printLine(heater);
