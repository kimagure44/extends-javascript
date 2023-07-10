/**
 * Gets the first element of the array.
 *
 * @returns {*} The first element of the array.
 * 
 * @description
 * This custom method, $first(), is added to the Array prototype in JavaScript. It allows retrieving the first element of the array on which it is called.
 * 
 * Usage:
 * The first() method can be invoked on any array instance and takes no arguments. It simply returns the first element of the array.
 *
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 4, 5];
 * const firstElement = array.$first();
 * console.log(firstElement); // Output: 1
 * ```
 */
Array.prototype.$first = function() {
  return this[0];
};

/**
 * Gets the last element of the array.
 *
 * @returns {*} The last element of the array.
 * 
 * @description
 * This custom method, $last(), is added to the Array prototype in JavaScript. It allows retrieving the last element of the array on which it is called.
 * 
 * Usage:
 * The $last() method can be invoked on any array instance and takes no arguments. It simply returns the last element of the array.
 *
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 4, 5];
 * const lastElement = array.$last();
 * console.log(lastElement); // Output: 5
 * ```
 */
Array.prototype.$last = function () {
  return this.at(-1);
};

/**
 * Splits the array into smaller chunks of a specified size.
 *
 * @param {number} [chunkSize=1] - The size of each chunk. Defaults to 1 if not provided.
 * @returns {Array} An array containing chunks of the original array.
 * 
 * @description
 * This custom method, $chunk(), is added to the Array prototype in JavaScript. It allows splitting the array into smaller chunks of a specified size.
 * 
 * Usage:
 * The $chunk() method can be invoked on any array instance and takes an optional `chunkSize` parameter, which determines the size of each chunk. If `chunkSize` is not provided or is less than or equal to 0, the original array is returned as is. Otherwise, the array is split into chunks of `chunkSize` elements.
 *
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const chunkedArray = array.$chunk(3);
 * console.log(chunkedArray);
 * // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 * ```
 */
Array.prototype.$chunk = function(chunkSize = 1) {
  return chunkSize <= 0 ? this : Array.from({ length: Math.ceil(this.length / chunkSize) }, (_, index) => this.slice(index * chunkSize, (index + 1) * chunkSize));
};

/**
 * Merges multiple arrays into a single array.
 *
 * @param {...Array} arrays - The arrays to be merged.
 * @returns {Array} A new array containing all the elements from the original array and the additional arrays.
 * 
 * @description
 * This custom method, $merge(), is added to the Array prototype in JavaScript. It allows merging multiple arrays into a single array.
 * 
 * Usage:
 * The $merge() method can be invoked on any array instance and takes multiple arrays as arguments. It returns a new array that contains all the elements from the original array and the additional arrays provided as arguments.
 *
 * @example
 * 
 * ```js
 * const array1 = [1, 2, 3];
 * const array2 = [4, 5, 6];
 * const mergedArray = array1.$merge(array2, [7, 8], 9);
 * console.log(mergedArray);
 * // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
Array.prototype.$merge = function(...arrays) {
  return [...this, ...arrays.flat()];
};

/**
 * Groups the elements of an array based on a specified property.
 *
 * @param {string} prop - The property used for grouping the elements.
 * @returns {Object} An object with keys representing the unique property values and values representing the arrays of elements grouped by the property value.
 * 
 * @description
 * This custom method, $groupBy(), is added to the Array prototype in JavaScript. It allows grouping the elements of an array based on a specified property.
 * 
 * Usage:
 * The $groupBy() method can be invoked on any array instance and takes a string property as an argument. It returns an object with keys representing the unique property values and values representing the arrays of elements grouped by the property value.
 *
 * @example
 * 
 * ```js
 * const persons = [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 },
 *   { name: 'Adam', age: 30 },
 *   { name: 'Emily', age: 25 }
 * ];
 * 
 * const groupedByAge = persons.$groupBy('age');
 * console.log(groupedByAge);
 * // Output: { '25': [ { name: 'Jane', age: 25 }, { name: 'Emily', age: 25 } ], '30': [ { name: 'John', age: 30 }, { name: 'Adam', age: 30 } ] }
 * ```
 */
