"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.withdraw = function (amount) {
        if (amount < 0) {
            return 'Please Enter A Positive value for withdrawal';
        }
        else if (amount > this.accBalance) {
            return "Insufficient Available Balance";
        }
        this.accBalance = this.accBalance - amount;
        return this.accBalance;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.accBalance = this.accBalance + amount;
        return this.accBalance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
