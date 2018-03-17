function cleanUp(string) {
	var result = '';
	var i;
	var letters = /^[A-Za-z]+$/;

	for(i = 0; i < string.length; i += 1) {
		if (string[i].match(letters)) {
			result += string[i];
			
		} else {

			if (string[i-1] === undefined || string[i-1].match(letters)) {
				result += ' ';
			} else {
				continue;

			}
		}
	}

	return result;
}

// create a new string variable
// iterate through the string.
// if string[i] is non-alphabetical
	// if string[i-1] is non-alpha
		// continue
	// else 
		// newStr += ' '

// else if string[i] is alpha
// newStr += string[i]