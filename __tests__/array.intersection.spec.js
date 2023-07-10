require('../src/index.js');

describe('Array.prototype.$intersection', () => {
  test('debería retornar un nuevo array con los elementos comunes a todos los arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3, 4, 5];
    const arr3 = [3, 4, 5, 6];
    const resultado = arr1.$intersection(arr2, arr3);
    expect(resultado).toEqual([3, 4]);
  });

  test('debería retornar un array vacío si no hay elementos comunes', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const resultado = arr1.$intersection(arr2);
    expect(resultado).toEqual([]);
  });

  test('debería retornar el mismo array si no se pasan otros arrays', () => {
    const arr = [1, 2, 3];
    const resultado = arr.$intersection();
    expect(resultado).toEqual([1, 2, 3]);
  });
});
