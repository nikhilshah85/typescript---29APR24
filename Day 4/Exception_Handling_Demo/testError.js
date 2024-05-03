"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculate_1 = require("./Calculate");
var cal = new Calculate_1.Calculate();
try {
    console.log(cal.divideNumber(40, 8));
}
catch (error) {
    console.log(error.message);
}
