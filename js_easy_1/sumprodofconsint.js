var integer = parseInt(prompt('Please enter an integer greater than 0:'), 10);
var operation = prompt("Enter \"s\" to compute the sum, or \"p\" to compute the product.")
var sum;
var product;
function addition(number) {
	var total = 0;

	for(var i = 1; i <= number; i += 1) {
		total += i;
	}

	return total;
}

function multiplication(number) {
	var total = 1;

	for(var i = 1; i <= number; i += 1) {
		total *= i;
	}

	return total;
}

if (operation === 's') {
	sum = addition(integer);
	console.log('The sum of the the integers between 1 and ' + integer + ' is ' + sum);
} else if (operation === 'p') {
	product = multiplication(integer);
	console.log('The product of the the integers between 1 and ' + integer + ' is ' + product);
} else {
	console.log('Oops. That is not a valid operation.')
}