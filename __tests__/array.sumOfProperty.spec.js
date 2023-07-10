require('../src/index.js');

describe('Array.prototype.$sumOfProperty', () => {
  test('debería retornar la suma de los valores de la propiedad especificada en los elementos del array', () => {
    const arr = [
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 15 }
    ];
    const property = 'value';
    const resultado = arr.$sumOfProperty(property);
    expect(resultado).toBe(30);
  });

  test('debería retornar 0 si el array está vacío', () => {
    const arr = [];
    const property = 'value';
    const resultado = arr.$sumOfProperty(property);
    expect(resultado).toBe(0);
  });

  test('debería manejar correctamente propiedades que no existen en todos los elementos', () => {
    const arr = [
      { id: 1, value: 5 },
      { id: 2 },
      { id: 3, value: 10 }
    ];
    const property = 'value';
    const resultado = arr.$sumOfProperty(property);
    expect(resultado).toBe(15);
  });
});
