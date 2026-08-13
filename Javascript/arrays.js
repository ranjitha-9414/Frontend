//Array 
// we have 2 ways to create an array

//way 1: []
//way 2: new Array()

let stu_Info = [101, "Ranj", 9.0,true];
console.log(stu_Info);
console.log(stu_Info[1]);

let stu_Info1 = new Array(102, "Ranjan", 8.0,false);
console.log(stu_Info1);

//adding new element in array 
//push() method is used to add new element in array at the end of the array
stu_Info.push("Female ");
console.log(stu_Info);

let arr = [1,2,3,4,5];
arr.push(6,7,8);
console.log(arr);

//unshift() method is used to add new element in array at the start of the array
arr.unshift(0, -1);
console.log(arr);

//removing element from array

//pop() method is used to remove the last element from the array
arr.pop();
console.log(arr);

//shift() method is used to remove the first element from the array
arr.shift();
console.log(arr);

//Modifying element in array

//splice() method is used to modify the element in array

let nums = [10,20,30,40,50];
//splice(startIndex, deleteCount, newElement1, newElement2, ...)
//To remove
console.log(nums.splice(1,2));//removed element 
console.log(nums);

//to add
nums.splice(2,0,300);
console.log(nums);

nums.splice(5,0,60,70,80);
console.log(nums);

//To replace
nums.splice(5,1,55);
console.log(nums);

//slice() method is used to get a portion of the array

let arr1 = [10,20,30,40,50];
console.log(arr1.slice(1,4) );//[20,30,40]

//Searching element in array

//indexOf() method is used to search the element in array and return the index of the element

let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.indexOf("Mango")); // Output: 2

//includes() method is used to check if an element exists in the array and returns true or false
console.log(fruits.includes("Banana")); // Output: true

//sort() method is used to sort the elements of the array in ascending order
console.log(fruits.sort()); // Output: ["Apple", "Banana", "Mango", "Orange"]

//reverse() method is used to reverse the order of the elements in the array
console.log(fruits.reverse()); // Output: ["Orange", "Mango", "Banana", "Apple"]

//Iterating over an array

//forEach() method is used to iterate over the elements of the array

let veg = ["carrot", "beetroot","cabbage","capsicum"];
veg.forEach(vegetables => console.log(vegetables));

let numbers = [1,2,3,4,5];
numbers.forEach(i => console.log(`The number is ${i}`));

numbers.forEach(i => console.log(i*2)); //double of each element    

//map() method is used to create a new array by applying a function to each element of the original array
let square = numbers.map(num => num*num );
console.log(square); // Output: [1, 4, 9, 16, 25]

//filter() method is used to create a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(num => num%2 === 0);
console.log(`The even numbers are: ${evenNumbers}` ); // Output: [2, 4]

let oddNumbers = numbers.filter(num => num%2 !== 0);
console.log(`The odd numbers are: ${oddNumbers}` ); // Output: [1, 3, 5]

//join() method is used to join all elements of an array into a string

let arr2 = ["Hello", "World", "from", "JavaScript"];
console.log(arr2.join(" ")); // Output: "Hello World from JavaScript"

console.log(arr2.join("-")); // Output: "Hello-World-from-JavaScript"

let val =[1,2,3,4,5];
console.log(val.join(" - ")); // Output: "1 - 2 - 3 - 4 - 5"

let words = ["JavaScript", "is", "fun", 7.90];
console.log(words.join(" ")); // Output: "JavaScript is fun 7.9"


//reduce() method is used to reduce the array to a single value by applying a function to each element of the array
//syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

let value = [1,2,3,4,5];
let sum = value.reduce((acc,num)=> acc+num,0);
console.log(`The sum of the array is: ${sum}`); // Output: 15

//concat() method is used to merge two or more arrays
let fruits1 = ["Apple", "Banana"];
let numbers1 = [1,2,3];
let mergedArray = fruits1.concat(numbers1);
console.log(mergedArray); // Output: ["Apple", "Banana", 1, 2, 3]

let fruits2 = ["Mango", "Orange"];
let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

//Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise way to extract data from arrays and objects.
 let fru = ["apple", "mango","cherry"];
 let[first, second] = fru;
 console.log(first);
 console.log(second);
 popup.js