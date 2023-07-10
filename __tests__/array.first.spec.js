require('../src/index.js');

describe('Array.prototype.$first', () => {
  test('debe devolver el primer elemento de un array no vacío', () => {
    const array = [1, 2, 3];
    const resultado = array.$first();
    expect(resultado).toBe(1);
  });

  test('debe devolver undefined para un array vacío', () => {
    const array = [];
    const resultado = array.$first();
    expect(resultado).toBeUndefined();
  });

  test('debe devolver undefined para un array con el primer elemento como undefined', () => {
    const array = [undefined, 2, 3];
    const resultado = array.$first();
    expect(resultado).toBeUndefined();
  });

  test('debe devolver null para un array con el primer elemento como null', () => {
    const array = [null, 2, 3];
    const resultado = array.$first();
    expect(resultado).toBeNull();
  });

  test('debe devolver el primer elemento objeto en un array', () => {
    const array = [{ nombre: 'Juan' }, { nombre: 'María' }, { nombre: 'Pedro' }];
    const resultado = array.$first();
    expect(resultado).toEqual({ nombre: 'Juan' });
  });

  test('debe devolver el primer número en un array', () => {
    const array = [10, 20, 30];
    const resultado = array.$first();
    expect(resultado).toBe(10);
  });

  test('debe devolver la primera letra en un array de letras', () => {
    const array = ['a', 'b', 'c'];
    const resultado = array.$first();
    expect(resultado).toBe('a');
  });
});