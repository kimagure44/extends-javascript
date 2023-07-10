require('../src/index.js');

describe('Array.prototype.$sortBy', () => {
  const array = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 20 },
    { id: 4, nombre: 'Ana', edad: 35 },
  ];

  test('debe ordenar el array en sentido ascendente por una propiedad string', () => {
    const resultado = array.$sortBy('nombre', 'asc');
    expect(resultado).toEqual([
      { id: 4, nombre: 'Ana', edad: 35 },
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 3, nombre: 'Pedro', edad: 20 },
    ]);
  });
  test('debe ordenar el array en sentido descendente por una propiedad string', () => {
    const resultado = array.$sortBy('nombre', 'desc');
    expect(resultado).toEqual([
      { id: 3, nombre: 'Pedro', edad: 20 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 4, nombre: 'Ana', edad: 35 },
    ]);
  });
  
  test('debe ordenar el array en sentido ascendente por una propiedad numérica', () => {
    const resultado = array.$sortBy('edad', 'asc');
    expect(resultado).toEqual([
      { id: 3, nombre: 'Pedro', edad: 20 },
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 4, nombre: 'Ana', edad: 35 },
    ]);
  });
  
  test('debe ordenar el array en sentido descendente por una propiedad numérica', () => {
    const resultado = array.$sortBy('edad', 'desc');
    expect(resultado).toEqual([
      { id: 4, nombre: 'Ana', edad: 35 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 3, nombre: 'Pedro', edad: 20 },
    ]);
  });
  
  test('debe devolver el array sin cambios si no se especifica el orden', () => {
    const resultado = array.$sortBy('nombre');
    expect(resultado).toEqual(expect.arrayContaining([
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 3, nombre: 'Pedro', edad: 20 },
      { id: 4, nombre: 'Ana', edad: 35 },
    ]));
  });
  
  test('debe devolver el array sin cambios si no se encuentra la propiedad especificada', () => {
    const resultado = array.$sortBy('apellido', 'asc');
    expect(resultado).toEqual(expect.arrayContaining([
      { id: 1, nombre: 'Juan', edad: 25 },
      { id: 2, nombre: 'María', edad: 30 },
      { id: 3, nombre: 'Pedro', edad: 20 },
      { id: 4, nombre: 'Ana', edad: 35 },
    ]));
  });
});