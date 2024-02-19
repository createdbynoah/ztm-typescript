/* eslint-disable */

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions

type Rgb = 'red' | 'green' | 'blue';
const red: Rgb = 'red';

{
  // `as const` can be used to create readonly values in your code.
  // Color is still an array, but does not allow access to methods that modify the array.
  const Color = ['red', 'green', 'blue'] as const;
  type Color = (typeof Color)[number];
  const blue: Color = 'blue';

  // you can iterate over the values of a const assertion, which is not possible with union types
  for (const c of Color) {
    console.log(c);
  }
}

{
  // using `as const` with an object
  const Department = {
    Executive: 'top floor',
    Sales: 'middle floor',
    Warehouse: 'bottom floor',
  } as const;
  type Department = (typeof Department)[keyof typeof Department];

  // you can iterate over the values of a const assertion, which is not possible with union types
  let k: keyof typeof Department;
  for (k in Department) {
    console.log(k, Department[k]);
  }
}
