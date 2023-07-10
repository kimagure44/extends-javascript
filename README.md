# Extends-Javascript
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Tests](https://img.shields.io/badge/tests-100%25-brightgreen.svg)]()
___
## Description
The **Extends-Javascript** library is a powerful library that extends the capabilities of the Array object in **JavaScript** (for now). With this library, you can enjoy a wide range of new methods and functionality that will make your work with arrays easier (for now).
___
## Installation
Install the library using npm:

```shell
npm install extends-javascript
```
___
## Use
To use the library we must include it in our project
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Extends Javascript</title>
</head>
<body>
  <script src="./node_modules/extend-javascript.js/src/index.js"></script>
  <script>
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.__proto__);
    /*
        $allCoincidencesBy: ƒ (properties)
        $allCoincidencesBy: ƒ (properties)
        $chunk: ƒ (chunkSize = 1)
        $compact: ƒ ()
        $countOccurrences: ƒ (value)
        $drop: ƒ (n)
        $findIndex: ƒ (callback)
        $findLast: ƒ (callback)
        $first: ƒ ()
        $flatten: ƒ ()
        $forEachRight: ƒ (callback)
        $generateExampleData: ƒ (structure)
        $groupBy: ƒ (prop)
        $groupByMultiple: ƒ (...conditions)
        $insertIn: ƒ (index, ...elements)
        $intersection: ƒ (...arrays)
        $isEmpty: ƒ ()
        $last: ƒ ()
        $maxByProperty: ƒ (property)
        $mean: ƒ ()
        $merge: ƒ (...arrays)
        $notDuplicated: ƒ ()
        $notDuplicatedBy: ƒ (prop)
        $padStart: ƒ (length, value)
        $pick: ƒ (...props)
        $pluck: ƒ (key)
        $remove: ƒ (element)
        $replace: ƒ (searchValue, replaceValue)
        $reverse: ƒ ()
        $sortBy: ƒ (prop, sortOrder = 'asc')
        $sum: ƒ ()
        $sumOfProperty: ƒ (property)
        $symmetricDifference: ƒ (otherArray)
        $take: ƒ (n)
        $trimEnd: ƒ (callback)
        $trimStart: ƒ (callback)
        $union: ƒ (...arrays)
        at: ƒ at()
        concat: ƒ concat()
        ...
    */
    console.log(arr.$first()); // 1
  </script>
</body>
</html>
```
___
## Below are all the methods and an example of their use:

## $first
**$first:** Gets the first element of the array.

__returns {*}__
The first element of the array.

__description__
This custom method, $first(), is added to the Array prototype in JavaScript. It allows retrieving the first element of the array on which it is called.

```js
const array = [1, 2, 3, 4, 5];
const firstElement = array.$first();
console.log(firstElement); // Output: 1
```
___
## $last
**$last:** Gets the last element of the array.

__@returns {*}__
The last element of the array.

__@description__
This custom method, $last(), is added to the Array prototype in JavaScript. It allows retrieving the last element of the array on which it is called.

```js
const array = [1, 2, 3, 4, 5];
const lastElement = array.$last();
console.log(lastElement); // Output: 5
```
___
## $chunk
**$chunk:** Splits the array into smaller chunks of a specified size.

__@param {number}__ [chunkSize=1]
The size of each chunk. Defaults to 1 if not provided.

__@returns {Array}__
An array containing chunks of the original array.

__@description__
This custom method, $chunk(), is added to the Array prototype in JavaScript. It allows splitting the array into smaller chunks of a specified size.

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = array.$chunk(3);
console.log(chunkedArray);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```
___
## $merge
**$merge:** Merges multiple arrays into a single array.

__@param {...Array}__ arrays
The arrays to be merged.

__@returns {Array}__
A new array containing all the elements from the original array and the additional arrays.

__@description__
This custom method, $merge(), is added to the Array prototype in JavaScript. It allows merging multiple arrays into a single array.

