class DemoFilterFunction
{

    myNumbers:number[] = [10,13,80,1100,99,-30,-90,1120,330,-998,2300,9000,5677];
    friendsFavNumer:number[] = [300,900,12000,3000,9000,6,7,8,9,0,5,7];
    otherFriendsNumber:number[] = [5,6,7,8,9,2000];


    filterMyNumbers(values,idx,array)
    {
        return values > 1000;
    }

}

var obj = new  DemoFilterFunction();
var result =  obj.myNumbers.filter(obj.filterMyNumbers);
var result2 = obj.friendsFavNumer.filter(obj.filterMyNumbers);
var result3 = obj.otherFriendsNumber.filter(obj.filterMyNumbers);
var allResult = [...result,...result2,...result3];
console.log(result);
console.log(result2);
console.log(result3);
console.log(allResult);


