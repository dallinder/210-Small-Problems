var num1 = prompt('Enter the 1st number:');
var num2 = prompt('Enter the 2nd number:');
var num3 = prompt('Enter the 3rd number:');
var num4 = prompt('Enter the 4th number:');
var num5 = prompt('Enter the 5th number:');
var num6 = prompt('Enter the last number:');

var arr = [num1, num2, num3, num4, num5];

if (arr.includes(num6)) {
	console.log('The number ' + num6 + ' appears in ' + arr + '.');
} else {
	console.log('The number ' + num6 + ' does not appear in ' + arr + '.');
}