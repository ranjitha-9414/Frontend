// console.log("Program started");

// let a = 10/b;
// console.log(a);

// console.log("program ended");//op/refrenced error

console.log("Program Started..");
try {
    let a =10/b;//Expection
    console.log(a);
} 
catch(error) {
    console.log("Error occured and Handled", error.message);
}
finally {
    console.log("Program Ended!");
}

//throw 

let age = 21;
try {
    if(age < 18) {
    throw new Error("Age should greater than 18, not Eligible");
}

}
catch (e) {
    console.log(e.message)
}
console.log("Eligible to vote");

