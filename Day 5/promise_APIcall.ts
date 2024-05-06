interface IProduct
{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rate:number;
    count:number
}

class ProductsAPIData
{  
    //you can take variable and store the data in a variable, you can make changes to the data, format, calculate, filter and then 
    //send the data
  //   products:IProduct[];
    getProductsData(): Promise<IProduct[]>
    {
       
           
      return  fetch('https://fakestoreapi.com/products')
                    .then(incomingDataFormat => incomingDataFormat.json())
                    .then(result => {
                           // this.products = result;   
                           return result as IProduct[];                        
                    })
                    .catch(err =>{
                            return err;
                    });                               
    }


    getProductById(pid:number):Promise<IProduct>
    {
        let url = 'https://fakestoreapi.com/products/' + pid;

        return  fetch(url)
        .then(incomingDataFormat => incomingDataFormat.json())
        .then(result => {
               // this.products = result;   
               console.log(result);
               return result as IProduct;                        
        })
        .catch(err =>{
                return err;
        });        

    }

    addNewProduct():Promise<IProduct>
    {
        let url = 'https://fakestoreapi.com/products';
            fetch(url,{ method:'POST',body: 'data to send to server, in json format' })
                .then(dataformat => dataformat.json())
                .then(responseMessage => {
                    console.log(responseMessage);
                    return responseMessage as IProduct;
                })
                .catch(err => {
                    console.log(err.message);
                })
    }

}

    var pObj:ProductsAPIData = new ProductsAPIData();
  //console.log(pObj.getProductsData()); //this is where framework like react and angular comes to take the data in chunk and update
                                                //ui

                                            
pObj.getProductById(3);











