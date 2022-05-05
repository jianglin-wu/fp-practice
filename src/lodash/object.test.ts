import * as _ from 'lodash';

test('get', () => {
  const a = {
    b: 1,
  };
  expect(_.get(a, 'b')).toBe(1);
  expect(_.get(a, 'c')).toBe(undefined);
  expect(_.get(a, 'd', 0)).toBe(0);
});
