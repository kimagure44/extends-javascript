require('../src/index.js');

describe('Array.prototype.$forEachRight', () => {
  test('debería iterar sobre los elementos del array en orden inverso', () => {
    const arr = [1, 2, 3, 4, 5];
    const callback = jest.fn();
    arr.$forEachRight(callback);
    expect(callback).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenNthCalledWith(1, 5, 4, arr);
    expect(callback).toHaveBeenNthCalledWith(2, 4, 3, arr);
    expect(callback).toHaveBeenNthCalledWith(3, 3, 2, arr);
    expect(callback).toHaveBeenNthCalledWith(4, 2, 1, arr);
    expect(callback).toHaveBeenNthCalledWith(5, 1, 0, arr);
  });

  test('debería no llamar al callback si el array está vacío', () => {
    const arr = [];
    const callback = jest.fn();
    arr.$forEachRight(callback);
    expect(callback).not.toHaveBeenCalled();
  });
});
