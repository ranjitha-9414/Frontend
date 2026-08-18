//single-level inheritance
class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();

//multi-level inheritance

class Animal1 {
    eat() {
        console.log("eating...");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("barking...");
    }
}

class BabyDog extends Dog1 {
    weep() {
        console.log("weeping...");
    }
}

const babyDog = new BabyDog();
babyDog.eat();
babyDog.bark();
babyDog.weep();

//hierarchical inheritance

class Animal2 {
    eat() {
        console.log("eating...");
    }
}

class Dog2 extends Animal2 {
    bark() {
        console.log("barking...");
    }
}

class Cat extends Animal2 {
    meow() {
        console.log("meowing...");
    }
}

const dog2 = new Dog2();
dog2.eat();
dog2.bark();

const cat = new Cat();
cat.eat();
cat.meow();

//Hybrid inheritance

class Animal3 {
    eat() {
        console.log("eating...");
    }
}

class Dog3 extends Animal3 {
    bark() {
        console.log("barking...");
    }
}

class Cat1 extends Animal3 {
    meow() {
        console.log("meowing...");
    }
}

class BabyDog1 extends Dog3 {
    weep() {
        console.log("weeping...");
    }
}

const babyDog1 = new BabyDog1();
babyDog1.eat();
babyDog1.bark();
babyDog1.weep();

const cat1 = new Cat1();
cat1.eat();
cat1.meow();

const dog3 = new Dog3();
dog3.eat();
dog3.bark();