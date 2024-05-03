"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount_1 = require("./BankAccount");
var Person = /** @class */ (function () {
    function Person() {
        //properties
        this.name = "Nikhil";
        this.city = "Mumbai";
        this.salary = 2000;
        this.isPermenant = true;
        this.email = "nikhil.shah@cognizant.com";
    }
    //functions
    Person.prototype.displayPersonInfo = function () {
        return this.name + " is from " + this.city + " has a salary of " + this.salary;
    };
    Person.prototype.displayBonus = function () {
        return this.salary * 0.2;
    };
    return Person;
}());
//create object(s) of the above class and test it
// var mySelf = new Person(); //use new key word to create the object
// console.log(mySelf.displayPersonInfo());
// console.log(mySelf.displayBonus());
var acc1 = new BankAccount_1.BankAccount();
acc1.accNo = 101;
acc1.accName = "Karan";
acc1.accBalance = 8000;
console.log(acc1.withdraw(18000));
// var acc2 = new BankAccount();
// acc1.accNo = 102;
// acc1.accName = "Mohan";
// acc1.accBalance = 18000;
// console.log(acc2.deposit(1200));
// var acc3 = new BankAccount();
// acc1.accNo = 103;
// acc1.accName = "Rohan";
// acc1.accBalance = 23000;
// acc3.withdraw(1800);
