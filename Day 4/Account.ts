import { Savings } from './Savings' 
export class Account
{
    accNo:number;
    accName:string;
    accBalance:number;
    accIsActive:boolean;
    accType:string;

    Withdraw(amt:number):(number|string)
    {
        this.accBalance = this.accBalance - amt;
        return this.accBalance;
    }

    Deposit(amt:number):(number|string)
    {
        this.accBalance = this.accBalance + amt;
        return this.accBalance;
    }

}

var acc1 = new Account();
acc1.accNo = 101;
acc1.accName = "Kunal";
acc1.accBalance = 4000;
acc1.accIsActive = true;

var sav = new Savings();
sav.accNo = 501;
sav.accName = "Nikhil";
sav.intrestRate = 8;
sav.accType = "Savings";
sav.accBalance = 8000;
console.log(sav.Withdraw(3000)); 










































