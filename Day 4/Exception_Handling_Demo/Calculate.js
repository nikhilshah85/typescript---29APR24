"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculate = void 0;
var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.addNumbers = function (num1, num2) {
        if (num1 < 0 || num2 < 0) {
            throw new Error("We do not process negative values");
        }
        else if (num1 < num2) {
            throw new Error("First Number should be greater than second number");
        }
        return num1 + num2;
    };
    Calculate.prototype.divideNumber = function (num1, num2) {
        if (num2 == 0) {
            throw new Error("Cannot divide any number by 0");
        }
        return num1 / num2;
    };
    return Calculate;
}());
exports.Calculate = Calculate;
