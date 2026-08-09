//function with same name but different parameters is called function overloading
//function overloading is not supported in javascript but we can achieve function overloading by using arguments object and checking the number of parameters passed to the function.
function add(){
    console.log(10+10);//zero parameter
}

function add(a) {
    console.log(a+10);//one parameter
}


function add(a,b) {
    console.log(a+b);//two parameter
}

add();
add(10);
add(10,20);


//...(var args) is used to pass variable number of arguments to a function. It is called rest parameter. It is an array that contains all the arguments passed to the function.
//... i can collect/pass the parameters/arguments from 0 to n , it is called rest parameter. 
// It is basically an 1D array [] where it can consist parameters/arguments from 0 to n. It is used to pass variable number of arguments to a function. It is called rest parameter. It is an array that contains all the arguments passed to the function.


//numbers=[10] , num =10 sum =0, sum=0+10 
//numbers=[10,20] , num =10 sum =0, sum=0+10 , num=20 sum=10, sum=10+20 
//numbers=[10,20,50] , num =10 sum =0, sum=0+10 , num=20 sum=10, sum=10+20 , num=50 sum=30, sum=30+50
function add(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(add(10));
console.log(add(10,20));
console.log(add(10,20,50));

