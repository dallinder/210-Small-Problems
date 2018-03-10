function lastCharacter(string) {
	return string.charAt(string.length - 1);
}

function lastTwoCharacters(string) {
	var result = '';
	result += string.charAt(string.length - 2);
	result += lastCharacter(string);

	return result;
}

function century(year) {
	var cent = String(Math.ceil(year / 100));
	var result = '';

	if (lastTwoCharacters(cent) >= '11' && lastTwoCharacters(cent) <= '13') {
		result = cent + 'th';
	} else if (lastCharacter(cent) === '1') {
		result = cent + 'st';
	} else if (lastCharacter(cent) === '2') {
		result = cent + 'nd';
	} else if (lastCharacter(cent) == '3') {
		result = cent + 'rd';
	} else {
		result = cent + 'th';
	}

	return result;
}

//  1 - st, 2 - nd, 3 - rd, 4-0 - th;

// year and use Math.ceil(year / 100) => gives the century
// store the century as a string.
// use an if statement to determine if the it should have : st, nd, rd, th added to the end