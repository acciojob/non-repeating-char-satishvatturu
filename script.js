function firstNonRepeatedChar(str) {
  // Create an object to store the count of each character in the string
  const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if no non-repeated character is found
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result === null) {
  alert("null");
} else {
  alert(result);
}


