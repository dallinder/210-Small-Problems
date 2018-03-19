function halvsies(array) {
	var result = [];
	
	if (array.length % 2 === 0) {
		result.push(array.splice(0, array.length / 2));
		result.push(array);
	} else {
		result.push(array.splice(0, (array.length / 2) + 1));
		result.push(array);
	}

	return result;
}