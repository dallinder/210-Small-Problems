function dms(num) {
	var degrees = Math.trunc(num);
	var minutes = (num - degrees) * 60;
	var seconds = ((minutes - Math.trunc(minutes)) * 60);

	return (String(degrees) + '˚' + padWithZeros(minutes) + "'" + padWithZeros(seconds) + "\"" )
}

function padWithZeros(num) {
	if(String(Math.trunc(num)).length > 1) {
		numStr = String(Math.trunc(num));
	} else {
		numStr = '0' + String(Math.trunc(num));
	}

	return numStr;
}