```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.$merge(array2, [7, 8], 9);
console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
___
## $groupBy
**$groupBy:**: Groups the elements of an array based on a specified property.

__@param {string}__ prop
The property used for grouping the elements.

__@returns {Object}__
An object with keys representing the unique property values and values representing the arrays of elements grouped by the property value.

__@description__
This custom method, $groupBy(), is added to the Array prototype in JavaScript. It allows grouping the elements of an array based on a specified property.

```js
const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Adam', age: 30 },
  { name: 'Emily', age: 25 }
];
const groupedByAge = persons.$groupBy('age');
console.log(groupedByAge);
/* 
Output: { 
    '25': [
      { name: 'Jane', age: 25 },
      { name: 'Emily', age: 25 }
   ],
    '30': [
      { name: 'John', age: 30 },
      { name: 'Adam', age: 30 }
   ]
}
*/
```
___
## $sortBy
**$sortBy:** Sorts the elements of an array based on a specified property and sort order.

__@param {string}__ prop
The property used for sorting the elements.

__@param {string}__ [sortOrder='asc']
The sort order. Valid values are 'asc' for ascending and 'desc' for descending. Default is 'asc'.

__@returns {Array}__
A new array with the elements sorted based on the specified property and sort order.

__@description__
This custom method, $sortBy(), is added to the Array prototype in JavaScript. It allows sorting the elements of an array based on a specified property and sort order.

```js
const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Adam', age: 35 },
    { name: 'Emily', age: 28 }
];
const sortedByAge = persons.$sortBy('age', 'asc');
console.log(sortedByAge);
/*
Output: [
    { name: 'Jane', age: 25 },
    { name: 'Emily', age: 28 },
    { name: 'John', age: 30 },
    { name: 'Adam', age: 35 }
]
```
___
## $notDuplicatedBy
**$notDuplicatedBy:** Filters the array to remove duplicate elements based on a specified property.

__@param {string}__ prop
The property used for identifying duplicate elements.

__@returns {Array}__
A new array with duplicate elements removed based on the specified property.

__@description__
This custom method, $notDuplicatedBy(), is added to the Array prototype in JavaScript. It allows filtering the array to remove duplicate elements based on a specified property.

```js
const persons = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Adam' },
  { id: 5, name: 'Jane' }
];

const uniqueByName = persons.$notDuplicatedBy('name');
console.log(uniqueByName);
// Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 4, name: 'Adam' } ]
```
___
## $notDuplicated
**$notDuplicated:** Filters the array to remove duplicate elements.

__@returns {Array}__
A new array with duplicate elements removed.

__@description__
This custom method, $notDuplicated(), is added to the Array prototype in JavaScript. It allows filtering the array to remove duplicate elements.

```js
const numbers = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = numbers.$notDuplicated();
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
```
___
## $allCoincidencesBy
**$allCoincidencesBy:** Finds all elements in the array that match the given properties.

__@param {Object}__ properties
An object containing the properties to match against.

__@returns {Array}__
An array of elements that match all the given properties.

__@description__
This custom method, $allCoincidencesBy(), is added to the Array prototype in JavaScript. It allows finding all elements in the array that match the given properties.

```js
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 35 }
];
const matches = users.$allCoincidencesBy({ age: 25 });
console.log(matches); // Output: [{ name: 'John', age: 25 }, { name: 'Bob', age: 25 }]
```
___
## $countOccurrences
**$countOccurrences:** Counts the occurrences of a specific value in the array.

__@param {*}__ value
The value to count occurrences of.

__@returns {number}__
The number of occurrences of the value in the array.

__@description__
This custom method, $countOccurrences(), is added to the Array prototype in JavaScript. It allows counting the occurrences of a specific value in the array.

```js
const numbers = [1, 2, 2, 3, 2, 4, 5, 2];
const count = numbers.$countOccurrences(2);
console.log(count); // Output: 4
```
___
## $sum
**$sum:** Calculates the sum of all elements in the array.

__@returns {number}__
The sum of all elements in the array.

__@description__
This custom method, $sum(), is added to the Array prototype in JavaScript. It allows calculating the sum of all elements in the array.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.$sum();
console.log(sum); // Output: 15
```
___
## $mean
**$mean:** Calculates the mean (average) value of the elements in the array.

__@returns {number}__
The mean value of the elements in the array.

__@description__
This custom method, $mean(), is added to the Array prototype in JavaScript. It allows calculating the mean (average) value of the elements in the array.

```js
const numbers = [1, 2, 3, 4, 5];
const mean = numbers.$mean();
console.log(mean); // Output: 3
```
___
## $remove
**$remove:** Removes all occurrences of the specified element from the array.

__@param {*}__ element
The element to be removed from the array.

__@returns {Array}__
A new array with all occurrences of the element removed.

__@description__
This custom method, $remove(), is added to the Array prototype in JavaScript. It allows removing all occurrences of a specified element from the array.

```js
const array = [1, 2, 3, 2, 4, 2];
const newArray = array.$remove(2);
console.log(newArray); // Output: [1, 3, 4] (2 removed)
```
___
## $isEmpty
**$isEmpty:** Checks if the array is empty.

__@returns {boolean}__
Returns true if the array is empty, false otherwise.

__@description__
This custom method, $isEmpty(), is added to the Array prototype in JavaScript. It allows checking if the array is empty.

```js
const array = [1, 2, 3];
console.log(array.$isEmpty()); // Output: false

const emptyArray = [];
console.log(emptyArray.$isEmpty()); // Output: true
```
___
## $insertIn
**$insertIn:** Inserts elements into the array at a specific index.

__@param {number}__ index
The index at which the elements should be inserted.

__@param {...*}__ elements
The elements to be inserted into the array.

__@returns {Array}__
The modified array with the inserted elements.

__@description__
This custom method, insertIn(), is added to the Array prototype in JavaScript. It allows inserting elements into the array at a specific index.

```js
const array = [1, 2, 3];
array.insertIn(1, 4, 5); // Inserts elements 4 and 5 at index 1
console.log(array); // Output: [1, 4, 5, 2, 3]
const emptyArray = [];
emptyArray.insertIn(0, 'a', 'b'); // Inserts elements 'a' and 'b' at index 0
console.log(emptyArray); // Output: ['a', 'b']
```
___
## $flatten
**$flatten:** Flattens the array by recursively concatenating sub-arrays into a single-dimensional array.

__@returns {Array}__
The flattened array.

__@description__
This custom method, $flatten(), is added to the Array prototype in JavaScript. It allows flattening the array by recursively concatenating sub-arrays into a single-dimensional array.

```js
const array = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = array.$flatten();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```
___
## $replace
**$replace:** Replaces all occurrences of a search value with a replace value in the array.

__@param {*}__ searchValue
The value to search for in the array.

__@param {*}__ replaceValue
The value to replace the search value with.

__@returns {Array}__
The modified array with replaced values.

__@description__
This custom method, $replace(), is added to the Array prototype in JavaScript. It allows replacing all occurrences of a search value with a replace value in the array.

```js
const array = [1, 2, 3, 2, 4, 2];
const replacedArray = array.$replace(2, 'two');
console.log(replacedArray); // Output: [1, 'two', 3, 'two', 4, 'two']
```
___
## $reverse
**$reverse:** Reverses the order of elements in the array.

__@returns {Array}__
The reversed array.

__@description__
This custom method, $reverse(), is added to the Array prototype in JavaScript. It allows reversing the order of elements in the array without modifying the original array.

```js
const array = [1, 2, 3, 4, 5];
const reversedArray = array.$reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
```
___
## $generateExampleData
**$generateExampleData:** Generates example data based on a given structure.

__@param {Object}__ structure
The structure object that defines the data schema.

__@returns {Array}__
An array containing generated example data based on the given structure.

__@description__
This custom method, $generateExampleData(), is added to the Array prototype in JavaScript. It allows generating example data based on a given structure object.

```js
const array = ['string', 'number', 'boolean'];
const structure = {
  name: 'string',
  age: 'number',
  isStudent: 'boolean',
  address: {
    street: 'string',
    city: 'string',
    zipCode: 'number'
    }
};
const exampleData = array.$generateExampleData(structure);
console.log(exampleData);
/* Output: [
    {
        name: "name qsd",
        age: 42,
        isStudent: true,
        address: {
            street: "street oer",
            city: "city mkh",
            zipCode: 86
        }
    },
    {
        name: "name jf",
        age: 9,
        isStudent: false,
        address: {
            street: "street rcm",
            city: "city pkn",
            zipCode: 52
        }
    },
 ]
 */
 ```
 ___
 ## $findLast
 **$findLast:** Finds the last element in the array that satisfies the provided testing function.

__@param {Function}__ callback
The function to execute on each element.

__@returns {*}__
The last element that satisfies the provided testing function, or undefined if no element is found.

__@description__
This custom method, $findLast(), is added to the Array prototype in JavaScript. It finds the last element in the array that satisfies the provided testing function.

```js
const arr = [1, 2, 3, 4, 5];
const lastEvenNumber = arr.$findLast(num => num % 2 === 0);
console.log(lastEvenNumber); // Output: 4
```
___
## $pluck
**$pluck:** Plucks the values of a specified property from the objects in the array.

__@param {string}__ key
The property key to pluck.

__@returns {Array}__
An array containing the values of the specified property from each object.

__@description__
This custom method, $pluck(), is added to the Array prototype in JavaScript. It plucks the values of a specified property from the objects in the array.

```js
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];
const names = users.$pluck('name');
console.log(names); // Output: ['John', 'Jane', 'Bob']
```
___
## $take
**$take:** Takes the first n elements from the array

__@param {number}__ n
The number of elements to take.

__@returns {Array}__ 
An array containing the first n elements from the original array.

__@description__
This custom method, $take(), is added to the Array prototype in JavaScript. It takes the first n elements from the array.

```js
const arr = [1, 2, 3, 4, 5];
const taken = arr.$take(3);
console.log(taken); // Output: [1, 2, 3]
```
___
## $drop
**$drop:** Drops the first n elements from the array.

__@param {number}__ n
The number of elements to drop.

__@returns {Array}__
An array containing the remaining elements after dropping the first n elements.

__@description__
This custom method, $drop(), is added to the Array prototype in JavaScript. It drops the first n elements from the array.

```js
const arr = [1, 2, 3, 4, 5];
const dropped = arr.$drop(2);
console.log(dropped); // Output: [3, 4, 5]
```
___
## $findIndex
**$findIndex:** Finds the index of the first element in the array that satisfies the provided testing function.

__@param {Function}__ callback
The function to execute on each element.

__@returns {number}__
The index of the first element that satisfies the provided testing function, or -1 if no element is found.

__@description__
This custom method, $findIndex(), is added to the Array prototype in JavaScript. It finds the index of the first element in the array that satisfies the provided testing function.

```js
const arr = [1, 2, 3, 4, 5];
const firstEvenIndex = arr.$findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1
```
___
## $compact
**$compact:** Creates a new array with all falsy values removed

__@returns {Array}__
A new array with all falsy values removed.

__@description__
This custom method, $compact(), is added to the Array prototype in JavaScript. It creates a new array with all falsy values removed.

```js
const arr = [0, 1, false, 2, '', 3, null, undefined, 4, NaN, 5];
const compacted = arr.$compact();
console.log(compacted); // Output: [1, 2, 3, 4, 5]
```
___
## $union
**$union:** Creates a new array that is the union of the current array with one or more arrays.

__@param {...Array}__ arrays
The arrays to be included in the union.

__@returns {Array}__
A new array that contains all unique elements from the current array and the provided arrays.

__@description__
This custom method, $union(), is added to the Array prototype in JavaScript. It creates a new array that is the union of the current array with one or more arrays.
```js
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];
const union = arr1.$union(arr2, arr3);
console.log(union); // Output: [1, 2, 3, 4, 5]
```
___
## $symmetricDifference
**$symmetricDifference:** Creates a new array that contains the symmetric difference between the current array and another array.

__@param {Array}__ otherArray
The other array to compare against.

__@returns {Array}__
A new array that contains the unique elements that appear in either the current array or the other array, but not both.

__@description__
This custom method, $symmetricDifference(), is added to the Array prototype in JavaScript. It creates a new array that contains the symmetric difference between the current array and another array.

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const symmetricDiff = arr1.$symmetricDifference(arr2);
console.log(symmetricDiff); // Output: [1, 2, 5, 6]
```
___
## $intersection
**$intersection:** Creates a new array that contains the intersection of the current array with one or more arrays.

