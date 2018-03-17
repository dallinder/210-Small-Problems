function logInBox(string) {
	var length = string.length;
	var str = ''
	var spaces = ''

	for(var i = 0; i < length; i += 1) {
		str += '-';
		spaces += ' ';
	}

	console.log('+-' + str + '-+');
	console.log('| ' + spaces + ' |');
	console.log('| ' + string + ' |');
	console.log('| ' + spaces + ' |');
	console.log('+-' + str + '-+');
}