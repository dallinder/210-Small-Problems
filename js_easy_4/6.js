function showMultiplicativeAverage(array) {
	var result = 1;
	var i;

	for(i = 0; i < array.length; i += 1) {
		result *= array[i];
	}

	return (result / array.length).toFixed(3);
}