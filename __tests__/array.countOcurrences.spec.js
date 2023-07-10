require('../src/index.js');

describe('Array.prototype.$countOccurrences', () => {
  test('debería devolver 0 para un array vacío', () => {
    const arr = [];
    const value = 5;
    expect(arr.$countOccurrences(value)).toBe(0);
  });

  test('debería devolver 0 cuando el valor no se encuentra en el array', () => {
    const arr = [1, 2, 3, 4, 5];
    const value = 6;
    expect(arr.$countOccurrences(value)).toBe(0);
  });

  test('debería contar las ocurrencias del valor en el array', () => {
    const arr = [1, 2, 2, 3, 4, 2, 5];
    const value = 2;
    expect(arr.$countOccurrences(value)).toBe(3);
  });

  test('debería manejar strings como valores', () => {
    const arr = ['apple', 'banana', 'apple', 'cherry', 'apple'];
    const value = 'apple';
    expect(arr.$countOccurrences(value)).toBe(3);
  });

  test('debería manejar arrays con un solo elemento', () => {
    const arr = [42];
    const value = 42;
    expect(arr.$countOccurrences(value)).toBe(1);
  });
});
