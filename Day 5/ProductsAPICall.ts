class Products
{
    getProductsData():any
    {
        fetch('https://fakestoreapi.com/products')
                .then(responseFormat => responseFormat.json())
                .then( result => {
                    console.log('Got the products data successfully');
                    console.log(result);                  
                })
                .catch(err => {
                    console.log('Got error');                    
                })
    }

    getProductDataById(pid:number):any
    {

        //inside a function, you can declare a variables, and you want it to be used only inside the funcion
        let url = "https://fakestoreapi.com/products/" + pid;

        fetch(url)
                  .then(responseDataType => responseDataType.json())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(err => {
                    console.log(err.message);
                  })
    }
}
var obj = new Products();
// obj.getProductsData();

obj.getProductDataById(11);

