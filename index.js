function isPalindrome(word) {
  // Convert the input string to lowercase and remove non-alphabetic characters
  const str = word.toLowerCase().replace(/[^a-z]/g, "");

  // Initialize pointers
  let start = 0;
  let end = str.length - 1;

  // Loop through the string until start pointer is less than end pointer
  while (start < end) {
    // If characters at start and end positions are not equal, return false
    if (str[start] !== str[end]) {
      return false;
    }
    // Move start pointer forward and end pointer backward
    start++;
    end--;
  }

  // If the loop completes without returning false, return true
  return true;
}

/* 
  Add your pseudocode here
  You can write your pseudocode explaining the steps of the algorithm here.
  For example:
  1. Convert the input string to lowercase.
  2. Remove all non-alphabetic characters from the string.
  3. Initialize two pointers, one at the start and one at the end of the string.
  4. Loop while the start pointer is less than the end pointer:
    5. If the characters at the start and end pointers are not the same, return false.
    6. Move the start pointer forward and the end pointer backward.
  7. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here
  You can write an explanation of how your algorithm works here.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
