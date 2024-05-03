interface IAccount
{
    accNo:number;
    accName:string;
    accBalance:number;

    withdraw(amt:number);
    deposit(amt:number);
    transfer(fromAcc:string,toAcc:string,amt:number);
}

class Savings implements IAccount
{
    accNo:number;
    accName:string;
    accBalance: number;

    withdraw(amt: number) {
        
    }
    deposit(amt: number) {
        
    }
    transfer(fromAcc: string, toAcc: string, amt: number) {
        
    }
}

class Current implements IAccount
{
    accNo: number;
    accName: string;
    accBalance: number;
    withdraw(amt: number) {
        throw new Error("Method not implemented.");
    }
    deposit(amt: number) {
        throw new Error("Method not implemented.");
    }
    transfer(fromAcc: string, toAcc: string, amt: number) {
        throw new Error("Method not implemented.");
    }


}




















