require('../src/index.js');

describe('Array.prototype.$symmetricDifference', () => {
  test('debería retornar un nuevo array con los elementos que están en uno de los arrays pero no en ambos', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const resultado = arr1.$symmetricDifference(arr2);
    expect(resultado).toEqual([1, 4]);
  });

  test('debería retornar un nuevo array vacío si los arrays son iguales', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const resultado = arr1.$symmetricDifference(arr2);
    expect(resultado).toEqual([]);
  });

  test('debería retornar el mismo array si el otro array está vacío', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [];
    const resultado = arr1.$symmetricDifference(arr2);
    expect(resultado).toEqual([1, 2, 3]);
  });
});
