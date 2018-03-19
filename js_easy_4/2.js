function union() {
	var result = [];
	var i;

	for (i = 0; i < arguments.length; i += 1) {
		noDuplicates(arguments[i], result);
	}


	return result;
}

function noDuplicates(arr, resultArr) {
	for (i = 0; i < arr.length; i += 1) {
		if (!resultArr.includes(arr[i])) {
			resultArr.push(arr[i]);
		}
	}
}