require('../src/index.js');

describe('Array.prototype.$findIndex', () => {
  test('debería retornar el índice del primer elemento que cumple con la condición', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = (elemento) => elemento % 2 === 0;
    const resultado = arr.$findIndex(callback);
    expect(resultado).toBe(1);
  });

  test('debería retornar -1 si ningún elemento cumple con la condición', () => {
    const arr = [1, 3, 5];
    const callback = (elemento) => elemento % 2 === 0;
    const resultado = arr.$findIndex(callback);
    expect(resultado).toBe(-1);
  });
});
