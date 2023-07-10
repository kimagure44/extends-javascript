require('../src/index.js');

describe('Array.prototype.$take', () => {
  test('debería retornar los primeros n elementos del array', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 3;
    const resultado = arr.$take(n);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test('debería retornar un array vacío si n es 0', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 0;
    const resultado = arr.$take(n);
    expect(resultado).toEqual([]);
  });

  test('debería retornar el array completo si n es mayor o igual que la longitud del array', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 6;
    const resultado = arr.$take(n);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });
});
