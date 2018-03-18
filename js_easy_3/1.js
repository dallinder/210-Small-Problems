function randomAge(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


var age = randomAge(20, 200);
console.log('Tedd is ' + age + ' years old!')