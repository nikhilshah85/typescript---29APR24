import { BankAccount  } from './BankAccount';

class Person
{
    //properties
    name:string = "Nikhil";
    city:string = "Mumbai";
    salary:number = 2000;
    isPermenant:boolean = true;
    email:string = "nikhil.shah@cognizant.com";


    //functions
    displayPersonInfo():string
    {
        return this.name + " is from " + this.city + " has a salary of " + this.salary;
    }

    displayBonus():number
    {
        return this.salary * 0.2;
    }
}

//create object(s) of the above class and test it
// var mySelf = new Person(); //use new key word to create the object
// console.log(mySelf.displayPersonInfo());
// console.log(mySelf.displayBonus());

var acc1 = new BankAccount();
acc1.accNo = 101;
acc1.accName = "Karan";
acc1.accBalance = 8000;
console.log(acc1.withdraw(18000));








// var acc2 = new BankAccount();
// acc1.accNo = 102;
// acc1.accName = "Mohan";
// acc1.accBalance = 18000;
// console.log(acc2.deposit(1200));

// var acc3 = new BankAccount();
// acc1.accNo = 103;
// acc1.accName = "Rohan";
// acc1.accBalance = 23000;
// acc3.withdraw(1800);























