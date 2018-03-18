var age = Number(prompt('What is your age?'));
var retireAge = Number(prompt('At what age would you like to retire?'));
var year = (new Date()).getFullYear();
var retireYear = (retireAge - age) + year;

console.log('It\'\s ' + year + '. You will retire in ' + retireYear + '.');
console.log('Only ' + (retireYear - year) + ' more years of work to go!');