var bill = parseFloat(prompt('What is the bill'));
var tipPercent = parseFloat(prompt('What is the tip percentage')) / 100;
var tipAmount = (bill * tipPercent);
var total = bill + tipAmount

console.log('The tip is $' + tipAmount.toFixed(2));
console.log('The total is $' + total.toFixed(2));