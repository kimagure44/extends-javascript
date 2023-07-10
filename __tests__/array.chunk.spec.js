require('../src/index.js');

describe('Array.prototype.$chunk', () => {
  test('debe dividir un array en trozos de tamaño 2', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const resultado = array.$chunk(2);
    expect(resultado).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('debe dividir un array en trozos de tamaño 3', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const resultado = array.$chunk(3);
    expect(resultado).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  test('debe devolver un único trozo para un tamaño de trozo igual al tamaño del array', () => {
    const array = [1, 2, 3, 4, 5];
    const resultado = array.$chunk(5);
    expect(resultado).toEqual([[1, 2, 3, 4, 5]]);
  });

  test('debe devolver un array vacío para un array vacío', () => {
    const array = [];
    const resultado = array.$chunk(2);
    expect(resultado).toEqual([]);
  });

  test('debe devolver el array original para un tamaño de trozo igual a cero', () => {
    const array = [1, 2, 3];
    const resultado = array.$chunk(0);
    expect(resultado).toEqual([1, 2, 3]);
  });
});