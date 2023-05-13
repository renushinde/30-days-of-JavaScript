function learnIt() {
  console.log("learnin it");
}
learnIt();

console.log("um?");

  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName();

function addTwo(){
  let firstNum = 7;
  let secondNum = 3;
  let total = firstNum + secondNum;
 return total;
}

console.log(addTwo());

function addTwo(firstNum,secondNum ){

let total = firstNum + secondNum;
 return total;
}

console.log(addTwo(2, 8));

function square(num){
  return num * num;
}
console.log(square(3));


const squ= function(n) {
  return n * n;
}
console.log(squ(2));
console.log(typeof square);
console.log(typeof squ);




//function declaration
function monkey(n) {
  return n * n
}
console.log(monkey(2)) // 4


//arrow functions (similar to fucntion expression)
const monkey2 = n => {
  return n * n
};
console.log(monkey2(4));

// if we have only one line in the code block, it can be written as follows, explicit return
//const square = n => n * n  // -> 4

const sum = (a, b) => {
  return a + b;
}

console.log(sum(2, 5));

const test = (a) => {
  return a;
}
console.log(test(4));

const changeToUpperCase = arr => {
  const newArr = [];
  for(const element of arr){
    newArr.push(element.toUpperCase());
  }
  return newArr;
}

const cats = ['butterbean', 'blue kitty', 'max', 'beau'];

console.log(changeToUpperCase(cats));


//function with default param
// function saturday(param = 'this is the default param') {
//   console.log(param);
// }

// console.log(saturday());
// console.log(saturday('new value'));


const saturday = (param ='this is the default param' ) => {
  console.log(param);
}
console.log(saturday());
console.log(saturday('new value'));

const greetings = (name = 'Friend') => {
  // let message = name + ', welcome to 30 Days Of JavaScript!'
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))