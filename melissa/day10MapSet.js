// Exercises:Level 1


// // create an empty set
// const set1 = new Set();
// console.log(set1);
// // Create a set containing 0 to 10 using loop
// const numSet = new Set();
// for(let n = 0; n<=10; n++ ){
//   numSet.add(n);
// }
// console.log(numSet);


// // Remove an element from a set
// numSet.delete(5);
// console.log(numSet);
// // Clear a set
// numSet.clear();
// console.log(numSet);
// // Create a set of 5 string elements from array
// const pets = ["max", "beau", "blue", "riley", "zeus", "max", "blue"];
// const petSet = new Set(pets);
// console.log(petSet);

// // Create a map of countries and number of characters of a country
// const countries = ['Finland', 'Sweden', 'Norway']
// const countriesWithLength = countries.map((country) => [country, country.length] )

// console.log(countriesWithLength);
// const newMap = new Map(countriesWithLength);

// console.log(newMap);


// // Exercises:Level 2

// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]


// // Find a union b
// const newC = [...a, ...b]
// console.log(newC)
// const unionC = new Set(newC)
// console.log(unionC);


// // Find a intersection b

// const B = new Set (b);
// let intersection = a.filter(item => B.has(item))
// console.log(intersection);

// Find a with b

// Exercises:Level 3
// How many languages are there in the countries object file.

// console.log(countries);
let langArray = [];
for(country of countries){
  langArray = [...country.languages, ...langArray]
}


console.log(langArray.length);
// console.log("lang array" + langArray);
const unique = new Set(langArray);
console.log(unique);

// *** Use the countries data to find the 10 most spoken languages:
console.log(langArray);
const result = langArray.reduce((acc, item) => {
 if(!acc[item]){
acc + (acc[item] = 0)

 } 
 acc[item]++
 return acc;
}
  ,{});

  console.log(result);

//start with empty object
//loop though (reduce)  array 
// item does not exist? create it
//does exist, update count 
//return




   // Your output should look like this
  //  console.log(mostSpokenLanguages(countries, 10))
  //  [
  //    { English: 91 },
  //    { French: 45 },
  //    { Arabic: 25 },
  //    { Spanish: 24 },
  //    { Russian: 9 },
  //    { Portuguese: 9 },
  //    { Dutch: 8 },
  //    { German: 7 },
  //    { Chinese: 5 },
  //    { Swahili: 4 },
  //    { Serbian: 4 }
  //  ]

  // Your output should look like this
  // console.log(mostSpokenLanguages(countries, 3))
  // [
  // {English:91},
  // {French:45},
  // {Arabic:25}
  // ]