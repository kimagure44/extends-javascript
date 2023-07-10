require('../src/index.js');

describe('Array.prototype.$last', () => {
  test('debe devolver el último elemento de un array no vacío', () => {
    const array = [1, 2, 3];
    const resultado = array.$last();
    expect(resultado).toBe(3);
  });

  test('debe devolver undefined para un array vacío', () => {
    const array = [];
    const resultado = array.$last();
    expect(resultado).toBeUndefined();
  });

  test('debe devolver undefined para un array con el último elemento como undefined', () => {
    const array = [1, 2, undefined];
    const resultado = array.$last();
    expect(resultado).toBeUndefined();
  });

  test('debe devolver null para un array con el último elemento como null', () => {
    const array = [1, 2, null];
    const resultado = array.$last();
    expect(resultado).toBeNull();
  });

  test('debe devolver el último elemento objeto en un array', () => {
    const array = [{ nombre: 'Juan' }, { nombre: 'María' }, { nombre: 'Pedro' }];
    const resultado = array.$last();
    expect(resultado).toEqual({ nombre: 'Pedro' });
  });

  test('debe devolver el último número en un array', () => {
    const array = [10, 20, 30];
    const resultado = array.$last();
    expect(resultado).toBe(30);
  });

  test('debe devolver la última letra en un array de letras', () => {
    const array = ['a', 'b', 'c'];
    const resultado = array.$last();
    expect(resultado).toBe('c');
  });
});