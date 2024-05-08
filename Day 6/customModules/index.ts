export class Accounts
{
    accNo:number = 101;
    accName:string = 'Nikhil';
    accBalance:number = 9000;

    getAccountBalance()
    {
        return this.accBalance;
    }

    withdraw(amt:number)
    {
        this.accBalance = this.accBalance - amt;
        return this.accBalance;
    }

    deposit(amt:number)
    {
        this.accBalance = this.accBalance + amt;
        return this.accBalance;
    }
}