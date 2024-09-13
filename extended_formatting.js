function uniqueValues(arr) {
    return [...new Set(arr)];
  }
  
  function letterFrequency(word) {
    const frequency = {};
    for (const letter of word) {
      if (letter.match(/[a-zA-Z]/)) { // Nur Buchstaben zählen
        const lowerLetter = letter.toLowerCase();
        frequency[lowerLetter] = (frequency[lowerLetter] || 0) + 1;
      }
    }
    return frequency;
  }
  
  function sortByKey(arr, key) {
    return arr.slice().sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  module.exports = {
    uniqueValues,
    letterFrequency,
    sortByKey,
    deepClone,
    intersection
  };
  