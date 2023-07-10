require('../src/index.js');

describe('Array.prototype.$insertIn', () => {
  test('debería insertar elementos en el índice especificado', () => {
    const arr = [1, 2, 3, 4];
    const elements = [5, 6];
    const index = 2;
    arr.$insertIn(index, ...elements);
    expect(arr).toEqual([1, 2, 5, 6, 3, 4]);
  });

  test('debería manejar la inserción de elementos al principio del array', () => {
    const arr = [1, 2, 3];
    const elements = [4, 5];
    const index = 0;
    arr.$insertIn(index, ...elements);
    expect(arr).toEqual([4, 5, 1, 2, 3]);
  });

  test('debería manejar la inserción de elementos al final del array', () => {
    const arr = [1, 2, 3];
    const elements = [4, 5];
    const index = arr.length;
    arr.$insertIn(index, ...elements);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('debería manejar la inserción de elementos en un array vacío', () => {
    const arr = [];
    const elements = [1, 2, 3];
    const index = 0;
    arr.$insertIn(index, ...elements);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('debería manejar la inserción de elementos sin modificar el array original', () => {
    const arr = [1, 2, 3];
    const elements = [4, 5];
    const index = 1;
    const result = arr.$insertIn(index, ...elements);
    expect(result).toBe(arr);
    expect(result).toEqual([1, 4, 5, 2, 3]);
  });
});
