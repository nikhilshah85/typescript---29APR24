var ProductsAPIData = /** @class */ (function () {
    function ProductsAPIData() {
    }
    //you can take variable and store the data in a variable, you can make changes to the data, format, calculate, filter and then 
    //send the data
    //   products:IProduct[];
    ProductsAPIData.prototype.getProductsData = function () {
        return fetch('https://fakestoreapi.com/products')
            .then(function (incomingDataFormat) { return incomingDataFormat.json(); })
            .then(function (result) {
            // this.products = result;   
            return result;
        })
            .catch(function (err) {
            return err;
        });
    };
    ProductsAPIData.prototype.getProductById = function (pid) {
        var url = 'https://fakestoreapi.com/products/' + pid;
        return fetch(url)
            .then(function (incomingDataFormat) { return incomingDataFormat.json(); })
            .then(function (result) {
            // this.products = result;   
            console.log(result);
            return result;
        })
            .catch(function (err) {
            return err;
        });
    };
    return ProductsAPIData;
}());
var pObj = new ProductsAPIData();
//console.log(pObj.getProductsData()); //this is where framework like react and angular comes to take the data in chunk and update
//ui
pObj.getProductById(3);
