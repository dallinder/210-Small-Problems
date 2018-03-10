function asciiValue(string) {
	var i;
	var total = 0;

	for(i = 0; i < string.length; i += 1) {
		total += string[i].charCodeAt(0);
	}

	console.log(total);
}