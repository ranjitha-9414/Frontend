// Take another function as an argument(input)

//order -High Order Function
function order(callprepare,callserve) {
    console.log("1. order Food");
    callprepare();
    callserve();
}

//prepare and serveCustomer = callback function
function prepare() {
    console.log("2. Preparation Started..");
}

function serveCustomer() {
    console.log("3. Enjoy Your Food!");
}

order(prepare,serveCustomer);
 
//Inbuild High Order Functions 

const num = [1,2,3,4,5];

//step 1: Double each number

const doubled = num.map(Number => Number*2);

//step 2: Keep only numbers greater than 4

const filtered = num.filter(Number => Number >4);

//Step: 3 find the sum of remaing numbers

const total = filtered.reduce((sum, Number) => sum + Number, 0);

console.log("Doubled:" , doubled);
console.log("Filtered: ", filtered);
console.log("Total: ", total);