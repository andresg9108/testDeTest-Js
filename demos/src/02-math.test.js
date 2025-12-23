const {
  sum,
  multiply,
  divide
} = require('./02-math');

test('Should be 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});

test('Should be 20', () => {
  const rta = multiply(5, 4);
  expect(rta).toBe(20);
});

test('Should divide', () => {
  const rta = divide(20, 4);
  expect(rta).toBe(5);
  const rta2 = divide(6, 3);
  expect(rta2).toBe(2);
});

test('Should divide for zero', () => {
  const rta = divide(5, 0);
  expect(rta).toBeNull();
  const rta2 = divide(8, 0);
  expect(rta2).toBeNull();
});
