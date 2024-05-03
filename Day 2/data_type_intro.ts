
//primitive data types
var myName:string = "Nikhil Shah";
var myHeight:number = 6.4;
var isPermenant = true;
var mySkills:string[] = ['Angular','Azure','AWS','Node','React','Typescript','MSBI','DataBricks'];


console.log(myName);
console.log(myHeight);
console.log(isPermenant);
console.log(mySkills);


var productInfo:[number,string,string,number,string,boolean];
productInfo = [101,'Pepsi','Cold-Drink',50,'25-01-2024',true];

console.log(productInfo[2]);


enum  Vehicles
{
    Car, Bus, Bike, Truck
}



var myTravelModeis = Vehicles.Car;

console.log(myTravelModeis);





var firstName:string;
firstName = "Nikhil";

var salary:(number | string);
salary = "Ten Thousand"; //this is called as type checking, which is safe
                         //this was missing with Javascript
                        //inface javascript did not had datatypes at all, like string, number, bool were abscent

salary = 20000;
salary = "20.2M";

var payment:any;
payment = 100;
payment = "Online";
payment = false;




