Array.prototype.$groupBy = function(prop) {
  return this.reduce((acc, curr) => {
    const key = curr[prop];
    if (key) {
      acc[key] = [...(acc[key] || []), curr];
    }
    return acc;
  }, {});
};

/**
 * Sorts the elements of an array based on a specified property and sort order.
 *
 * @param {string} prop - The property used for sorting the elements.
 * @param {string} [sortOrder='asc'] - The sort order. Valid values are 'asc' for ascending and 'desc' for descending. Default is 'asc'.
 * @returns {Array} A new array with the elements sorted based on the specified property and sort order.
 * 
 * @description
 * This custom method, $sortBy(), is added to the Array prototype in JavaScript. It allows sorting the elements of an array based on a specified property and sort order.
 * 
 * Usage:
 * The $sortBy() method can be invoked on any array instance and takes a string property and an optional sort order as arguments. It returns a new array with the elements sorted based on the specified property and sort order.
 *
 * @example
 * 
 * ```js
 * const persons = [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 },
 *   { name: 'Adam', age: 35 },
 *   { name: 'Emily', age: 28 }
 * ];
 * 
 * const sortedByAge = persons.$sortBy('age', 'asc');
 * console.log(sortedByAge);
 * // Output: [ { name: 'Jane', age: 25 }, { name: 'Emily', age: 28 }, { name: 'John', age: 30 }, { name: 'Adam', age: 35 } ]
 * ```
 */
Array.prototype.$sortBy = function(prop, sortOrder = 'asc') {
  const validSortOrders = ['asc', 'desc'];
  if (!validSortOrders.includes(sortOrder)) {
    throw new Error('Invalid sortOrder. Valid values are "asc" and "desc".');
  }
  return this.slice().sort((a, b) => {
    const compareResult = (typeof a[prop] === 'string' ? a[prop].localeCompare(b[prop]) : a[prop] - b[prop]);
    return (sortOrder === 'asc' ? compareResult : -compareResult) || 0;
  });
};

/**
 * Filters the array to remove duplicate elements based on a specified property.
 *
 * @param {string} prop - The property used for identifying duplicate elements.
 * @returns {Array} A new array with duplicate elements removed based on the specified property.
 * 
 * @description
 * This custom method, $notDuplicatedBy(), is added to the Array prototype in JavaScript. It allows filtering the array to remove duplicate elements based on a specified property.
 * 
 * Usage:
 * The $notDuplicatedBy() method can be invoked on any array instance and takes a string property as an argument. It returns a new array with duplicate elements removed based on the specified property.
 *
 * @example
 * 
 * ```js
 * const persons = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 3, name: 'John' },
 *   { id: 4, name: 'Adam' },
 *   { id: 5, name: 'Jane' }
 * ];
 * 
 * const uniqueByName = persons.$notDuplicatedBy('name');
 * console.log(uniqueByName);
 * // Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 4, name: 'Adam' } ]
 * ```
 */
Array.prototype.$notDuplicatedBy = function(prop) {
  const keys = new Set();
  const result = this.filter(item => item[prop] && !keys.has(item[prop]) && keys.add(item[prop]));
  return result.length > 0 ? result : this;
};

/**
 * Filters the array to remove duplicate elements.
 *
 * @returns {Array} A new array with duplicate elements removed.
 * 
 * @description
 * This custom method, $notDuplicated(), is added to the Array prototype in JavaScript. It allows filtering the array to remove duplicate elements.
 * 
 * Usage:
 * The $notDuplicated() method can be invoked on any array instance and takes no arguments. It returns a new array with duplicate elements removed.
 *
 * @example
 * 
 * ```js
 * const numbers = [1, 2, 3, 2, 4, 1, 5];
 * const uniqueNumbers = numbers.$notDuplicated();
 * console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
 * ```
 */
Array.prototype.$notDuplicated = function() {
  return [...new Set(this)];
};

