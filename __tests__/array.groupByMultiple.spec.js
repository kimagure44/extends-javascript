require('../src/index.js');

describe('Array.prototype.$groupByMultiple', () => {
  test('debería retornar un objeto con los elementos agrupados por múltiples condiciones', () => {
    const arr = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Alice', age: 30 }
    ];
    const condition1 = (item) => item.age >= 30;
    const condition2 = (item) => item.name.startsWith('J');
    const resultado = arr.$groupByMultiple(condition1, condition2);
  
    expect(resultado).toEqual({
      'true_true': expect.arrayContaining([expect.objectContaining({ id: 1, name: 'John', age: 30 })]),
      'false_true': expect.arrayContaining([expect.objectContaining({ id: 2, name: 'Jane', age: 25 })]),
      'true_false': expect.arrayContaining([expect.objectContaining({ id: 3, name: 'Bob', age: 35 })])
    });
  });
  
  

  test('debería retornar un objeto vacío si el array original está vacío', () => {
    const arr = [];
    const condition = (item) => item.age >= 30;
    const resultado = arr.$groupByMultiple(condition);
    expect(resultado).toEqual({});
  });
});
