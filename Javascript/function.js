//function declaration
function add() {
    let c = 10 + 20;
    console.log(c); //30
}
add();//function call

function sub(a, b) {
    return a - b;
}
let result = sub(40, 20);
console.log(result); //20

function square(num) {
    console.log(num * num);
}
square(5); //25

function square1() {
    let num = 6;
    console.log(num * num);
}
square1(); //36

function areaPerimeter(r) {
    const pi = 3.14;
    let area = pi * (r ** 2);
    let perimeter = 2 * pi * r;
    console.log(`Area of circle is ${area} and perimeter of circle is ${perimeter}`);
}
areaPerimeter(5); //Area of circle is 78.5 and perimeter of circle is 31.400000000000002

function simpleInterest(p, t, r) {
    let interest = (p * t * r) / 100;
    console.log(`Simple Interest is ${interest}`);
}
simpleInterest(1000, 2, 5); //Simple Interest is 100

//function types -4 types

//1. Function without parameter and without return type
function greet() {
    console.log("Hello, Good Morning");
}
greet(); //Hello, Good Morning

//2. Function with parameter and without return type
function greet1(name) {
    console.log(`Hello, Good Morning ${name}`);
}
greet1("Alice"); //Hello, Good Morning Alice

//3. Function without parameter and with return type
function greet2() {
    return "Hello, Good Morning";
}   
let message = greet2();
console.log(message); //Hello, Good Morning

//4. Function with parameter and with return type
function greet3(name) {
    return `Hello, Good Morning ${name}`;
}   
let message1 = greet3("Bob");
console.log(message1); //Hello, Good Morning Bob