__@param {...Array}__ arrays
The arrays to intersect with.

__@returns {Array}__
A new array that contains the elements that appear in all of the provided arrays.

__description__
This custom method, $intersection(), is added to the Array prototype in JavaScript. It creates a new array that contains the intersection of the current array with one ormás arrays.

```js
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];
const intersection = arr1.$intersection(arr2, arr3);
console.log(intersection); // Output: [3]
```
___
## $sumOfProperty
**$sumOfProperty:** Calculates the sum of a specific property for all elements in the array.

__@param {string}__ property
The property to sum.

__@returns {number}__
The sum of the specified property for all elements in the array.

__@description__
This custom method, $sumOfProperty(), is added to the Array prototype in JavaScript. It calculates the sum of a specific property for all elements in the array.

```js
const items = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
];
const totalPrice = items.$sumOfProperty('price');
console.log(totalPrice); // Output: 60
```
___
## $forEachRight
**$forEachRight:** Iterates over the elements of the array in reverse order and executes a callback function for each element.

__@param {Function}__ callback
The function to execute on each element.

__@description__
This custom method, $forEachRight(), is added to the Array prototype in JavaScript. It iterates over the elements of the array in reverse order and executes a callback function for each element.

```js
const arr = [1, 2, 3, 4, 5];
arr.$forEachRight((num, index) => {
    console.log(num); // Output: 5, 4, 3, 2, 1 (printed in reverse order)
});
```
___
## $pick
**$pick:** Creates a new array that contains the selected properties from each object in the array.

