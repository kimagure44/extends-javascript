require('../src/index.js');

describe('Array.prototype.$padStart', () => {
  test('debería retornar un nuevo array con elementos añadidos al inicio si el tamaño es menor al especificado', () => {
    const arr = [1, 2, 3];
    const length = 6;
    const value = 0;
    const resultado = arr.$padStart(length, value);
    expect(resultado).toEqual([0, 0, 0, 1, 2, 3]);
  });

  test('debería retornar el mismo array si el tamaño es igual o mayor al especificado', () => {
    const arr = [1, 2, 3];
    const length = 3;
    const value = 0;
    const resultado = arr.$padStart(length, value);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debería retornar un nuevo array con elementos añadidos al inicio si el array original está vacío', () => {
    const arr = [];
    const length = 5;
    const value = 'a';
    const resultado = arr.$padStart(length, value);
    expect(resultado).toEqual(['a', 'a', 'a', 'a', 'a']);
  });
});
