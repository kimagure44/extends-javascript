require('../src/index.js');

describe('Array.prototype.$notDuplicatedBy', () => {
  test('debe eliminar elementos duplicados de un array de objetos en base a una propiedad', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Juan' },
      { id: 4, nombre: 'Pedro' },
      { id: 2, nombre: 'María' },
    ];
    const resultado = array.$notDuplicatedBy('id');
    expect(resultado).toEqual([
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Juan' },
      { id: 4, nombre: 'Pedro' },
    ]);
  });
  
  test('debe devolver el array sin cambios si no hay elementos duplicados', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Pedro' },
    ];
    const resultado = array.$notDuplicatedBy('id');
    expect(resultado).toEqual([
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Pedro' },
    ]);
  });
  
  test('debe devolver el array sin cambios si no se encuentra la propiedad especificada', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Pedro' },
    ];
    const resultado = array.$notDuplicatedBy('apellido');
    expect(resultado).toStrictEqual([
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Pedro' },
    ]);
  });
  
  test('debe devolver un array vacío si todos los elementos son duplicados', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 1, nombre: 'Juan' },
      { id: 1, nombre: 'Juan' },
    ];
    const resultado = array.$notDuplicatedBy('id');
    expect(resultado).toEqual(expect.arrayContaining([]));
  });
  
  test('debe devolver el array original si está vacío', () => {
    const array = [];
    const resultado = array.$notDuplicatedBy('id');
    expect(resultado).toEqual(expect.arrayContaining([]));
    expect(resultado).toBe(array);
  });
});