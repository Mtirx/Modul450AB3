// a. Gibt das letzte Element eines Arrays zurück
function getLastElement(arr) {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
  }
  
  // b. Prüft, ob das gegebene Wort ein Palindrom ist
  function isPalindrome(word) {
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  // c. Wandelt die ersten Buchstaben eines jeden Wortes in einem String in Großbuchstaben um
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // d. Gibt die Länge des längsten Wortes in einem Satz zurück
  function lengthOfLongestWord(sentence) {
    const words = sentence.split(' ');
    const longestWord = words.reduce((longest, current) => 
      current.length > longest.length ? current : longest, 
      ''
    );
    return longestWord.length;
  }
  
  module.exports = {
    getLastElement,
    isPalindrome,
    capitalizeWords,
    lengthOfLongestWord
  };
  