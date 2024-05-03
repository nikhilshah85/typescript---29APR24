"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Savings_1 = require("./Savings");
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.Withdraw = function (amt) {
        this.accBalance = this.accBalance - amt;
        return this.accBalance;
    };
    Account.prototype.Deposit = function (amt) {
        this.accBalance = this.accBalance + amt;
        return this.accBalance;
    };
    return Account;
}());
exports.Account = Account;
var acc1 = new Account();
acc1.accNo = 101;
acc1.accName = "Kunal";
acc1.accBalance = 4000;
acc1.accIsActive = true;
var sav = new Savings_1.Savings();
sav.accNo = 501;
sav.accName = "Nikhil";
sav.intrestRate = 8;
sav.accType = "Savings";
sav.accBalance = 8000;
console.log(sav.Withdraw(3000));