/**
 * Finds all elements in the array that match the given properties.
 *
 * @param {Object} properties - An object containing the properties to match against.
 * @returns {Array} An array of elements that match all the given properties.
 * 
 * @description
 * This custom method, $allCoincidencesBy(), is added to the Array prototype in JavaScript. It allows finding all elements in the array that match the given properties.
 * 
 * Usage:
 * The $allCoincidencesBy() method can be invoked on any array instance and takes an object as an argument. The object should contain the properties to match against. It returns an array of elements that match all the given properties.
 *
 * @example
 * 
 * ```js
 * const users = [
 *   { name: 'John', age: 25 },
 *   { name: 'Jane', age: 30 },
 *   { name: 'Bob', age: 25 },
 *   { name: 'Alice', age: 35 }
 * ];
 * const matches = users.$allCoincidencesBy({ age: 25 });
 * console.log(matches); // Output: [{ name: 'John', age: 25 }, { name: 'Bob', age: 25 }]
 * ```
 */
Array.prototype.$allCoincidencesBy = function(properties) {
  return this.filter(item => Object.entries(properties).every(([prop, value]) => item[prop] === value));
};

/**
 * Counts the occurrences of a specific value in the array.
 *
 * @param {*} value - The value to count occurrences of.
 * @returns {number} The number of occurrences of the value in the array.
 * 
 * @description
 * This custom method, $countOccurrences(), is added to the Array prototype in JavaScript. It allows counting the occurrences of a specific value in the array.
 * 
 * Usage:
 * The $countOccurrences() method can be invoked on any array instance and takes a value as an argument. It returns the number of occurrences of the value in the array.
 *
 * @example
 * 
 * ```js
 * const numbers = [1, 2, 2, 3, 2, 4, 5, 2];
 * const count = numbers.$countOccurrences(2);
 * console.log(count); // Output: 4
 * ```
 */
Array.prototype.$countOccurrences = function(value) {
  return this.filter(item => item === value).length;
};

/**
 * Calculates the sum of all elements in the array.
 *
 * @returns {number} The sum of all elements in the array.
 * 
 * @description
 * This custom method, $sum(), is added to the Array prototype in JavaScript. It allows calculating the sum of all elements in the array.
 * 
 * Usage:
 * The $sum() method can be invoked on any array instance and takes no arguments. It returns the sum of all elements in the array.
 *
 * @example
 * 
 * ```js
 * const numbers = [1, 2, 3, 4, 5];
 * const sum = numbers.$sum();
 * console.log(sum); // Output: 15
 * ```
 */
Array.prototype.$sum = function() {
  return this.reduce((acc, curr) => acc + curr, 0);
};

/**
 * Calculates the mean (average) value of the elements in the array.
 *
 * @returns {number} The mean value of the elements in the array.
 * 
 * @description
 * This custom method, $mean(), is added to the Array prototype in JavaScript. It allows calculating the mean (average) value of the elements in the array.
 * 
 * Usage:
 * The $mean() method can be invoked on any array instance and takes no arguments. It returns the mean value of the elements in the array.
 *
 * @example
 * 
 * ```js
 * const numbers = [1, 2, 3, 4, 5];
 * const mean = numbers.$mean();
 * console.log(mean); // Output: 3
 * ```
 */
Array.prototype.$mean = function() {
  return this.length === 0 ? 0 : this.reduce((acc, curr) => acc + curr, 0) / this.length;
};

/**
 * Removes all occurrences of the specified element from the array.
 *
 * @param {*} element - The element to be removed from the array.
 * @returns {Array} A new array with all occurrences of the element removed.
 * 
 * @description
 * This custom method, $remove(), is added to the Array prototype in JavaScript. It allows removing all occurrences of a specified element from the array.
 * 
 * Usage:
 * The $remove() method can be invoked on any array instance and takes one argument, which is the element to be removed. It returns a new array with all occurrences of the element removed.
 *
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 2, 4, 2];
 * const newArray = array.$remove(2);
 * console.log(newArray); // Output: [1, 3, 4] (2 removed)
 * ```
 */
Array.prototype.$remove = function(element) {
  return this.filter(item => item !== element);
};

