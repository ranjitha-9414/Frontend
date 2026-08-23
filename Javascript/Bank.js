class Bank {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    getbalance() {
        return this.#balance;
    }
    depoist(amount) {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`You deposited ${amount} Rupees. The Total balance is ${this.#balance} `);
        }
        else {
            console.log("It's Not a valid amount");
        }
    }

    withdrawal(amount) {
        if(amount <= 0) {
            console.log("Invalid amount");
        }
        else if(amount > this.#balance) {
            console.log("Insufficient Balance");
        }
        else {
            this.#balance -= amount;
            console.log(`You Withdraw ${amount} Rupees. NOW, The available balance is ${this.#balance}`);
        }
    }

}

let b = new Bank(1000);
console.log(b.getbalance());

b.depoist(9000);
b.withdrawal(500);