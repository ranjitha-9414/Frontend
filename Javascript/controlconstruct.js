// If Statement - A student is eligible for voting if age ≥ 18.

//If-Else Statement - Write a program to check if a number is positive or negative.

//If-Else Ladder- Check if a number is positive, negative, or zero.

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)

//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.

//While Loop - Print numbers from 1 to 5 using while loop.

//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.

//For…of Loop - Print all fruits in a basket.

//For…in - Print all student details from an object.

//forEach Loop - Print the squares of all numbers in an array.

// ------------------ control flow modifiers------------------------

//Break Statement - Question: Stop printing when number reaches 3.

//Continue Statement -Question: Skip printing number 3.



let age = prompt("Enter your age");
if(age >= 18) {
    console.log("You are eligible to vote");
}

let num = Number(prompt("Enter a number"));
if(num >= 0) {
    console.log(`The number ${num} is positive`);
} else {
    console.log(`The number ${num} is negative `);
}

let number = Number(prompt("Enter a number"));
if(number > 0) {
    console.log(`The number ${number} is positive`);
} else if(number < 0) {
    onsole.log(`The number ${number} is negative `);
}
else {
    console.log(`The number ${number} is zero `);
}

let marks = prompt("Enter your marks: ");
if(marks >= 40) {
    if(marks >= 80) {
        console.log("Distinction");
    } else {
        console.log("pass");
    }
} else {
    console.log("Fail");
}

let grade = prompt("Enter your grade: ");
switch(grade) {
    case 'A'  : 
        console.log("Excellent");
        break;

    case 'B' :
        console.log("Good");
        break;

    case 'C' :
        console.log("Average");
        break;

    case 'D' :
        console.log("Poor");
        break;
    
    default :
        console.log("Invalid Input");
} 

let month = Number(prompt("Enter the month in number: "));
switch(month) {
    case 12 :
    case 1 :
    case 2 : console.log("Winter"); break;
    case 3:
    case 4:
    case 5:
    case 6 : console.log("Summer"); break;
    case 7:
    case 8: console.log("Moonson"); break;
    case 9:
    case 10:
    case 11 : console.log("Spring"); break;
    default : console.log("Invalid Season");
}

for(let i = 1; i<=10; i++) {
    console.log(i);
}

let i = 1;
while(i<=5) {
    console.log(i);
    i++;
}

let pin;
do {
    pin = Number(prompt("Enter your Pin: "));
} while(pin != 1234);
console.log("Access Granted");

let num1 = [1,2,3,4,5];
num1.forEach(num => console.log(num * num));

for(let i = 1; i<=10; i++) {
    if(i === 3)
        break;
    else {
        console.log(i);
    }
    
}

for(let i = 1; i<=10; i++) {
    if(i === 3)
        continue;
    else 
        console.log(i);
}