/**
 * Checks if the array is empty.
 *
 * @returns {boolean} Returns true if the array is empty, false otherwise.
 * 
 * @description
 * This custom method, $isEmpty(), is added to the Array prototype in JavaScript. It allows checking if the array is empty.
 * 
 * Usage:
 * The $isEmpty() method can be invoked on any array instance and takes no arguments. It returns a boolean value indicating whether the array is empty or not.
 *
 * @example
 * 
 * ```js
 * const array = [1, 2, 3];
 * console.log(array.$isEmpty()); // Output: false
 *
 * const emptyArray = [];
 * console.log(emptyArray.$isEmpty()); // Output: true
 * ```
 */
Array.prototype.$isEmpty = function() {
  return this.every(element => !element);
};

/**
 * Inserts elements into the array at a specific index.
 *
 * @param {number} index - The index at which the elements should be inserted.
 * @param {...*} elements - The elements to be inserted into the array.
 * @returns {Array} - The modified array with the inserted elements.
 * 
 * @description
 * This custom method, insertIn(), is added to the Array prototype in JavaScript. It allows inserting elements into the array at a specific index.
 * 
 * @usage
 * Usage:
 * const array = [1, 2, 3];
 * array.insertIn(1, 4, 5); // Inserts elements 4 and 5 at index 1
 * console.log(array); // Output: [1, 4, 5, 2, 3]
 * 
 * const emptyArray = [];
 * emptyArray.insertIn(0, 'a', 'b'); // Inserts elements 'a' and 'b' at index 0
 * console.log(emptyArray); // Output: ['a', 'b']
 * 
 * @example
 * 
 * ```js
 * const array = [1, 2, 3];
 * array.insertIn(1, 4, 5); // Inserts elements 4 and 5 at index 1
 * console.log(array); // Output: [1, 4, 5, 2, 3]
 * 
 * const emptyArray = [];
 * emptyArray.insertIn(0, 'a', 'b'); // Inserts elements 'a' and 'b' at index 0
 * console.log(emptyArray); // Output: ['a', 'b']
 * ```
 */
Array.prototype.$insertIn = function(index, ...elements) {
  this.splice(index, 0, ...elements);
  return this;
};

/**
 * Flattens the array by recursively concatenating sub-arrays into a single-dimensional array.
 *
 * @returns {Array} - The flattened array.
 * 
 * @description
 * This custom method, $flatten(), is added to the Array prototype in JavaScript. It allows flattening the array by recursively concatenating sub-arrays into a single-dimensional array.
 * 
 * @usage
 * Usage:
 * const array = [1, [2, 3], [4, [5, 6]]];
 * const flattenedArray = array.$flatten();
 * console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
 * 
 * @example
 * 
 * ```js
 * const array = [1, [2, 3], [4, [5, 6]]];
 * const flattenedArray = array.$flatten();
 * console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
 * ```
 */
Array.prototype.$flatten = function() {
  return this.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.$flatten() : curr), []);
};

/**
 * Replaces all occurrences of a search value with a replace value in the array.
 *
 * @param {*} searchValue - The value to search for in the array.
 * @param {*} replaceValue - The value to replace the search value with.
 * @returns {Array} - The modified array with replaced values.
 * 
 * @description
 * This custom method, $replace(), is added to the Array prototype in JavaScript. It allows replacing all occurrences of a search value with a replace value in the array.
 * 
 * @usage
 * Usage:
 * const array = [1, 2, 3, 2, 4, 2];
 * const replacedArray = array.$replace(2, 'two');
 * console.log(replacedArray); // Output: [1, 'two', 3, 'two', 4, 'two']
 * 
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 2, 4, 2];
 * const replacedArray = array.$replace(2, 'two');
 * console.log(replacedArray); // Output: [1, 'two', 3, 'two', 4, 'two']
 * ```
 */
Array.prototype.$replace = function(searchValue, replaceValue) {
  return this.map(item => item === searchValue ? replaceValue : item);
};

/**
 * Reverses the order of elements in the array.
 *
 * @returns {Array} - The reversed array.
 * 
 * @description
 * This custom method, $reverse(), is added to the Array prototype in JavaScript. It allows reversing the order of elements in the array without modifying the original array.
 * 
 * @usage
 * Usage:
 * const array = [1, 2, 3, 4, 5];
 * const reversedArray = array.$reverse();
 * console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
 * 
 * @example
 * 
 * ```js
 * const array = [1, 2, 3, 4, 5];
 * const reversedArray = array.$reverse();
 * console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
 * ```
 */
