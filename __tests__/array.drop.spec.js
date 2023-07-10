require('../src/index.js');

describe('Array.prototype.$drop', () => {
  test('debería retornar un nuevo array sin los primeros n elementos', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 2;
    const resultado = arr.$drop(n);
    expect(resultado).toEqual([3, 4, 5]);
  });

  test('debería retornar un array vacío si n es mayor o igual que la longitud del array', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 5;
    const resultado = arr.$drop(n);
    expect(resultado).toEqual([]);
  });

  test('debería retornar el array completo si n es 0', () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 0;
    const resultado = arr.$drop(n);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });
});
