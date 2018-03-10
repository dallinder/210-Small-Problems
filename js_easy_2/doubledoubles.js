function twice(num) {
	var firstHalf = '';
	var secondHalf = '';
	var numString = String(num);
	var halfOfLength = numString.length / 2;

	for(var i = 0; i < halfOfLength; i += 1) {
		firstHalf += numString[i];
	}

	for(var i = halfOfLength; i < numString.length; i += 1) {
		secondHalf += numString[i];
	}

	if (firstHalf === secondHalf) {
		return num;
	} else {
		return num * 2;
	}
}

// store the number as string
// split the string in half
// if both sides are ===, return num * 2
// otherwise return the original number
