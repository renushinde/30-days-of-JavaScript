// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const myFirstName = 'melissa';
const myLastName = 'averinos';
let yourCountry = 'united states';  
let  yourCity = 'west barnstable';
let yourAge = 48;
let isMarried = true;
let year = 2023;

console.log(typeof myFirstName);
console.log(typeof myLastName);
console.log(typeof yourCountry);
console.log(typeof yourCity);
console.log(typeof yourAge);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of  is equal to 10
console.log(typeof '10' === 10 );

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')=== 10);

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.

console.log(1 == true);
console.log('10' == 10);


// Write three JavaScript statement which provide falsy value.
console.log(1+1== 3);
console.log('ten' == 10);


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
console.log(4 > 3);
console.log(4 >= 3);


4 < 3
4 <= 3
console.log(4 < 3);
console.log(4 <= 3);


4 == 4
4 === 4
console.log(4 == 4);
console.log(4 === 4);


console.log(4 != 4);
console.log(4 !== 4);

console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length !== 'jargon'.length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12); 

console.log(4 > 3 && 10 > 12); 

console.log(4 > 3 || 10 < 12); 
console.log(4 > 3 || 10 > 12); 
console.log(!(4 > 3)); 
console.log(!(4 < 3));
console.log(!(false));

console.log(!(4 > 3 && 10 < 12));

console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//There is no 'on' in both dragon and python


// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.