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

test('pull', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.pull(a, 2, 3)).toEqual([1, 4, 5]);
  expect(a.length).toBe(3); // 此方法会改变原数组

  expect(_.pull([0, 2, 3, 4, 5, 3])).toEqual([0, 2, 3, 4, 5, 3]);
});

test('pullAll', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.pullAll(a, [2, 3])).toEqual([1, 4, 5]);
  expect(a.length).toBe(3); // 此方法会改变原数组

  expect(_.pullAll([0, 2, 3, 4, 5, 3])).toEqual([0, 2, 3, 4, 5, 3]);
});

test('pullAllBy', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.pullAllBy(a, [3], (n) => n % 2)).toEqual([2, 4]);
  expect(a.length).toBe(2);
  expect(_.pullAllBy([0, 2, 3, 4, 5, 3], [0], (n) => n % 2)).toEqual([3, 5, 3]);
});

test('pullAllWith', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.pullAllWith(a, [3], (a, b) => a % 2 === b % 2)).toEqual([2, 4]);
  expect(a.length).toBe(2); // 此方法会改变原数组

  expect(
    _.pullAllWith([0, 2, 3, 4, 5, 3], [0], (a, b) => a % 2 === b % 2),
  ).toEqual([3, 5, 3]);
});

test('pullAt', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.pullAt(a, 1, 2, 3, 10)).toEqual([2, 3, 4]);
  expect(a).toEqual([1, 5, 3]);
  expect(a.length).toBe(3); // 此方法会改变原数组
});

test('remove', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.remove(a, (n) => n % 2 === 0)).toEqual([2, 4]);
  expect(a).toEqual([1, 3, 5, 3]);
  expect(a.length).toBe(4); // 此方法会改变原数组
});

test('reverse', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.reverse(a)).toEqual([3, 5, 4, 3, 2, 1]);
  expect(a).toEqual([3, 5, 4, 3, 2, 1]); // 此方法会改变原数组
  expect(a.length).toBe(6);
});

test('slice', () => {
  const a = [1, 2, 3, 4, 5, 3];
  expect(_.slice(a, 1, 3)).toEqual([2, 3]);
  expect(a).toEqual([1, 2, 3, 4, 5, 3]); // 此方法不会改变原数组
  expect(a.length).toBe(6);

  expect(_.slice([1, 2, 3], 5)).toEqual([]);
  expect(_.slice([1, 2, 3], -2)).toEqual([2, 3]);
});
