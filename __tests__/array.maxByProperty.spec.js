require('../src/index.js');

describe('Array.prototype.$maxByProperty', () => {
  test('debería retornar el objeto con el valor máximo de la propiedad especificada', () => {
    const arr = [
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 15 }
    ];
    const property = 'value';
    const resultado = arr.$maxByProperty(property);
    expect(resultado).toEqual({ id: 3, value: 15 });
  });

  test('debería retornar undefined si el array está vacío', () => {
    const arr = [];
    const property = 'value';
    const resultado = arr.$maxByProperty(property);
    expect(resultado).toBeUndefined();
  });

  test('debería manejar correctamente propiedades que no existen en todos los elementos', () => {
    const arr = [
      { id: 1, value: 5 },
      { id: 2 },
      { id: 3, value: 10 }
    ];
    const property = 'value';
    const resultado = arr.$maxByProperty(property);
    expect(resultado).toEqual({ id: 3, value: 10 });
  });
});
