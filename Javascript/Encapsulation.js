class Bankbalance {
    #balance;//private variable
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
}

let b =new Bankbalance(20000);
//console.log(b.#balance);//Error bcz #balance is private variable
console.log(b.getBalance());//20000