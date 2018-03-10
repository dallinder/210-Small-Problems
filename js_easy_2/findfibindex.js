function findFibonacciIndexByLength(num) {
	var first = 1;
	var second = 1;
	var index = 2;
	var fibonacci;

	while(true) {

		if(String(fibonacci).length === num) {
			return index;

		} else {
			fibonacci = first + second;
			first = second;
			index += 1
			second = fibonacci;

		}
	}
	

}

// Iterate over a for loop.
// first = 1
// section = 1
// index = 2;
// fib = nothing;

// after first iteration:
//  first = 1;
// second = 2;
// index = first + second (3)

// after next iteration:
// first = 2;
// second = 3;
// index = 5;