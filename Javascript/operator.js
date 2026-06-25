let a = 10;
let b = 5;

// Arithmetic Operators
document.write("Arithmetic Operators:<br>");
document.write("a + b = " + (a + b) + "<br>");
document.write("a - b = " + (a - b) + "<br>");
document.write("a * b = " + (a * b) + "<br>");
document.write("a / b = " + (a / b) + "<br>");
document.write("a % b = " + (a % b) + "<br>");
document.write("a ** b = " + (a ** b) + "<br>");
document.writeln("<br>");

let x = 10;
document.write("x++ = " + (x++) + "<br>");
document.write("x = " + x + "<br>"); // To show the updated value of x after post-increment
document.write("++x = " + (++x) + "<br>");
document.write("x = " + x + "<br>"); // To show the updated value of x after pre-increment
document.write("x-- = " + (x--) + "<br>");
document.write("x = " + x + "<br>"); // To show the updated value of x after post-decrement     
document.write("--x = " + (--x) + "<br>");
document.write("x = " + x + "<br>"); // To show the updated value of x after pre-decrement
document.writeln("<br>");

// Assignment / Short-hand Operators
let c = 10;
document.writeln("Assignment Operators:<br>");
document.writeln("c = " + c + "<br>");
c += 5;
document.writeln("c += 5 = " + c + "<br>");
c -= 3;
document.writeln("c -= 3 = " + c + "<br>");
c *= 2;
document.writeln("c *= 2 = " + c + "<br>");
c /= 4;
document.writeln("c /= 4 = " + c + "<br>");
c %= 3;
document.writeln("c %= 3 = " + c + "<br>");
c **= 2;
document.writeln("c **= 2 = " + c + "<br>");
document.writeln("<br>");
// Comparison/Relational Operators
let d = 5;
let e = 10;
document.writeln("Comparison/Relational Operators:" + "<br>");
document.writeln("d == e: " + (d == e) + "<br>");//strictly not equal/compare value
document.writeln("d === e: " + (d === e) + "<br>");//strictly equal/compare value and type
document.writeln("d != e: " + (d != e) + "<br>");
document.writeln("d > e: " + (d > e) + "<br>");
document.writeln("d < e: " + (d < e) + "<br>");
document.writeln("d >= e: " + (d >= e) + "<br>");
document.writeln("d <= e: " + (d <= e) + "<br>");
document.writeln("<br>");

// Logical Operators 
document.writeln("Logical Operators:" + "<br>");
let age = 21;
document.writeln("age >= 18 && age <= 30: " + (age >= 18 && age <= 30) + "<br>");
document.writeln("age < 18 || age > 30: " + (age < 18 || age > 30) + "<br>");
document.writeln("!(age >= 18 && age <= 30): " + (!(age >= 18 && age <= 30)) + "<br>");
let isMember = true;
document.writeln("isMember && age >= 18: " + (isMember && age >= 18) + "<br>");
document.writeln("<br>");

// Bitwise Operators
document.writeln("Bitwise Operators:" + "<br>");
let p = 2;
let q = 3;
document.writeln("p & q = " + (p & q) + "<br>");//o/p: 2 
document.writeln("p | q = " + (p | q) + "<br>");//o/p: 3
document.writeln("p ^ q = " + (p ^ q) + "<br>");//o/p: 1
document.writeln("~p = " + (~p) + "<br>");//o/p: -3
document.writeln("p << 1 = " + (p << 1) + "<br>");//o/p: 4
document.writeln("p >> 1 = " + (p >> 1) + "<br>");//o/p: 1
document.writeln("p >>> 1 = " + (p >>> 1) + "<br>");//o/p: 1
document.writeln("<br>");


// Ternary Operator
document.writeln("Ternary Operator:" + "<br>");
let score = 85;
let result = (score >= 50) ? "Pass" : "Fail";
document.writeln("Score: " + score + ", Result: " + result + "<br>");
let number = 10;
let parity = (number % 2 === 0) ? "Even" : "Odd";
document.writeln("Number: " + number + ", Parity: " + parity + "<br>"); 
document.writeln("<br>");

// Type Operator
//typeof
document.writeln("Typeof Operator:" + "<br>");
let str = "Hello, World!";
document.writeln("Type of str: " + typeof(str) + "<br>");
let num = 42;
document.writeln("Type of num: " + typeof num + "<br>");
let bool = true;
document.writeln("Type of bool: " + typeof bool + "<br>");
let obj = {};
document.writeln("Type of obj: " + typeof obj + "<br>");
let arr = [];
document.writeln("Type of arr: " + typeof arr + "<br>");
let undef;
document.writeln("Type of undef: " + typeof undef + "<br>");
let nul = null;
document.writeln("Type of nul: " + typeof nul + "<br>");
//instanceof
document.writeln("Instanceof Operator:" + "<br>");
let date = new Date();
document.writeln("date instanceof Date: " + (date instanceof Date) + "<br>");
let arr2 = [1, 2, 3];
document.writeln("arr2 instanceof Array: " + (arr2 instanceof Array) + "<br>");
let arr3 = [1, 2, 3];
document.writeln("arr3 instanceof String: " + (arr3 instanceof String) + "<br>");
document.writeln("arr3 instanceof Object: " + (arr3 instanceof Object) + "<br>");
let arr4 = ["a","b"];
document.writeln("arr4 instanceof Array: " + (arr4 instanceof Array) + "<br>");
document.writeln("arr4 instanceof String: " + (arr4 instanceof String) + "<br>");
let str2 = "Hello";
document.writeln("str2 instanceof String: " + (str2 instanceof String) + "<br>");
document.writeln("str2 instanceof Object: " + (str2 instanceof Object) + "<br>");
let num2 = 42;
document.writeln("num2 instanceof Number: " + (num2 instanceof Number) + "<br>");
document.writeln("num2 instanceof Object: " + (num2 instanceof Object) + "<br>");

//Tricky questions

console.log("5" -2);
console.log(0 == false);//
console.log(0 === false);//
console.log(null == undefined);
console.log(true + true);//op: 2
console.log(true + false);//op: 1