function Bankaccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    // deposit method
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
        } else {
            console.log(`Invalid deposit amount. Please enter a positive amount.`)
        }
    }
    // Withdraw method
    this.withdraw = function (amount) {
        if (amount > 0) {
            this.balance -= amount;
            console.log(`Withdraw of ${amount} successful. New balance: ${this.balance}`);
        } else {
            console.log(`Invalid Withdraw amount. Please enter a positive amount.`)
        }
    }
    // checkBalance
    this.checkBalance = function () {
        console.log(` The account's  current balance : ${balance}`)
    }
    // active
    this.active = function () {
        if (this.type = 'active') {
            console.log(` The  current account's  is : ${type}`)
        } else {
            console.log(` The  current account's  is : ${type}`)
        }
    }
}
// getTotalbalance
function getTotalbalance(accounts) {
    let totalbalance = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].type === 'active') {
            totalbalance += accounts[i].balance;
        }
    }
    return totalbalance;
}


let user_1 = new Bankaccount(12345678, "imo", 'active', 500);
console.log(user_1);

let user_2 = new Bankaccount(87654321, 'amo', 'unactive', 2000);
console.log(user_2);

// user_1.deposit(500);
// user_1.withdraw(700);
// user_1.checkBalance();
// user_1.active();
// user_2.active();

let ans = getTotalbalance([user_1, user_2]);
console.log("Total balance of all active accounts:",ans);