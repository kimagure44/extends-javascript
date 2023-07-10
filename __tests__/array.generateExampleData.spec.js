require('../src/index.js');

describe('Array.prototype.$generateExampleData', () => {
  const structure = {
    name: 'string',
    age: 'number',
    isActive: 'boolean',
    address: {
      street: 'string',
      city: 'string',
      zipCode: 'number',
      coordinates: {
        latitude: 'number',
        longitude: 'number'
      }
    }
  };

  test('debería generar correctamente los datos de ejemplo para un array vacío', () => {
    const arr = [];
    const result = arr.$generateExampleData(structure);
    expect(result).toEqual([]);
  });
  
  test('debería generar datos de ejemplo únicos para cada elemento del array', () => {
    const arr = [1, 2, 3];
    const result = arr.$generateExampleData(structure);
    const uniqueValues = new Set(result);
    expect(uniqueValues.size).toBe(result.length);
  });
});
