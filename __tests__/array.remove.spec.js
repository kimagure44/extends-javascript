require('../src/index.js');

describe('Array.prototype.$remove', () => {
  test('debería eliminar el elemento especificado del array', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 3;
    const result = arr.$remove(element);
    expect(result).toHaveLength(arr.length - 1);
    expect(result).not.toContain(element);
  });

  test('debería eliminar todas las ocurrencias del elemento especificado del array', () => {
    const arr = [1, 2, 3, 4, 3, 5];
    const element = 3;
    const result = arr.$remove(element);
    expect(result).toHaveLength(arr.length - 2);
    expect(result).not.toContain(element);
  });

  test('debería devolver un nuevo array sin modificar el array original', () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 3;
    const result = arr.$remove(element);
    expect(result).not.toBe(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('debería manejar arrays con un solo elemento', () => {
    const arr = [42];
    const element = 42;
    const result = arr.$remove(element);
    expect(result).toHaveLength(0);
  });

  test('debería manejar arrays vacíos', () => {
    const arr = [];
    const element = 42;
    const result = arr.$remove(element);
    expect(result).toEqual([]);
  });
});
