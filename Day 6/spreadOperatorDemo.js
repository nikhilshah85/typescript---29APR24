var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FavNumbers = /** @class */ (function () {
    function FavNumbers() {
    }
    FavNumbers.prototype.testSpreadOperator = function () {
        var favNumber = [2, 5, 6, 4, 2, 5, 7, 3, 7, 356, 56, 67, 78, 78, 64, 654, 66, 575, 85, 4563, 63, 76, 5, 456, 65765, 75];
        var otherNumber = [10, 20, 30, 40];
        //in an interview when I ask a question 
        //I get, answer1 - let allNumbersTest:number[] = [favNumber,otherNumber];
        //2nd they say write a function, use a loop and merge, which is write
        // let allNumbersTest:number[] = [favNumber,otherNumber];
        var allNumbers = __spreadArray(__spreadArray([], favNumber, true), otherNumber, true);
        console.log(allNumbers);
    };
    FavNumbers.prototype.stringOperations = function () {
        var myName = "Nikhil";
        console.log(myName.substring(3, 5));
    };
    return FavNumbers;
}());
var obj = new FavNumbers();
obj.firstName = "Nikhil";
obj.lastName = "Shah";
obj.designation = "Consultant";
obj.salary = 6000;
obj.isPermenant = true;
// var obj2 = obj; //this is fine, but there multiple problems, 
// console.log(obj2.lastName);
//             //to much of load on server, memory, references, variables etc....they call it as deep copy 
//             //insted use s spread operator
var obj3 = __assign({}, obj);
// obj.testSpreadOperator();
// obj.stringOperations();
var obj = new FavNumbers();
obj.firstName = "Nikhil";
obj.lastName = "Shah";
obj.designation = "Consultant";
obj.salary = 6000;
obj.isPermenant = true;
var obj3 = __assign(__assign({}, obj), { lastName: 'Mehta' });
console.log(obj3);
