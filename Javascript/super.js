class Parent {
    constructor(name) {
        this.name = name;
    }
    marry() {
        console.log("Marry at 28");
    }
}

class child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    marry() {
        super.marry();
        console.log("Marry at 32");
    }
}

let emp1 = new child("ranj", 21);
console.log(emp1.name);
console.log(emp1.age);
emp1.marry();