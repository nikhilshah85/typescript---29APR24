interface IProducts
{
    pId:number;
    pName:string;
    pCategory:string;
    pAvailableQty:number;
    pPrice:number;
}
class Products
{
     products:IProducts[] = [
        { pId:101, pName:'Pepsi',pCategory:'Cold-Drink', pAvailableQty:20,pPrice:50 },
        { pId:102, pName:'Maggie',pCategory:'Fast-Food', pAvailableQty:20,pPrice:150 },
        { pId:103, pName:'Iphone',pCategory:'Electronics', pAvailableQty:20,pPrice:250 },
        { pId:104, pName:'Lays',pCategory:'Fast-Food', pAvailableQty:20,pPrice:51 },
        { pId:105, pName:'Appy',pCategory:'Cold-Drink', pAvailableQty:20,pPrice:15 },
        { pId:106, pName:'Pepsodent',pCategory:'Toothpaste', pAvailableQty:20,pPrice:25 },
        { pId:107, pName:'Close-Up',pCategory:'Toothpaste', pAvailableQty:20,pPrice:90 },
     ]
     //filter function
     filterMyProducts(prod,idx,arr)
     {
        return prod.pCategory == 'Cold-Drink';
     }

    selectedProducts:IProducts[] = [];
    //map function
     mapFunctionDoingFilter(productCategory:string)
     {
        this.products.map((val,idx)=>{
            
            if(val.pCategory == productCategory)
                {
                    this.selectedProducts.push(val);
                }
        })

        return this.selectedProducts;


     }


}

var pObj = new Products();
// var prods = pObj.products.filter(pObj.filterMyProducts);
// console.log(prods);

var myResult = pObj.mapFunctionDoingFilter('Head-phones');
console.log(myResult);















