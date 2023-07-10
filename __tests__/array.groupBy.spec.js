require('../src/index.js');

describe('Array.prototype.$groupBy', () => {
  test('debe agrupar elementos de un array por una propiedad dada', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Juan' },
      { id: 4, nombre: 'Pedro' },
      { id: 5, nombre: 'María' },
    ];

    const resultado = array.$groupBy('nombre');

    expect(resultado).toEqual({
      Juan: [
        { id: 1, nombre: 'Juan' },
        { id: 3, nombre: 'Juan' },
      ],
      María: [
        { id: 2, nombre: 'María' },
        { id: 5, nombre: 'María' },
      ],
      Pedro: [
        { id: 4, nombre: 'Pedro' },
      ],
    });
  });

  test('debe devolver un objeto vacío para un array vacío', () => {
    const array = [];
    const resultado = array.$groupBy('nombre');
    expect(resultado).toEqual({});
  });

  test('debe devolver un objeto vacío si no se encuentra la propiedad especificada', () => {
    const array = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'María' },
      { id: 3, nombre: 'Juan' },
    ];

    const resultado = array.$groupBy('apellido');
    expect(resultado).toEqual({});
  });

  test('debe agrupar elementos de un array por una propiedad numérica', () => {
    const array = [
      { id: 1, edad: 25 },
      { id: 2, edad: 30 },
      { id: 3, edad: 25 },
      { id: 4, edad: 30 },
      { id: 5, edad: 35 },
    ];

    const resultado = array.$groupBy('edad');

    expect(resultado).toEqual({
      25: [
        { id: 1, edad: 25 },
        { id: 3, edad: 25 },
      ],
      30: [
        { id: 2, edad: 30 },
        { id: 4, edad: 30 },
      ],
      35: [
        { id: 5, edad: 35 },
      ],
    });
  });
});