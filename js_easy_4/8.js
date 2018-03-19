function digitList(num) {
	var arr = String(num).split('');
	var i;
	var result = [];

	for (i = 0; i < arr.length; i += 1) {
		result.push(parseInt(arr[i], 10));
	}

	return result;
}