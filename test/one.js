"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emp_1 = require("./emp");
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Nikhil Shah";
        this.designation = "Consultatnt";
        this.age = 30;
    }
    Person.prototype.showDetails = function () {
        return this.name + " " + this.designation + "  " + this.age;
    };
    return Person;
}());
var obj = new Person();
console.log(obj.showDetails());
var emp = new emp_1.Employee();
console.log(emp.printDetails());
emp.printExpertise();
