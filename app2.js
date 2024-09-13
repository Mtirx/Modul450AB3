
const { uniqueValues, letterFrequency, sortByKey, deepClone, intersection } = require('./extended_formatting');

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


console.log(letterFrequency('Hello World')); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }


const objects = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Doe', age: 35 }];
console.log(sortByKey(objects, 'age')); 


const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
