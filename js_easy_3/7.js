function runningTotal(array) {
	var result = [];
	var accumulator = 0;

	for(i = 0; i < array.length; i += 1) {
		accumulator += array[i];
		result.push(accumulator);
	}

	return result;
}

