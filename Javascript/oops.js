//creating an object using object literal
//1 way
let student = {
    name: "ranj",
    age: 21,

    study() {
        console.log(`${this.name} is studying`);
    }

};

console.log(student.name, student.age);
student.study();

//2 way using class
class Student {
    name = "ranj";
    age = 21;

    study() {
        console.log(`${this.name} is studying`);
    }
}
let s1 = new Student();
console.log(s1.name, s1.age);
s1.study();


//constructor

class student1 {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }

}
let s2 = new student1("ranj", 21, "javascript");
let s3 = new student1("ranj", 21, "python");
console.log(s2.name, s2.age, s2.course);
s2.study();
console.log(s3.name, s3.age, s3.course);
s3.study();