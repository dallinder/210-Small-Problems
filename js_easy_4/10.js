function average(arr) {
	var result = 0;
	var i;

	for (i = 0; i < arr.length; i += 1) {
		result += arr[i];
	}

	return Math.floor(result / arr.length);
}