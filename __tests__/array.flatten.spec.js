require('../src/index.js');

describe('Array.prototype.$flatten', () => {
  test('debería aplanar un array anidado', () => {
    const arr = [1, [2, [3, 4], 5], 6];
    const result = arr.$flatten();
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('debería aplanar un array con múltiples niveles de anidamiento', () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = arr.$flatten();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('debería manejar un array que ya está aplanado', () => {
    const arr = [1, 2, 3];
    const result = arr.$flatten();
    expect(result).toEqual([1, 2, 3]);
  });

  test('debería manejar un array vacío', () => {
    const arr = [];
    const result = arr.$flatten();
    expect(result).toEqual([]);
  });

  test('debería manejar un array con elementos que no son arrays', () => {
    const arr = [1, 'hello', { key: 'value' }, null];
    const result = arr.$flatten();
    expect(result).toEqual([1, 'hello', { key: 'value' }, null]);
  });
});
