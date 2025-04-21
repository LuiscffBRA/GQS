const { somar, subtrair } = require('./calculadora');

test('soma 5 + 3 e retorna 8', () => {
  expect(somar(5, 3)).toBe(8);
});

test('subtrai 10 - 4 e retorna 6', () => {
  expect(subtrair(10, 4)).toBe(6);
});
