require('../src/index.js');

describe('Array.prototype.$notDuplicated', () => {
  test('debe eliminar elementos duplicados de un array de números', () => {
    const array = [1, 2, 3, 4, 3, 2, 1];
    const resultado = array.$notDuplicated();
    expect(resultado).toEqual([1, 2, 3, 4]);
  });

  test('debe eliminar elementos duplicados de un array de strings', () => {
    const array = ['a', 'b', 'c', 'b', 'a'];
    const resultado = array.$notDuplicated();
    expect(resultado).toEqual(['a', 'b', 'c']);
  });

  test('debe mantener el orden original de los elementos', () => {
    const array = [3, 2, 1, 4, 2, 3, 1];
    const resultado = array.$notDuplicated();
    expect(resultado).toEqual([3, 2, 1, 4]);
  });

  test('debe devolver un nuevo array sin modificar el original', () => {
    const array = [1, 2, 3, 4];
    const resultado = array.$notDuplicated();
    expect(resultado).toEqual([1, 2, 3, 4]);
    expect(resultado).not.toBe(array);
  });
});