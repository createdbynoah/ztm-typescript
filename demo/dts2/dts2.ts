/* eslint-disable */
import { strict as assert } from 'assert';

// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

import { apiResponse } from './mylib';

const response = apiResponse();

if (response !== undefined) {
  if (response.status === 'success') {
    console.log(response.data.items[1].name);
  }
}
