require('../src/index.js');

describe('Array.prototype.$union', () => {
  test('debería retornar un nuevo array con los elementos únicos de todos los arrays combinados', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 4, 5];
    const resultado = arr1.$union(arr2, arr3);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  test('debería retornar el mismo array si no se pasan otros arrays', () => {
    const arr = [1, 2, 3];
    const resultado = arr.$union();
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debería manejar correctamente arrays vacíos', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const resultado = arr1.$union(arr2);
    expect(resultado).toEqual([1, 2, 3]);
  });
});