Array.prototype.$reverse = function() {
  return this.slice().reverse();
};

/**
 * Generates example data based on a given structure.
 *
 * @param {Object} structure - The structure object that defines the data schema.
 * @returns {Array} - An array containing generated example data based on the given structure.
 * 
 * @description
 * This custom method, $generateExampleData(), is added to the Array prototype in JavaScript. It allows generating example data based on a given structure object.
 * 
 * @param {Object} structure - The structure object that defines the data schema.
 * The structure object should follow a specific format where each property represents a key in the generated data, and its corresponding value represents the data type or a nested structure.
 * 
 * Supported data types:
 * - 'string': Generates a random string value.
 * - 'number': Generates a random number value.
 * - 'boolean': Generates a random boolean value.
 * - Object: Generates a nested structure based on the given object.
 * - Other: Assigns a null value.
 * 
 * @returns {Array} - An array containing generated example data based on the given structure. The length of the resulting array is equal to the length of the original array.
 * 
 * @example
 * 
 * ```js
 * const array = ['string', 'number', 'boolean'];
 * const structure = {
 *   name: 'string',
 *   age: 'number',
 *   isStudent: 'boolean',
 *   address: {
 *     street: 'string',
 *     city: 'string',
 *     zipCode: 'number'
 *   }
 * };
 * const exampleData = array.$generateExampleData(structure);
 * console.log(exampleData);
 * // Output: [
 * //   {
 * //     name: "name qsd",
 * //     age: 42,
 * //     isStudent: true,
 * //     address: {
 * //       street: "street oer",
 * //       city: "city mkh",
 * //       zipCode: 86
 * //     }
 * //   },
 * //   {
 * //     name: "name jf",
 * //     age: 9,
 * //     isStudent: false,
 * //     address: {
 * //       street: "street rcm",
 * //       city: "city pkn",
 * //       zipCode: 52
 * //     }
 * //   },
 * //   ...
 * // ]
 * ```
 */
Array.prototype.$generateExampleData = function(structure) {
  const result = [];
  const characters = "abcdefghijklmnopqrstuvwxyz";
  function __generateRandomWord(length) {
    let word = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      word += characters[randomIndex];
    }
    return word;
  }
  function __generateData(obj) {
    const data = {};
    for (const key in obj) {
      const value = obj[key];
      if (value === 'string') {
        data[key] = `${key} ${__generateRandomWord(Math.floor(Math.random() * 10) + 1)}`;
      } else if (value === 'number') {
        data[key] = Math.floor(Math.random() * 100);
      } else if (value === 'boolean') {
        data[key] = Math.random() < 0.5;
      } else if (typeof value === 'object' && value !== null) {
        data[key] = __generateData(value);
      } else {
        data[key] = null;
      }
    }
    return data;
  }
  for (let i = 0; i < this.length; i++) {
    result.push(__generateData(structure));
  }
  return result;
};

/**
 * Finds the last element in the array that satisfies the provided testing function.
 *
 * @param {Function} callback - The function to execute on each element.
 * @returns {*} The last element that satisfies the provided testing function, or undefined if no element is found.
 *
 * @description
 * This custom method, $findLast(), is added to the Array prototype in JavaScript. It finds the last element in the array that satisfies the provided testing function.
 *
 * @example
 * 
 * ```js
 * const arr = [1, 2, 3, 4, 5];
 * const lastEvenNumber = arr.$findLast(num => num % 2 === 0);
 * console.log(lastEvenNumber); // Output: 4
 * ```
 */
