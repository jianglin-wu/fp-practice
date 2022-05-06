import * as _ from 'lodash';

test('difference', () => {
  const a = [1, 2, 3, 4, 5];
  expect(_.difference(a, [2, 4])).toEqual([1, 3, 5]);
  expect(a.length).toBe(5);
});

test('differenceBy', () => {
  const a = [1, 2, 3, 4, 5];
  expect(_.differenceBy(a, [2, 4], (n) => n % 2)).toEqual([1, 3, 5]);
  expect(a.length).toBe(5);
});

test('differenceWith', () => {
  const a = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  expect(
    _.differenceWith(a, [2, 4], (sourceItem, conditionItem) => {
      return sourceItem.id === conditionItem;
    }),
  ).toEqual([{ id: 1 }, { id: 3 }, { id: 5 }]);
  expect(a.length).toBe(5);
});

test('nth', () => {
  const a = [1, 2, 3, 4, 5];
  expect(_.nth(a, 0)).toBe(1);
  expect(_.nth(a, 2)).toBe(3);
  expect(_.nth(a, 5)).toBe(undefined);
  expect(_.nth(a, -2)).toBe(4);
  expect(a).toEqual([1, 2, 3, 4, 5]);
});

test('slice', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.slice(a, 1, 3)).toEqual([2, 3]);
  expect(a).toEqual([1, 2, 3, 4, 5, 3]);
  expect(a.length).toBe(6);

  expect(_.slice([1, 2, 3], 5)).toEqual([]);
  expect(_.slice([1, 2, 3], -2)).toEqual([2, 3]);
});
