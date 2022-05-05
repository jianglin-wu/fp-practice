import * as _ from 'lodash';

test('[chian] get array object property', () => {
  const arr = [
    {
      id: '1',
      count: 20299,
    },
    {
      id: '2',
      count: 97961,
    },
    {
      id: '3',
    },
  ];
  const ids = _.chain(arr).map(_.property('id')).value();
  expect(ids).toEqual(['1', '2', '3']);

  const undefinedItems = _.chain(arr).map(_.property('unknown')).value();
  expect(undefinedItems).toEqual([undefined, undefined, undefined]);

  const countItems = _.chain(arr).map(_.property('count')).value();
  expect(countItems).toEqual([20299, 97961, undefined]);
});