Array.prototype.$findLast = function(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

/**
 * Plucks the values of a specified property from the objects in the array.
 *
 * @param {string} key - The property key to pluck.
 * @returns {Array} An array containing the values of the specified property from each object.
 *
 * @description
 * This custom method, $pluck(), is added to the Array prototype in JavaScript. It plucks the values of a specified property from the objects in the array.
 *
 * @example
 * ```js
 * const users = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 3, name: 'Bob' }
 * ];
 *
 * const names = users.$pluck('name');
 *
 * console.log(names); // Output: ['John', 'Jane', 'Bob']
 * ```
 */
Array.prototype.$pluck = function(key) {
  return this.map(obj => obj[key]);
};

/**
 * Takes the first n elements from the array.
 *
 * @param {number} n - The number of elements to take.
 * @returns {Array} An array containing the first n elements from the original array.
 *
 * @description
 * This custom method, $take(), is added to the Array prototype in JavaScript. It takes the first n elements from the array.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, 4, 5];
 * const taken = arr.$take(3);
 *
 * console.log(taken); // Output: [1, 2, 3]
 * ```
 */
Array.prototype.$take = function(n) {
  return this.slice(0, n);
};

/**
 * Drops the first n elements from the array.
 *
 * @param {number} n - The number of elements to drop.
 * @returns {Array} An array containing the remaining elements after dropping the first n elements.
 *
 * @description
 * This custom method, $drop(), is added to the Array prototype in JavaScript. It drops the first n elements from the array.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, 4, 5];
 * const dropped = arr.$drop(2);
 *
 * console.log(dropped); // Output: [3, 4, 5]
 * ```
 */
Array.prototype.$drop = function(n) {
  return this.slice(n);
};

/**
 * Finds the index of the first element in the array that satisfies the provided testing function.
 *
 * @param {Function} callback - The function to execute on each element.
 * @returns {number} The index of the first element that satisfies the provided testing function, or -1 if no element is found.
 *
 * @description
 * This custom method, $findIndex(), is added to the Array prototype in JavaScript. It finds the index of the first element in the array that satisfies the provided testing function.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, 4, 5];
 * const firstEvenIndex = arr.$findIndex(num => num % 2 === 0);
 *
 * console.log(firstEvenIndex); // Output: 1
 * ```
 */
Array.prototype.$findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

/**
 * Creates a new array with all falsy values removed.
 *
 * @returns {Array} A new array with all falsy values removed.
 *
 * @description
 * This custom method, $compact(), is added to the Array prototype in JavaScript. It creates a new array with all falsy values removed.
 *
 * @example
 * ```js
 * const arr = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5];
 * const compacted = arr.$compact();
 *
 * console.log(compacted); // Output: [1, 2, 3, 4, 5]
 * ```
 */
Array.prototype.$compact = function() {
  return this.filter(Boolean);
};

/**
 * Creates a new array that is the union of the current array with one or more arrays.
 *
 * @param {...Array} arrays - The arrays to be included in the union.
 * @returns {Array} A new array that contains all unique elements from the current array and the provided arrays.
 *
 * @description
 * This custom method, $union(), is added to the Array prototype in JavaScript. It creates a new array that is the union of the current array with one or more arrays.
 *
 * @example
 * ```js
 * const arr1 = [1, 2, 3];
 * const arr2 = [2, 3, 4];
 * const arr3 = [3, 4, 5];
 *
 * const union = arr1.$union(arr2, arr3);
 *
 * console.log(union); // Output: [1, 2, 3, 4, 5]
 * ```
 */
Array.prototype.$union = function(...arrays) {
  const combinedArray = [this, ...arrays];
  return [...new Set(combinedArray.flat())];
};

/**
 * Creates a new array that contains the symmetric difference between the current array and another array.
 *
 * @param {Array} otherArray - The other array to compare against.
 * @returns {Array} A new array that contains the unique elements that appear in either the current array or the other array, but not both.
 *
 * @description
 * This custom method, $symmetricDifference(), is added to the Array prototype in JavaScript. It creates a new array that contains the symmetric difference between the current array and another array.
 *
 * @example
 * ```js
 * const arr1 = [1, 2, 3, 4];
 * const arr2 = [3, 4, 5, 6];
 *
 * const symmetricDiff = arr1.$symmetricDifference(arr2);
 *
 * console.log(symmetricDiff); // Output: [1, 2, 5, 6]
 * ```
 */
Array.prototype.$symmetricDifference = function(otherArray) {
  const uniqueElements = new Set([...this, ...otherArray]);
  return [...uniqueElements].filter(item => !this.includes(item) || !otherArray.includes(item));
};

/**
 * Creates a new array that contains the intersection of the current array with one or more arrays.
 *
 * @param {...Array} arrays - The arrays to intersect with.
 * @returns {Array} A new array that contains the elements that appear in all of the provided arrays.
 *
 * @description
 * This custom method, $intersection(), is added to the Array prototype in JavaScript. It creates a new array that contains the intersection of the current array with one ormás arrays.
 *
 * @example
 * ```js
 * const arr1 = [1, 2, 3];
 * const arr2 = [2, 3, 4];
 * const arr3 = [3, 4, 5];
 *
 * const intersection = arr1.$intersection(arr2, arr3);
 *
 * console.log(intersection); // Output: [3]
 * ```
 */
Array.prototype.$intersection = function(...arrays) {
  return this.filter(item => arrays.every(arr => arr.includes(item)));
};

/**
 * Calculates the sum of a specific property for all elements in the array.
 *
 * @param {string} property - The property to sum.
 * @returns {number} The sum of the specified property for all elements in the array.
 *
 * @description
 * This custom method, $sumOfProperty(), is added to the Array prototype in JavaScript. It calculates the sum of a specific property for all elements in the array.
 *
 * @example
 * ```js
 * const items = [
 *   { name: 'Product 1', price: 10 },
 *   { name: 'Product 2', price: 20 },
 *   { name: 'Product 3', price: 30 }
 * ];
 *
 * const totalPrice = items.$sumOfProperty('price');
 *
 * console.log(totalPrice); // Output: 60
 * ```
 */
Array.prototype.$sumOfProperty = function(property) {
  return this.reduce((sum, item) => (sum || 0) + (item[property] || 0), 0);
};

/**
 * Iterates over the elements of the array in reverse order and executes a callback function for each element.
 *
 * @param {Function} callback - The function to execute on each element.
 *
 * @description
 * This custom method, $forEachRight(), is added to the Array prototype in JavaScript. It iterates over the elements of the array in reverse order and executes a callback function for each element.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, 4, 5];
 * arr.$forEachRight((num, index) => {
 *   console.log(num); // Output: 5, 4, 3, 2, 1 (printed in reverse order)
 * });
 * ```
 */
Array.prototype.$forEachRight = function(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    callback(this[i], i, this);
  }
};

