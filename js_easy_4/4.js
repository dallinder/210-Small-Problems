function findDup(array) {
	var result = {};
	var i;
	var num;

	for(i = 0; i < array.length; i += 1) {
		if (result[array[i]]) {
			result[array[i]] += 1;
		} else {
			result[array[i]] = 1;
		}
	}

	for (num in result) {
		if (result[num] === 2) {
			return Number(num);
		}
	}
}