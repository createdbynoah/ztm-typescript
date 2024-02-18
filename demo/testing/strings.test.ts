// test filename should have the same name with the prefix `.test.ts`

import { concat, div, failedString, slowString } from './strings';

it('should say "hello world"', () => {
  expect(concat('hello', ' world')).toEqual('hello world');
});

it('should divide 10 by 2', () => {
  expect(div(10, 2)).toEqual(5);
});

it('should throw an error when dividing by zero', () => {
  expect(() => div(10, 0)).toThrow();
});

test('slowString fetches sample text', async () => {
  slowString()
    .then((data) => {
      expect(data).toEqual('sample');
    })
    .catch((err) => {
      expect(err).toBeUndefined();
    });
});

test('failedString fails with "whoops"', async () => {
  failedString()
    .then((data) => {
      expect(data).toBeUndefined();
    })
    .catch((err) => {
      expect(err).toEqual('whoops');
    });
});
