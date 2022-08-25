function isPalindrome(word) {
  // Write your algorithm here
  if(word==="") {
		console.log("Nothing found!");
		return false;
	}
  else if(word == word.split('').reverse().join('')){
    return true;
  }
  else if(word != word.split('').reverse().join('')){
    return false;
  }
}

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
 1. Check whether the string is empty or not
 2. Compare the result of iterating normally and reverse
 3. if the characters match then === is palindrome will be true otherwise falsi
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
