function multiplyList(arr1, arr2) {
	var result = [];
	var i;

	for(i = 0; i < arr1.length; i += 1) {
		result.push(arr1[i] * arr2[i])
	}

	return result;
}