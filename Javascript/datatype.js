// primitive Datatype

// 1. Number

let a = 14;
console.log(a); //14
console.log(typeof a, a); //number

a = "Ranjitha";
console.log(typeof a, a); //string

a = 3.14;
console.log(typeof a, a); //number 3.14

a = 10/0;
console.log(a); //Infinity
console.log(typeof a, a); //number Infinity

a = -10/0;
console.log(a); //-Infinity
console.log(typeof a, a); //number -Infinity

a = 0/34;
console.log(a); //0

a = 0/0;
console.log(a);//Nan - not a number 

// 2. String- ' ', " ", ` `

let b = 'Ranjitha';
console.log(typeof b, b); //string Ranjitha

let str = 'C';
console.log(typeof str, str); //string C

str = "Ranjitha";
console.log(typeof str, str); //string Ranjitha

str = `virat`;
console.log(typeof str, str); //string virat

//My name is virat

console.log("My name is " + str); //My name is virat
console.log("my name is " , str); //my name is virat

//String literals `${pi}`
//for any string literlas we use backticks ` ` and for any variable we use ${variable name} inside the backticks
console.log(`My name is ${str}`); //My name is virat


// 3. Boolean - true or false

let isValid = true;
console.log(typeof isValid, isValid); //boolean true

isValid = false;
console.log(typeof isValid, isValid); //boolean false


// 4. undefined - when we declare a variable but not assign any value to it, then the value of that variable is undefined

let name;
console.log(typeof name); //undefined
console.log(name); //undefined

// 5. null - when we assign a variable with null, then the value of that variable is null

let age = null;
console.log(age); //null
console.log(typeof age); //object

// 6. BigInt - when we want to store a number which is greater than 2^53 - 1, then we use BigInt

let num = 1234567890123456789012345678901234567890n;
console.log(num);
console.log(typeof num); //bigint

// 7. Symbol - when we want to create a unique value, then we use Symbol        

let sym = Symbol('unique');
console.log(sym);
console.log(typeof sym); //symbol 



// Complex datatypes

// 1. Array - when we want to store multiple values in a single variable, then we use Array

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
console.log(typeof fruits); //object
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //orange
console.log(fruits, fruits[2]);//['apple', 'banana', 'orange'] orange

// 2. Object - when we want to store multiple values in a single variable in the form of key-value pairs, then we use Object

let person = {
    name: 'Ranjitha',
    age: 21,
    city: 'Mysore'
};
console.log(person);//complete object {name: 'Ranjitha', age: 21, city: 'Mysore'}
console.log(typeof person); //object
console.log(person.name); //Ranjitha
console.log(person.age); //21
console.log(person.city); //Mysore

// keys and values
console.log(Object.keys(person)); //['name', 'age', 'city']
console.log(Object.values(person)); //['Ranjitha', 21, 'Mysore']


// 3. Function - when we want to perform a specific task, then we use Function

function add(){
     c= 3 + 3;
    console.log(c); //6
}
add();

function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('Ranjitha')); //Hello Ranjitha