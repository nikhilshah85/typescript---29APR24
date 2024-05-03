export class BankAccount
{
    accNo:number;
    accName:string;
    accType:string;
    accBalance:number;
    accIsActive:boolean;

    withdraw(amount:number):(string | number)
    {

        if(amount < 0)
        {
            return 'Please Enter A Positive value for withdrawal';
        }
        else if(amount > this.accBalance)
        {
            return "Insufficient Available Balance";
        }

        this.accBalance = this.accBalance - amount;
        return this.accBalance;
    }

    deposit(amount:number):number
    {
        this.accBalance = this.accBalance + amount;
        return this.accBalance;
    }

}