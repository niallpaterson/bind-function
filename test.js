const it = require('ava');
const bind = require('./index.js');

it('should return function if fully bound (i.e., passed an argument for each parameter)', (t => {
  const testFunc = (a, b , c) => [a, b, c];
  const fullyBound = bind(testFunc, 1, 2, 3);
  t.assert(typeof fullyBound === 'function');
  t.pass();
}));

it('should return value if fully bound then called', (t) => {
  const testFunc = (a, b , c) => c;
  const testFullBinding = bind(testFunc, 1, 2, 3);
  t.assert(testFullBinding() === 3);
  t.pass();
})

it('should return function if partially bound', (t) => {
  const testFunc = (a, b , c) => c;
  const testPartialBinding = bind(testFunc, 1, 2);
  t.assert(typeof testPartialBinding === 'function');
  t.pass();
})

it('should return value if partially bound then fully bound and called', (t) => {
  const testFunc = (a, b , c) => c;
  const partiallyBound = bind(testFunc, 1, 2);
  const called = partiallyBound(3);
  t.assert(called === 3);
  t.pass();
})
