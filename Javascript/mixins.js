//mixins 

const fly = {
    fly() {
        return "Flying";
    }
};

const swim = {
    swim() {
        return "Swimming";
    }
};

class Duck {

}

Object.assign(Duck.prototype, fly, swim);

const duck = new Duck();
console.log(duck.fly()); // "Flying"
console.log(duck.swim()); // "Swimming"
