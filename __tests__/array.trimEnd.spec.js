require('../src/index.js');

describe('Array.prototype.$trimEnd', () => {
  test('debería retornar un nuevo array con los elementos finales removidos mientras se cumpla la condición', () => {
    const arr = [1, 2, 3, 0, 0, 0];
    const callback = (item) => item === 0;
    const resultado = arr.$trimEnd(callback);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debería retornar el mismo array si no se cumplen las condiciones', () => {
    const arr = [1, 2, 3];
    const callback = (item) => item === 0;
    const resultado = arr.$trimEnd(callback);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debería retornar un nuevo array vacío si todos los elementos finales cumplen la condición', () => {
    const arr = [0, 0, 0];
    const callback = (item) => item === 0;
    const resultado = arr.$trimEnd(callback);
    expect(resultado).toEqual([]);
  });

  test('debería retornar el mismo array si el array original está vacío', () => {
    const arr = [];
    const callback = (item) => item === 0;
    const resultado = arr.$trimEnd(callback);
    expect(resultado).toEqual([]);
  });
});
