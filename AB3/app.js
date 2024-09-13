const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting');

// Verwende die importierten Funktionen
const array = [1, 2, 3, 4, 5];
console.log(getLastElement(array)); // 5

const word = 'A man, a plan, a canal, Panama';
console.log(isPalindrome(word)); // true

const sentence = 'hello world';
console.log(capitalizeWords(sentence)); // 'Hello World'

const longSentence = 'The quick brown fox jumps over the lazy dog';
console.log(lengthOfLongestWord(longSentence)); // 5
