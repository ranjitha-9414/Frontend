
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