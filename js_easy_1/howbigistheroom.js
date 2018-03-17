var length = prompt('Enter the length of the room in meters');
var width = prompt('Enter the width of the room in meters');
var areaInMeters = Number(length) * Number(width);
var areaInSqFeet = (areaInMeters * 10.7639).toFixed(2);

console.log('The area of the room is ' + areaInMeters + ' square meters (' + areaInSqFeet + ' square feet)');