require('../src/index.js');

describe('Array.prototype.$mean', () => {
  test('debería devolver 0 para un array vacío', () => {
    const arr = [];
    expect(arr.$mean()).toBe(0);
  });

  test('debería calcular la media para un array de números', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.$mean()).toBe(3);
  });

  test('debería manejar números negativos', () => {
    const arr = [-5, 0, 5];
    expect(arr.$mean()).toBe(0);
  });

  test('debería manejar números con punto decimal', () => {
    const arr = [1.5, 2.5, 3.5];
    expect(arr.$mean()).toBeCloseTo(2.5);
  });

  test('debería manejar arrays con un solo elemento', () => {
    const arr = [42];
    expect(arr.$mean()).toBe(42);
  });
});
