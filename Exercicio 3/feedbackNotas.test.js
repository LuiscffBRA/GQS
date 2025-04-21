const { notaFaltante } = require('./feedbackNotas');

test('aluno precisa de 15 para média 60 tendo 45', () => {
  expect(notaFaltante(45, 60)).toBe(15);
});

test('aluno já tem a média necessária', () => {
  expect(notaFaltante(75, 60)).toBe(0);
});

test('nota inicial negativa lança erro', () => {
  expect(() => notaFaltante(-10, 60)).toThrow('Notas não podem ser negativas');
});

test('média negativa lança erro', () => {
  expect(() => notaFaltante(50, -20)).toThrow('Notas não podem ser negativas');
});