/**
 * Creates a new array that contains the selected properties from each object in the array.
 *
 * @param {...string} props - The properties to pick from each object.
 * @returns {Array} A new array that contains objects with only the selected properties.
 *
 * @description
 * This custom method, $pick(), is added to the Array prototype in JavaScript. It creates a new array that contains the selected properties from each object in the array.
 *
 * @example
 * ```js
 * const items = [
 *   { id: 1, name: 'Product 1', price: 10 },
 *   { id: 2, name: 'Product 2', price: 20 },
 *   { id: 3, name: 'Product 3', price: 30 }
 * ];
 *
 * const pickedProps = items.$pick('id', 'name');
 *
 * console.log(pickedProps);
 * // Output: [
 * //   { id: 1, name: 'Product 1' },
 * //   { id: 2, name: 'Product 2' },
 * //   { id: 3, name: 'Product 3' }
 * // ]
 * ```
 */
Array.prototype.$pick = function(...props) {
  return this.map(item => {
    const picked = {};
    props.forEach(prop => {
      if (item.hasOwnProperty(prop)) {
        picked[prop] = item[prop];
      }
    });
    return picked;
  });
};

/**
 * Groups the elements of the array based on multiple conditions and creates an object with the grouped elements.
 *
 * @param {...Function} conditions - The conditions to group by.
 * @returns {Object} An object with the grouped elements.
 *
 * @description
 * This custom method, $groupByMultiple(), is added to the Array prototype in JavaScript. It groups the elements of the array based on multiple conditions and creates an object with the grouped elements.
 *
 * @example
 * ```js
 * const items = [
 *   { id: 1, category: 'A', type: 'X' },
 *   { id: 2, category: 'B', type: 'Y' },
 *   { id: 3, category: 'A', type: 'Y' },
 *   { id: 4, category: 'B', type: 'X' }
 * ];
 *
 * const grouped = items.$groupByMultiple(
 *   item => item.category,
 *   item => item.type
 * );
 *
 * console.log(grouped);
 * // Output: {
 * //   'A_X': [{ id: 1, category: 'A', type: 'X' }],
 * //   'B_Y': [{ id: 2, category: 'B', type: 'Y' }],
 * //   'A_Y': [{ id: 3, category: 'A', type: 'Y' }],
 * //   'B_X': [{ id: 4, category: 'B', type: 'X' }]
 * // }
 * ```
 */
