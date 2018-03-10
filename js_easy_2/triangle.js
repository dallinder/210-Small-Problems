function triangle(num) {
	var spaces = ' ';
	var stars = '*';
	var iteration = 1;
	var line = '';
	
	for(iteration; iteration <= num; iteration += 1) {
		line = '';
		line += spaces.repeat(num - iteration);
		line += stars.repeat(iteration);
		console.log(line);
	}
}

// var spaces = ' '
// var stars = '*';

// example if number is 5
// first line 4 spaces, 1 star;
// second line 3 spaces, 2 stars;
// third line 2 spaces, 3 stars;
// fourth line 1 space, 4 stars;
// fifth line 0 spaces, 5 stars;

// # of stars === iteration number
// # of spaces === spaces - iteration number
// iteration number starts at 1