__@param {...string}__ props
The properties to pick from each object.

__@returns {Array}__
A new array that contains objects with only the selected properties.

__@description__
This custom method, $pick(), is added to the Array prototype in JavaScript. It creates a new array that contains the selected properties from each object in the array.

```js
const items = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];
const pickedProps = items.$pick('id', 'name');
console.log(pickedProps);
// Output: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }, { id: 3, name: 'Product 3' }]
```
___
## $groupByMultiple
**$groupByMultiple:** Groups the elements of the array based on multiple conditions and creates an object with the grouped elements.

__@param {...Function}__ conditions
The conditions to group by.

__@returns {Object}__
An object with the grouped elements.

__@description__
This custom method, $groupByMultiple(), is added to the Array prototype in JavaScript. It groups the elements of the array based on multiple conditions and creates an object with the grouped elements.

```js
const items = [
    { id: 1, category: 'A', type: 'X' },
    { id: 2, category: 'B', type: 'Y' },
    { id: 3, category: 'A', type: 'Y' },
    { id: 4, category: 'B', type: 'X' }
];
const grouped = items.$groupByMultiple(item => item.category, item => item.type);
console.log(grouped);
/* 
Output: {
    'A_X': [{ id: 1, category: 'A', type: 'X' }],
    'B_Y': [{ id: 2, category: 'B', type: 'Y' }],
    'A_Y': [{ id: 3, category: 'A', type: 'Y' }],
    'B_X': [{ id: 4, category: 'B', type: 'X' }]
}
*/
```
___
## $maxByProperty
**$maxByProperty:** Finds the maximum element in the array based on a specific property.

