function countOccurrences(arr) {
	var result = {};
	var i;
	var prop;

	for(i = 0; i < arr.length; i += 1) {
		if (result[arr[i]]) {
			result[arr[i]] += 1;
		} else {
			result[arr[i]] = 1;
		}
	}

	for (prop in result) {
		console.log(prop + " => " + result[prop]);
	};
}