Array.prototype.$groupByMultiple = function(...conditions) {
  return this.reduce((obj, item) => {
    const keys = conditions.map(condition => condition(item));
    const key = keys.join('_');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
};

/**
 * Finds the maximum element in the array based on a specific property.
 *
 * @param {string} property - The property to compare.
 * @returns {*} The element with the maximum value of the specified property.
 *
 * @description
 * This custom method, $maxByProperty(), is added to the Array prototype in JavaScript. It finds the maximum element in the array based on a specific property.
 *
 * @example
 * ```js
 * const items = [
 *   { id: 1, price: 10 },
 *   { id: 2, price: 20 },
 *   { id: 3, price: 15 }
 * ];
 *
 * const maxPriceItem = items.$maxByProperty('price');
 *
 * console.log(maxPriceItem); // Output: { id: 2, price: 20 }
 * ```
 */
Array.prototype.$maxByProperty = function(property) {
  return this.reduce((max, item) => (item[property] > max[property] ? item : max), this[0]);
};

/**
 * Pads the array with a specific value at the beginning until it reaches the specified length.
 *
 * @param {number} length - The desired length of the padded array.
 * @param {*} value - The value to pad the array with.
 * @returns {Array} A new array with the specified length and padded with the specified value.
 *
 * @description
 * This custom method, $padStart(), is added to the Array prototype in JavaScript. It pads the array with a specific value at the beginning until it reaches the specified length.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3];
 * const paddedArr = arr.$padStart(5, 0);
 *
 * console.log(paddedArr); // Output: [0, 0, 1, 2, 3]
 * ```
 */
Array.prototype.$padStart = function(length, value) {
  if (this.length >= length) {
    return this.slice();
  }
  return Array.from({ length: length - this.length }, () => value).concat(this);
};

/**
 * Trims the elements from the beginning of the array until a condition is met.
 *
 * @param {Function} callback - The condition to stop trimming.
 * @returns {Array} A new array with the trimmed elements removed from the beginning.
 *
 * @description
 * This custom method, $trimStart(), is added to the Array prototype in JavaScript. It trims the elements from the beginning of the array until a condition is met.
 *
 * @example
 * ```js
 * const arr = [0, 0, 0, 1, 2, 3];
 * const trimmedArr = arr.$trimStart(num => num === 0);
 *
 * console.log(trimmedArr); // Output: [1, 2, 3]
 * ```
 */
Array.prototype.$trimStart = function(callback) {
  let startIndex = 0;
  while (startIndex < this.length && callback(this[startIndex])) {
    startIndex++;
  }
  return this.slice(startIndex);
};

/**
 * Trims the elements from the end of the array until a condition is met.
 *
 * @param {Function} callback - The condition to stop trimming.
 * @returns {Array} A new array with the trimmed elements removed from the end.
 *
 * @description
 * This custom method, $trimEnd(), is added to the Array prototype in JavaScript. It trims the elements from the end of the array until a condition is met.
 *
 * @example
 * ```js
 * const arr = [1, 2, 3, 0, 0, 0];
 * const trimmedArr = arr.$trimEnd(num => num === 0);
 *
 * console.log(trimmedArr); // Output: [1, 2, 3]
 * ```
 */
Array.prototype.$trimEnd = function(callback) {
  let endIndex = this.length - 1;
  while (endIndex >= 0 && callback(this[endIndex])) {
    endIndex--;
  }
  return this.slice(0, endIndex + 1);
};