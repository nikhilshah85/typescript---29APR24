"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empNo = 101;
        this.empName = "Nikhil";
        this.empSalary = 70000;
        this.empExpertise = ['.Net', 'Java', 'SQL', 'Azure', 'Angular', 'React'];
    }
    Employee.prototype.printDetails = function () {
        return this.empNo + " " + this.empName + " " + this.empSalary;
    };
    Employee.prototype.printExpertise = function () {
        this.empExpertise.forEach(function (val) {
            console.log(val);
        });
    };
    return Employee;
}());
exports.Employee = Employee;
