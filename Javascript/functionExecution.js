function greet() {
    console.log("Good Morning");
}
greet();

greet1();//will work bcz function declaration is hoisted to the top of the code.
function greet1() {
    console.log("Hello");
}

let greet2 = function() {
    console.log("Good Evening");
}
greet2();

greet3();//will not work bcz function expression is not hoisted to the top of the code. It is treated as a variable and variables are hoisted but not initialized.
let greet3 = function() {
    console.log("Good Night");
}


// debugging