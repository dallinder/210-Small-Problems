function wordSizes(string) {
	var strArr = string.split(' ');
	var result = {};
	var i;

	for(i = 0; i < strArr.length; i += 1) {

		if (result[strArr[i].replace(/[^a-zA-Z]/g, '').length] >= 1) {
			result[strArr[i].replace(/[^a-zA-Z]/g, '').length] += 1;
		} else {
			result[strArr[i].replace(/[^a-zA-Z]/g, '').length] = 1;
		}
	}

	return result;
}

