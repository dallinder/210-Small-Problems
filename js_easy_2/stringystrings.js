function stringy(num) {
	var newStr = '';
	var i;

	for(i = 1; i <= num; i += 1) {
		if (i % 2 === 1) {
			newStr += '1';
		} else {
			newStr += '0';
		}
	}

	console.log(newStr);
}