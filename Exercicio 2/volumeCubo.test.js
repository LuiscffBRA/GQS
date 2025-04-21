const { volumeCubo } = require('./volumeCubo');

test('volume de cubo com lado 3 deve ser 27', () => {
  expect(volumeCubo(3)).toBe(27);
});

test('volume de cubo com lado 2.5 deve ser 15.625', () => {
  expect(volumeCubo(2.5)).toBeCloseTo(15.625);
});

test('erro se lado é 0', () => {
  expect(() => volumeCubo(0)).toThrow('Lado deve ser maior que zero');
});

test('erro se lado é negativo', () => {
  expect(() => volumeCubo(-2)).toThrow('Lado deve ser maior que zero');
});

test('erro se lado não é número', () => {
  expect(() => volumeCubo("abc")).toThrow('Lado deve ser um número');
});
