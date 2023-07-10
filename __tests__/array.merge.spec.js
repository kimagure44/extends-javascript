require('../src/index.js');

describe('Array.prototype.$merge', () => {
  test('debe fusionar dos arrays de elementos', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('debe fusionar dos arrays de objetos', () => {
    const array1 = [{ nombre: 'Juan' }, { nombre: 'María' }];
    const array2 = [{ nombre: 'Pedro' }, { nombre: 'Ana' }];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([
      { nombre: 'Juan' },
      { nombre: 'María' },
      { nombre: 'Pedro' },
      { nombre: 'Ana' },
    ]);
  });

  test('debe fusionar un array de elementos y un array de objetos', () => {
    const array1 = [1, 2];
    const array2 = [{ nombre: 'María' }, { nombre: 'Pedro' }];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([
      1,
      2,
      { nombre: 'María' },
      { nombre: 'Pedro' },
    ]);
  });

  test('debe fusionar varios arrays', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [5, 6];
    const resultado = array1.$merge(array2, array3);
    expect(resultado).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('debe devolver el array original si no se proporcionan arrays adicionales', () => {
    const array = [1, 2, 3];
    const resultado = array.$merge();
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debe fusionar un array vacío', () => {
    const array1 = [1, 2, 3];
    const array2 = [];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debe fusionar un array de elementos y un array vacío', () => {
    const array1 = [1, 2, 3];
    const array2 = [];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debe fusionar un array vacío y un array de objetos', () => {
    const array1 = [];
    const array2 = [{ nombre: 'Juan' }, { nombre: 'María' }];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([{ nombre: 'Juan' }, { nombre: 'María' }]);
  });

  test('debe fusionar varios arrays, incluyendo un array vacío y un objeto', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const array3 = [];
    const array4 = { nombre: 'Juan' };
    const resultado = array1.$merge(array2, array3, array4);
    expect(resultado).toEqual([1, 2, 3, 4, { nombre: 'Juan' }]);
  });

  test('debe fusionar un array con undefined y null', () => {
    const array1 = [1, 2];
    const array2 = [undefined, null];
    const resultado = array1.$merge(array2);
    expect(resultado).toEqual([1, 2, undefined, null]);
  });
});