function swap(string) {
	var stringArr = string.split(' ');
	var i;
	var j;

	for(i = 0; i < stringArr.length; i += 1) {
		stringArr[i] = swapLetters(stringArr[i]);
	}

	return stringArr.join(' ');
}

function swapLetters(word) {
	if (word.length === 1) {
		return word;
	}

	return word[word.length - 1] + word.slice(1,-1) + word[0];
}
