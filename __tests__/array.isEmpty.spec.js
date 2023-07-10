require('../src/index.js');

describe('Array.prototype.$isEmpty', () => {
  test('debería devolver true para un array vacío', () => {
    const arr = [];
    expect(arr.$isEmpty()).toBe(true);
  });

  test('debería devolver false para un array con elementos', () => {
    const arr = [1, 2, 3];
    expect(arr.$isEmpty()).toBe(false);
  });

  test('debería devolver true para un array que ha sido vaciado', () => {
    let arr = [1, 2, 3];
    arr = arr.filter(() => false);
    expect(arr.$isEmpty()).toBe(true);
  });

  test('debería devolver true para un array con elementos falsy', () => {
    const arr = [0, false, null, undefined, '', NaN];
    expect(arr.$isEmpty()).toBe(true);
  });

  test('debería manejar arrays con un solo elemento', () => {
    const arr = [42];
    expect(arr.$isEmpty()).toBe(false);
  });
});
