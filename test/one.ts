import  { Employee }  from './emp'
class Person
{
    name:string = "Nikhil Shah";
    designation:string = "Consultatnt";
    age:number = 30;


    showDetails():string
    {
        return this.name + " " + this.designation + "  " + this.age;
    }

}


var obj = new Person();
console.log(obj.showDetails());

var emp = new Employee();
console.log(emp.printDetails());

emp.printExpertise();