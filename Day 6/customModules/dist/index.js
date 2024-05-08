"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
class Accounts {
    constructor() {
        this.accNo = 101;
        this.accName = 'Nikhil';
        this.accBalance = 9000;
    }
    getAccountBalance() {
        return this.accBalance;
    }
    withdraw(amt) {
        this.accBalance = this.accBalance - amt;
        return this.accBalance;
    }
    deposit(amt) {
        this.accBalance = this.accBalance + amt;
        return this.accBalance;
    }
}
exports.Accounts = Accounts;
