function crunch(string) {
	var newStr = '';
	var i;

	for(i = 0; i < string.length; i += 1) {

		if (string[i] === string[i - 1]) {
			continue;

		} else {
			newStr += string[i];
		}
	}

	console.log(newStr);
}