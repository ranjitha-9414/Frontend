console.log(a);
var a = 10;//undefined : bcz in js first memory is allocated to the variable and then the code is executed.

console.log(b);
let b = 20;//ReferenceError: Cannot access 'b' before initialization : bcz in js first memory is allocated to the variable and then the code is executed. But in case of let and const, they are not initialized until their definition is evaluated. So, we cannot access them before initialization.

console.log(c);
const c = 30;//ReferenceError: Cannot access 'c' before initialization : bcz in js first memory is allocated to the variable and then the code is executed. But in case of let and const, they are not initialized until their definition is evaluated. So, we cannot access them before initialization.

