var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var DemoFilterFunction = /** @class */ (function () {
    function DemoFilterFunction() {
        this.myNumbers = [10, 13, 80, 1100, 99, -30, -90, 1120, 330, -998, 2300, 9000, 5677];
        this.friendsFavNumer = [300, 900, 12000, 3000, 9000, 6, 7, 8, 9, 0, 5, 7];
        this.otherFriendsNumber = [5, 6, 7, 8, 9, 2000];
    }
    DemoFilterFunction.prototype.filterMyNumbers = function (values, idx, array) {
        return values > 1000;
    };
    return DemoFilterFunction;
}());
var obj = new DemoFilterFunction();
var result = obj.myNumbers.filter(obj.filterMyNumbers);
var result2 = obj.friendsFavNumer.filter(obj.filterMyNumbers);
var result3 = obj.otherFriendsNumber.filter(obj.filterMyNumbers);
var allResult = __spreadArray(__spreadArray(__spreadArray([], result, true), result2, true), result3, true);
console.log(result);
console.log(result2);
console.log(result3);
console.log(allResult);
