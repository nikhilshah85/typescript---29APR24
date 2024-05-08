var Products = /** @class */ (function () {
    function Products() {
        this.products = [
            { pId: 101, pName: 'Pepsi', pCategory: 'Cold-Drink', pAvailableQty: 20, pPrice: 50 },
            { pId: 102, pName: 'Maggie', pCategory: 'Fast-Food', pAvailableQty: 20, pPrice: 150 },
            { pId: 103, pName: 'Iphone', pCategory: 'Electronics', pAvailableQty: 20, pPrice: 250 },
            { pId: 104, pName: 'Lays', pCategory: 'Fast-Food', pAvailableQty: 20, pPrice: 51 },
            { pId: 105, pName: 'Appy', pCategory: 'Cold-Drink', pAvailableQty: 20, pPrice: 15 },
            { pId: 106, pName: 'Pepsodent', pCategory: 'Toothpaste', pAvailableQty: 20, pPrice: 25 },
            { pId: 107, pName: 'Close-Up', pCategory: 'Toothpaste', pAvailableQty: 20, pPrice: 90 },
        ];
        this.selectedProducts = [];
    }
    Products.prototype.filterMyProducts = function (prod, idx, arr) {
        return prod.pCategory == 'Cold-Drink';
    };
    Products.prototype.mapFunctionDoingFilter = function (productCategory) {
        var _this = this;
        this.products.map(function (val, idx) {
            if (val.pCategory == productCategory) {
                _this.selectedProducts.push(val);
            }
        });
        return this.selectedProducts;
    };
    return Products;
}());
var pObj = new Products();
// var prods = pObj.products.filter(pObj.filterMyProducts);
// console.log(prods);
var myResult = pObj.mapFunctionDoingFilter('Head-phones');
console.log(myResult);
