require('../src/index.js');

describe('Array.prototype.$reverse', () => {
  test('debería invertir correctamente el orden del array', () => {
    const arr = [1, 2, 3, 4, 5];
    const reversedArr = arr.$reverse();
    expect(reversedArr).toEqual([5, 4, 3, 2, 1]);
  });

  test('no debería modificar el array original', () => {
    const arr = [1, 2, 3, 4, 5];
    const originalArr = [...arr];
    arr.$reverse();
    expect(arr).toEqual(originalArr);
  });

  test('debería manejar un array vacío', () => {
    const arr = [];
    const reversedArr = arr.$reverse();
    expect(reversedArr).toEqual([]);
  });

  test('debería manejar un array con un solo elemento', () => {
    const arr = [42];
    const reversedArr = arr.$reverse();
    expect(reversedArr).toEqual([42]);
  });
});
