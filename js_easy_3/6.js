function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
	var lowerStr = string.toLowerCase();
	var i;
	var compStr = '';

	for(var i = 0; i < lowerStr.length; i += 1) {
		if (/[a-z0-9]/.test(lowerStr[i])) {
			compStr += lowerStr[i];
		}
	}

	return isPalindrome(compStr);
}

function isPalindromicNumber(num){

	return isPalindrome(String(num));
}