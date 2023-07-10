require('../src/index.js');

describe('Array.prototype.$pick', () => {
  test('debería retornar un nuevo array con objetos que contienen solo las propiedades especificadas', () => {
    const arr = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 35 }
    ];
    const props = ['name', 'age'];
    const resultado = arr.$pick(...props);
    expect(resultado).toEqual([
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Bob', age: 35 }
    ]);
  });

  test('debería retornar un nuevo array con objetos vacíos si no se encuentran las propiedades especificadas', () => {
    const arr = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 35 }
    ];
    const props = ['name', 'email'];
    const resultado = arr.$pick(...props);
    expect(resultado).toEqual([
      { name: 'John', email: undefined },
      { name: 'Jane', email: undefined },
      { name: 'Bob', email: undefined }
    ]);
  });

  test('debería retornar un array vacío si el array original está vacío', () => {
    const arr = [];
    const props = ['name', 'age'];
    const resultado = arr.$pick(...props);
    expect(resultado).toEqual([]);
  });
});
