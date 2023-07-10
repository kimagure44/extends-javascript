require('../src/index.js');

describe('Array.prototype.$findLast', () => {
  test('debería retornar el último elemento que cumple con la condición', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (elemento) => elemento % 2 === 0;
    const resultado = arr.$findLast(callback);
    expect(resultado).toBe(4);
  });

  test('debería retornar undefined si ningún elemento cumple con la condición', () => {
    const arr = [1, 3, 5];
    const callback = (elemento) => elemento % 2 === 0;
    const resultado = arr.$findLast(callback);
    expect(resultado).toBe(undefined);
  });
});
