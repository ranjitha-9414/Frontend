function outer() {
    var a = 3;

    return function inner() {

        console.log(a);
    }
    inner();
}


console.log(outer());
let res = outer();
res();
