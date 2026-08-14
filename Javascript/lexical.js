let a = 10;//global
function Outer() {
    let b = 20; //local to Outer
    function Inner() {
        if(true) {
            let c = 30;//Block scope to if block
            console.log(a);
            console.log(b);
            console.log(c);
        }
    }
    Inner();
}
Outer();
//output: 10, 20, 30

// let a = 10;//global
// function Outer() {
//     let b = 20; //local to Outer
//     function Inner() {
//         if(true) {
//             let c = 30;//Block scope to if block
            
//         }
//         console.log(a);
//             console.log(b);
//             console.log(c);
//     }
//     Inner();
// }
// Outer();
//output: 10, 20, ReferenceError: c is not defined
//bcz c is defined in the block scope of if statement and cannot be accessed outside of it.

// let a = 10;//global
// function Outer() {
//     let b = 20; //local to Outer
//     function Inner() {
//         if(true) {
//             let c = 30;//Block scope to if block
            
//         }
        
//     }
//     Inner();
// }
// console.log(a);
//             console.log(b);
//             console.log(c);
// Outer();

//output: 10, ReferenceError: b is not defined ,ReferenceError: c is not defined
//bcz b is defined in the function scope of Outer and cannot be accessed outside of it.