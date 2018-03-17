function multisum(number) {
	var i;
	var total = 0;

	for(i = 1; i <= number; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) {
			total += i;
		}
	}

	console.log(total);
}