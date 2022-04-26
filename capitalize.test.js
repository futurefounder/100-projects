const capitalize = require('./capitalize');

test('Capitalize first letter in a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});