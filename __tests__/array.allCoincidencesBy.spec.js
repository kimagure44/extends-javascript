require('../src/index.js');

describe('Array.prototype.$allCoincidencesBy', () => {
  const array = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 20 },
    { id: 4, nombre: 'Ana', edad: 35 },
    { id: 5, nombre: 'María', edad: 30 },
  ];

  test('debe devolver todas las coincidencias con la propiedad "nombre"', () => {
    const properties = { nombre: 'María' };
    const resultado = array.$allCoincidencesBy(properties);
    expect(resultado).toEqual([
      { id: 2, nombre: 'María', edad: 30 },
      { id: 5, nombre: 'María', edad: 30 }
    ]);
  });

  test('debe devolver todas las coincidencias con la propiedad "edad"', () => {
    const properties = { edad: 30 };
    const resultado = array.$allCoincidencesBy(properties);
    expect(resultado).toEqual([
      { id: 2, nombre: 'María', edad: 30 },
      { id: 5, nombre: 'María', edad: 30 }
    ]);
  });

  test('debe devolver un array vacío si no hay coincidencias', () => {
    const properties = { nombre: 'Lucía' };
    const resultado = array.$allCoincidencesBy(properties);
    expect(resultado).toEqual([]);
  });

  test('debe devolver un array vacío si no se encuentran todas las propiedades', () => {
    const properties = { nombre: 'Juan', ciudad: 'Madrid' };
    const resultado = array.$allCoincidencesBy(properties);
    expect(resultado).toEqual([]);
  });

  test('debe devolver todas las coincidencias en caso de múltiples coincidencias', () => {
    const properties = { nombre: 'María', edad: 30 };
    const resultado = array.$allCoincidencesBy(properties);
    expect(resultado).toEqual([
      { id: 2, nombre: 'María', edad: 30 },
      { id: 5, nombre: 'María', edad: 30 }
    ]);
  });

  test('debe devolver un array vacío si el array está vacío', () => {
    const emptyArray = [];
    const properties = { nombre: 'María' };
    const resultado = emptyArray.$allCoincidencesBy(properties);
    expect(resultado).toEqual([]);
  });
});
