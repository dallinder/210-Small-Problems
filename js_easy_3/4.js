function isPalindrome(string) {
	var revStr = '';
	var length = string.length;

	for (i = length - 1; i >= 0; i -= 1) {
		revStr += string[i];
	}

	return revStr === string;
}

// Iterate from the end of the string and put the letters in a revStr variable
// compare string and revStr using ===

// LS Solution
// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }