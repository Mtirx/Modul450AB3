const { 
    uniqueValues, 
    letterFrequency, 
    sortByKey, 
    deepClone, 
    intersection 
  } = require('./extended_formatting');
  
  test('uniqueValues should return only unique values', () => {
    expect(uniqueValues([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
  
  test('letterFrequency should count letter occurrences', () => {
    expect(letterFrequency('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test('sortByKey should sort objects by specified key', () => {
    const objects = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    expect(sortByKey(objects, 'age')).toEqual([
      { name: 'Jane', age: 25 },
      { name: 'John', age: 30 }
    ]);
  });
  
  test('deepClone should create a deep copy of an object', () => {
    const original = { a: 1, b: { c: 2 } };
    const clone = deepClone(original);
    expect(clone).toEqual(original);
    expect(clone).not.toBe(original);
  });
  
  test('intersection should return common elements of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });
  