__@param {string}__ property
The property to compare.

__@returns {*}__
The element with the maximum value of the specified property.

__@description__
This custom method, $maxByProperty(), is added to the Array prototype in JavaScript. It finds the maximum element in the array based on a specific property.

```js
const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 },
    { id: 3, price: 15 }
];
const maxPriceItem = items.$maxByProperty('price');
console.log(maxPriceItem); // Output: { id: 2, price: 20 }
```
___
## $padStart
**$padStart:** Pads the array with a specific value at the beginning until it reaches the specified length.

__@param {number}__ length
The desired length of the padded array.

__@param {*}__ value
The value to pad the array with.

__@returns {Array}__
A new array with the specified length and padded with the specified value.

__@description__
 This custom method, $padStart(), is added to the Array prototype in JavaScript. It pads the array with a specific value at the beginning until it reaches the specified length.

```js
const arr = [1, 2, 3];
const paddedArr = arr.$padStart(5, 0);
console.log(paddedArr); // Output: [0, 0, 1, 2, 3]
```
___
## $trimStart
**$trimStart:** Trims the elements from the beginning of the array until a condition is met.

__@param {Function}__ callback
The condition to stop trimming.

__@returns {Array}__
A new array with the trimmed elements removed from the beginning.

__@description__
This custom method, $trimStart(), is added to the Array prototype in JavaScript. It trims the elements from the beginning of the array until a condition is met.

```js
const arr = [0, 0, 0, 1, 2, 3];
const trimmedArr = arr.$trimStart(num => num === 0);
console.log(trimmedArr); // Output: [1, 2, 3]
```
___
## $trimEnd
**$trimEnd:** Trims the elements from the end of the array until a condition is met.

__@param {Function}__ callback
The condition to stop trimming.

__@returns {Array}__
A new array with the trimmed elements removed from the end.

__@description__
This custom method, $trimEnd(), is added to the Array prototype in JavaScript. It trims the elements from the end of the array until a condition is met.

```js
const arr = [1, 2, 3, 0, 0, 0];
const trimmedArr = arr.$trimEnd(num => num === 0);
console.log(trimmedArr); // Output: [1, 2, 3]
```