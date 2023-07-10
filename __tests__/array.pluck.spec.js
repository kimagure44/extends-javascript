require('../src/index.js');

describe('Array.prototype.$pluck', () => {
  test('debería retornar un array con los valores de la propiedad especificada', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ];
    const key = 'name';
    const resultado = arr.$pluck(key);
    expect(resultado).toEqual(['John', 'Jane', 'Bob']);
  });

  test('debería retornar un array vacío si la propiedad no existe en los objetos', () => {
    const arr = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' }
    ];
    const key = 'age';
    const resultado = arr.$pluck(key);
    expect(resultado).toEqual([]);
  });
});
