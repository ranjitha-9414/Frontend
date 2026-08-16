class Employee {
    constructor(name,age,role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    display() {
        console.log(`${this.name} is ${this.age} years old and works as a ${this.role}`);
    }
    designation() {
        console.log("Employee working details");
    }

}

class Developer extends Employee {
    work() {
        console.log(`${this.name} is coding`);
    }
    designation() {
        console.log("My designation is developer");
    }
}

class Tester extends Employee {
    test() {
        console.log(`${this.name} is testing`);
    }
    designation() {
        console.log("My designation is tester");
    }
}

let emp1 = new Developer("ranj", 21, "developer");
emp1.display();
emp1.work();
emp1.designation();

let emp2 = new Tester("alice", 25, "tester");
emp2.display();
emp2.test();
emp2.designation();

//method overriding

class Parent {
    marry() {
        console.log("Marry at 28");
    }
}

class child extends Parent {
    marry() {
        console.log("Marry at 32");
    }
}