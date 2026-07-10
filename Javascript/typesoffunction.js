
// Difference ways of declaring function - 4types

//1. Function Declaration

function greet(){
    console.log("Hello, Good Morning");
}
greet();

//2. Function Expression

let greet1 = function() {
    console.log("Hello, This is Function Expression");
}
greet1();

//3. Arrow Function

let greet2 = () => {
    console.log("Hello, This is Arrow Function");
}
greet2();

let greet3 = () => console.log("Hello, This is Arrow Function with single line");
greet3();

// 4. IIFE (Immediately Invoked Function Expression) 

(function() {
    console.log("Hello, This is IIFE Function");
})();

// 4 ways of declaring function in javascript for adding 3 numbers

// 1. Function Declaration

function add(a,b,c) {
    let sum = a + b + c;
    console.log("Sum of 3 numbers using Function Declaration: " + sum);
}
add(10,20,30);

// 2. Function Expression
let Addition = function (a,b,c) {
    let sum = a + b + c;
    console.log("Sum of 3 numbers using Function Expression: " + sum);
};
Addition(40,50,60);

// 3. Arrow Function
let add2 = (a,b,c) => {
    let sum = a + b + c;
    console.log(`Sum of 3 numbers using Arrow Function: ${sum}`);
};
add2(70,80,90);

// 4. IIFE (Immediately Invoked Function Expression)
(function(a,b,c) {
    let sum = a + b + c;
    console.log(`Sum of 3 numbers using IIFE Function: ${sum}`);
})(100,200,300);