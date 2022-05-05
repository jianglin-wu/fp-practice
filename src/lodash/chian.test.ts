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

test('chain count sum', () => {
  const arr = [
    {
      count: 3,
      name: '1',
    },
    {
      count: 3,
      name: '1',
    },
    {
      count: 2,
      name: '2',
    },
    {
      count: 5,
      name: '3',
    },
    {
      count: 10,
      name: '2',
    },
  ];

  const data = _.chain(arr)
    .groupBy(_.property('name'))
    .map((items) => ({
      name: _.chain(items).head().get('name').value(),
      count: _.sumBy(items, _.property('count')),
    }))
    .value();
  expect(data).toEqual([
    {
      name: '1',
      count: 6,
    },
    {
      name: '2',
      count: 12,
    },
    {
      name: '3',
      count: 5,
    },
  ]);
});
