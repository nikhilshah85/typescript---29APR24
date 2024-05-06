var Products = /** @class */ (function () {
    function Products() {
    }
    Products.prototype.getProductsData = function () {
        fetch('https://fakestoreapi.com/products')
            .then(function (responseFormat) { return responseFormat.json(); })
            .then(function (result) {
            console.log('Got the products data successfully');
            console.log(result);
        })
            .catch(function (err) {
            console.log('Got error');
        });
    };
    Products.prototype.getProductDataById = function (pid) {
        //inside a function, you can declare a variables, and you want it to be used only inside the funcion
        var url = "https://fakestoreapi.com/products/" + pid;
        fetch(url)
            .then(function (responseDataType) { return responseDataType.json(); })
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err.message);
        });
    };
    return Products;
}());
var obj = new Products();
// obj.getProductsData();
obj.getProductDataById(11);
