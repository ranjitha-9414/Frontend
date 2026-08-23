//Abstraction


// Example without Abstraction


// class CoffeeMachine {
//     boilWater() {
//         console.log("Boiling water...");
//     }

//     addCoffee() {
//         console.log("Adding coffee ...");
//     }
//     addMilk() {
//         console.log("Adding milk ...");
//     }
//     serveCoffee() {
//         console.log("Serving coffee ...");
//     }
// }

// const machine = new CoffeeMachine();
// machine.boilWater();
// machine.addCoffee();
// machine.addMilk();
// machine.serveCoffee();


// Example with Abstraction

class CoffeeMachine {
    boilWater() {
        console.log("Boiling water...");
    }

    addCoffee() {
        console.log("Adding coffee ...");
    }

    addMilk() {
        console.log("Adding milk ...");
    }

    serveCoffee() {
        console.log("Serving coffee ...");
    }

    makeCoffee() {
        this.boilWater();
        this.addCoffee();
        this.addMilk();
        this.serveCoffee();
        console.log("Enjoy your coffee!");
    }
}

const machine = new CoffeeMachine();

machine.makeCoffee();