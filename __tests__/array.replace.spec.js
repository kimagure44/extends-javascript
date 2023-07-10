require('../src/index.js');

describe('Array.prototype.$replace', () => {
  test('debería reemplazar correctamente los valores en el array', () => {
    const arr = [1, 2, 3, 4, 5];
    const searchValue = 3;
    const replaceValue = 6;
    const result = arr.$replace(searchValue, replaceValue);
    expect(result).toEqual([1, 2, 6, 4, 5]);
  });

  test('debería mantener el array original sin cambios si el valor de búsqueda no se encuentra', () => {
    const arr = [1, 2, 3, 4, 5];
    const searchValue = 6;
    const replaceValue = 10;
    const result = arr.$replace(searchValue, replaceValue);
    expect(result).toEqual([1, 2, 3, 4, 5]);
    expect(result).toStrictEqual(arr);
  });

  test('debería manejar arrays vacíos', () => {
    const arr = [];
    const searchValue = 1;
    const replaceValue = 10;
    const result = arr.$replace(searchValue, replaceValue);
    expect(result).toEqual([]);
    expect(result).toStrictEqual(arr);
  });

  test('debería reemplazar todos los valores coincidentes en el array', () => {
    const arr = [1, 2, 1, 3, 1, 4];
    const searchValue = 1;
    const replaceValue = 10;
    const result = arr.$replace(searchValue, replaceValue);
    expect(result).toEqual([10, 2, 10, 3, 10, 4]);
  });
});
