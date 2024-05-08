
class FavNumbers
{

    firstName:string;
    lastName:string;
    designation:string;
    salary:number;
    isPermenant:boolean;
    skills:string[] = ['Programming','Analytics','Scripting','Training','Data'];

testSpreadOperator()
{
    let favNumber:number[] = [2,5,6,4,2,5,7,3,7,356,56,67,78,78,64,654,66,575,85,4563,63,76,5,456,65765,75];
    let otherNumber:number[] = [10,20,30,40];

    //in an interview when I ask a question 
    //I get, answer1 - let allNumbersTest:number[] = [favNumber,otherNumber];
    //2nd they say write a function, use a loop and merge, which is write

    // let allNumbersTest:number[] = [favNumber,otherNumber];

    let allNumbers:number[] = [...favNumber,...otherNumber];

    console.log(allNumbers);


}

stringOperations()
{
    let myName:string = "Nikhil";
    console.log(myName.substring(3,5));

}




}

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

var obj3 = {...obj};


// obj.testSpreadOperator();
// obj.stringOperations();






























var obj = new FavNumbers();
obj.firstName = "Nikhil";
obj.lastName = "Shah";
obj.designation = "Consultant";
obj.salary = 6000;
obj.isPermenant = true;



var obj3 = {...obj, lastName:'Mehta'};
console.log(obj3);