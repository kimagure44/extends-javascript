require('../src/index.js');

describe('Array.prototype.$compact', () => {
  test('debería retornar un nuevo array sin los valores falsy', () => {
    const arr = [1, null, 'hello', undefined, 0, false];
    const resultado = arr.$compact();
    expect(resultado).toEqual([1, 'hello']);
  });

  test('debería retornar un array vacío si todos los valores son falsy', () => {
    const arr = [null, undefined, false, '', 0];
    const resultado = arr.$compact();
    expect(resultado).toEqual([]);
  });

  test('debería retornar el mismo array si no hay valores falsy', () => {
    const arr = [1, 'hello', true];
    const resultado = arr.$compact();
    expect(resultado).toEqual([1, 'hello', true]);
  });
});
