//let carModel = 'Citroen';
//let carCategory = 'Hatchback';
//let typeOfFuel = 'Petrol';
//let carColour = 'Blue';

//console.log(carModel, carCategory, typeOfFuel, carColour);

//let carModel = prompt('car model?');
//let carCategory = prompt ('car category?');
//let typeOfFuel = prompt('car fuel?');
//let carColour = prompt('car colour?');

//console.log(carModel, carCategory, typeOfFuel, carColour);

//let name = prompt('what`s your name?');
//alert(`hello ${name}`);
//let year = prompt ('year of birth');
//const currentYear = 2022;
//let bdYear = Number(year);
//console.log(typeof year);
//console.log(typeof bdYear);
//console.log(currentYear - year);

//let square = prompt('what`s the length of the side of the square?');
//let squareNum = Number(square);
//console.log(squareNum * 2);

const r = prompt('Enter any number to calculate the radius of the circle');
const circleLength = 2 * Math.PI * r;
console.log(Math.round(circleLength));
alert(`Circle radius: ${Math.round(circleLength)} cm`);

const circleSquare = Math.PI * Math.pow(r, 2);
console.log(Math.round(circleSquare));
alert(`Circle square: ${Math.round(circleSquare)} cm`);

let name = prompt('What`s your name?');
alert(`Hello, ${name}!`);
let str =`Hello, ${name}!`;
console.log(str);

let year = prompt ('What`s your year of birth?');
const currentYear = 2022;
let bdYear = Number(year);
console.log(typeof year);
console.log(typeof bdYear);
console.log(currentYear - year);
alert(`Very nice age, ${currentYear - year}!`);