//alert()

alert("Form is submitted successfully!");   
alert("Only 500MB  is left");

//confirm()

let choice = confirm("Do you want continue?");
document.write(`The user selected choice is ${choice}`);

document.write("<br>");
document.write("The user selected choice is " + (choice ? "Ok" : "cancel"));

//prompt()

let name = prompt("Enter your name");
document.write("<br>");
document.write(`The user name is ${name}`);

//write a simple prompt to add 2 numbers from user and display the result

let firstNumber = Number(prompt("Enter first number "));
let secondNumber = Number(prompt("Enter second number "));
let sum = firstNumber + secondNumber;
document.write("<br>");
document.write(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);

let name1 = prompt("Enter your name");
alert(`The user name is ${name1}`);