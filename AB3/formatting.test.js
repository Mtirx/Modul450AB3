const { 
  getLastElement, 
  isPalindrome, 
  capitalizeWords, 
  lengthOfLongestWord 
} = require('./formatting');

test('getLastElement should return the last element of the array', () => {
  expect(getLastElement([1, 2, 3, 4, 5])).toBe(5);
  expect(getLastElement(['a', 'b', 'c'])).toBe('c');
  expect(getLastElement([])).toBeUndefined();
});

test('isPalindrome should return true for palindromes', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

test('isPalindrome should return false for non-palindromes', () => {
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('world')).toBe(false);
});


test('capitalizeWords should capitalize the first letter of each word', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
  expect(capitalizeWords('javaScript is awesome')).toBe('JavaScript Is Awesome');
});

test('lengthOfLongestWord should return the length of the longest word', () => {
  expect(lengthOfLongestWord('The quick brown fox jumps over the lazy dog')).toBe(5);
  expect(lengthOfLongestWord('Hello world')).toBe(5);
  expect(lengthOfLongestWord('Manuel 6')).toBe(6);
});
